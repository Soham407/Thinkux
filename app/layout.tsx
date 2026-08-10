import type { Metadata } from "next";
import Image from "next/image";
import { Instrument_Sans } from "next/font/google";
import "@fontsource-variable/tasa-orbiter";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";
import { GlobalHeader } from "@/components/GlobalHeader";
import { ClientCarousel } from "@/components/ClientCarousel";
import { PillButtons } from "@/components/PillButtons";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Business Consultancy Agency in Pune | Think UX",
  description:
    "Best Business Consultancy Agency in Pune, providing Business Strategy, Branding, UI/UX Design, Product Design, Website Design, UX Research & Digital Consulting.",
  openGraph: {
    title: "Best Business Consultancy Agency in Pune | Think UX",
    description:
      "Best Business Consultancy Agency in Pune, providing Business Strategy, Branding, UI/UX Design, Product Design, Website Design, UX Research & Digital Consulting.",
    images: [{ url: "/og-image.png", width: 108, height: 120 }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Best Business Consultancy Agency in Pune | Think UX",
    description: "Best Business Consultancy Agency in Pune, providing Business Strategy, Branding, UI/UX Design, Product Design, Website Design, UX Research & Digital Consulting.",
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.thinkux.co/#organization",
  name: "Think UX",
  alternateName: "Think Ux",
  url: "https://www.thinkux.co/",
  logo: { "@type": "ImageObject", url: "https://www.thinkux.co/logo.png" },
  image: "https://www.thinkux.co/logo.png",
  description:
    "Think UX is a Brand & Business Consulting and Digital Marketing Agency in Pune offering SEO, Google Ads, Meta Ads, Branding, Website Development, Graphic Design, Photography, Videography and Business Growth Solutions.",
  email: "info@thinkux.co",
  telephone: "+91-2067812057",
  foundingLocation: { "@type": "Place", name: "Pune, Maharashtra, India" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.instagram.com/think__ux/",
    "https://www.facebook.com/thinkux1/",
    "https://www.linkedin.com/company/think-ux-brand-business-consultancy/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} h-full`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-white text-[color:var(--foreground)]"
        suppressHydrationWarning
      >
        <MotionProvider>
          <GlobalHeader />
          <main className="flex-1">{children}</main>
          <PillButtons />
          <footer id="site-footer" className="pb-10">
            <ClientCarousel />
            <div className="mx-auto max-w-7xl px-6 md:px-10 pt-16 grid gap-10 md:grid-cols-[auto_minmax(0,1.2fr)_auto_auto_auto] md:gap-12 font-body text-[15px] leading-7 text-[#2d2e83]">
              <Image src="/logo.png" alt="Think UX" width={108} height={120} className="h-auto w-[110px] self-start" />
              <div>
                <p className="font-medium whitespace-nowrap">FIND US Here :</p>
                <p className="font-semibold max-w-[22rem]">
                  202, Suvidha Hariprasad, Opp. Jog High School, Mayur Colony, Kothrud, Pune - 411038, Maharashtra, INDIA.
                </p>
              </div>
              <div>
                <p className="font-medium whitespace-nowrap">TELL US What You{"\u2019"}re Building.</p>
                <p className="font-semibold flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.25 1z"/></svg>
                  <a href="tel:+912067812057" className="hover:underline">+912067812057</a>
                </p>
              </div>
              <div>
                <p className="font-medium whitespace-nowrap">Your INBOX. Our INSPIRATION.</p>
                <p className="font-semibold flex items-center gap-1.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7L22 6"/></svg>
                  <a href="mailto:info@thinkux.co" className="hover:underline">info@thinkux.co</a>
                </p>
              </div>
              <div>
                <p className="font-medium whitespace-nowrap">Be a Part of OUR STORY</p>
                <div className="mt-2 flex items-center gap-3">
                  <a href="https://www.instagram.com/think__ux?igsh=MTQ4eHFta2NkdTIyeA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-70 transition">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeLinecap="round"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/think-ux-brand-business-consultancy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-70 transition">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="5"/><path fill="#fff" d="M7 9.5h2.4V18H7zM8.2 5.8a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8zM11 9.5h2.3v1.2h.03c.32-.6 1.1-1.24 2.27-1.24 2.43 0 2.88 1.5 2.88 3.5V18h-2.4v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.23V18H11z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </MotionProvider>
      </body>
    </html>
  );
}
