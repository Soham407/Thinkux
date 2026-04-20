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
  title: "Think UX — Case Studies",
  description: "Think UX brand case studies",
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
