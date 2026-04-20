"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";

const FOLDER = "KEUCO";

function ImageTile({
  file,
  index,
  className = "",
  sizes = "(min-width: 768px) 30vw, 100vw",
  cropClassName = "",
  priority = false,
}: {
  file: string;
  index: number;
  className?: string;
  sizes?: string;
  cropClassName?: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.04, ease: "easeOut" }}
      className={`overflow-hidden rounded-sm ${className}`.trim()}
    >
      <Image
        src={assetPath(FOLDER, file)}
        alt=""
        width={1200}
        height={1600}
        className={`h-full w-full object-contain ${cropClassName}`.trim()}
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </motion.div>
  );
}

export default function KeucoCaseStudyPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name="KEUCO" />

      <div className="flex flex-col gap-4 md:gap-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <ImageTile
            file="Advt 3 1.avif"
            index={0}
            className="aspect-[454/606] bg-[#f2eee7]"
            priority
          />
          <ImageTile
            file="Advt 4 1.avif"
            index={1}
            className="aspect-[454/606] bg-[#08151d]"
            priority
          />
          <ImageTile
            file="Advt 5 1.avif"
            index={2}
            className="aspect-[454/606] bg-[#f0ede7]"
            priority
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.78fr_0.9fr_0.9fr] gap-4 md:gap-5 items-start">
          <ImageTile
            file="2 3.avif"
            index={3}
            className="aspect-[683/470] bg-[#4a3d31]"
          />
          <ImageTile
            file="Asset 1@2x 6.avif"
            index={4}
            className="aspect-[454/606] bg-[#e7d79a]"
          />
          <ImageTile
            file="Asset 3@2x 6.avif"
            index={5}
            className="aspect-[454/606] bg-[#0d0718]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 md:gap-5">
          <ImageTile
            file="Group.avif"
            index={6}
            className="aspect-[699/424] bg-[#d7d4d0]"
            sizes="(min-width: 768px) 48vw, 100vw"
          />
          <ImageTile
            file="Asset 2@2x 6.avif"
            index={7}
            className="aspect-[699/424] bg-[#170d1f]"
            sizes="(min-width: 768px) 48vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
