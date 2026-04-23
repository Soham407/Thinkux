"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";

const FOLDER = "Adhik Group";

function Tile({
  file,
  index,
  priority = false,
  className = "",
}: {
  file: string;
  index: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.04, ease: "easeOut" }}
      className={`overflow-hidden rounded-sm ${className}`}
    >
      <Image
        src={assetPath(FOLDER, file)}
        alt=""
        width={1200}
        height={900}
        className="w-full h-auto object-cover"
        sizes="(min-width: 768px) 33vw, 100vw"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </motion.div>
  );
}

function YouTubeTile({
  videoId,
  index,
  className = "",
}: {
  videoId: string;
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.04, ease: "easeOut" }}
      className={`overflow-hidden rounded-sm bg-gray-100 aspect-[9/16] ${className}`}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
      ></iframe>
    </motion.div>
  );
}

export default function AdhikGroupCaseStudy() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name="Adhik Group" />

      <div className="flex flex-col gap-4 md:gap-5">
        {/* Row 1: Header Banner */}
        <Tile file="Group 472593.avif" index={0} priority className="w-full" />

        {/* Row 2: Video Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-start">
          <div className="flex flex-col gap-4 md:gap-5">
            <Tile file="Group 472592.avif" index={1} priority />
            <Tile file="Kitchen Photo 2.avif" index={2} />
          </div>
          {/* O Bake Video */}
          <YouTubeTile videoId="rxjrx7I2kdE" index={3} />
          {/* Fine Dine Video */}
          <YouTubeTile videoId="ZntxG00MWSw" index={4} />
        </div>

        {/* Row 3: 1 row below videos - Social/Graphics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <Tile file="Clip path group 3.avif" index={5} />
          <Tile file="Rectangle.avif" index={6} />
          <Tile file="Clip path group 1.avif" index={7} />
        </div>

        {/* Row 4: Asset 7 + Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-stretch">
          <Tile file="Asset 7@4x 1.avif" index={8} />
          <div className="bg-[#e5e5e5] rounded-sm flex items-center justify-center p-8 h-full">
            <span className="font-display text-lg md:text-2xl font-semibold tracking-tight uppercase text-black">
              O Bake Packaging
            </span>
          </div>
        </div>

        {/* Row 5: 3 rows below videos - Exterior/Interior Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <Tile file="image 982.avif" index={9} />
          <Tile file="image 983.avif" index={10} />
          <Tile file="image 987.avif" index={11} />
        </div>

        {/* Row 6: Final Social Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <Tile file="Puranpoli 5.avif" index={12} />
          <Tile file="18.avif" index={13} />
          <Tile file="did You Know_.avif" index={14} />
        </div>
      </div>
    </section>
  );
}
