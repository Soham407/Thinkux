# Think UX — Portfolio Website

Agency portfolio site for Think UX. Currently ships 4 pages for two brands: **Marigold** (Banquets 'N' Conventions) and **Endo Lighting** (Japanese lighting brand).

## Pages

| Route | Description |
|---|---|
| `/marigold` | Marigold main page — copy + image stack |
| `/marigold/case-study` | Marigold case study — asymmetric image grid |
| `/endo` | Endo Lighting main page — copy + image stack |
| `/endo/case-study` | Endo Lighting case study — image grid |

## Adding a new brand

1. Copy the brand's asset folder from `Think UX Website Assets/` into `public/assets/`:
   ```bash
   cp -r "/Volumes/Soham/ThinkUX/Think UX Website Assets/<Brand Name>" public/assets/
   ```

2. Add the brand data to `lib/brands.ts` — two entries: `<brand>Main` and `<brand>CaseStudy`.

3. Create the routes:
   - `app/<brand>/page.tsx` — import `MainPageLayout` and pass the brand data
   - `app/<brand>/case-study/page.tsx` — use `CaseStudyLayout` for symmetric grids, or custom JSX + `CaseStudyHeader` for asymmetric layouts

4. Commit and push — Vercel auto-deploys.

## Asset structure

```
public/assets/
├── Logo.png
├── Marigold/
├── Endo Lighting/
└── carousel/          ← client logo strip (footer)
```

Source assets (all 19 brands) live at `/Volumes/Soham/ThinkUX/Think UX Website Assets/` on the local machine. Only the folders used by live pages are committed to this repo.

## Design source

Figma PNG exports are at `/Volumes/Soham/ThinkUX/Figma-Bulk(PNG)/` — not in this repo. Open them as the reference when building or adjusting a page.

## Dev

```bash
npm run dev     # http://localhost:3000
npm run build   # verify no broken image paths before pushing
```

## Stack

- Next.js 16 (App Router, TypeScript, Turbopack)
- Tailwind CSS v4 (`@theme` in `app/globals.css` — no `tailwind.config.ts`)
- Framer Motion — scroll-reveal animations
- Inter font via `next/font/google`
- Deployed on Vercel
