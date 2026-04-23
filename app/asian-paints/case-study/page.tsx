"use client";

import { m as motion } from "framer-motion";
import Image from "next/image";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";
import { asianPaintsCaseStudy } from "@/lib/brands";

const FOLDER = asianPaintsCaseStudy.assetFolder;

function Tile({
  file,
  index,
  priority = false,
  className = "",
  imgClassName = "",
}: {
  file: string;
  index: number;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: priority ? 0 : (index % 4) * 0.04, ease: "easeOut" }}
      className={`overflow-hidden rounded-sm w-full ${className}`}
    >
      <Image
        src={assetPath(FOLDER, file)}
        alt=""
        width={1200}
        height={1600}
        className={`w-full h-auto block ${imgClassName}`}
        sizes="(min-width: 768px) 33vw, 100vw"
        priority={priority}
        fetchPriority={priority ? "high" : "auto"}
      />
    </motion.div>
  );
}

export default function AsianPaintsCaseStudy() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name={asianPaintsCaseStudy.name} />

      <div className="flex flex-col gap-4 md:gap-5">
        {/* Row 1: 2 wide posters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <Tile file="Asset 1@2x 4.avif" index={0} priority />
          <Tile file="Asset 2@2x 4.avif" index={1} priority />
        </div>

        {/* Row 2: 2 wide posters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <Tile file="Asset 3@2x 4.avif" index={2} priority />
          <Tile file="Asset 4@2x 4.avif" index={3} priority />
        </div>

        {/* Row 3: 2 wide posters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <Tile file="Asset 5@2x 4.avif" index={4} />
          <Tile file="Asset 6@2x 4.avif" index={5} />
        </div>

        {/* Row 4: 3 vertical posters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <Tile file="Asset 8@2x 4.avif" index={6} />
          <Tile file="Asset 9@2x 2.avif" index={7} />
          <Tile file="Asset 10@2x 1.avif" index={8} />
        </div>

        {/* Row 5: 3 vertical/mixed posters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <Tile file="Asset 7@2x 2.avif" index={9} />
          <Tile file="Asset 11@2x 1.avif" index={10} />
          <Tile file="image 44.avif" index={11} />
        </div>

        {/* Row 6: Merchandising full width */}
        <div className="w-full">
          <Tile file="image 36.avif" index={12} className="!max-w-none" />
        </div>
      </div>
    </section>
  );
}
