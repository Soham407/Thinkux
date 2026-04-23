"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";
import { alfaLavalCaseStudy } from "@/lib/brands";

const FOLDER = alfaLavalCaseStudy.assetFolder;

function Tile({
  file,
  index,
  priority = false,
  spanFull = false,
}: {
  file: string;
  index: number;
  priority?: boolean;
  spanFull?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.04, ease: "easeOut" }}
      className={`overflow-hidden rounded-sm ${spanFull ? "md:col-span-3" : ""}`}
    >
      <Image
        src={assetPath(FOLDER, file)}
        alt=""
        width={1200}
        height={900}
        className="w-full h-auto object-cover"
        sizes={spanFull ? "100vw" : "(min-width: 768px) 33vw, 100vw"}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </motion.div>
  );
}

export default function AlfaLavalCaseStudy() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name={alfaLavalCaseStudy.name} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-start">
        {alfaLavalCaseStudy.tiles?.map((tile, index) => (
          <Tile
            key={tile.file}
            file={tile.file}
            index={index}
            priority={index < 3}
            spanFull={tile.span === "full"}
          />
        ))}
      </div>
    </section>
  );
}
