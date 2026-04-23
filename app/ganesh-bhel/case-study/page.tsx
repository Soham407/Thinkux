"use client";

import Image from "next/image";
import { m as motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";
import { ganeshBhelCaseStudy } from "@/lib/brands";

function Tile({
  file,
  folder,
  index,
  className = "",
  imgClassName = "",
  priority = false,
}: {
  file: string;
  folder: string;
  index: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: priority ? 0 : (index % 4) * 0.04, ease: "easeOut" }}
      className={`overflow-hidden rounded-sm w-full ${className}`}
    >
      <Image
        src={assetPath(folder, file)}
        alt=""
        width={1200}
        height={1600}
        className={`w-full h-auto block ${imgClassName}`}
        sizes="(min-width: 768px) 33vw, 100vw"
        priority={priority}
        fetchPriority={priority ? "high" : "auto"}
      />
    </motion.div>
  );
}

export default function GaneshBhelCaseStudy() {
  const CS_FOLDER = "Ganesh Bhel/Case Study";

  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name={ganeshBhelCaseStudy.name} />

      <div className="flex flex-col gap-4 md:gap-5">
        {/* Main Grid: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-stretch">
          
          {/* 1st Column: 1 image at top and 2 rows below 2x2 */}
          <div className="flex flex-col gap-4 md:gap-5 h-full">
            <Tile file="Group 472572.avif" folder={CS_FOLDER} index={0} priority />
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <Tile file="Asset 2@2x 1.avif" folder={CS_FOLDER} index={1} priority />
              <Tile file="Asset 3@2x 1.avif" folder={CS_FOLDER} index={2} priority />
              <Tile file="Asset 6@2x 1.avif" folder={CS_FOLDER} index={3} priority />
              <Tile file="Asset 7@2x 1.avif" folder={CS_FOLDER} index={4} />
            </div>
            {/* No images below this in 1st column */}
          </div>

          {/* 2nd Column: Split into top sub-columns and a bottom image */}
          <div className="flex flex-col gap-4 md:gap-5 h-full">
            <div className="grid grid-cols-2 gap-4 md:gap-5 items-stretch flex-grow">
              {/* Sub column 1: 3 images stacked */}
              <div className="flex flex-col gap-4 md:gap-5 h-full">
                <Tile file="Asset 3@2x 3.avif" folder={CS_FOLDER} index={5} />
                <div className="bg-white rounded-sm flex items-center justify-center p-4 flex-grow">
                  <Tile file="Layer_1.avif" folder={CS_FOLDER} index={6} className="!w-auto" />
                </div>
                <Tile file="Asset 9@2x 1.avif" folder={CS_FOLDER} index={7} />
              </div>
              
              {/* Sub column 2: 1 vertical big image */}
              <div className="h-full">
                <Tile 
                  file="Asset 6@2x 3.avif" 
                  folder={CS_FOLDER} 
                  index={8} 
                  className="h-full" 
                  imgClassName="h-full object-cover" 
                />
              </div>
            </div>

            {/* Bottom of these 2 subcolumns */}
            <Tile file="Asset 2@2x 3.avif" folder={CS_FOLDER} index={9} />
          </div>
        </div>
      </div>
    </section>
  );
}
