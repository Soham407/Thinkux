"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";

const FOLDER = "Hansgrohe";

function ImageTile({
  file,
  index,
  className = "",
  sizes = "(min-width: 768px) 30vw, 100vw",
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
        height={1600}
        className={`h-full w-full object-contain ${cropClassName}`.trim()}
        sizes={sizes}
      />
    </motion.div>
  );
}

export default function HansgroheCaseStudyPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name="Hansgrohe" />

      <div className="flex flex-col gap-4 md:gap-5">
        <div className="grid grid-cols-1 md:grid-cols-[0.92fr_1.5fr] gap-4 md:gap-5 items-stretch">
          <ImageTile
            file="Axor advt_HALFPAGE 1.jpg"
            index={0}
            className="aspect-[562/402] bg-[#080808]"
            sizes="(min-width: 768px) 32vw, 100vw"
          />
          <ImageTile
            file="Axor_Branding_CC 1.jpg"
            index={1}
            className="aspect-[865/402] bg-[#080808]"
            sizes="(min-width: 768px) 58vw, 100vw"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-start">
          <ImageTile
            file="ADVERTORIAL 2.jpg"
            index={2}
            className="aspect-[462/664] bg-white"
          />
          <ImageTile
            file="PowderRain leaflet A5 back 1.jpg"
            index={3}
            className="aspect-[462/664] bg-white"
          />
          <ImageTile
            file="ADVERTORIAL 1 1.jpg"
            index={4}
            className="aspect-[462/664] bg-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[0.82fr_0.9fr_0.9fr] gap-4 md:gap-5 items-start">
          <div className="flex flex-col gap-4 md:gap-5">
            <ImageTile
              file="hansgrohe Overhead shower_Man 2.jpg"
              index={5}
              className="aspect-[391/220] bg-[#ece2d6]"
              sizes="(min-width: 768px) 24vw, 100vw"
            />
            <ImageTile
              file="hansgrohe Hand shower_Baby girl 2.jpg"
              index={6}
              className="aspect-[391/220] bg-[#e8dccf]"
              sizes="(min-width: 768px) 24vw, 100vw"
            />
            <ImageTile
              file="hansgrohe Overhead shower_Lady - 3.6ft x 8ft 2.jpg"
              index={7}
              className="aspect-[391/220] bg-[#d8c9b8]"
              sizes="(min-width: 768px) 24vw, 100vw"
            />
          </div>

          <ImageTile
            file="PowderRain  leaflet A5 front 1.jpg"
            index={8}
            className="aspect-[462/664] bg-[#7e7064]"
          />
          <ImageTile
            file="PowderRain  leaflet A5 front_option 1 1.jpg"
            index={9}
            className="aspect-[462/664] bg-[#6d6358]"
          />
        </div>
      </div>
    </section>
  );
}
