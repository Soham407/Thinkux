"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";

const FOLDER = "Jalan’s";
const images = [
  "JDCC Campaign 04 1.avif",
  "JDCC Campaign 03 1.avif",
  "JDCC Campaign 02 1.avif",
  "JDCC Campaign 01 1.avif",
];

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
        height={1600}
        className="w-full h-auto block"
        sizes="(min-width: 768px) 50vw, 100vw"
        priority={priority}
      />
    </motion.div>
  );
}

export default function JalansPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name="Jalan’s" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {images.map((file, i) => (
          <Tile key={file} file={file} index={i} priority={i < 2} />
        ))}
      </div>
    </section>
  );
}
