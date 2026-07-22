import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 md:px-10 min-h-[60vh] flex flex-col justify-center py-20 mt-4 md:mt-10">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16 lg:gap-24">
        
        {/* Left Column: Logo & Tagline */}
        <div className="flex flex-col items-start shrink-0 w-full md:w-[260px]">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="Think UX" 
              width={200} 
              height={200} 
              className="w-[220px] md:w-[260px] h-auto mb-6 hover:opacity-90 transition-opacity"
              priority
            />
          </Link>
          <p className="font-body text-[color:var(--foreground)]/60 text-[15px] leading-relaxed text-left">
            Transforming Brand Experience.<br />
            Accelerating Business Growth.
          </p>
        </div>

        {/* Separator Line */}
        <div className="hidden md:block w-[1px] bg-gray-300 self-stretch shrink-0"></div>

        {/* Right Column: Heading & Text Grid */}
        <div className="flex-1 flex flex-col justify-start max-w-[760px]">
          <h1 className="font-display text-4xl md:text-[52px] md:leading-[1.1] font-normal tracking-tight text-[color:var(--foreground)] mb-10 md:mb-12">
            About THINK UX
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 font-body text-[color:var(--foreground)]/60 text-[15px] leading-[1.7]">
            <div className="space-y-6">
              <p>
                THINK UX is a Senior-led Brand Strategy, User Experience, and Business Consultancy that helps organizations build stronger brands, create meaningful user experiences, and achieve sustainable business growth.
              </p>
              <p>
                We believe brands are not defined by what they communicate{"\u2014"}they are defined by what users experience. Every interaction, every touchpoint, and every decision shapes perception, influences trust, and drives business performance.
              </p>
              <p>
                Our approach integrates brand strategy, user experience, business consulting, customer journey design, and go-to-market strategy into one cohesive growth system. Rather than treating these disciplines independently, we align them to create measurable business outcomes.
              </p>
            </div>
            
            <div className="space-y-6">
              <p>
                Whether launching a new venture, repositioning an existing brand, or scaling an established business, we work alongside founders and leadership teams to solve complex business challenges with strategic clarity and experience-led thinking.
              </p>
              <p>
                Guided by our THINK Framework{"\u2014"}Transformative Thinking, Human-Centered Approach, Innovation, Narrative Building, and Knowledge-Driven Strategy{"\u2014"}we challenge assumptions, simplify complexity, and design experiences that create competitive advantage.
              </p>
              <p className="text-[17px] text-[color:var(--foreground)] font-medium leading-[1.5] pt-1">
                At THINK UX, we don{"\u2019"}t simply build brands.<br/>
                We build businesses that users trust, choose, and remember.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
