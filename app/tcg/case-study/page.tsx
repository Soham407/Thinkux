"use client";

import Image from "next/image";
import { m as motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";

const FOLDER = "TCG";

// Alt text + title for each image, keyed by filename.
// Add/edit entries here if you add more images later.
const IMAGE_META: Record<string, { alt: string; title: string }> = {
  "Group 472541.avif": {
    alt: "TCG brand identity and creative design by THINK UX, a branding agency in Pune",
    title: "TCG Brand Identity",
  },
  "Layer_1 2.avif": {
    alt: "TCG visual branding and communication design by THINK UX, a creative agency in Pune",
    title: "TCG Visual Branding",
  },
  "Group 472581.avif": {
    alt: "TCG corporate branding and marketing design by THINK UX, a brand design agency in Pune",
    title: "TCG Corporate Branding",
  },
  "Group 472538.avif": {
    alt: "TCG brand communication and creative design by THINK UX, a marketing agency in Pune",
    title: "TCG Brand Communication",
  },
  "Group 472637.avif": {
    alt: "TCG business branding and visual identity by THINK UX, a business consultancy in Pune",
    title: "TCG Business Branding",
  },
};

function Tile({
  file,
  index,
  priority = false,
  spanFull = false,
}: {
  file: string;
  index: number;
  priority?: boolean;
  spanFull?: boolean;
}) {
  const meta = IMAGE_META[file];
  const alt = meta?.alt ?? "TCG project image by THINK UX";
  const title = meta?.title ?? "TCG";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: priority ? 0 : (index % 4) * 0.04,
        ease: "easeOut"
      }}
      className={`overflow-hidden rounded-sm ${spanFull ? "md:col-span-3" : ""}`}
    >
      <Image
        src={assetPath(FOLDER, file)}
        alt={alt}
        title={title}
        width={1200}
        height={900}
        className="w-full h-auto object-cover"
        sizes={spanFull ? "100vw" : "(min-width: 768px) 33vw, 100vw"}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </motion.div>
  );
}

export default function TcgCaseStudy() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name="TCG" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {/* Row 1: Three equal columns */}
        <Tile file="Group 472541.avif" index={0} priority />
        <Tile file="Layer_1 2.avif" index={1} priority />
        <Tile file="Group 472581.avif" index={2} priority />

        {/* Row 2: 4th image (1 col) and Logo (2 cols) */}
        <Tile file="Group 472538.avif" index={3} priority />
        <div className="md:col-span-2">
          <Tile file="Group 472637.avif" index={4} />
        </div>
      </div>
    </section>
  );
}
