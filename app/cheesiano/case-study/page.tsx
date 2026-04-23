"use client";

import Image from "next/image";
import { m as motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";

const FOLDER = "Cheesiano Pizza";

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
      transition={{ duration: 0.5, delay: priority ? 0 : (index % 4) * 0.04, ease: "easeOut" }}
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

export default function CheesianoCaseStudy() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name="Cheesiano Pizza" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-start">
        <Tile file="Son & daughter Post 2.avif" index={0} priority />
        <Tile file="Junior Pizza Maker certificate 1 2.avif" index={1} priority />
        <Tile file="Saturday Post 2.avif" index={2} priority />
        
        <Tile file="Mumbai Post 2.avif" index={3} priority />
        <Tile file="Group 472567.avif" index={4} />
        <Tile file="Independence Day Post 2.avif" index={5} />
        
        <Tile file="Pro Kabaddi 2.avif" index={6} />
        <Tile file="Pizza Maker Competition Post option 2.avif" index={7} />
        <Tile file="Frindship day post 2.avif" index={8} />
        
        <Tile file="Frame.avif" index={9} spanFull />
      </div>
    </section>
  );
}
