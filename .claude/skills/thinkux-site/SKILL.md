---
name: thinkux-site
description: Use when editing the Think UX portfolio site — adding/tweaking brand pages (Main Page or Case Study), updating copy, changing image order, or touching shared chrome (logo, pill buttons, carousel). Enforces project conventions documented in CLAUDE.md and prevents common regressions (wrong logo placement, straight quotes, missing assetPath helper, drifting away from the Figma PNGs).
---

# Think UX site workflow

This site is built from 4 Figma PNG exports in `/Volumes/Soham/ThinkUX/Figma-Bulk(PNG)/`. The client has approved Marigold Main + Case Study. Endo pages exist but have not been QA'd against the design yet.

## Before touching a page

1. **Open the PNG** for that page using the Read tool (it accepts PNGs as images). Layout, image order, copy hierarchy, column split all come from the PNG — not from intuition.
2. **List the brand's asset folder** with Glob or Bash `ls` to know exact filenames. Folder names may contain spaces or apostrophes — these need URL encoding, handled by `lib/assetPath.ts`.
3. **Ask the user for copy** if it isn't already in `lib/brands.ts`. OCR from the PNG is unreliable. Use curly quotes (`\u2018 \u2019 \u201c \u201d`) and em-dashes (`\u2014`) — never straight.

## Adding or editing a Main Page

Data-driven — edit `lib/brands.ts`:

```ts
export const <brand>Main: MainPageBrand = {
  name: "Brand Name",
  tagline: "Short tagline with \u2018curly\u2019 quotes",
  intro: "Intro paragraph…",
  sections: [
    { title: "Challenges", body: "…" },
    { title: "Our Strategy", body: "…" },
    { title: "Solution", body: "…" },
  ],
  assetFolder: "Brand Folder Name",
  images: ["file1.jpg", "file2.jpg", "file3.jpg"],
};
```

Route file at `app/<brand>/page.tsx` renders `<MainPageLayout brand={...} />` with a `readMoreHref` pointing to the case study. The layout already handles the sticky left column + scrolling right images — do not reimplement.

## Adding or editing a Case Study

Two paths:

1. **Simple/symmetric grid** — use the generic `CaseStudyLayout` + a `CaseStudyBrand` entry in `brands.ts` with a flat `tiles` array. Set `span: "full"` on tiles that should span both columns.
2. **Asymmetric / column-specific layout** (like Marigold) — write JSX directly in `app/<brand>/case-study/page.tsx`. Wrap with `<CaseStudyHeader name tagline />` at the top, then build the grid structure yourself using two independent `flex-col` columns inside a `grid grid-cols-2` parent. Use the local `<Tile file={...} index={...} />` helper pattern from `app/marigold/case-study/page.tsx`.

Pick (2) whenever the client says "this image should be next to that one but under the other" — trying to express asymmetric positioning with a flat tile array always ends badly.

## Shared chrome

- `ThinkUxLogo` renders `/assets/Logo.png` and lives **inside** each page's content container at the top (left-aligned with heading), never in a root `<header>`.
- `PillButtons` is at the bottom of every page via root layout. It is one outer gray pill with `THINK UX` label + inner blue `Build With Us` button. **No orange dots.** Earlier versions had dots — do not reintroduce.
- `ClientCarousel` is an infinite marquee (CSS `@keyframes marquee` in `globals.css`). Tile width is `calc((100vw - 48px - 96px) / 7)` — exactly 7 visible. Duplicate the `LOGOS` array in JSX for seamless loop.

## Design tokens

Edit `app/globals.css` `:root` vars. Current:

- Brand blue `#2e7fc6`, soft `#e8f1fa`
- Orange accent `#ec7f2e`
- Border `#e5e7eb`
- Font: Inter via `next/font/google`, variable `--font-inter`

## Verification loop

1. `npm run dev` → `http://localhost:3000`
2. Open the route beside its PNG in `/Volumes/Soham/ThinkUX/Figma-Bulk(PNG)/`
3. Ask the user to compare and point out what's off — do not assume the design is right until they confirm
4. `npm run build` before declaring done — catches broken image paths (spaces/apostrophes are the main risk)

## Common mistakes to avoid

- **Orange dots on the pill buttons** — the design does not have them. Plain `THINK UX` label, plain `Build With Us`.
- **Logo in a full-width root header** — it must sit inside the `max-w-6xl` content container aligned with the heading.
- **Straight quotes in taglines** — use curly. `Banquets \u2018N\u2019 Conventions`, not `Banquets 'N' Conventions`.
- **Flat tile arrays for asymmetric grids** — switch to direct JSX per page.
- **Raw image paths** — always `assetPath(folder, file)`.
- **Introducing a `tailwind.config.ts`** — Tailwind v4 is configured via `@theme` in `globals.css`.
- **Assuming Next.js 15 behavior** — this is Next.js 16 (see `AGENTS.md`). Read `node_modules/next/dist/docs/` before using unfamiliar APIs.

## State of each brand

- **Marigold Main** — client approved (copy + image order + sticky text)
- **Marigold Case Study** — client approved (custom 2-col JSX layout)
- **Endo Main** — built from OCR'd copy; not yet verified against PNG
- **Endo Case Study** — built from guessed tile order; not yet verified against PNG

When the user next edits Endo, follow the same cycle: open the PNG, show the current rendered page, ask for corrections.

## Adding a new brand (step-by-step for Codex)

1. Copy the brand folder from local source into `public/assets/`:
   ```bash
   cp -r "/Volumes/Soham/ThinkUX/Think UX Website Assets/<Brand Name>" public/assets/
   ```
2. List exact filenames: `ls "public/assets/<Brand Name>/"` — never guess filenames.
3. Open the Figma PNG from `/Volumes/Soham/ThinkUX/Figma-Bulk(PNG)/` with the Read tool to see layout.
4. Ask the user for copy text (intro + Challenges / Our Strategy / Solution). Do not OCR from PNG.
5. Add `<brand>Main` and `<brand>CaseStudy` entries to `lib/brands.ts`.
6. Create `app/<brand>/page.tsx` using `MainPageLayout`.
7. Create `app/<brand>/case-study/page.tsx` — custom JSX if asymmetric, `CaseStudyLayout` if symmetric.
8. Add the brand's carousel logo filename → route mapping in `components/ClientCarousel.tsx` `LINKS` record.
9. Run `npm run build` — fix any broken paths before committing.
10. `git add public/assets/<brand> ... && git commit && git push` — Vercel auto-deploys.
