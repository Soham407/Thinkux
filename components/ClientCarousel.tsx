import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

const LOGOS = [
  { file: "Group 472602.avif", label: "Adhik Group", href: "/adhik-group" },
  { file: "Group 472603.avif", label: "Alfa Laval", href: "/alfa-laval" },
  { file: "Group 472604.avif", label: "Seasons Mall", href: "/seasons" },
  { file: "Group 472605.avif", label: "Cheesiano Pizza", href: "/cheesiano" },
  { file: "Group 472606.avif", label: "Ruby Hall Clinic", href: "/ruby-hall" },
  { file: "Group 472607.avif", label: "TCG", href: "/tcg" },
  { file: "Group 472608.avif", label: "Hansgrohe", href: "/hansgrohe" },
  { file: "Group 472609.avif", label: "KEUCO", href: "/keuco" },
  { file: "Group 472610.avif", label: "Handmade Masale", href: "/handmade-masale" },
  { file: "Group 472611.avif", label: "Kalika Steel", href: "/kalika-steel" },
  { file: "Group 472612.avif", label: "Endo Lighting", href: "/endo" },
  { file: "Group 472613.avif", label: "Asian Paints", href: "/asian-paints" },
  { file: "Group 472615.avif", label: "Ganesh Bhel", href: "/ganesh-bhel" },
  { file: "Group 472616.avif", label: "Jalan’s", href: "/jalans" },
  { file: "Group 472617.avif", label: "Garware", href: "/garware" },
  { file: "Group 472618.avif", label: "Real Estate", href: "/real-estate" },
  { file: "Mask group.avif", label: "Marigold", href: "/marigold" },
] as const;

export function ClientCarousel() {
  const loop = [...LOGOS, ...LOGOS];
  return (
    <div className="relative w-full overflow-x-hidden overflow-y-visible marquee-mask px-6 py-3 -my-3">
      <ul className="flex items-center gap-4 w-max marquee-track">
        {loop.map(({ file, label, href }, i) => {
          return (
            <li
              key={`${file}-${i}`}
              className="shrink-0 marquee-item"
            >
              <Link
                href={href}
                prefetch={false}
                aria-label={label}
                className="group relative z-0 flex h-full w-full items-center justify-center hover:z-10"
              >
                <Image
                  src={assetPath("carousel", file)}
                  alt={label}
                  width={180}
                  height={180}
                  className="h-[calc(100%-8px)] w-[calc(100%-8px)] rounded-[5rem] border-2 border-gray-300 object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                  unoptimized={true}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
