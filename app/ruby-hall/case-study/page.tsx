"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";
import { rubyHallCaseStudy } from "@/lib/brands";

const FOLDER = "Ruby Hall Clinic";

function Tile({
  file,
  index,
  priority = false,
  aspectRatio = "aspect-[3/4]",
  objectFit = "object-cover",
}: {
  file: string;
  index: number;
  priority?: boolean;
  aspectRatio?: string;
  objectFit?: "object-cover" | "object-contain";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.04, ease: "easeOut" }}
      className={`overflow-hidden rounded-sm relative ${aspectRatio}`}
    >
      <Image
        src={assetPath(FOLDER, file)}
        alt=""
        fill
        className={objectFit}
        sizes="(min-width: 768px) 30vw, 100vw"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
      />
    </motion.div>
  );
}

export default function RubyHallCaseStudyPage() {
  const { tiles } = rubyHallCaseStudy;
  
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name="Ruby Hall Clinic" tagline="Founded in 1959" />

      <div className="flex flex-col gap-4 md:gap-5">
        {/* Row 1: 3 Posters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-start">
          <Tile file={tiles[0].file} index={0} priority />
          <Tile file={tiles[1].file} index={1} priority />
          <Tile file={tiles[2].file} index={2} priority />
        </div>

        {/* Row 2: Complex Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch">
          <Tile file={tiles[3].file} index={3} aspectRatio="aspect-[3/4.2]" />
          <Tile file={tiles[4].file} index={4} aspectRatio="aspect-[3/4.2]" />
          <div className="flex flex-col gap-4 md:gap-5 justify-between">
            <Tile file={tiles[5].file} index={5} aspectRatio="aspect-[3/2]" objectFit="object-contain" />
            <Tile file={tiles[6].file} index={6} aspectRatio="aspect-[3/2]" objectFit="object-contain" />
          </div>
        </div>

        {/* Row 3: 3 Posters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-start">
          <Tile file={tiles[7].file} index={7} aspectRatio="aspect-[3/4]" />
          <Tile file={tiles[8].file} index={8} aspectRatio="aspect-[3/4]" />
          <Tile file={tiles[9].file} index={9} aspectRatio="aspect-[3/4]" />
        </div>
      </div>
    </section>
  );
}
