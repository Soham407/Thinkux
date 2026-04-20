@AGENTS.md
@.claude/skills/thinkux-site/SKILL.md

# Think UX — Portfolio Case Study Site

Next.js 16 App Router project recreating a Figma portfolio for Think UX (agency). Built from Figma PNG exports — no Figma MCP / Dev Mode available.

## Source material

- **Figma PNG exports** — `/Volumes/Soham/ThinkUX/Figma-Bulk(PNG)/` (4 PNGs: `Marigold Main Page.png`, `Marigold Case Study.png`, `Endo Main Page.png`, `Endo Case Study.png`). These are the design source of truth. Read them as images and replicate visually.
- **Brand assets** — `/Volumes/Soham/ThinkUX/Think UX Website Assets/` (~1.7 GB, 19 brand folders + `carousel` + `Logo.png`). Symlinked into `public/assets/`. Folder names contain spaces and apostrophes (e.g. `Jalan's`, `Endo Lighting`) — always use `assetPath(folder, file)` from `lib/assetPath.ts` which URL-encodes.
- **Project skill** — `.claude/skills/thinkux-site/SKILL.md` has the workflow for adding/editing a brand.

## Current scope

4 pages shipped: Marigold Main + Case Study (approved by client), Endo Main + Case Study (not yet QA'd against the PNG — likely needs image reordering and copy).

## Stack

- Next.js 16.2.4 (App Router, TypeScript, Turbopack)
- Tailwind CSS v4 (CSS-based `@theme` tokens in `app/globals.css` — no `tailwind.config.ts`)
- Framer Motion for subtle scroll-in reveals
- `next/image` with local paths through the symlink
- Inter font via `next/font/google`
- Deploy: Vercel

## Project conventions

**Shared chrome inside each page container, not in root layout.** The Think UX logo sits *inside* the `max-w-6xl` content container at the top, left-aligned with the heading. The root `layout.tsx` only renders `<main>`, `<PillButtons>`, and the `<footer>` with `<ClientCarousel>`.

**Design tokens** (in `app/globals.css`):
- `--brand-blue: #2e7fc6`
- `--brand-blue-soft: #e8f1fa`
- `--brand-orange: #ec7f2e` (dot accent)
- `--border: #e5e7eb`

**Curly quotes, not straight.** Taglines like `Banquets 'N' Conventions` use `\u2018` / `\u2019`. Em-dashes use `\u2014`.

**Sticky text, scrolling images.** Main pages use `md:sticky md:top-8 md:self-start` on the left copy column inside a grid with `items-start`.

**Carousel.** Infinite marquee built with CSS `@keyframes marquee` (40s linear, pauses on hover). Tile width: `calc((100vw - 48px - 96px) / 7)` so exactly 7 logos are visible at any viewport. Duplicate the list in JSX for seamless loop. Mask-image fades the edges.

**Pill buttons.** One outer light-gray pill (`bg-gray-100`) containing `THINK UX` label (blue + black, no orange dots) on the left and an inner solid-blue `Build With Us` button on the right. `Build With Us` scrolls to `#site-footer`.

**Brand data lives in `lib/brands.ts`.** Each entry typed as `MainPageBrand` or `CaseStudyBrand`. Main pages use the generic `MainPageLayout`. Case studies with asymmetric/custom grids (like Marigold) render JSX directly in their `page.tsx` file using `<CaseStudyHeader>` for the logo+heading.

## Key files

- `app/layout.tsx` — Inter font, main slot, pill buttons, footer carousel
- `app/page.tsx` — home index (links to the 4 pages)
- `app/<brand>/page.tsx` — brand main page
- `app/<brand>/case-study/page.tsx` — brand case study (generic or custom JSX)
- `components/ThinkUxLogo.tsx` — renders `/assets/Logo.png`
- `components/MainPageLayout.tsx` — 2-col sticky text + image stack
- `components/CaseStudyLayout.tsx` — generic masonry grid (tile array)
- `components/CaseStudyHeader.tsx` — logo + brand heading (for custom case studies)
- `components/PillButtons.tsx` — bottom CTA
- `components/ClientCarousel.tsx` — footer marquee
- `components/BrandHeading.tsx` — name + tagline row
- `lib/brands.ts` — all brand data
- `lib/assetPath.ts` — URL-encoded asset path helper

## Do not

- Do not put the logo in a root `<header>` — it belongs inside each page's content container
- Do not write raw string paths for assets — always `assetPath(folder, file)`
- Do not use straight quotes in taglines/copy — use curly `\u2018 \u2019 \u201c \u201d` and em-dash `\u2014`
- Do not add a `tailwind.config.ts` — Tailwind v4 uses `@theme` blocks in `globals.css`
- Do not reintroduce orange dots on pill buttons — current design is plain `THINK UX` label
- Do not add images beyond what the client has confirmed per page — verify with them before inventing layout

## When making changes

1. Read the relevant PNG from `/Volumes/Soham/ThinkUX/Figma-Bulk(PNG)/` before touching a page
2. Verify referenced asset filenames exist in `Think UX Website Assets/<brand>/`
3. `npm run build` must pass (static export of all routes)
4. Dev server: `npm run dev` → `http://localhost:3000`
