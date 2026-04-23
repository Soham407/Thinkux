"use client";

import { m as motion } from "framer-motion";
import Image from "next/image";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";

const FOLDER = "Real Estate";

function Tile({
  file,
  index,
  priority = false,
  spanFull = false,
  className = "",
  imgClassName = "",
}: {
  file: string;
  index: number;
  priority?: boolean;
  spanFull?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: priority ? 0 : (index % 4) * 0.04, ease: "easeOut" }}
      className={`overflow-hidden rounded-sm ${spanFull ? "md:col-span-3" : ""} ${className}`}
    >
      <Image
        src={assetPath(FOLDER, file)}
        alt=""
        width={1200}
        height={1600}
        className={`w-full h-auto block ${imgClassName}`}
        sizes={spanFull ? "100vw" : "(min-width: 768px) 33vw, 100vw"}
        priority={priority}
        fetchPriority={priority ? "high" : "auto"}
      />
    </motion.div>
  );
}

export default function RealEstatePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name="Real Estate" />

      <div className="flex flex-col gap-4 md:gap-5">
        {/* Rows 1 & 2: 3-column horizontal images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <Tile file="DSK Developers_01 1.avif" index={0} priority />
          <Tile file="DSK Developers_02 1.avif" index={1} priority />
          <Tile file="DSK Developers_03 1.avif" index={2} priority />
          
          <Tile file="HP - A - 1 1.avif" index={3} priority />
          <Tile file="HP - A - 2 1.avif" index={4} />
          <Tile file="HP - A - 3 1.avif" index={5} />
        </div>

        {/* Row 3: 3-column vertical posters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <Tile file="Suvidha_ Emailer 1.avif" index={6} />
          <Tile file="Leaflet Front 1.avif" index={7} />
          <Tile file="Vrundavan Diwali Emailer 2.avif" index={8} />
        </div>

        {/* Row 4: 2-column wide horizontal images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-stretch">
          <Tile 
            file="Brand Ads - With Correction - 1 2.avif" 
            index={9} 
            className="h-full"
            imgClassName="h-full object-cover"
          />
          <Tile 
            file="175648_412296618824889_1859075648_o 1.avif" 
            index={10} 
            className="h-full"
            imgClassName="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
