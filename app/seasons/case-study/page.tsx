"use client";

import Image from "next/image";
import { m as motion } from "framer-motion";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { assetPath } from "@/lib/assetPath";

const FOLDER = "Seasons Mall";

// Alt text + title for each image, keyed by filename.
// Add/edit entries here if you add more images later.
const IMAGE_META: Record<string, { alt: string; title: string }> = {
  "1 may  maharashtra din 1 1.avif": {
    alt: "Seasons Mall Maharashtra Day creative by THINK UX, Best Business consultancy agency in Pune",
    title: "Seasons Mall Maharashtra Day Creative",
  },
  "1 ST AANIVARSARY 03 1.avif": {
    alt: "Seasons Mall first anniversary campaign by THINK UX, Best Business consultancy service in Pune",
    title: "Seasons Mall First Anniversary Campaign",
  },
  "fathers day Mailer_01 1.avif": {
    alt: "Seasons Mall Father's Day promotional mailer by THINK UX, Best Business consultancy agency in Pune",
    title: "Seasons Mall Father's Day Mailer",
  },
  "E greetings diwali 2.avif": {
    alt: "Seasons Mall Diwali e-greeting creative by THINK UX, business consultancy in Pune",
    title: "Seasons Mall Diwali E-Greeting",
  },
  "kitty party 2 2.avif": {
    alt: "Seasons Mall Kitty Party promotional creative by THINK UX, Business consultant in Pune",
    title: "Seasons Mall Kitty Party Promotion",
  },
  "Launch Mailers2 1.avif": {
    alt: "Seasons Mall launch mailer design by THINK UX, Best Business consultancy agency in Pune",
    title: "Seasons Mall Launch Mailer",
  },
  "Launch Mailers4 1.avif": {
    alt: "Seasons Mall launch campaign by THINK UX, business consultation pune",
    title: "Seasons Mall Launch Campaign",
  },
  "Launch Mailers 5.avif": {
    alt: "Seasons Mall promotional launch design by THINK UX, Best Business consultancy service in Pune",
    title: "Seasons Mall Promotional Launch Design",
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
  const alt = meta?.alt ?? "Seasons Mall project image by THINK UX";
  const title = meta?.title ?? "Seasons Mall";

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

export default function SeasonsCaseStudy() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <CaseStudyHeader name="Seasons Mall" />
      <div className="flex flex-col gap-4 md:gap-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <Tile file="1 may  maharashtra din 1 1.avif" index={0} priority />
          <Tile file="1 ST AANIVARSARY 03 1.avif" index={1} priority />
          <Tile file="fathers day Mailer_01 1.avif" index={2} priority />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <Tile file="E greetings diwali 2.avif" index={3} />
          <Tile file="kitty party 2 2.avif" index={4} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <Tile file="Launch Mailers2 1.avif" index={5} />
          <Tile file="Launch Mailers4 1.avif" index={6} />
          <Tile file="Launch Mailers 5.avif" index={7} />
        </div>
      </div>
    </section>
  );
}
