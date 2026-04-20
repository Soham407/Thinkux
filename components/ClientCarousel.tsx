import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

const LOGOS = [
  "Group 472602.jpg",
  "Group 472604.jpg",
  "Group 472605.jpg",
  "Group 472606.jpg",
  "Group 472607.jpg",
  "Group 472608.jpg",
  "Group 472609.jpg",
  "Group 472610.jpg",
  "Group 472611.jpg",
  "Group 472612.jpg",
  "Group 472613.jpg",
  "Group 472615.jpg",
  "Group 472616.jpg",
  "Group 472617.jpg",
  "Group 472618.jpg",
  "image 61.jpg",
  "Mask group.jpg",
];

const LINKS: Record<string, string> = {
  "Group 472608.jpg": "/hansgrohe",
  "Group 472610.jpg": "/handmade-masale",
  "Group 472611.jpg": "/kalika-steel",
  "Group 472609.jpg": "/keuco",
  "Group 472612.jpg": "/endo",
  "image 61.jpg": "/marigold",
};

export function ClientCarousel() {
  const loop = [...LOGOS, ...LOGOS];
  return (
    <div className="relative w-full overflow-x-hidden overflow-y-visible marquee-mask px-6 py-3 -my-3">
      <ul className="flex items-center gap-4 w-max marquee-track">
        {loop.map((file, i) => {
          const href = LINKS[file];
          const inner = (
            <Image
              src={assetPath("carousel", file)}
              alt=""
              width={180}
              height={180}
              className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
            />
          );
          return (
            <li
              key={`${file}-${i}`}
              className="shrink-0 rounded-2xl bg-white marquee-item"
            >
              {href ? (
                <Link href={href} className="group relative z-0 block h-full w-full hover:z-10">
                  {inner}
                </Link>
              ) : (
                <div className="group relative z-0 h-full w-full hover:z-10">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
