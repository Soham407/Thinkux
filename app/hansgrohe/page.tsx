"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BrandHeading } from "@/components/BrandHeading";
import { ThinkUxLogo } from "@/components/ThinkUxLogo";
import { assetPath } from "@/lib/assetPath";
import { hansgroheMain } from "@/lib/brands";

const FOLDER = "Hansgrohe";

function CropTile({
  file,
  index,
  className = "",
  cropClassName = "",
  sizes = "(min-width: 768px) 40vw, 100vw",
  priority = false,
}: {
  file: string;
  index: number;
  className?: string;
  cropClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-sm ${className}`.trim()}
    >
      <Image
        src={assetPath(FOLDER, file)}
        alt=""
        fill
        className={`object-cover ${cropClassName}`.trim()}
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </motion.div>
  );
}

export default function HansgrohePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <div className="mb-16 md:mb-24">
        <ThinkUxLogo />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.02fr_0.98fr] gap-10 md:gap-12 items-start">
        <div className="flex flex-col gap-8 md:sticky md:top-8 md:self-start">
          <BrandHeading name={hansgroheMain.name} />

          <p className="font-body text-[15px] leading-7 text-[color:var(--foreground)]/80 max-w-xl">
            {hansgroheMain.intro}
          </p>

          {hansgroheMain.sections.map((section) => (
            <div key={section.title} className="max-w-xl">
              <h2 className="font-display text-lg font-semibold mb-2">{section.title}</h2>
              {section.body.split("\n\n").map((para, pi) => (
                <p
                  key={pi}
                  className="font-body text-[15px] leading-7 text-[color:var(--foreground)]/75 [&:not(:last-child)]:mb-4"
                >
                  {para}
                </p>
              ))}
            </div>
          ))}

          <div>
            <a
              href="/hansgrohe/case-study"
              className="font-body inline-block rounded-full border border-[color:var(--border)] px-6 py-2 text-sm font-medium text-[color:var(--foreground)]/80 hover:bg-black/[0.02]"
            >
              see more
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:pl-2">
          <CropTile
            file="Group 472578.avif"
            index={0}
            className="aspect-[560/265]"
            cropClassName="object-top"
            priority
          />
          <CropTile
            file="Group 472578.avif"
            index={1}
            className="aspect-[560/265]"
            cropClassName="object-center"
          />
          <CropTile
            file="Group 472578.avif"
            index={2}
            className="aspect-[560/265]"
            cropClassName="object-bottom"
          />
          <CropTile
            file="Asset 5@2x 5.avif"
            index={3}
            className="aspect-[560/217]"
            cropClassName="object-contain bg-white"
          />
        </div>
      </div>
    </section>
  );
}
