import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "@fontsource-variable/tasa-orbiter";
import "./globals.css";
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
        <main className="flex-1">{children}</main>
        <PillButtons />
        <footer id="site-footer" className="pb-10">
          <ClientCarousel />
        </footer>
      </body>
    </html>
  );
}
