# Plan: Think UX New Pages Implementation

Based on the provided content document (`think ux website content.md`) and the SVGs in `public/NeededSVG`, here is the proposed plan to build the three new pages for the Think UX website. 

## 1. Routes & Architecture
We will create three new App Router routes at the root level:
* `/about` -> "About us"
* `/services` -> "Our Services"
* `/strategic-consulting` -> "Brand Strategic Consulting" (or `/brand-strategic-consulting`)

Each page will inherit the `app/layout.tsx` wrapper which already includes the shared `<footer>` (ClientCarousel) and `<PillButtons>`. We will need to ensure the shared `<ThinkUxLogo>` sits inside each page's content container, consistent with the existing `MainPageLayout`.

## 2. Asset Mapping (`public/NeededSVG`)
We will move the SVGs from `public/NeededSVG` into an appropriate assets folder (e.g., `public/assets/icons/` or similar, keeping in mind the symlink rule, or just importing them directly if they are UI icons) and map them to the content:
* `Think UX logo.svg` - (might replace or complement the existing `Logo.png`)
* `about page line.svg` - Decorative element for the About page.
* **Services Icons** (for the `/services` page):
  * `brand strategy icon.svg` (Brand Strategy)
  * `brand communication icon.svg` (Brand Communication)
  * `brand experience icon.svg` (Brand Experience)
  * `brand and business consultancy.svg` (Brand & Business Consultancy)
* **Strategic Consulting**:
  * `brand strategy consulting map.svg` - Hero graphic or diagram for the Strategic Consulting page.
* **Navigation/UI**:
  * `next arrow.svg` and `back arrow.svg` - Likely for a carousel or pagination in the services/consulting sections.
  * `Rectangle 805.svg` & `Rectangle 805 2.svg` - Decorative background or image placeholder rectangles.

## 3. Page Breakdown

### A. About Us (`/about/page.tsx`)
* **Header**: `<ThinkUxLogo>` + Heading ("Transforming Brand Experience. Accelerating Business Growth.")
* **Content Section**: 
  * "About THINK UX" heading.
  * Multi-paragraph text layout detailing the consultancy's ethos and the "THINK Framework".
  * Integration of `about page line.svg` as a divider or accent.
* **Styling**: Will follow the existing typography (Inter) and CSS `@theme` tokens (`--brand-blue`, etc.), potentially using sticky scrolling if it matches the main page aesthetic.

### B. Our Services (`/services/page.tsx`)
* **Header**: "Our Services" with the tagline "We build strategic communication ideas..."
* **Service Grid/List**:
  * 4 main service blocks: Brand Strategy, Brand Communication, Brand Experience, Brand & Business Consultancy.
  * Each block will feature its corresponding SVG icon from `NeededSVG`.
  * Bulleted lists for the sub-offerings under each service (e.g., Print Ads, PR, etc.).
* **Interactivity**: The `next arrow.svg` and `back arrow.svg` suggest this might be a horizontal scroll or carousel layout for the services.

### C. Brand Strategic Consulting (`/strategic-consulting/page.tsx`)
* **Header**: "Brand Strategy Consulting" + "Eight strategic pillars..."
* **Hero/Diagram**: Display the `brand strategy consulting map.svg`.
* **Pillars Layout**:
  * 6 pillars listed in the document (Brand Positioning, Market Research, Brand Identity Development, Strategic Planning, Brand Roadmap Development, Brand Strategy Consulting end-to-end). *(Note: Doc says "Eight" but lists 6 main headings. Will structure them as a unified grid or list).*
  * Each section will have the Title, Subtitle (e.g. "Where you stand in the market"), and bullet points.

## 4. Implementation Steps
1. **Move Assets**: Relocate the SVGs to a permanent location (e.g., `public/assets/ui/`) and create necessary helper components or `next/image` wrappers for them.
2. **Build About Page**: Create `/about/page.tsx`, lay out the text using Tailwind CSS v4, and apply Framer Motion scroll reveals.
3. **Build Services Page**: Create `/services/page.tsx`, build the service card components with icons, and implement the layout (grid or carousel based on the arrows).
4. **Build Consulting Page**: Create `/strategic-consulting/page.tsx`, implement the pillars list and embed the map SVG.
5. **Update Navigation**: If there's a global header or main index page (`/`), add links to these new routes. (The root `app/page.tsx` currently links to the 4 case study pages; we will add these 3).

Please review this plan. If it aligns with the Figma design you referenced and the provided content, I can proceed with the implementation. Let me know if there are any changes or specific layout details from the Figma prototype you'd like to emphasize!
