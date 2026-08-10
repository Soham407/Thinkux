"use client";

import Image from "next/image";
import { m as motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";

const FOLDER = "Cheesiano Pizza";

// Alt text + title for each image, keyed by filename.
// Add/edit entries here if you add more images later.
const IMAGE_META: Record<string, { alt: string; title: string }> = {
  "Son & daughter Post 2.avif": {
    alt: "Cheesiano Pizza son and daughter social media creative by THINK UX, a digital marketing agency in Pune",
    title: "Cheesiano Pizza Son and Daughter Social Media Post",
  },
  "Junior Pizza Maker certificate 1 2.avif": {
    alt: "Cheesiano Pizza junior pizza maker certificate design by THINK UX, a creative agency in Pune",
    title: "Cheesiano Pizza Junior Pizza Maker Certificate",
  },
  "Saturday Post 2.avif": {
    alt: "Cheesiano Pizza Saturday promotional social media post by THINK UX, a social media agency in Pune",
    title: "Cheesiano Pizza Saturday Promotional Post",
  },
  "Mumbai Post 2.avif": {
    alt: "Cheesiano Pizza Mumbai themed social media creative by THINK UX, a marketing agency in Pune",
    title: "Cheesiano Pizza Mumbai Social Media Post",
  },
  "Group 472567.avif": {
    alt: "Cheesiano Pizza branding and promotional creative by THINK UX, a branding agency in Pune",
    title: "Cheesiano Pizza Brand Promotion",
  },
  "Independence Day Post 2.avif": {
    alt: "Cheesiano Pizza Independence Day promotional design by THINK UX, a creative marketing agency in Pune",
    title: "Cheesiano Pizza Independence Day Post",
  },
  "Pro Kabaddi 2.avif": {
    alt: "Cheesiano Pizza Pro Kabaddi promotional social media creative by THINK UX, a digital marketing agency in Pune",
    title: "Cheesiano Pizza Pro Kabaddi Creative",
  },
  "Pizza Maker Competition Post option 2.avif": {
    alt: "Cheesiano Pizza maker competition promotional creative by THINK UX, a social media marketing agency in Pune",
    title: "Cheesiano Pizza Maker Competition Post",
  },
  "Frindship day post 2.avif": {
    alt: "Cheesiano Pizza Friendship Day promotional social media design by THINK UX, a creative agency in Pune",
    title: "Cheesiano Pizza Friendship Day Post",
  },
  "Frame.avif": {
    alt: "Cheesiano Pizza social media branding and creative design by THINK UX, a social media agency in Pune",
    title: "Cheesiano Pizza Social Media Branding",
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
  const alt = meta?.alt ?? "Cheesiano Pizza project image by THINK UX";
  const title = meta?.title ?? "Cheesiano Pizza";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: priority ? 0 : (index % 4) * 0.04, ease: "easeOut" }}
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

export default function CheesianoCaseStudy() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name="Cheesiano Pizza" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-start">
        <Tile file="Son & daughter Post 2.avif" index={0} priority />
        <Tile file="Junior Pizza Maker certificate 1 2.avif" index={1} priority />
        <Tile file="Saturday Post 2.avif" index={2} priority />

        <Tile file="Mumbai Post 2.avif" index={3} priority />
        <Tile file="Group 472567.avif" index={4} />
        <Tile file="Independence Day Post 2.avif" index={5} />

        <Tile file="Pro Kabaddi 2.avif" index={6} />
        <Tile file="Pizza Maker Competition Post option 2.avif" index={7} />
        <Tile file="Frindship day post 2.avif" index={8} />

        <Tile file="Frame.avif" index={9} spanFull />
      </div>
    </section>
  );
}
