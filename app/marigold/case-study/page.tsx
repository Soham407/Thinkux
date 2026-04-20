"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";

const FOLDER = "Marigold";

function Tile({ file, index }: { file: string; index: number }) {
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
        sizes="(min-width: 768px) 45vw, 100vw"
      />
    </motion.div>
  );
}

export default function MarigoldCaseStudy() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name="Marigold" tagline={"Banquets \u2018N\u2019 Conventions"} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">
        <div className="flex flex-col gap-4 md:gap-5">
          <Tile file="image 11.jpg" index={0} />
          <Tile file="image 13.jpg" index={1} />
          <Tile file="image 27.jpg" index={2} />
        </div>

        <div className="flex flex-col gap-4 md:gap-5">
          <Tile file="image 12.jpg" index={3} />
          <Tile file="Mask group.jpg" index={4} />
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            <Tile file="m1@2x 1.jpg" index={5} />
            <Tile file="m4@2x 1.jpg" index={6} />
          </div>
          <Tile file="m2@2x 1.jpg" index={7} />
        </div>
      </div>
    </section>
  );
}
