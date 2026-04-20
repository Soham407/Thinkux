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
  "Group 472612.jpg": "/endo",
  "image 61.jpg": "/marigold",
};

export function ClientCarousel() {
  const loop = [...LOGOS, ...LOGOS];
  return (
    <div className="relative w-full overflow-hidden marquee-mask px-6">
      <ul className="flex items-center gap-4 w-max marquee-track">
        {loop.map((file, i) => {
          const href = LINKS[file];
          const inner = (
            <Image
              src={assetPath("carousel", file)}
              alt=""
              width={180}
              height={180}
              className="h-full w-full object-cover"
            />
          );
          return (
            <li
              key={`${file}-${i}`}
              className="shrink-0 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white marquee-item"
            >
              {href ? (
                <Link href={href} className="block h-full w-full">
                  {inner}
                </Link>
              ) : (
                inner
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
