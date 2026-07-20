import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Brand Positioning",
    subtitle: "Where you stand in the market",
    desc: "We define a clear, distinctive position for your brand in the competitive landscape \u2014 one that resonates with your target audience and is defensible long-term.",
    bullets: [
      "Differentiation mapping",
      "Value proposition clarity",
      "Competitive white space analysis"
    ]
  },
  {
    title: "Market Research",
    subtitle: "Data-led audience understanding",
    desc: "Deep qualitative and quantitative research to understand your market, consumer behavior, emerging trends, and unmet needs before strategy is built.",
    bullets: [
      "Consumer perception studies",
      "Category dynamics analysis",
      "Trend & opportunity mapping"
    ]
  },
  {
    title: "Brand Identity Development",
    subtitle: "Voice, look, and feel",
    desc: "Creating or refining the visual and verbal identity system that communicates your brand\u2019s essence consistently across every touchpoint.",
    bullets: [
      "Visual identity design",
      "Brand voice & tone guidelines",
      "Identity system documentation"
    ]
  },
  {
    title: "Strategic Planning",
    subtitle: "Roadmap to brand growth",
    desc: "Translating insights and brand vision into a clear, actionable strategic plan with defined goals, timelines, and ownership.",
    bullets: [
      "Growth strategy frameworks",
      "Channel & activation planning",
      "KPI definition & measurement"
    ]
  },
  {
    title: "Brand Roadmap Development",
    subtitle: "Where the brand goes next",
    desc: "Building a phased roadmap that charts the evolution of your brand over 12\u201336 months, aligned to business milestones and market conditions.",
    bullets: [
      "Phase-gated brand milestones",
      "Investment prioritization",
      "Change management guidance"
    ]
  },
  {
    title: "Brand Strategy Consulting",
    subtitle: "End-to-end advisory",
    desc: "Ongoing strategic consulting that integrates all pillars above \u2014 from diagnosis through execution \u2014 ensuring your brand decisions are always aligned to business outcomes.",
    bullets: [
      "Ongoing brand health reviews",
      "C-suite brand advisory",
      "Cross-functional alignment sessions"
    ]
  }
];

export default function StrategicConsultingPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-10 pb-24 overflow-hidden min-h-screen">
      <div className="mb-16">
        <Link href="/">
          <Image src="/icons/think-ux-logo.svg" alt="Think UX" width={100} height={100} className="w-24 h-auto" />
        </Link>
      </div>

      <header className="mb-16 max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-[color:var(--foreground)] mb-4">
          Brand Strategy Consulting
        </h1>
        <p className="font-body text-sm md:text-base text-[color:var(--foreground)]/60 font-light">
          Eight strategic pillars that form the foundation of every brand we build.
        </p>
      </header>

      {/* Mobile Layout */}
      <div className="block md:hidden space-y-12 mt-12">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="relative pl-6 border-l-[3px] border-[#2E3192]">
            <h2 className="font-display text-2xl font-medium text-[#F6891F] mb-1">
              {pillar.title}
            </h2>
            <div className="text-[#939191] text-sm mb-4">
              {pillar.subtitle}
            </div>
            <p className="font-body text-[color:var(--foreground)]/90 text-sm leading-relaxed mb-4">
              {pillar.desc}
            </p>
            <ul className="space-y-1">
              {pillar.bullets.map((bullet, i) => (
                <li key={i} className="text-sm text-[color:var(--foreground)]/80 flex items-start gap-2">
                  <span className="font-bold text-[10px] mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative w-full aspect-[1421/1917] mt-16 mb-32">
        <Image 
          src="/icons/brand-strategy-consulting-map.svg" 
          alt="Brand Strategy Consulting Map"
          fill
          className="object-contain"
        />
        
        {pillars.map((pillar, idx) => {
          const isLeft = idx % 2 === 0;
          // Exact Y-percentages of the circles in the SVG: 90/1917, 448/1917, 806/1917, 1164/1917, 1521/1917, 1879/1917
          const topPercents = [4.69, 23.37, 42.04, 60.72, 79.34, 98.01];
          
          return (
            <div 
              key={idx} 
              className="absolute w-[36%] max-w-[400px]" 
              style={{ 
                top: `${topPercents[idx]}%`, 
                transform: idx === 0 ? 'translateY(-28%)' : idx === 1 ? 'translateY(-55%)' : 'translateY(-45%)',
                left: isLeft ? '12%' : '54%',
              }}
            >
              <h2 className="font-display text-2xl lg:text-[28px] font-medium text-[#F6891F] mb-1">
                {pillar.title}
              </h2>
              <div className="text-[#939191] text-xs lg:text-[13px] mb-4">
                {pillar.subtitle}
              </div>
              <p className="font-body text-[color:var(--foreground)] text-sm lg:text-[15px] leading-relaxed mb-5">
                {pillar.desc}
              </p>
              <ul className="space-y-1.5">
                {pillar.bullets.map((bullet, i) => (
                  <li key={i} className="text-[13px] lg:text-[14px] text-[color:var(--foreground)] flex items-start gap-2">
                    <span className="font-bold text-[10px] mt-1.5">•</span> 
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
