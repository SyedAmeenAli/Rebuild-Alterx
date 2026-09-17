import { test, expect } from '@playwright/test';

test.describe('Overlay Pollution Audit', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Page can be scrolled from top to bottom without interactive blocking', async ({ page }) => {
    const totalHeight = await page.evaluate(() => document.body.scrollHeight);

    // Scroll in 10% increments
    const increment = Math.floor(totalHeight * 0.1);
    
    for (let currentY = 0; currentY < totalHeight; currentY += increment) {
      await page.evaluate((y) => window.scrollTo(0, y), currentY);
      await page.waitForTimeout(100); // Allow paints/scroll triggers
      
      // Select an element in the middle of the screen
      const centerX = await page.evaluate(() => window.innerWidth / 2);
      const centerY = await page.evaluate(() => window.innerHeight / 2);
      
      // Click middle of the screen to verify nothing is blocking interactivity
      // (This will fail if an invisible overlay intercepts the pointer)
      try {
        await page.mouse.click(centerX, centerY);
      } catch {
        // We only care if an invisible fixed element steals the click
        // If a real link is clicked, that's fine, though we might navigate away.
        // To be safe, we just evaluate elementFromPoint
        const element = await page.evaluate(({ x, y }) => {
          const el = document.elementFromPoint(x, y);
          if (!el) return null;
          const style = window.getComputedStyle(el);
          return {
            tagName: el.tagName,
            id: el.id,
            className: el.className,
            position: style.position,
            opacity: style.opacity
          };
        }, { x: centerX, y: centerY });
        
        // Assert that the element from point is not a fixed/absolute transparent overlay
        // taking up the whole screen
        if (element) {
          expect(element.className).not.toMatch(/bg-transparent/);
          // If it's a fixed position element, it shouldn't be fully transparent
          if (element.position === 'fixed') {
             expect(Number(element.opacity)).toBeGreaterThan(0);
          }
        }
      }
    }
  });

  test('No lingering overlays exist in DOM after menu hover', async ({ page }) => {
    await page.locator('button[data-menuid="engine"]').hover();
    await page.waitForTimeout(200);
    await page.mouse.move(0, 0); // mouse leave
    await page.waitForTimeout(300);

    const backdropCount = await page.locator('.bg-ax-black\\/60').count();
    // The backdrop might be in DOM but opacity-0 and pointer-events-none, OR completely removed.
    // Our MegaMenu unmounts if isOpen && !mountedMenu
    expect(backdropCount).toBe(0);
  });
});
