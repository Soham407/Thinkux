"use client";
 
import Image from "next/image";
import { m as motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";
 
const FOLDER = "Marigold";
 
// Alt text + title for each image, keyed by filename.
// Add/edit entries here if you add more images later.
const IMAGE_META: Record<string, { alt: string; title: string }> = {
  "image 30.avif": {
    alt: "Best Business Consultancy in Pune – Marigold brand identity and packaging design by THINK UX",
    title: "Marigold Brand Identity",
  },
  "image 29.avif": {
    alt: "Business Consultancy in Pune – Marigold branding and visual identity design by THINK UX",
    title: "Marigold Branding Design",
  },
  "image 31.avif": {
    alt: "Brand Identity Design in Pune – Marigold logo and visual identity by THINK UX",
    title: "Marigold Logo Design",
  },
  "image 11.avif": {
    alt: "Packaging Design Services in Pune – Marigold packaging and brand communication by THINK UX",
    title: "Marigold Packaging Design",
  },
  "image 12.avif": {
    alt: "Product Packaging Design in Pune – Marigold product packaging and branding by THINK UX",
    title: "Marigold Product Packaging",
  },
  "image 13.avif": {
    alt: "Creative Packaging Design Services – Marigold packaging design by THINK UX",
    title: "Marigold Creative Packaging",
  },
  "Mask group.avif": {
    alt: "Brand Identity Design Services in Pune – Marigold brand identity mockup by THINK UX",
    title: "Marigold Brand Mockup",
  },
  "m1@2x 1.avif": {
    alt: "Branding Services in Pune – Marigold branding applications and visual identity by THINK UX",
    title: "Marigold Brand Applications",
  },
  "m4@2x 1.avif": {
    alt: "Brand Experience and Packaging Design – Marigold branding by THINK UX",
    title: "Marigold Brand Experience",
  },
  "image 27.avif": {
    alt: "Brand Strategy Services in Pune – Marigold brand strategy and visual branding by THINK UX",
    title: "Marigold Brand Strategy",
  },
  "m2@2x 1.avif": {
    alt: "Premium Branding and Packaging Design in Pune – Marigold branding by THINK UX",
    title: "Marigold Premium Branding",
  },
};
 
function Tile({
  file,
  index,
  priority = false,
}: {
  file: string;
  index: number;
  priority?: boolean;
}) {
  const meta = IMAGE_META[file];
  const alt = meta?.alt ?? "Marigold project image by THINK UX";
  const title = meta?.title ?? "Marigold";
 
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: priority ? 0 : (index % 4) * 0.04, ease: "easeOut" }}
      className="overflow-hidden rounded-sm"
    >
      <Image
        src={assetPath(FOLDER, file)}
        alt={alt}
        title={title}
        width={1200}
        height={900}
        className="w-full h-auto object-cover"
        sizes="(min-width: 768px) 45vw, 100vw"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </motion.div>
  );
}
 
export default function MarigoldCaseStudy() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name="Marigold" tagline={"Banquets \u2018N\u2019 Conventions"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">
        <div className="flex flex-col gap-4 md:gap-5">
          <Tile file="image 11.avif" index={0} priority />
          <Tile file="image 13.avif" index={1} priority />
          <Tile file="image 27.avif" index={2} priority />
        </div>
        <div className="flex flex-col gap-4 md:gap-5">
          <Tile file="image 12.avif" index={3} priority />
          <Tile file="Mask group.avif" index={4} />
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            <Tile file="m1@2x 1.avif" index={5} />
            <Tile file="m4@2x 1.avif" index={6} />
          </div>
          <Tile file="m2@2x 1.avif" index={7} />
        </div>
      </div>
    </section>
  );
}
