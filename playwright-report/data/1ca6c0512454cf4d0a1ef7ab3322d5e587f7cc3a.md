# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage.spec.ts >> AlterX Homepage Visual & Interaction QA >> capture desktop screenshots and interactions
- Location: e2e\homepage.spec.ts:13:7

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - link "AlterX Homepage" [ref=e5] [cursor=pointer]:
        - /url: /
        - img "AlterX Logo" [ref=e6]:
          - generic [ref=e7]: AlterX
      - navigation [ref=e9]:
        - button "Alter Engine" [ref=e10]
        - button "Solutions" [ref=e11]
        - button "Products" [ref=e12]
        - button "Developers" [ref=e13]
        - button "Company" [ref=e14]
        - button "Resources" [ref=e15]
      - link "Try Alter Engine" [ref=e17] [cursor=pointer]:
        - /url: /try-alter-engine
    - generic [ref=e22]:
      - generic [ref=e23]: ALTER ENGINE
      - generic [ref=e24]:
        - heading "Start with the outcome. Watch it become a clear plan." [level=1] [ref=e25]:
          - generic [ref=e26]: Start with the outcome.
          - generic [ref=e27]:
            - generic [ref=e28]: Watch it become
            - generic: a clear plan.
        - generic:
          - generic: Start with the outcome.
          - generic: Watch it become
      - paragraph [ref=e29]: Alter Engine structures complex work, carries out approved steps and keeps important decisions open to review.
      - generic [ref=e30]:
        - link "Try Alter Engine" [ref=e31] [cursor=pointer]:
          - /url: /try-alter-engine
        - link "See how it works" [ref=e32] [cursor=pointer]:
          - /url: "#how-it-works"
    - generic [ref=e34]:
      - generic [ref=e35]:
        - generic [ref=e36]: PRODUCTS AND SOLUTIONS
        - heading "One Engine. Four ways to put it to work." [level=2] [ref=e37]
        - paragraph [ref=e38]: Alter Engine is the foundation. Use it directly, apply it to inventory operations, shape it around an enterprise process or bring it into an existing product.
      - generic [ref=e40]:
        - button "Select Alter Engine" [ref=e41] [cursor=pointer]:
          - generic:
            - generic: FLAGSHIP PRODUCT
            - heading "Alter Engine" [level=3]
            - generic:
              - generic:
                - paragraph: Turn one objective into a clear sequence of work. Review the plan, approve important actions and inspect the result.
        - button "Select Cognitive AI" [ref=e42] [cursor=pointer]:
          - generic:
            - generic: INVENTORY OPERATIONS
            - heading "Cognitive AI" [level=3]
            - generic:
              - generic:
                - paragraph: Bring stock attention, forecasting signals, product decisions and supplier actions into one operating view.
        - button "Select Custom workflows" [ref=e43] [cursor=pointer]:
          - generic:
            - generic: ENTERPRISE
            - heading "Custom workflows" [level=3]
            - generic:
              - generic:
                - paragraph: Design an Alter Engine workflow around your existing systems, permissions, handoffs and operating rules.
        - button "Select Build with AlterX" [ref=e44] [cursor=pointer]:
          - generic:
            - generic: PRODUCTS AND INTERNAL SYSTEMS
            - heading "Build with AlterX" [level=3]
            - generic:
              - generic:
                - paragraph: Bring planned, approval-aware Alter Engine workflows into a product or internal environment.
      - generic [ref=e45]:
        - generic [ref=e46]:
          - heading "From one objective to reviewable work." [level=2] [ref=e47]
          - paragraph [ref=e48]: Alter Engine identifies what needs to be completed, proposes the steps and keeps approval points clear before actions run.
        - generic [ref=e49]:
          - heading "What you provide" [level=4] [ref=e50]
          - paragraph [ref=e51]: The result you need and the relevant context.
        - generic [ref=e52]:
          - heading "What the Engine does" [level=4] [ref=e53]
          - paragraph [ref=e54]: Structures the work and carries out approved steps.
        - generic [ref=e55]:
          - heading "What you receive" [level=4] [ref=e56]
          - paragraph [ref=e57]: A result with its decisions, actions and checks available for review.
        - link "Try Alter Engine" [ref=e60] [cursor=pointer]:
          - /url: /try-alter-engine
    - generic [ref=e62]:
      - generic:
        - generic [ref=e64]:
          - generic [ref=e65]:
            - generic [ref=e66]: Objective
            - generic [ref=e67]: Prepare a decision-ready supplier comparison.
          - generic [ref=e68]:
            - generic [ref=e69]: Context Gathering
            - generic [ref=e70]:
              - generic [ref=e71]: Supplier criteria
              - generic [ref=e73]: Missing decision date
          - generic [ref=e75]:
            - generic [ref=e76]: Execution Route
            - generic [ref=e77]:
              - generic [ref=e79]: Gather approved supplier records
              - generic [ref=e83]: Check delivery constraints (Approval Required)
              - generic [ref=e87]: Prepare recommendation
          - generic:
            - generic:
              - generic:
                - generic: Result Summary
                - generic: Verified
              - generic: Objective met. Evidence preserved.
        - generic [ref=e91]:
          - button [ref=e92]:
            - heading "Begin with the result." [level=3] [ref=e95]
            - paragraph [ref=e97]: Describe what needs to be completed in ordinary language. Alter Engine identifies the objective and asks only for context that is genuinely missing.
          - button [ref=e98]:
            - heading "See the path before the work begins." [level=3] [ref=e101]
            - generic:
              - paragraph: The Engine turns the objective into a sequence of steps, dependencies and decisions that can be reviewed.
          - button [ref=e102]:
            - heading "Keep important decisions with the right person." [level=3] [ref=e105]
            - generic:
              - paragraph: Actions involving permission, judgement or risk pause until someone approves them or changes the plan.
          - button [ref=e106]:
            - heading "Follow the work as it moves." [level=3] [ref=e109]
            - generic:
              - paragraph: Approved steps run in order. Completed, current and waiting actions remain visible throughout the process.
          - button [ref=e110]:
            - heading "Review the result, not just the activity." [level=3] [ref=e113]
            - generic:
              - paragraph: Alter Engine compares what came back with the original objective. Weak or failed steps return for revision, retry or human judgement.
    - generic [ref=e115]:
      - generic [ref=e116]:
        - heading "Different tools stop at different points." [level=2] [ref=e117]
        - paragraph [ref=e118]: An assistant can suggest the work. An automation can repeat it. Alter Engine is designed to structure, follow and check it.
      - generic [ref=e119]:
        - generic [ref=e120]:
          - generic [ref=e121]: Capability
          - generic [ref=e122]: AI Assistant
          - generic [ref=e123]: Fixed Automation
          - generic [ref=e124]: Alter Engine
        - generic [ref=e126]:
          - generic [ref=e129]:
            - generic [ref=e130]:
              - generic [ref=e131]: Starts with the required result
              - generic: Alter Engine accepts the objective directly, just like an assistant, without needing manual step-by-step programming beforehand.
            - generic [ref=e133]: "Yes"
            - generic [ref=e137]: Requires manual setup
            - generic [ref=e141]: "Yes"
          - generic [ref=e147]:
            - generic [ref=e148]:
              - generic [ref=e149]: Creates the plan
              - generic: The Engine generates a structured, visible plan from the objective before execution begins.
            - generic [ref=e151]: "Yes"
            - generic [ref=e155]: "No"
            - generic [ref=e159]: "Yes"
          - generic [ref=e165]:
            - generic [ref=e166]:
              - generic [ref=e167]: Handles multiple dependent steps
              - generic: Unlike simple chat assistants, the Engine orchestrates complex dependencies where step C requires step B.
            - generic [ref=e169]: Limited
            - generic [ref=e173]: "Yes"
            - generic [ref=e177]: "Yes"
          - generic [ref=e183]:
            - generic [ref=e184]:
              - generic [ref=e185]: Uses approved systems
              - generic: Integrates deeply with enterprise systems using defined permissions and verified API boundaries.
            - generic [ref=e187]: Limited
            - generic [ref=e191]: "Yes"
            - generic [ref=e195]: "Yes"
          - generic [ref=e201]:
            - generic [ref=e202]:
              - generic [ref=e203]: Pauses for human decisions
              - generic: Native approval points pause the workflow, allowing human judgement before risky or high-value actions run.
            - generic [ref=e205]: "No"
            - generic [ref=e209]: Depends on configuration
            - generic [ref=e213]: "Yes"
          - generic [ref=e219]:
            - generic [ref=e220]:
              - generic [ref=e221]: Shows current progress
              - generic: Provides real-time visibility into what is completed, what is currently running, and what is waiting.
            - generic [ref=e223]: "No"
            - generic [ref=e227]: "Yes"
            - generic [ref=e231]: "Yes"
          - generic [ref=e237]:
            - generic [ref=e238]:
              - generic [ref=e239]: Checks the result
              - generic: Automatically compares the final output against the original objective to ensure it actually succeeded.
            - generic [ref=e241]: Limited
            - generic [ref=e245]: "No"
            - generic [ref=e249]: "Yes"
          - generic [ref=e255]:
            - generic [ref=e256]:
              - generic [ref=e257]: Responds when a step fails
              - generic: Returns failed steps for revision, automatic retry, or immediate human intervention.
            - generic [ref=e259]: "No"
            - generic [ref=e263]: Limited
            - generic [ref=e267]: "Yes"
          - generic [ref=e273]:
            - generic [ref=e274]:
              - generic [ref=e275]: Preserves evidence
              - generic: Stores an immutable record of every decision, permission check, and action taken.
            - generic [ref=e277]: "No"
            - generic [ref=e281]: "Yes"
            - generic [ref=e285]: "Yes"
    - generic [ref=e290]:
      - heading "What keeps Alter Engine accountable while work moves forward." [level=2] [ref=e292]
      - generic [ref=e293]:
        - img [ref=e295]:
          - generic [ref=e299]:
            - generic [ref=e301] [cursor=pointer]: Context
            - generic [ref=e307] [cursor=pointer]: Plan
            - generic [ref=e313] [cursor=pointer]: Permission
            - generic [ref=e319] [cursor=pointer]: Action
            - generic [ref=e325] [cursor=pointer]: Evidence
            - generic [ref=e331]: Engine
        - generic [ref=e340]:
          - button "Context What information does the work require?" [ref=e341]:
            - generic [ref=e342]: Context
            - generic [ref=e343]: What information does the work require?
          - button "Plan What steps and dependencies are proposed?" [ref=e345]:
            - generic [ref=e346]: Plan
            - generic: What steps and dependencies are proposed?
          - button "Permission What may the Engine use, and where must a person decide?" [ref=e347]:
            - generic [ref=e348]: Permission
            - generic: What may the Engine use, and where must a person decide?
          - button "Action What approved work is currently being performed?" [ref=e349]:
            - generic [ref=e350]: Action
            - generic: What approved work is currently being performed?
          - button "Evidence What supports the result and the decisions made along the way?" [ref=e351]:
            - generic [ref=e352]: Evidence
            - generic: What supports the result and the decisions made along the way?
    - generic [ref=e354]:
      - heading "The same Engine. Different operating contexts." [level=2] [ref=e356]
      - generic [ref=e357]:
        - generic [ref=e359]:
          - generic [ref=e363]: Operational coordination
          - paragraph [ref=e364]: Manage cross-team dependencies and maintain visibility across parallel workstreams.
        - generic [ref=e366]:
          - generic [ref=e372]: Inventory decisions
          - paragraph [ref=e373]: React to stock signals, propose reallocation and request human approval for significant shifts.
        - generic [ref=e375]:
          - generic [ref=e382]: Research and reporting
          - paragraph [ref=e383]: Gather disparate data, synthesize evidence and prepare draft reports for expert review.
        - generic [ref=e385]:
          - generic [ref=e390]: Customer conversations
          - paragraph [ref=e391]: Turn natural language requests into structured, trackable actions within internal systems.
        - generic [ref=e393]:
          - generic [ref=e398]: Custom enterprise processes
          - paragraph [ref=e399]: Map specific organizational constraints into enforced procedural steps.
    - paragraph [ref=e402]: "The context changes. The underlying responsibility does not: structure the work, keep decisions visible and return a result that can be reviewed."
    - generic [ref=e403]:
      - generic: "[EVIDENCE_OK]"
      - generic [ref=e406]:
        - generic [ref=e407]:
          - generic [ref=e408]: Verified Architecture
          - heading "Security should be visible, not implied." [level=2] [ref=e409]
        - generic [ref=e410]:
          - paragraph [ref=e411]: Every important action should pass through defined permissions, policies and checks before it becomes part of the result.
          - generic [ref=e412]:
            - generic [ref=e413]: Input classified
            - generic [ref=e416]: Source permission checked
            - generic [ref=e419]: Policy matched
            - generic [ref=e422]: Sensitive field redacted
            - generic [ref=e425]: Output checked
            - generic [ref=e428]: Audit event stored
    - generic [ref=e432]:
      - generic [ref=e433]:
        - heading "Why AlterX" [level=2] [ref=e434]
        - paragraph [ref=e435]: Important work needs more than a convincing answer.
      - generic [ref=e436]:
        - generic [ref=e437]:
          - heading "Outcome first" [level=3] [ref=e443]
          - paragraph [ref=e445]: The work begins with what must be completed.
        - generic [ref=e446]:
          - heading "Plan before action" [level=3] [ref=e451]
          - paragraph [ref=e453]: The path can be reviewed before anything runs.
        - generic [ref=e454]:
          - heading "People keep authority" [level=3] [ref=e460]
          - paragraph [ref=e462]: Important decisions remain with the right person.
        - generic [ref=e463]:
          - heading "Progress remains understandable" [level=3] [ref=e468]
          - paragraph [ref=e470]: Completed, current and waiting work stays clear.
        - generic [ref=e471]:
          - heading "Results are checked" [level=3] [ref=e478]
          - paragraph [ref=e480]: The final activity is compared with the original objective.
        - generic [ref=e481]:
          - heading "Failure has a path" [level=3] [ref=e487]
          - paragraph [ref=e489]: A failed step can be retried, revised, escalated or stopped.
    - generic [ref=e491]:
      - heading "Start with the path that fits the work." [level=2] [ref=e493]
      - generic [ref=e494]:
        - link "Explore Alter Engine Understand how an objective becomes planned and reviewable work. Explore Alter Engine" [ref=e495] [cursor=pointer]:
          - /url: /engine
          - generic [ref=e496]:
            - generic [ref=e497]:
              - heading "Explore Alter Engine" [level=3] [ref=e498]
              - paragraph [ref=e499]: Understand how an objective becomes planned and reviewable work.
            - generic [ref=e500]: Explore Alter Engine
        - link "Explore Cognitive AI See how AlterX applies this approach to inventory operations. Explore Cognitive AI" [ref=e504] [cursor=pointer]:
          - /url: /cognitive-ai
          - generic [ref=e505]:
            - generic [ref=e506]:
              - heading "Explore Cognitive AI" [level=3] [ref=e507]
              - paragraph [ref=e508]: See how AlterX applies this approach to inventory operations.
            - generic [ref=e509]: Explore Cognitive AI
        - link "Discuss a custom workflow Plan a workflow around your systems, decisions and operating process. Talk to AlterX" [ref=e513] [cursor=pointer]:
          - /url: /request-access
          - generic [ref=e514]:
            - generic [ref=e515]:
              - heading "Discuss a custom workflow" [level=3] [ref=e516]
              - paragraph [ref=e517]: Plan a workflow around your systems, decisions and operating process.
            - generic [ref=e518]: Talk to AlterX
        - link "Build with AlterX Explore bringing Alter Engine workflows into a product or internal environment. Request developer access" [ref=e522] [cursor=pointer]:
          - /url: /request-access?type=developer
          - generic [ref=e523]:
            - generic [ref=e524]:
              - heading "Build with AlterX" [level=3] [ref=e525]
              - paragraph [ref=e526]: Explore bringing Alter Engine workflows into a product or internal environment.
            - generic [ref=e527]: Request developer access
  - contentinfo [ref=e531]:
    - generic [ref=e532]:
      - generic [ref=e533]:
        - generic [ref=e534]:
          - img "AlterX Logo" [ref=e535]:
            - generic [ref=e536]: AlterX
          - paragraph [ref=e537]: From objective to completed, reviewable work.
        - generic [ref=e538]:
          - generic [ref=e539]:
            - heading "Alter Engine" [level=4] [ref=e540]
            - list [ref=e541]:
              - listitem [ref=e542]:
                - link "Overview" [ref=e543] [cursor=pointer]:
                  - /url: "#overview"
              - listitem [ref=e544]:
                - link "How it works" [ref=e545] [cursor=pointer]:
                  - /url: "#how-it-works"
              - listitem [ref=e546]:
                - link "Control & governance" [ref=e547] [cursor=pointer]:
                  - /url: "#governance"
          - generic [ref=e548]:
            - heading "Solutions" [level=4] [ref=e549]
            - list [ref=e550]:
              - listitem [ref=e551]:
                - link "Cognitive AI" [ref=e552] [cursor=pointer]:
                  - /url: "#cognitive-ai"
              - listitem [ref=e553]:
                - link "Custom workflows" [ref=e554] [cursor=pointer]:
                  - /url: "#custom-workflows"
          - generic [ref=e555]:
            - heading "Developers" [level=4] [ref=e556]
            - list [ref=e557]:
              - listitem [ref=e558]:
                - link "API documentation" [ref=e559] [cursor=pointer]:
                  - /url: "#api"
              - listitem [ref=e560]:
                - link "SDKs & Tools" [ref=e561] [cursor=pointer]:
                  - /url: "#sdks"
              - listitem [ref=e562]:
                - link "System status" [ref=e563] [cursor=pointer]:
                  - /url: "#status"
          - generic [ref=e564]:
            - heading "Resources" [level=4] [ref=e565]
            - list [ref=e566]:
              - listitem [ref=e567]:
                - link "Blog" [ref=e568] [cursor=pointer]:
                  - /url: "#blog"
              - listitem [ref=e569]:
                - link "Case studies" [ref=e570] [cursor=pointer]:
                  - /url: "#case-studies"
              - listitem [ref=e571]:
                - link "Help center" [ref=e572] [cursor=pointer]:
                  - /url: "#help"
          - generic [ref=e573]:
            - heading "Company" [level=4] [ref=e574]
            - list [ref=e575]:
              - listitem [ref=e576]:
                - link "About AlterX" [ref=e577] [cursor=pointer]:
                  - /url: "#about"
              - listitem [ref=e578]:
                - link "Mission" [ref=e579] [cursor=pointer]:
                  - /url: "#mission"
              - listitem [ref=e580]:
                - link "Contact" [ref=e581] [cursor=pointer]:
                  - /url: "#contact"
      - generic [ref=e582]:
        - paragraph [ref=e583]: © 2026 AlterX Ltd. All rights reserved.
        - generic [ref=e584]:
          - link "Privacy & terms" [ref=e585] [cursor=pointer]:
            - /url: "#privacy"
          - link "Security" [ref=e586] [cursor=pointer]:
            - /url: "#security"
          - link "Legal" [ref=e587] [cursor=pointer]:
            - /url: "#legal"
  - generic [ref=e592] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e593]
    - generic [ref=e597]:
      - button "Open issues overlay" [ref=e598]:
        - generic [ref=e599]:
          - generic [ref=e600]: "0"
          - generic [ref=e601]: "1"
        - generic [ref=e602]: Issue
      - button "Collapse issues badge" [ref=e603]
  - alert [ref=e606]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import fs from 'fs';
  3   | import path from 'path';
  4   | 
  5   | test.describe('AlterX Homepage Visual & Interaction QA', () => {
  6   | 
  7   |   test.beforeEach(async ({ page }) => {
  8   |     // Wait for Next.js to hydrate
  9   |     await page.goto('/');
> 10  |     await page.waitForLoadState('networkidle');
      |                ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  11  |   });
  12  | 
  13  |   test('capture desktop screenshots and interactions', async ({ page }, testInfo) => {
  14  |     // Only run this test for Desktop Chrome to avoid taking duplicate screenshots
  15  |     if (testInfo.project.name !== 'Desktop Chrome') return;
  16  | 
  17  |     const screenshotDir = path.join(process.cwd(), 'docs', 'screenshots');
  18  |     if (!fs.existsSync(screenshotDir)) {
  19  |       fs.mkdirSync(screenshotDir, { recursive: true });
  20  |     }
  21  | 
  22  |     const capture = async (name: string) => {
  23  |       await page.screenshot({ path: path.join(screenshotDir, `${name}.png`) });
  24  |     };
  25  | 
  26  |     // 1. Hero
  27  |     await capture('01-hero');
  28  | 
  29  |     // 2. Header Navigation Dropdown
  30  |     await page.hover('text=Alter Engine');
  31  |     await page.waitForTimeout(300); // Wait for dropdown animation
  32  |     await capture('02-open-dropdown');
  33  |     // Escape to close
  34  |     await page.keyboard.press('Escape');
  35  |     await page.waitForTimeout(300);
  36  | 
  37  |     // 3. Product Atlas States
  38  |     const atlasSection = page.locator('text=Flagship product').first();
  39  |     await atlasSection.scrollIntoViewIfNeeded();
  40  |     await page.waitForTimeout(500); // Wait for GSAP
  41  |     await capture('03-atlas-active-engine');
  42  | 
  43  |     await page.click('button:has-text("Cognitive AI")');
  44  |     await page.waitForTimeout(800);
  45  |     await capture('04-atlas-active-cognitive');
  46  | 
  47  |     // 4. Engine Stages (Scroll Story)
  48  |     // Scroll down to trigger chapters
  49  |     await page.locator('.scroll-chapter').first().scrollIntoViewIfNeeded();
  50  |     await page.waitForTimeout(500);
  51  |     await capture('05-engine-stage-1');
  52  | 
  53  |     await page.evaluate(() => window.scrollBy(0, window.innerHeight * 0.8));
  54  |     await page.waitForTimeout(500);
  55  |     await capture('06-engine-stage-2');
  56  | 
  57  |     // 5. Comparison
  58  |     await page.locator('text=Different tools stop at different points.').scrollIntoViewIfNeeded();
  59  |     await page.waitForTimeout(500);
  60  |     await page.hover('text=Starts with the required result');
  61  |     await page.waitForTimeout(300);
  62  |     await capture('07-comparison-hover');
  63  | 
  64  |     // 6. Radial Model
  65  |     await page.locator('text=What keeps Alter Engine accountable').scrollIntoViewIfNeeded();
  66  |     await page.waitForTimeout(500);
  67  |     await page.locator('g:has-text("Context")').first().hover();
  68  |     await page.waitForTimeout(300);
  69  |     await capture('08-radial-model-hover');
  70  | 
  71  |     // 7. Use Case Journey
  72  |     await page.locator('text=The same Engine. Different operating contexts.').scrollIntoViewIfNeeded();
  73  |     await page.waitForTimeout(500);
  74  |     await capture('09-use-case-journey');
  75  | 
  76  |     // 8. Security Verification Stream
  77  |     await page.locator('text=Security should be visible, not implied.').scrollIntoViewIfNeeded();
  78  |     await page.waitForTimeout(500);
  79  |     await page.hover('text=Security should be visible, not implied.'); // Hover inside section
  80  |     await page.waitForTimeout(300);
  81  |     await capture('10-security-stream');
  82  | 
  83  |     // 9. Why AlterX
  84  |     await page.locator('text=Why AlterX').first().scrollIntoViewIfNeeded();
  85  |     await page.waitForTimeout(500);
  86  |     await page.hover('text=Outcome first');
  87  |     await page.waitForTimeout(500);
  88  |     await capture('11-why-alterx-hover');
  89  | 
  90  |     // 10. Start Routes
  91  |     await page.locator('text=Start with the path that fits the work.').scrollIntoViewIfNeeded();
  92  |     await page.waitForTimeout(500);
  93  |     await capture('12-start-routes');
  94  | 
  95  |     // 11. Footer
  96  |     await page.locator('text=From objective to completed, reviewable work.').scrollIntoViewIfNeeded();
  97  |     await page.waitForTimeout(500);
  98  |     await capture('13-footer');
  99  |   });
  100 | 
  101 |   test('request access form validation', async ({ page }) => {
  102 |     await page.goto('/request-access');
  103 |     await page.click('button:has-text("Request access")');
  104 |     // Ensure errors appear
  105 |     await expect(page.locator('text=Name is required')).toBeVisible();
  106 |     await expect(page.locator('text=Valid work email is required')).toBeVisible();
  107 |   });
  108 | });
  109 | 
```