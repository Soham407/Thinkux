import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientCarousel } from "@/components/ClientCarousel";
import { PillButtons } from "@/components/PillButtons";

const inter = Inter({
  variable: "--font-inter",
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
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-[color:var(--foreground)]">
        <main className="flex-1">{children}</main>
        <PillButtons />
        <footer id="site-footer" className="pb-10">
          <ClientCarousel />
        </footer>
      </body>
    </html>
  );
}
