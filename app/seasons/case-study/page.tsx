"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";

const FOLDER = "Seasons Mall";

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
      transition={{ duration: 0.5, delay: (index % 4) * 0.04, ease: "easeOut" }}
      className="overflow-hidden rounded-sm"
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

export default function SeasonsCaseStudy() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name="Seasons Mall" />

      <div className="flex flex-col gap-4 md:gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <Tile file="1 may  maharashtra din 1 1.avif" index={0} priority />
          <Tile file="1 ST AANIVARSARY 03 1.avif" index={1} priority />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <Tile file="fathers day Mailer_01 1.avif" index={2} />
          <Tile file="E greetings diwali 2.avif" index={3} />
          <Tile file="kitty party 2 2.avif" index={4} />
          
          <Tile file="Launch Mailers2 1.avif" index={5} />
          <Tile file="Launch Mailers4 1.avif" index={6} />
          <Tile file="Launch Mailers 5.avif" index={7} />
        </div>
      </div>
    </section>
  );
}
