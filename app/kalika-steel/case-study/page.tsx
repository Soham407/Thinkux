"use client";

import Image from "next/image";
import { m as motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { assetPath } from "@/lib/assetPath";

const FOLDER = "Kalika Steel";

function ImageTile({
  file,
  index,
  className = "",
  sizes = "(min-width: 768px) 45vw, 100vw",
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
      transition={{ duration: 0.5, delay: priority ? 0 : (index % 4) * 0.04, ease: "easeOut" }}
      className={`overflow-hidden rounded-sm ${className}`.trim()}
    >
      <Image
        src={assetPath(FOLDER, file)}
        alt=""
        width={1200}
        height={900}
        className={`h-full w-full object-cover ${cropClassName}`.trim()}
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </motion.div>
  );
}

export default function KalikaSteelCaseStudy() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name="Kalika Steel" />

      <div className="flex flex-col gap-4 md:gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <ImageTile
            file="Group 472560.avif"
            index={0}
            className="aspect-[478/363]"
            cropClassName="object-left"
            priority
          />
          <ImageTile
            file="Group 472560.avif"
            index={1}
            className="aspect-[478/363]"
            cropClassName="object-right"
            priority
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.08fr_0.92fr] gap-4 md:gap-5 items-end">
          <div className="flex flex-col gap-4 md:gap-5">
            <ImageTile file="Group-1.avif" index={2} className="aspect-[695/528]" priority />
            <ImageTile file="Group.avif" index={3} className="aspect-[695/528]" priority />
          </div>

          <div className="flex flex-col gap-4 md:gap-5 self-end">
            <ImageTile file="Group 472530.avif" index={4} className="aspect-[694/430]" />
            <div className="grid grid-cols-2 items-end gap-4 md:gap-5">
              <ImageTile
                file="Clip path group 1.avif"
                index={5}
                className="aspect-[333/760]"
                sizes="(min-width: 768px) 22vw, 50vw"
              />
              <ImageTile
                file="Clip path group 2.avif"
                index={6}
                className="aspect-[333/760]"
                sizes="(min-width: 768px) 22vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <ImageTile
            file="Group 472561.avif"
            index={7}
            className="aspect-[459/342]"
            sizes="(min-width: 768px) 30vw, 100vw"
          />
          <ImageTile
            file="Layer_1-2.avif"
            index={8}
            className="aspect-[451/342]"
            sizes="(min-width: 768px) 30vw, 100vw"
          />
          <ImageTile
            file="Layer_1-3.avif"
            index={9}
            className="aspect-[450/342]"
            sizes="(min-width: 768px) 30vw, 100vw"
          />
        </div>

        <YouTubeEmbed id="qmNJUM0CG-g" index={10} />
      </div>
    </section>
  );
}
