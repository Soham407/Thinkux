"use client";
 
import Image from "next/image";
import { m as motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";
import { alfaLavalCaseStudy } from "@/lib/brands";
 
const FOLDER = alfaLavalCaseStudy.assetFolder;
 
// Alt text + title for each image, keyed by filename.
// Add/edit entries here if you add more images later.
const IMAGE_META: Record<string, { alt: string; title: string }> = {
  "Group 472633.avif": {
    alt: "Best Business Consultancy in Pune – THINK UX business strategy services",
    title: "Alfa Laval",
  },
  "Alfa Newsletter 2008 1.avif": {
    alt: "Best Business Consultancy in Pune – Branding and brand identity by THINK UX",
    title: "Alfa Laval",
  },
  "Alfa Laval fruit Processing advt c2c 1.avif": {
    alt: "Best Business Consultancy in Pune – Alfa Laval fruit processing campaign designed by THINK UX",
    title: "Alfa Laval Fruit Processing Campaign",
  },
  "alfa laval ad 1.avif": {
    alt: "Best Business Consultancy in Pune – Alfa Laval advertising campaign by THINK UX",
    title: "Alfa Laval Advertisement",
  },
  "Asset 1@2x 5.avif": {
    alt: "Best Business Consultancy in Pune – Alfa Laval branding and visual communication by THINK UX",
    title: "Alfa Laval Branding Design",
  },
  "Asset 10@2x 2.avif": {
    alt: "Best Business Consultancy in Pune – Alfa Laval creative marketing design by THINK UX",
    title: "Alfa Laval Marketing Creative",
  },
  "Asset 11@2x 2.avif": {
    alt: "Best Business Consultancy in Pune – Alfa Laval digital campaign design by THINK UX",
    title: "Alfa Laval Digital Campaign",
  },
  "Asset 2@2x 5.avif": {
    alt: "Best Business Consultancy in Pune – Alfa Laval product branding by THINK UX",
    title: "Alfa Laval Product Branding",
  },
  "Asset 3@2x 5.avif": {
    alt: "Best Business Consultancy in Pune – Alfa Laval corporate branding solutions by THINK UX",
    title: "Alfa Laval Corporate Branding",
  },
  "Asset 4@2x 5.avif": {
    alt: "Best Business Consultancy in Pune – Alfa Laval brand communication designed by THINK UX",
    title: "Alfa Laval Brand Communication",
  },
  "1 1930155275.avif": {
    alt: "Best Business Consultancy in Pune – Alfa Laval project case study by THINK UX",
    title: "Alfa Laval Case Study",
  },
  "2 1.avif": {
    alt: "Best Business Consultancy in Pune – Alfa Laval creative design portfolio by THINK UX",
    title: "Alfa Laval Creative Design",
  },
  "4 1.avif": {
    alt: "Best Business Consultancy in Pune – Alfa Laval branding project by THINK UX",
    title: "Alfa Laval Branding Project",
  },
  "5 1.avif": {
    alt: "Best Business Consultancy in Pune – Alfa Laval visual identity and marketing design by THINK UX",
    title: "Alfa Laval Visual Identity",
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
  const alt = meta?.alt ?? "Alfa Laval project image by THINK UX";
  const title = meta?.title ?? "Alfa Laval";
 
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: priority ? 0 : (index % 4) * 0.04,
        ease: "easeOut",
      }}
      className="overflow-hidden rounded-sm w-full"
    >
      <Image
        src={assetPath(FOLDER, file)}
        alt={alt}
        title={title}
        width={1200}
        height={900}
        className="w-full h-auto block"
        sizes="(min-width: 768px) 33vw, 100vw"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        unoptimized={true}
      />
    </motion.div>
  );
}
 
export default function AlfaLavalCaseStudy() {
  const tiles = alfaLavalCaseStudy.tiles || [];
 
  // Group tiles for masonry-style columns
  // Top 9 images (0-8) in 3 columns
  const col1 = [tiles[0], tiles[3], tiles[6]].filter(Boolean);
  const col2 = [tiles[1], tiles[4], tiles[7]].filter(Boolean);
  const col3 = [tiles[2], tiles[5], tiles[8]].filter(Boolean);
 
  // Remaining images (9-12) in 2 columns
  const colBottom1 = [tiles[9], tiles[11]].filter(Boolean);
  const colBottom2 = [tiles[10], tiles[12]].filter(Boolean);
 
  return (
    <div className="flex flex-col gap-4 md:gap-5">
      {/* Top Section: 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-start">
        <div className="flex flex-col gap-4 md:gap-5">
          {col1.map((t, i) => (
            <Tile key={t.file} file={t.file} index={i * 3} priority={i === 0} />
          ))}
        </div>
        <div className="flex flex-col gap-4 md:gap-5">
          {col2.map((t, i) => (
            <Tile key={t.file} file={t.file} index={i * 3 + 1} priority={i === 0} />
          ))}
        </div>
        <div className="flex flex-col gap-4 md:gap-5">
          {col3.map((t, i) => (
            <Tile key={t.file} file={t.file} index={i * 3 + 2} priority={i === 0} />
          ))}
        </div>
      </div>
 
      {/* Bottom Section: 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">
        <div className="flex flex-col gap-4 md:gap-5">
          {colBottom1.map((t, i) => (
            <Tile key={t.file} file={t.file} index={9 + i * 2} />
          ))}
        </div>
        <div className="flex flex-col gap-4 md:gap-5">
          {colBottom2.map((t, i) => (
            <Tile key={t.file} file={t.file} index={10 + i * 2} />
          ))}
        </div>
      </div>
    </div>
  );
}
