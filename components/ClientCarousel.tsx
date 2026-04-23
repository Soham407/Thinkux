import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

const LOGOS = [
  "Group 472602.avif",
  "Group 472604.avif",
  "Group 472605.avif",
  "Group 472606.avif",
  "Group 472607.avif",
  "Group 472608.avif",
  "Group 472609.avif",
  "Group 472610.avif",
  "Group 472611.avif",
  "Group 472612.avif",
  "Group 472613.avif",
  "Group 472615.avif",
  "Group 472616.avif",
  "Group 472617.avif",
  "Group 472618.avif",
  "image 61.avif",
  "Mask group.avif",
];

const LINKS: Record<string, string> = {
  "Group 472608.avif": "/hansgrohe",
  "Group 472610.avif": "/handmade-masale",
  "Group 472613.avif": "/kalika-steel",
  "Group 472611.avif": "/seasons",
  "Group 472612.avif": "/endo",
  "image 61.avif": "/marigold",
  "Group 472607.avif": "/ruby-hall",
  "Group 472615.avif": "/cheesiano",
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
