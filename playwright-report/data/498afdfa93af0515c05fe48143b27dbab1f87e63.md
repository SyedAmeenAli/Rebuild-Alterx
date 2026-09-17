# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: overlay-audit.spec.ts >> Overlay Pollution Audit >> Page can be scrolled from top to bottom without interactive blocking
- Location: e2e\overlay-audit.spec.ts:9:7

# Error details

```
Error: page.evaluate: Execution context was destroyed, most likely because of a navigation.
```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - generic [ref=f1e3]:
    - heading "404" [level=1] [ref=f1e4]
    - heading "This page could not be found." [level=2] [ref=f1e6]
  - contentinfo [ref=f1e7]:
    - generic [ref=f1e8]:
      - generic [ref=f1e9]:
        - generic [ref=f1e10]:
          - img "AlterX Logo" [ref=f1e11]:
            - generic [ref=f1e12]: AlterX
          - paragraph [ref=f1e13]: From objective to completed, reviewable work.
        - generic [ref=f1e14]:
          - generic [ref=f1e15]:
            - heading "Alter Engine" [level=4] [ref=f1e16]
            - list [ref=f1e17]:
              - listitem [ref=f1e18]:
                - link "Overview" [ref=f1e19] [cursor=pointer]:
                  - /url: "#overview"
              - listitem [ref=f1e20]:
                - link "How it works" [ref=f1e21] [cursor=pointer]:
                  - /url: "#how-it-works"
              - listitem [ref=f1e22]:
                - link "Control & governance" [ref=f1e23] [cursor=pointer]:
                  - /url: "#governance"
          - generic [ref=f1e24]:
            - heading "Solutions" [level=4] [ref=f1e25]
            - list [ref=f1e26]:
              - listitem [ref=f1e27]:
                - link "Cognitive AI" [ref=f1e28] [cursor=pointer]:
                  - /url: "#cognitive-ai"
              - listitem [ref=f1e29]:
                - link "Custom workflows" [ref=f1e30] [cursor=pointer]:
                  - /url: "#custom-workflows"
          - generic [ref=f1e31]:
            - heading "Developers" [level=4] [ref=f1e32]
            - list [ref=f1e33]:
              - listitem [ref=f1e34]:
                - link "API documentation" [ref=f1e35] [cursor=pointer]:
                  - /url: "#api"
              - listitem [ref=f1e36]:
                - link "SDKs & Tools" [ref=f1e37] [cursor=pointer]:
                  - /url: "#sdks"
              - listitem [ref=f1e38]:
                - link "System status" [ref=f1e39] [cursor=pointer]:
                  - /url: "#status"
          - generic [ref=f1e40]:
            - heading "Resources" [level=4] [ref=f1e41]
            - list [ref=f1e42]:
              - listitem [ref=f1e43]:
                - link "Blog" [ref=f1e44] [cursor=pointer]:
                  - /url: "#blog"
              - listitem [ref=f1e45]:
                - link "Case studies" [ref=f1e46] [cursor=pointer]:
                  - /url: "#case-studies"
              - listitem [ref=f1e47]:
                - link "Help center" [ref=f1e48] [cursor=pointer]:
                  - /url: "#help"
          - generic [ref=f1e49]:
            - heading "Company" [level=4] [ref=f1e50]
            - list [ref=f1e51]:
              - listitem [ref=f1e52]:
                - link "About AlterX" [ref=f1e53] [cursor=pointer]:
                  - /url: "#about"
              - listitem [ref=f1e54]:
                - link "Mission" [ref=f1e55] [cursor=pointer]:
                  - /url: "#mission"
              - listitem [ref=f1e56]:
                - link "Contact" [ref=f1e57] [cursor=pointer]:
                  - /url: "#contact"
      - generic [ref=f1e58]:
        - paragraph [ref=f1e59]: © 2026 AlterX Ltd. All rights reserved.
        - generic [ref=f1e60]:
          - link "Privacy & terms" [ref=f1e61] [cursor=pointer]:
            - /url: "#privacy"
          - link "Security" [ref=f1e62] [cursor=pointer]:
            - /url: "#security"
          - link "Legal" [ref=f1e63] [cursor=pointer]:
            - /url: "#legal"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Overlay Pollution Audit', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('/');
  6  |     await page.waitForLoadState('networkidle');
  7  |   });
  8  | 
  9  |   test('Page can be scrolled from top to bottom without interactive blocking', async ({ page }) => {
  10 |     const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  11 | 
  12 |     // Scroll in 10% increments
  13 |     const increment = Math.floor(totalHeight * 0.1);
  14 |     
  15 |     for (let currentY = 0; currentY < totalHeight; currentY += increment) {
> 16 |       await page.evaluate((y) => window.scrollTo(0, y), currentY);
     |                  ^ Error: page.evaluate: Execution context was destroyed, most likely because of a navigation.
  17 |       await page.waitForTimeout(100); // Allow paints/scroll triggers
  18 |       
  19 |       // Select an element in the middle of the screen
  20 |       const centerX = await page.evaluate(() => window.innerWidth / 2);
  21 |       const centerY = await page.evaluate(() => window.innerHeight / 2);
  22 |       
  23 |       // Click middle of the screen to verify nothing is blocking interactivity
  24 |       // (This will fail if an invisible overlay intercepts the pointer)
  25 |       try {
  26 |         await page.mouse.click(centerX, centerY);
  27 |       } catch {
  28 |         // We only care if an invisible fixed element steals the click
  29 |         // If a real link is clicked, that's fine, though we might navigate away.
  30 |         // To be safe, we just evaluate elementFromPoint
  31 |         const element = await page.evaluate(({ x, y }) => {
  32 |           const el = document.elementFromPoint(x, y);
  33 |           if (!el) return null;
  34 |           const style = window.getComputedStyle(el);
  35 |           return {
  36 |             tagName: el.tagName,
  37 |             id: el.id,
  38 |             className: el.className,
  39 |             position: style.position,
  40 |             opacity: style.opacity
  41 |           };
  42 |         }, { x: centerX, y: centerY });
  43 |         
  44 |         // Assert that the element from point is not a fixed/absolute transparent overlay
  45 |         // taking up the whole screen
  46 |         if (element) {
  47 |           expect(element.className).not.toMatch(/bg-transparent/);
  48 |           // If it's a fixed position element, it shouldn't be fully transparent
  49 |           if (element.position === 'fixed') {
  50 |              expect(Number(element.opacity)).toBeGreaterThan(0);
  51 |           }
  52 |         }
  53 |       }
  54 |     }
  55 |   });
  56 | 
  57 |   test('No lingering overlays exist in DOM after menu hover', async ({ page }) => {
  58 |     await page.locator('button[data-menuid="engine"]').hover();
  59 |     await page.waitForTimeout(200);
  60 |     await page.mouse.move(0, 0); // mouse leave
  61 |     await page.waitForTimeout(300);
  62 | 
  63 |     const backdropCount = await page.locator('.bg-ax-black\\/60').count();
  64 |     // The backdrop might be in DOM but opacity-0 and pointer-events-none, OR completely removed.
  65 |     // Our MegaMenu unmounts if isOpen && !mountedMenu
  66 |     expect(backdropCount).toBe(0);
  67 |   });
  68 | });
  69 | 
```