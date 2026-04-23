"use client";

import Image from "next/image";
import { m as motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";
import { garwareCaseStudy } from "@/lib/brands";

const FOLDER = garwareCaseStudy.assetFolder;

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
      transition={{ duration: 0.5, delay: priority ? 0 : (index % 4) * 0.04, ease: "easeOut" }}
      className="overflow-hidden rounded-sm"
    >
      <Image
        src={assetPath(FOLDER, file)}
        alt=""
        width={1200}
        height={1600}
        className="w-full h-auto block"
        sizes="(min-width: 768px) 33vw, 100vw"
        priority={priority}
        fetchPriority={priority ? "high" : "auto"}
      />
    </motion.div>
  );
}

export default function GarwarePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name={garwareCaseStudy.name} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {garwareCaseStudy.tiles.map((tile, i) => (
          <Tile key={tile.file} file={tile.file} index={i} priority={i < 3} />
        ))}
      </div>
    </section>
  );
}
