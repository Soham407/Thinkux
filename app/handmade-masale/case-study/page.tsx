"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";

const FOLDER = "Handmade Masale";

function ImageTile({
  file,
  index,
  className = "",
  sizes = "(min-width: 768px) 45vw, 100vw",
  cropClassName = "",
}: {
  file: string;
  index: number;
  className?: string;
  sizes?: string;
  cropClassName?: string;
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
        height={900}
        className={`h-full w-full object-cover ${cropClassName}`.trim()}
        sizes={sizes}
      />
    </motion.div>
  );
}

export default function HandmadeMasaleCaseStudy() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name="Handmade Masale" />

      <div className="flex flex-col gap-4 md:gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <ImageTile
            file="IMG_7064 1.jpg"
            index={0}
            className="h-[220px] md:h-[300px]"
          />
          <ImageTile
            file="IMG_6899 1.jpg"
            index={1}
            className="h-[220px] md:h-[300px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 md:gap-5 items-stretch">
          <ImageTile
            file="IMG_7149 1.jpg"
            index={2}
            className="bg-white"
            cropClassName="object-contain"
          />
          <ImageTile
            file="Group 472562.jpg"
            index={3}
            className="bg-white"
            cropClassName="object-contain p-2 md:p-2"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <ImageTile
            file="Group.jpg"
            index={4}
            className="bg-black aspect-[461/632]"
            cropClassName="object-contain"
            sizes="(min-width: 768px) 30vw, 100vw"
          />
          <ImageTile
            file="Clip path group.jpg"
            index={5}
            className="bg-black aspect-[447/632]"
            cropClassName="object-contain"
            sizes="(min-width: 768px) 30vw, 100vw"
          />
          <ImageTile
            file="Group-1.jpg"
            index={6}
            className="bg-black aspect-[461/632]"
            cropClassName="object-contain"
            sizes="(min-width: 768px) 30vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
