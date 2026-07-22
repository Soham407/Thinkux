---
name: vision-verify
description: >
  End-to-end AI visual verification pipeline. Use this to automatically take
  screenshots of web routes across desktop and mobile using Playwright, and then
  visually audit the rendered UI. It acts as an automated QA engineer to check
  for layout regressions, responsive design breaks, overlap, and un-rendered
  content. Replaces manual clicking and eyeball testing.
---

# Vision Verify

## What this does
This skill turns you into an automated visual QA pipeline. Instead of relying purely on console logs or raw text DOM reading (which misses visual bugs like overlapping divs or mobile layout breaks), you will drive a headless browser, capture high-fidelity screenshots, and use your native Vision capabilities to evaluate them semantically.

This merges the programmatic reliability of `frontend-verify` with deep visual layout checks, acting as an automated "Sense-Plan-Act" visual judge. 
*(Note: For deep aesthetic UI/UX critique and styling refinement, use the `impeccable` skill. `vision-verify` is strictly for regression and correctness testing).*

## The Workflow

### 1. Identify the Targets
Determine which routes have been affected by recent changes. Ask the user if it's not clear.

### 2. Prepare the Environment
Ensure the local dev server (e.g., `npm run dev`) is running. If not, ask the user or run it in the background.

### 3. Capture Screenshots (The "Sense" Phase)
Use `run_command` with `playwright-cli` to capture the visual state of the affected routes. Capture both a desktop view and a mobile view if responsive changes were made.

**Example Playwright Command Sequence:**
```bash
# Open a fresh session
playwright-cli -s=vverify open

# Capture Desktop
playwright-cli -s=vverify resize 1280 800
playwright-cli -s=vverify goto http://localhost:3000/
playwright-cli -s=vverify screenshot > .playwright-cli/desktop-home.png

# Capture Mobile
playwright-cli -s=vverify resize 375 812
playwright-cli -s=vverify goto http://localhost:3000/
playwright-cli -s=vverify screenshot > .playwright-cli/mobile-home.png

# Clean up
playwright-cli -s=vverify close
```

### 4. Ingest and Analyze (The "Verify" Phase)
Use your `view_file` tool on the resulting `.png` files (e.g., `view_file` on `path/to/.playwright-cli/desktop-home.png`). 

When analyzing the image, check for:
- **Layout Integrity:** Do elements overlap? Is text cut off?
- **Responsiveness:** Did the mobile view stack correctly (e.g., flex-col vs flex-row)? Did elements shrink off-screen?
- **Expected State:** Did the specific feature requested by the user render correctly (e.g., "is the logo vertically centered?")
- **Critical Errors:** Are there massive whitespace gaps, missing images (alt text showing), or broken CSS grids?

### 5. Report the Verdict
Output a structured report in the chat. Do not create an excessive artifact unless there are dozens of pages. Format your response like this:

```
**Vision Verify Report**

- **Desktop (/)**: [PASS/FAIL] - The layout matches expectations. Logo is centered, nav is aligned right.
- **Mobile (/)**: [FAIL] - The hero text overlaps the CTA button on 375px viewports. 

**Conclusion:** 1 Visual Regression found. [Suggested fix].
```

## Token Rules
- **Do not** write a Node.js script to call an external API for vision. YOU are the vision model. Use `view_file` on the `.png` directly.
- **Do** close the `playwright-cli` session when done to prevent zombie processes.
- **Do** take screenshots of the specific components or routes that were edited, rather than the entire site if unnecessary.
