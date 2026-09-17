import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test.describe('AlterX Homepage Visual & Interaction QA', () => {

  test.beforeEach(async ({ page }) => {
    // Wait for Next.js to hydrate
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('capture desktop screenshots and interactions', async ({ page }, testInfo) => {
    // Only run this test for Desktop Chrome to avoid taking duplicate screenshots
    if (testInfo.project.name !== 'Desktop Chrome') return;

    const screenshotDir = path.join(process.cwd(), 'docs', 'screenshots');
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }

    const capture = async (name: string) => {
      await page.screenshot({ path: path.join(screenshotDir, `${name}.png`) });
    };

    // 1. Hero
    await capture('01-hero');

    // 2. Header Navigation Dropdown
    await page.hover('text=Alter Engine');
    await page.waitForTimeout(300); // Wait for dropdown animation
    await capture('02-open-dropdown');
    // Escape to close
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);

    // 3. Product Atlas States
    const atlasSection = page.locator('text=Flagship product').first();
    await atlasSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500); // Wait for GSAP
    await capture('03-atlas-active-engine');

    await page.click('button:has-text("Cognitive AI")');
    await page.waitForTimeout(800);
    await capture('04-atlas-active-cognitive');

    // 4. Engine Stages (Scroll Story)
    // Scroll down to trigger chapters
    await page.locator('.scroll-chapter').first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await capture('05-engine-stage-1');

    await page.evaluate(() => window.scrollBy(0, window.innerHeight * 0.8));
    await page.waitForTimeout(500);
    await capture('06-engine-stage-2');

    // 5. Comparison
    await page.locator('text=Different tools stop at different points.').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.hover('text=Starts with the required result');
    await page.waitForTimeout(300);
    await capture('07-comparison-hover');

    // 6. Radial Model
    await page.locator('text=What keeps Alter Engine accountable').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.locator('g:has-text("Context")').first().hover();
    await page.waitForTimeout(300);
    await capture('08-radial-model-hover');

    // 7. Use Case Journey
    await page.locator('text=The same Engine. Different operating contexts.').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await capture('09-use-case-journey');

    // 8. Security Verification Stream
    await page.locator('text=Security should be visible, not implied.').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.hover('text=Security should be visible, not implied.'); // Hover inside section
    await page.waitForTimeout(300);
    await capture('10-security-stream');

    // 9. Why AlterX
    await page.locator('text=Why AlterX').first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.hover('text=Outcome first');
    await page.waitForTimeout(500);
    await capture('11-why-alterx-hover');

    // 10. Start Routes
    await page.locator('text=Start with the path that fits the work.').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await capture('12-start-routes');

    // 11. Footer
    await page.locator('text=From objective to completed, reviewable work.').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await capture('13-footer');
  });

  test('request access form validation', async ({ page }) => {
    await page.goto('/request-access');
    await page.click('button:has-text("Request access")');
    // Ensure errors appear
    await expect(page.locator('text=Name is required')).toBeVisible();
    await expect(page.locator('text=Valid work email is required')).toBeVisible();
  });
});
