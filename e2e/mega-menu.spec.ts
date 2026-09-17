import { test, expect } from '@playwright/test';

test.describe('Mega Menu Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Give page time to load
    await page.waitForLoadState('networkidle');
  });

  test('Hovering Alter Engine opens one large mega menu and backdrop', async ({ page }) => {
    const trigger = page.locator('button[data-menuid="engine"]');
    await trigger.hover();

    // Verify backdrop appears
    const backdrop = page.locator('.bg-ax-black\\/60');
    await expect(backdrop).toBeVisible();

    // Verify mega menu portal
    const menuPanel = page.locator('.z-\\[var\\(--z-mega-menu\\)\\]').first();
    await expect(menuPanel).toBeVisible();

    // Verify panel width is at least 70% of viewport
    const viewportSize = page.viewportSize();
    if (viewportSize) {
      const boundingBox = await menuPanel.boundingBox();
      expect(boundingBox!.width).toBeGreaterThanOrEqual(viewportSize.width * 0.7);
    }

    // Verify active trigger is orange
    await expect(trigger).toHaveClass(/bg-ax-orange/);

    // Verify only one trigger is orange
    const orangeTriggers = await page.locator('nav button.bg-ax-orange').count();
    expect(orangeTriggers).toBe(1);
  });

  test('Moving to Solutions changes panel content without mounting a second panel', async ({ page }) => {
    await page.locator('button[data-menuid="engine"]').hover();
    await page.waitForTimeout(200);

    const menuPanelsInitial = await page.locator('.z-\\[var\\(--z-mega-menu\\)\\]').count();
    expect(menuPanelsInitial).toBe(1);

    await page.locator('button[data-menuid="solutions"]').hover();
    await page.waitForTimeout(200);

    const menuPanelsAfter = await page.locator('.z-\\[var\\(--z-mega-menu\\)\\]').count();
    expect(menuPanelsAfter).toBe(1); // Still exactly 1 panel

    const solutionsContent = page.locator('text="Inventory operations powered by Alter Engine."');
    await expect(solutionsContent).toBeVisible();
  });

  test('Escape closes the panel and backdrop', async ({ page }) => {
    await page.locator('button[data-menuid="engine"]').hover();
    await page.waitForTimeout(200);
    
    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);

    await expect(page.locator('.bg-ax-black\\/60')).not.toBeVisible();
    await expect(page.locator('.z-\\[var\\(--z-mega-menu\\)\\]')).not.toBeVisible();
  });

  test('Scrolling closes the panel', async ({ page }) => {
    await page.locator('button[data-menuid="engine"]').hover();
    await page.waitForTimeout(200);
    
    await page.evaluate(() => window.scrollBy(0, 100));
    await page.waitForTimeout(200);

    await expect(page.locator('.bg-ax-black\\/60')).not.toBeVisible();
  });

  test('Backdrop click closes the panel', async ({ page }) => {
    await page.locator('button[data-menuid="engine"]').hover();
    await page.waitForTimeout(200);
    
    await page.mouse.click(10, 10); // Click top left (likely backdrop)
    await page.waitForTimeout(200);

    await expect(page.locator('.bg-ax-black\\/60')).not.toBeVisible();
  });

  test('Unavailable routes do not exist in the DOM', async ({ page }) => {
    await page.locator('button[data-menuid="developers"]').hover();
    await page.waitForTimeout(200);
    
    // Check that 'API reference' is NOT visible (was disabled in old dropdowns, now omitted)
    const apiRef = page.locator('text="API reference"');
    await expect(apiRef).toHaveCount(0);
  });

  test('The hero phrase pauses while the menu is open', async ({ page }) => {
    const heroPhrase = page.locator('.hero-phrase').first();
    const initialText = await heroPhrase.textContent();
    
    await page.locator('button[data-menuid="engine"]').hover();
    await page.waitForTimeout(6000); // Wait longer than the 5200ms cycle

    const textAfterWait = await heroPhrase.textContent();
    expect(textAfterWait).toBe(initialText); // Should not have changed
  });
});
