import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "@fontsource-variable/tasa-orbiter";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";
import { ClientCarousel } from "@/components/ClientCarousel";
import { PillButtons } from "@/components/PillButtons";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Think UX",
  description:
    "Think UX is a design and branding agency crafting visual identities, campaigns, and digital experiences for brands across India.",
  openGraph: {
    title: "Think UX",
    description:
      "Design and branding agency crafting visual identities, campaigns, and digital experiences.",
    images: [{ url: "/og-image.png", width: 108, height: 120 }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Think UX",
    description: "Design and branding agency — visual identities, campaigns, digital experiences.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} h-full`} suppressHydrationWarning>
      <body
        className="min-h-full flex flex-col bg-white text-[color:var(--foreground)]"
        suppressHydrationWarning
      >
        <MotionProvider>
          <main className="flex-1">{children}</main>
          <PillButtons />
          <footer id="site-footer" className="pb-10">
            <ClientCarousel />
            <div className="mx-auto max-w-7xl px-6 md:px-10 pt-16 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 font-body">
              <div className="text-[color:var(--foreground)]/60 text-[15px] leading-relaxed">
                You{"\u2019"}ve reached the end.<br />
                Now let{"\u2019"}s build what{"\u2019"}s NEXT.
              </div>
              <div className="flex flex-wrap items-center gap-6 md:gap-10 text-[15px] text-[color:var(--foreground)]">
                <a href="/brand" className="hover:text-[color:var(--brand-blue)] transition">Brand</a>
                <a href="/business" className="hover:text-[color:var(--brand-blue)] transition">Business</a>
                <a href="/about" className="hover:text-[color:var(--brand-blue)] transition">About Us</a>
                <a href="/contact" className="hover:text-[color:var(--brand-blue)] transition">Contact</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--brand-blue)] transition">LinkedIn</a>
              </div>
            </div>
          </footer>
        </MotionProvider>
      </body>
    </html>
  );
}
