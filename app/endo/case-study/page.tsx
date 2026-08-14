"use client";
 
import Image from "next/image";
import { m as motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";
 
const FOLDER = "Endo Lighting";
 
// Alt text + title for each image, keyed by filename.
// Add/edit entries here if you add more images later.
const IMAGE_META: Record<string, { alt: string; title: string }> = {
  "Group.avif": {
    alt: "Endo Lighting brand identity designed by THINK UX, a branding agency in Pune",
    title: "Endo Lighting Brand Identity",
  },
  "Group-1.avif": {
    alt: "Endo Lighting visual branding by THINK UX, a creative agency in Pune",
    title: "Endo Lighting Visual Branding",
  },
  "Group-2.avif": {
    alt: "Endo Lighting brand communication designed by a brand design agency in Pune",
    title: "Endo Lighting Brand Communication",
  },
  "Group-3.avif": {
    alt: "Endo Lighting corporate branding solutions by THINK UX, business consultants in Pune",
    title: "Endo Lighting Corporate Branding",
  },
  "Campaign ab.jpg 1.avif": {
    alt: "Endo Lighting advertising campaign created by a digital marketing agency in Pune",
    title: "Endo Lighting Advertising Campaign",
  },
  "Campaign aa.jpg 1.avif": {
    alt: "Endo Lighting creative marketing campaign by THINK UX, a marketing agency in Pune",
    title: "Endo Lighting Creative Campaign",
  },
  "Campaign ac.jpg 1.avif": {
    alt: "Endo Lighting promotional campaign designed by a creative branding agency in Pune",
    title: "Endo Lighting Promotional Campaign",
  },
  "New Campaign_3.jpg 1.avif": {
    alt: "Endo Lighting digital campaign creatives by THINK UX, a digital marketing agency in Pune",
    title: "Endo Lighting Digital Campaign",
  },
  "New Campaign_4.jpg 1.avif": {
    alt: "Endo Lighting integrated marketing campaign by a full-service marketing agency in Pune",
    title: "Endo Lighting Integrated Campaign",
  },
  "New Campaign_1.jpg 1.avif": {
    alt: "Endo Lighting creative advertising solutions by THINK UX, an advertising agency in Pune",
    title: "Endo Lighting Creative Advertising",
  },
  "New Campaign_2.jpg 1.avif": {
    alt: "Endo Lighting campaign branding and visual communication by a branding agency in Pune",
    title: "Endo Lighting Campaign Branding",
  },
};
 
function Tile({
  file,
  index,
  priority = false,
}: {
  file: string;
  index: number;
  priority?: boolean;
}) {
  const meta = IMAGE_META[file];
  const alt = meta?.alt ?? "Endo Lighting project image by THINK UX";
  const title = meta?.title ?? "Endo Lighting";
 
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: priority ? 0 : (index % 4) * 0.04, ease: "easeOut" }}
      className="overflow-hidden rounded-sm"
    >
      <Image
        src={assetPath(FOLDER, file)}
        alt={alt}
        title={title}
        width={1200}
        height={900}
        className="w-full h-auto object-cover"
        sizes="(min-width: 768px) 30vw, 100vw"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </motion.div>
  );
}
 
export default function EndoCaseStudy() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name="Endo Lighting" />
      <div className="flex flex-col gap-4 md:gap-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <Tile file="Campaign ab.jpg 1.avif" index={0} priority />
          <Tile file="Campaign aa.jpg 1.avif" index={1} priority />
          <Tile file="Campaign ac.jpg 1.avif" index={2} priority />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <Tile file="New Campaign_3.jpg 1.avif" index={3} />
          <Tile file="New Campaign_4.jpg 1.avif" index={4} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <Tile file="New Campaign_1.jpg 1.avif" index={5} />
          <Tile file="New Campaign_2.jpg 1.avif" index={6} />
        </div>
      </div>
    </section>
  );
}
