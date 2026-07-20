import Image from "next/image";
import Link from "next/link";
import { ServicesCarousel } from "@/components/ServicesCarousel";

const services = [
  {
    title: "Brand Strategy",
    icon: "/icons/brand-strategy-icon.svg",
    desc: "We diagnose where your brand stands today and build a clear, actionable plan to take it where it needs to go — commercially and creatively.",
    items: [
      "Brand Overview",
      "Industry and Category Research",
      "Understanding Business Model",
      "Brand Challenges, Market Gap and Opportunities",
      "Brand Growth Plan and Business Blue Print",
      "Go-to-market Strategy and Road Map",
      "Brand CXX"
    ]
  },
  {
    title: "Brand Communication",
    icon: "/icons/brand-communication-icon.svg",
    desc: "We get your brand in front of the right people, in the right places, with the right message across every media channel.",
    items: [
      "Print Ads",
      "Out-of-Home Ads",
      "Radio Ads",
      "TVC and Corporate Films",
      "PR / ORM",
      "Social Media Marketing",
      "Performance Marketing",
      "Photography and Videography",
      "Packaging Design"
    ]
  },
  {
    title: "Brand Experience",
    icon: "/icons/brand-experience-icon.svg",
    desc: "We design the physical and spatial world of your brand — every environment, touchpoint, and live moment your audience walks into.",
    items: [
      "Brand Identity Design",
      "Outlet & Environment Design",
      "On-site Branding",
      "Brand Experience Outlets",
      "Events & Exhibitions",
      "Packaging Design"
    ]
  },
  {
    title: "Brand & Business Consultancy",
    icon: "/icons/brand-and-business-consultancy.svg",
    desc: "We help brand owners think beyond today — building scalable, sustainable business models with the frameworks to grow without losing brand integrity.",
    items: [
      "Brand Protection — IPR",
      "Scalability and Sustainability Model",
      "Franchise Program with ROI and ROR",
      "Organisation Restructuring",
      "KRI and KPI Targets",
      "Valuation to IPO",
      "Brand Equity Monetisation"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-10 pb-24 overflow-hidden min-h-screen">
      <div className="mb-16">
        <Link href="/">
          <Image src="/icons/think-ux-logo.svg" alt="Think UX" width={100} height={100} className="w-24 h-auto hover:opacity-90 transition-opacity" />
        </Link>
      </div>

      <header className="mb-16 max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-[color:var(--foreground)] mb-4">
          Our Services
        </h1>
        <p className="font-body text-sm md:text-base text-[color:var(--foreground)]/60 font-light">
          We build strategic communication ideas designed to thrive in the real world, Transforming the full brand experience.
        </p>
      </header>

      <div className="flex-1 flex flex-col justify-center w-full">
        <ServicesCarousel services={services} />
      </div>
    </div>
  );
}
