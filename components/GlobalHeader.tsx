"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThinkUxLogo } from "./ThinkUxLogo";

export function GlobalHeader() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";

  return (
    <header className={`mx-auto max-w-[1200px] w-full px-6 md:px-10 pt-10 flex flex-col md:flex-row md:items-center gap-6 ${isAboutPage ? 'justify-end' : 'justify-between'}`}>
      {!isAboutPage && <ThinkUxLogo />}
      <nav className="flex flex-wrap items-center gap-4 md:gap-8 font-body text-sm font-medium">
        <Link href="/about" className="text-[color:var(--foreground)]/70 hover:text-[color:var(--brand-blue)] transition-colors">About Us</Link>
        <Link href="/services" className="text-[color:var(--foreground)]/70 hover:text-[color:var(--brand-blue)] transition-colors">Services</Link>
        <Link href="/strategic-consulting" className="text-[color:var(--foreground)]/70 hover:text-[color:var(--brand-blue)] transition-colors">Strategic Consulting</Link>
      </nav>
    </header>
  );
}
