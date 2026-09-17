"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCasesData } from '@/content/useCases';

gsap.registerPlugin(ScrollTrigger);

// Custom Reactive Icons
const IconCoordination = () => (
  <svg className="w-12 h-12 text-ax-black group-hover:text-ax-orange transition-colors duration-500" viewBox="0 0 48 48" fill="none">
    <path d="M12 24H36M12 24L20 16M12 24L20 32M36 24L28 16M36 24L28 32" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="transition-transform duration-500 origin-center group-hover:scale-110" />
  </svg>
);
const IconInventory = () => (
  <svg className="w-12 h-12 text-ax-black group-hover:text-ax-orange transition-colors duration-500" viewBox="0 0 48 48" fill="none">
    <rect x="12" y="24" width="8" height="12" stroke="currentColor" strokeWidth="2" />
    <rect x="24" y="16" width="8" height="20" stroke="currentColor" strokeWidth="2" />
    <rect x="36" y="8" width="8" height="28" stroke="currentColor" strokeWidth="2" className="transition-transform duration-500 group-hover:-translate-y-2" />
  </svg>
);
const IconResearch = () => (
  <svg className="w-12 h-12 text-ax-black group-hover:text-ax-orange transition-colors duration-500" viewBox="0 0 48 48" fill="none">
    <path d="M16 12H32M16 20H32M16 28H24" stroke="currentColor" strokeWidth="2" />
    <rect x="8" y="4" width="32" height="40" stroke="currentColor" strokeWidth="2" />
    <path d="M28 32L36 40" stroke="currentColor" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <circle cx="28" cy="32" r="4" stroke="currentColor" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </svg>
);
const IconConversations = () => (
  <svg className="w-12 h-12 text-ax-black group-hover:text-ax-orange transition-colors duration-500" viewBox="0 0 48 48" fill="none">
    <path d="M8 24H16L20 12L28 36L32 24H40" stroke="currentColor" strokeWidth="2" strokeLinejoin="miter" />
    <circle cx="40" cy="24" r="4" fill="currentColor" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </svg>
);
const IconCustom = () => (
  <svg className="w-12 h-12 text-ax-black group-hover:text-ax-orange transition-colors duration-500" viewBox="0 0 48 48" fill="none">
    <rect x="10" y="20" width="8" height="8" stroke="currentColor" strokeWidth="2" />
    <rect x="30" y="20" width="8" height="8" stroke="currentColor" strokeWidth="2" />
    <path d="M18 24H30" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="group-hover:stroke-solid transition-all duration-500" />
  </svg>
);

const getIcon = (id: string) => {
  switch(id) {
    case 'coordination': return <IconCoordination />;
    case 'inventory': return <IconInventory />;
    case 'research': return <IconResearch />;
    case 'conversations': return <IconConversations />;
    case 'custom': return <IconCustom />;
    default: return <IconCustom />;
  }
};

export function UseCaseJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const container = containerRef.current;
      const scrollWrapper = scrollWrapperRef.current;
      if (!container || !scrollWrapper) return;

      const rect = container.getBoundingClientRect();
      // Calculate normalized progress
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
      setScrollProgress(progress);
      
      const maxScroll = scrollWrapper.scrollWidth - window.innerWidth;
      const x = -progress * maxScroll;
      
      gsap.set(scrollWrapper, { x });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section ref={containerRef} className="useCaseStory relative w-full bg-ax-warm-white border-t border-[rgba(0,0,0,0.1)] min-h-[300svh]" style={{ isolation: 'isolate', overflow: 'clip' }}>
        
        <div className="useCaseStickyViewport sticky top-[var(--header-height,84px)] h-[calc(100svh-var(--header-height,84px))] flex flex-col justify-center overflow-hidden">
          
          {/* Refinement 09: Soft orange directional wash */}
          <div 
            className="absolute inset-y-0 pointer-events-none z-0"
            style={{ 
              width: '100vw',
              background: 'var(--ax-gradient-edge)', 
              opacity: 0.15,
              transform: `translateX(calc(${scrollProgress * 100}vw - 50vw))` 
            }}
          />

          <div className="px-6 max-w-7xl mx-auto w-full mb-16 relative z-10">
            <h2 className="text-[clamp(34px,4vw,48px)] font-medium leading-[1] text-ax-ink max-w-2xl">
              The same Engine. Different operating contexts.
            </h2>
          </div>

          {/* Horizontal scrolling wrapper */}
          <div ref={scrollWrapperRef} className="useCaseHorizontalTrack flex flex-row items-stretch w-fit px-6 gap-6 lg:gap-12 pl-6 lg:pl-[calc((100vw-1280px)/2+24px)] pr-12 lg:pr-[10vw] will-change-transform relative z-10">
            
            {useCasesData.map((uc, index) => {
              const styleIndex = index % 3;
              let cardTheme = "bg-ax-paper border-[rgba(0,0,0,0.1)] text-ax-ink";
              let titleTheme = "text-ax-ink";
              let textTheme = "text-ax-ink/70";
              let iconTheme = "text-ax-ink";
              
              if (styleIndex === 0) {
                cardTheme = "bg-ax-black border-[rgba(255,255,255,0.1)] text-ax-warm-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)]";
                titleTheme = "text-ax-warm-white";
                textTheme = "text-ax-warm-white/70";
                iconTheme = "text-ax-warm-white";
              } else if (styleIndex === 2) {
                cardTheme = "bg-[rgba(241,90,36,0.06)] border-ax-orange-core/20 text-ax-ink";
                titleTheme = "text-ax-ink";
                textTheme = "text-ax-ink/70";
                iconTheme = "text-ax-orange-core";
              }

              return (
                <div key={uc.id} className={`w-[300px] lg:w-[400px] shrink-0 border rounded-sm p-8 group flex flex-col justify-between transition-colors duration-500 ${cardTheme} hover:border-ax-orange-core`}>
                  <div>
                    <div className={`mb-8 ${iconTheme}`}>
                      {getIcon(uc.id)}
                    </div>
                    <div className={`text-xl font-medium mb-4 ${titleTheme}`}>
                      {uc.context}
                    </div>
                    <p className={`${textTheme}`}>
                      {uc.statement}
                    </p>
                  </div>
                  {/* Semantic line drawn on hover */}
                  <div className="h-px w-0 bg-ax-orange-core mt-12 transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}

          </div>
        </div>
      </section>

      <section className="useCaseConclusion w-full bg-ax-black text-ax-warm-white px-6 py-32 flex justify-center items-center">
        <div className="max-w-3xl text-center">
          <p className="text-[clamp(24px,3vw,32px)] leading-relaxed font-medium">
            The context changes. The underlying responsibility does not: structure the work, keep decisions visible and return a result that can be reviewed.
          </p>
        </div>
      </section>
    </>
  );
}
