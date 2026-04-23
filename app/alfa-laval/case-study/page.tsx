"use client";

import Image from "next/image";
import { m as motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";
import { alfaLavalCaseStudy } from "@/lib/brands";

const FOLDER = alfaLavalCaseStudy.assetFolder;

function Tile({
  file,
  index,
  priority = false,
}: {
  file: string;
  index: number;
  priority?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ 
        duration: 0.5, 
        delay: priority ? 0 : (index % 4) * 0.04, 
        ease: "easeOut" 
      }}
      className="overflow-hidden rounded-sm w-full"
    >
      <Image
        src={assetPath(FOLDER, file)}
        alt=""
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
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name={alfaLavalCaseStudy.name} />

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
    </section>
  );
}
