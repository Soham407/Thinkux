import Link from "next/link";
import { ThinkUxLogo } from "@/components/ThinkUxLogo";

const cases = [
  { href: "/marigold", label: "Marigold", sub: "Banquets 'N' Conventions" },
  { href: "/marigold/case-study", label: "Marigold — Case Study", sub: "" },
  { href: "/endo", label: "Endo Lighting", sub: "Lighting systems" },
  { href: "/endo/case-study", label: "Endo — Case Study", sub: "" },
  { href: "/kalika-steel", label: "Kalika Steel", sub: "TMT bars and infrastructure" },
  { href: "/kalika-steel/case-study", label: "Kalika Steel — Case Study", sub: "" },
  { href: "/handmade-masale", label: "Handmade Masale", sub: "Homemade spice blends" },
  { href: "/handmade-masale/case-study", label: "Handmade Masale — Case Study", sub: "" },
  { href: "/hansgrohe", label: "Hansgrohe", sub: "Bathroom and shower solutions" },
  { href: "/hansgrohe/case-study", label: "Hansgrohe — Case Study", sub: "" },
  { href: "/keuco", label: "KEUCO", sub: "Bathroom fittings and accessories" },
  { href: "/keuco/case-study", label: "KEUCO — Case Study", sub: "" },
];

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16">
      <div className="mb-16 md:mb-24">
        <ThinkUxLogo />
      </div>
      <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
        Case Studies
      </h1>
      <p className="font-body mt-3 text-[color:var(--foreground)]/60 max-w-xl">
        A small selection of brands we have built, reshaped, and launched.
      </p>
      <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {cases.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className="block rounded-2xl border border-[color:var(--border)] p-6 hover:bg-black/[0.02] transition"
            >
              <div className="font-display text-xl font-semibold">{c.label}</div>
              {c.sub ? (
                <div className="font-body text-sm text-[color:var(--foreground)]/60 mt-1">
                  {c.sub}
                </div>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
