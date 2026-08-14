"use client";
 
import Image from "next/image";
import { m as motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { assetPath } from "@/lib/assetPath";
 
const FOLDER = "Kalika Steel";
 
// Alt text + title for each image, keyed by filename.
// Add/edit entries here if you add more images later.
const IMAGE_META: Record<string, { alt: string; title: string }> = {
  "Layer_1.avif": {
    alt: "Kalika Steel brand identity and corporate branding by THINK UX, a branding agency in Pune",
    title: "Kalika Steel Brand Identity",
  },
  "Layer_1-1.avif": {
    alt: "Kalika Steel visual identity and branding solutions by THINK UX, a creative agency in Pune",
    title: "Kalika Steel Visual Identity",
  },
  "Group 472531.avif": {
    alt: "Kalika Steel corporate branding and design by THINK UX, a brand design agency in Pune",
    title: "Kalika Steel Corporate Branding",
  },
  "Group 472560.avif": {
    alt: "Kalika Steel marketing collateral and brand communication by THINK UX, a marketing agency in Pune",
    title: "Kalika Steel Brand Communication",
  },
  "Group-1.avif": {
    alt: "Kalika Steel brand strategy and visual branding by THINK UX, a business consultancy in Pune",
    title: "Kalika Steel Brand Strategy",
  },
  "Group 472530.avif": {
    alt: "Kalika Steel industrial branding and creative design by THINK UX, an industrial branding agency in Pune",
    title: "Kalika Steel Industrial Branding",
  },
  "Group.avif": {
    alt: "Kalika Steel business branding and communication design by THINK UX, a business consultant in Pune",
    title: "Kalika Steel Business Branding",
  },
  "Clip path group 1.avif": {
    alt: "Kalika Steel brand applications and identity design by THINK UX, a branding company in Pune",
    title: "Kalika Steel Brand Applications",
  },
  "Clip path group 2.avif": {
    alt: "Kalika Steel creative branding and visual identity by THINK UX, a creative branding agency in Pune",
    title: "Kalika Steel Creative Branding",
  },
  "Group 472561.avif": {
    alt: "Kalika Steel premium corporate identity design by THINK UX, a corporate branding agency in Pune",
    title: "Kalika Steel Corporate Identity",
  },
  "Layer_1-2.avif": {
    alt: "Kalika Steel brand development and marketing design by THINK UX, a digital marketing agency in Pune",
    title: "Kalika Steel Brand Development",
  },
  "Layer_1-3.avif": {
    alt: "Kalika Steel branding and visual communication by THINK UX, a branding and marketing agency in Pune",
    title: "Kalika Steel Visual Communication",
  },
};
 
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
  const meta = IMAGE_META[file];
  const alt = meta?.alt ?? "Kalika Steel project image by THINK UX";
  const title = meta?.title ?? "Kalika Steel";
 
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
        alt={alt}
        title={title}
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
