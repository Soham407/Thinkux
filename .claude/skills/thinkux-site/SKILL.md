name:thinkux-site
description: Use when editing the Think UX portfolio site — adding/tweaking brand pages (Main Page or Case Study), updating copy, changing image order, or touching shared chrome (logo, pill buttons, carousel). Enforces project conventions documented in CLAUDE.md and prevents common regressions (wrong logo placement, straight quotes, missing assetPath helper, drifting away from the Figma PNGs).
---

# Think UX site workflow

This site is built from Figma PNG exports in `D:\Projects\ThinkUX\Figma-Bulk(PNG)\`. Layout, image order, copy hierarchy, and column splits must strictly follow these designs.

## Before touching a page

1. **Open the PNG** for that page. Layout and image order are precise.
2. **List the brand's asset folder** (`public/assets/<brand>`) to verify exact filenames. Use `lib/assetPath.ts` to handle encoding.
3. **Copy Text:** Use the text provided by the user. Ensure curly quotes (`\u2018 \u2019 \u201c \u201d`) and em-dashes (`\u2014`) are used throughout.

## Adding or editing a Main Page

Data-driven via `lib/brands.ts`:

```ts
export const <brand>Main: MainPageBrand = {
  name: "Brand Name",
  intro: "Intro paragraph…",
  sections: [
    { title: "Challenges", body: "…" },
    { title: "Our Strategy", body: "…" },
    { title: "Solution", body: "…" },
  ],
  assetFolder: "Brand Folder Name",
  images: ["file1.avif", "file2.avif"],
  youtubeId: "videoId", // Optional: for brands like Kalika Steel
};
```

Route: `app/<brand>/page.tsx` renders `<MainPageLayout brand={...} />`.

## Adding or editing a Case Study

Choose the best implementation pattern:

1. **Simple Grid:** Use `CaseStudyLayout` for symmetric grids.
2. **Masonry/Column Stacking:** For brands like **Alfa Laval**, where images have mixed aspect ratios and must remain fully visible (no cropping). Group tiles into 2 or 3 `flex-col` columns inside a `grid` to let them stack naturally.
3. **Complex Custom JSX:** For brands like **Marigold** or **Adhik Group**. Use `app/<brand>/case-study/page.tsx` with a custom structure.
   - Use `YouTubeTile` for embedding Shorts/Videos (9:16 aspect ratio).
   - Use `items-stretch` and `h-full` to match text box heights to adjacent images (e.g., Adhik Packaging).

## Video and Interactive Content

- **YouTube Shorts:** Use the `YouTubeTile` pattern. Embed URL format: `https://www.youtube.com/embed/<videoId>?autoplay=1&mute=1&loop=1&playlist=<videoId>&controls=0&modestbranding=1&rel=0`.
- **Aspect Ratio:** Shorts should maintain a strict `aspect-[9/16]`.

## Design Tokens (app/globals.css)

- **Brand Blue:** `#2e81ff`, Soft: `#e8f1fa`
- **Orange:** `#ec7f2e`
- **Font:** TASA Orbiter (Variable) via `@fontsource-variable/tasa-orbiter`.

## Verification & Development

1. **Dev Server:** Use `npm run dev` (configured with `--webpack` to bypass platform-specific native binding issues).
2. **Alignment:** Ensure images in the same row align. If ratios differ, use `flex-col` stacking or `items-stretch`.
3. **Build Check:** Always run `npm run build` to verify all dynamic `assetPath` calls resolve to valid public files.

## State of each brand

- **Marigold:** Approved (Main + Custom 2-col Case Study).
- **Endo:** Implementation exists; needs QA against PNG.
- **Alfa Laval:** Updated (Main: 1 image; Case Study: Masonry 3-col/2-col mix).
- **Adhik Group:** Updated (Main: 5 images; Case Study: YouTube Shorts, Packaging side-by-side, specific row ordering).
- **Seasons Mall:** Added; needs verification.
- **Kalika Steel:** Includes `youtubeId` in Main.

## Common Mistakes

- **Cropping Content:** Do not use `object-cover` with fixed aspect ratios if the client requires the "full content" of images to be visible. Use `h-auto` and column stacking instead.
- **Row Counting:** Be precise with vertical positioning (e.g., "3 rows below the videos").
- **Straight Quotes:** Always use `\u2018`, `\u2019`, etc.
- **Asset Paths:** Never hardcode `/assets/...`. Always use `assetPath(FOLDER, file)`.
