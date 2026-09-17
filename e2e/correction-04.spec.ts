import { test, expect } from '@playwright/test';

test.describe('Correction 04: Hero and Atlas Audit', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('No screen-level cursor-light element exists', async ({ page }) => {
    // Check that we don't have stray elements tracking mouse
    await page.mouse.move(10, 10);
    // If the mouse move triggered a global element, it would be attached to body
    // The only place maskImage is used is inside .heroHeadlineOrange which is contained
    const orangeLayer = page.locator('.heroHeadlineOrange');
    if (await orangeLayer.count() > 0) {
      const style = await orangeLayer.evaluate(el => window.getComputedStyle(el).maskImage);
      // It should exist but be contained.
      expect(style).not.toBeNull();
    }
    
    // We check that there is no SVG clipPath for pointer mask
    const clipPath = page.locator('#hero-pointer-mask');
    await expect(clipPath).toHaveCount(0);
  });

  test('Hero text layout and height reservation', async ({ page }) => {
    // Wait for ResizeObserver to measure phrases
    await page.waitForTimeout(500); 

    const phraseShell = page.locator('.phraseShell').first();
    const supportParagraph = page.locator('.heroSupport').first();
    const actions = page.locator('.heroActions').first();
    
    const shellBox = await phraseShell.boundingBox();
    const supportBox = await supportParagraph.boundingBox();
    const actionsBox = await actions.boundingBox();
    
    expect(shellBox).not.toBeNull();
    expect(supportBox).not.toBeNull();
    expect(actionsBox).not.toBeNull();
    
    // Support paragraph must be strictly below the phrase shell
    expect(supportBox!.y).toBeGreaterThanOrEqual(shellBox!.y + shellBox!.height);
    
    // Actions must be strictly below support paragraph
    expect(actionsBox!.y).toBeGreaterThanOrEqual(supportBox!.y + supportBox!.height);
    
    // Height should be stable. Let's record the height, wait for a cycle, and check again.
    const initialHeight = shellBox!.height;
    await page.waitForTimeout(5500); // Wait for hold + transition
    
    const newShellBox = await phraseShell.boundingBox();
    expect(newShellBox!.height).toBeCloseTo(initialHeight, 0); // stable height
  });

  test('Primary CTAs use Try Alter Engine and correct destinations', async ({ page }) => {
    // Header
    const headerCTA = page.locator('header a:has-text("Try Alter Engine")');
    await expect(headerCTA).toBeVisible();
    await expect(headerCTA).toHaveAttribute('href', /\/try-alter-engine/);
    
    // Hero
    const heroCTA = page.locator('.heroActions a:has-text("Try Alter Engine")').first();
    await expect(heroCTA).toBeVisible();
    await expect(heroCTA).toHaveAttribute('href', /\/try-alter-engine/);
    
    // Ensure "Request access" is not used in primary public locations
    const headerRequestAccess = page.locator('header a:has-text("Request access")');
    await expect(headerRequestAccess).toHaveCount(0);
    const heroRequestAccess = page.locator('.heroActions a:has-text("Request access")');
    await expect(heroRequestAccess).toHaveCount(0);
  });

  test('Product Atlas regions contain titles and descriptions', async ({ page }) => {
    // Only check visible ones (desktop layout)
    const atlasRegions = page.locator('button.bg-\\[\\#fbfaf7\\], button.bg-\\[\\#111111\\], button.bg-\\[\\#f1eee7\\], button.bg-\\[\\#f15a24\\]').filter({ hasNot: page.locator('div:has-text("From one objective to")') });
    
    // We expect 4 visible regions on desktop
    await expect(atlasRegions).toHaveCount(4);
    
    for (let i = 0; i < 4; i++) {
      const region = atlasRegions.nth(i);
      const title = region.locator('h3');
      const desc = region.locator('p');
      await expect(title).toBeVisible();
      await expect(desc).toBeVisible();
    }
  });

  test('Product Atlas interaction locking and detail changes', async ({ page }) => {
    // By default Alter Engine is active
    const detailTitle = page.locator('h2', { hasText: 'From one objective to reviewable work' }).first();
    await expect(detailTitle).toBeVisible();
    
    // Click Custom workflows (desktop region)
    const customWorkflowRegion = page.locator('button:has-text("Custom workflows")').first();
    await customWorkflowRegion.click();
    
    // Detail area should change
    const newDetailTitle = page.locator('h2', { hasText: 'Your process. Our Engine.' }).first();
    await expect(newDetailTitle).toBeVisible();
    
    // The "Resume rotation" button should appear because we clicked (locked it)
    const resumeBtn = page.locator('button:has-text("Resume rotation")').first();
    await expect(resumeBtn).toBeVisible();
  });
});
