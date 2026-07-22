"use client";

import React, { useState } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";

type Service = {
  title: string;
  icon: string;
  desc: string;
  items: string[];
};

export function ServicesCarousel({ services }: { services: Service[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    if (activeIndex < services.length - 1) setActiveIndex(activeIndex + 1);
  };

  const prev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  return (
    <div className="relative w-full h-[750px] max-w-6xl mx-auto flex items-center justify-center perspective-[1000px] mt-10">
      
      {/* Cards */}
      <div 
        className="relative w-full h-full flex items-center justify-center"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      >
        <AnimatePresence initial={false}>
          {services.map((service, idx) => {
            const offset = idx - activeIndex;
            const isActive = offset === 0;
            
            // Render only the active card and its immediate neighbors to match the design
            if (Math.abs(offset) > 1) return null;

            return (
              <m.div
                key={idx}
                initial={{ 
                  x: offset * 460, 
                  scale: 0.8,
                  opacity: 0
                }}
                animate={{
                  x: offset * (typeof window !== 'undefined' && window.innerWidth < 768 ? 250 : 460),
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : 0.4,
                  zIndex: isActive ? 10 : 0,
                }}
                exit={{ 
                  x: offset * 460, 
                  scale: 0.8,
                  opacity: 0
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                onClick={() => !isActive && setActiveIndex(idx)}
                className={`absolute w-[95vw] max-w-[560px] h-[580px] rounded-[100px] md:rounded-[120px] border-[2px] flex flex-col items-center px-8 md:px-12 pt-20 pb-10 text-center ${!isActive && 'cursor-pointer'} ${
                  isActive 
                    ? "border-[#F6891F] bg-[#FFF4EC] text-[#F6891F] shadow-2xl" 
                    : "border-[#939191] bg-white text-[#939191] hover:opacity-80"
                }`}
              >
                {/* Icon Cutout */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-[6px]">
                  <div className={`w-[110px] h-[110px] relative ${!isActive && "grayscale opacity-80"}`}>
                    <Image 
                      src={service.icon} 
                      alt={service.title} 
                      fill 
                      className="object-contain"
                    />
                  </div>
                </div>

                <h2 className={`font-display text-2xl font-semibold mb-3 ${isActive ? "text-[#F6891F]" : "text-[#939191]"}`}>
                  {service.title}
                </h2>
                
                <p className={`font-body text-[13px] md:text-[14px] leading-relaxed mb-6 font-medium ${isActive ? "text-[#F6891F]" : "text-[#939191]"}`}>
                  {service.desc}
                </p>

                <ul className="text-left space-y-[6px] inline-block mx-auto mt-2 mb-4">
                  {service.items.map((item, i) => (
                    <li key={i} className={`flex items-start gap-2 font-body text-[12px] md:text-[13px] font-medium ${isActive ? "text-[#F6891F]" : "text-[#939191]"}`}>
                      <span className="mt-[2px] text-[10px]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </m.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-[40%] w-full max-w-[1050px] flex justify-between items-center px-4 md:px-10 pointer-events-none z-30">
        <button 
          onClick={prev} 
          disabled={activeIndex === 0}
          className={`pointer-events-auto transition-all duration-300 ${activeIndex === 0 ? "opacity-0 translate-x-4 pointer-events-none" : "opacity-100 hover:scale-110"}`}
        >
          <Image src="/icons/back-arrow.svg" alt="Previous" width={52} height={52} />
        </button>
        <button 
          onClick={next}
          disabled={activeIndex === services.length - 1}
          className={`pointer-events-auto transition-all duration-300 ${activeIndex === services.length - 1 ? "opacity-0 -translate-x-4 pointer-events-none" : "opacity-100 hover:scale-110"}`}
        >
          <Image src="/icons/next-arrow.svg" alt="Next" width={52} height={52} />
        </button>
      </div>
    </div>
  );
}
