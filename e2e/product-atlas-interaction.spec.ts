import { test, expect } from '@playwright/test';

const VIEWPORTS = [
  { width: 1440, height: 900 },
  { width: 1366, height: 768 },
  { width: 1280, height: 800 },
  { width: 1180, height: 720 }
];

test.describe('Product Atlas Interaction', () => {
  for (const viewport of VIEWPORTS) {
    test(`Desktop grid stability at ${viewport.width}x${viewport.height}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('/');
      
      await page.waitForTimeout(1000);

      const field = page.locator('.productInteractionField');
      await expect(field).toBeVisible();

      const regions = page.locator('.productRegionBackground');
      await expect(regions).toHaveCount(4);

      // Verify grid cells don't overlap
      for (let i = 0; i < 4; i++) {
        const box = await regions.nth(i).boundingBox();
        expect(box).not.toBeNull();
        expect(box!.width).toBeGreaterThan(100);
        expect(box!.height).toBeGreaterThan(100);
      }

      // Hover first region (Engine)
      await regions.nth(0).hover();
      
      // Wait for grid track transition to complete (620ms duration)
      await page.waitForTimeout(700);

      const box0 = await regions.nth(0).boundingBox();
      const box1 = await regions.nth(1).boundingBox();
      
      expect(box0).not.toBeNull();
      expect(box1).not.toBeNull();
      
      // Box 0 should be larger in width than box 1
      expect(box0!.width).toBeGreaterThan(box1!.width);
      
      // Verify no overlaps in regions
      const allBoxes = await Promise.all([0, 1, 2, 3].map(i => regions.nth(i).boundingBox()));
      
      const r1 = allBoxes[0]!;
      const r2 = allBoxes[1]!;
      const overlapX = r1.x < r2.x + r2.width - 1 && r1.x + r1.width > r2.x + 1;
      const overlapY = r1.y < r2.y + r2.height - 1 && r1.y + r1.height > r2.y + 1;
      
      expect(overlapX && overlapY).toBeFalsy();
    });
  }
});
