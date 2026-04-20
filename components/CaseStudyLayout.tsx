"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BrandHeading } from "./BrandHeading";
import { ThinkUxLogo } from "./ThinkUxLogo";
import { assetPath } from "@/lib/assetPath";

export type GridTile = {
  file: string;
  span?: "full" | "half";
  aspect?: string;
};

export type CaseStudyBrand = {
  name: string;
  tagline?: string;
  assetFolder: string;
  tiles: GridTile[];
};

export function CaseStudyLayout({ brand }: { brand: CaseStudyBrand }) {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <div className="mb-16 md:mb-24">
        <ThinkUxLogo />
      </div>
      <div className="mb-8">
        <BrandHeading name={brand.name} tagline={brand.tagline} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {brand.tiles.map((tile, i) => (
          <motion.div
            key={`${tile.file}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.04, ease: "easeOut" }}
            className={
              tile.span === "full"
                ? "md:col-span-2 overflow-hidden rounded-sm"
                : "overflow-hidden rounded-sm"
            }
            style={tile.aspect ? { aspectRatio: tile.aspect } : undefined}
          >
            <Image
              src={assetPath(brand.assetFolder, tile.file)}
              alt={`${brand.name} case study ${i + 1}`}
              width={1200}
              height={900}
              className="w-full h-full object-cover"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
