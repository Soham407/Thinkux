"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BrandHeading } from "./BrandHeading";
import { ThinkUxLogo } from "./ThinkUxLogo";
import { assetPath } from "@/lib/assetPath";

type Section = { title: string; body: string };

export type MainPageBrand = {
  name: string;
  tagline?: string;
  intro: string;
  sections: Section[];
  assetFolder: string;
  images: string[];
  readMoreHref?: string;
  youtubeId?: string;
};

export function MainPageLayout({ brand }: { brand: MainPageBrand }) {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <div className="mb-16 md:mb-24">
        <ThinkUxLogo />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-start">
        <div className="flex flex-col gap-8 md:sticky md:top-8 md:self-start">
          <BrandHeading name={brand.name} tagline={brand.tagline} />

          <p className="font-body text-[15px] leading-7 text-[color:var(--foreground)]/80 max-w-xl">
            {brand.intro}
          </p>

          {brand.sections.map((section) => (
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
              href={brand.readMoreHref ?? "#"}
              className="font-body inline-block rounded-full border border-[color:var(--border)] px-6 py-2 text-sm font-medium text-[color:var(--foreground)]/80 hover:bg-black/[0.02]"
            >
              see more
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {brand.images.map((file, i) => (
            <motion.div
              key={file}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
              className="relative overflow-hidden rounded-sm"
            >
              <Image
                src={assetPath(brand.assetFolder, file)}
                alt={`${brand.name} visual ${i + 1}`}
                width={900}
                height={1200}
                className="w-full h-auto object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
