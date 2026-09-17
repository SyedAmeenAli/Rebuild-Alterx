"use client";

import React, { useState } from 'react';

const WHY_ITEMS = [
  {
    id: 'outcome',
    title: 'Outcome first',
    desc: 'The work begins with what must be completed.'
  },
  {
    id: 'plan',
    title: 'Plan before action',
    desc: 'The path can be reviewed before anything runs.'
  },
  {
    id: 'authority',
    title: 'People keep authority',
    desc: 'Important decisions remain with the right person.'
  },
  {
    id: 'progress',
    title: 'Progress remains understandable',
    desc: 'Completed, current and waiting work stays clear.'
  },
  {
    id: 'checked',
    title: 'Results are checked',
    desc: 'The final activity is compared with the original objective.'
  },
  {
    id: 'failure',
    title: 'Failure has a path',
    desc: 'A failed step can be retried, revised, escalated or stopped.'
  }
];

export function WhyAlterX() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getIcon = (id: string, isHovered: boolean) => {
    // Semantic SVGs that react to hover
    const strokeClass = `transition-all duration-500 ease-in-out ${isHovered ? 'text-ax-orange' : 'text-ax-black'}`;
    const fillClass = `transition-all duration-500 ease-in-out ${isHovered ? 'fill-ax-orange' : 'fill-ax-black'}`;
    
    switch (id) {
      case 'outcome':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" className={strokeClass} />
            <circle cx="12" cy="12" r="2" className={fillClass} style={{ transform: isHovered ? 'scale(2)' : 'scale(1)', transformOrigin: 'center', transition: 'transform 0.5s' }} />
          </svg>
        );
      case 'plan':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <path d="M4 12H20M12 4L20 12L12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className={strokeClass} style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.5s' }} />
          </svg>
        );
      case 'authority':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="1.5" className={strokeClass} />
            <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" className={strokeClass} style={{ strokeDasharray: 14, strokeDashoffset: isHovered ? 0 : 14, transition: 'stroke-dashoffset 0.5s' }} />
          </svg>
        );
      case 'progress':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <line x1="4" y1="12" x2="8" y2="12" stroke="currentColor" strokeWidth="1.5" className={strokeClass} />
            <line x1="12" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" className={strokeClass} style={{ strokeDasharray: 8, strokeDashoffset: isHovered ? 0 : 8, transition: 'stroke-dashoffset 0.5s' }} />
            <circle cx="10" cy="12" r="2" className={fillClass} />
          </svg>
        );
      case 'checked':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12" stroke="currentColor" strokeWidth="1.5" className={strokeClass} />
            <path d="M4 12C4 16.4183 7.58172 20 12 20" stroke="currentColor" strokeWidth="1.5" className={strokeClass} style={{ strokeDasharray: 26, strokeDashoffset: isHovered ? 0 : 26, transition: 'stroke-dashoffset 0.5s' }} />
            <path d="M12 8L12 16M8 12L16 12" stroke="currentColor" strokeWidth="1.5" className={strokeClass} style={{ transform: isHovered ? 'rotate(45deg)' : 'rotate(0deg)', transformOrigin: 'center', transition: 'transform 0.5s' }} />
          </svg>
        );
      case 'failure':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <path d="M12 4V12L16 16" stroke="currentColor" strokeWidth="1.5" className={strokeClass} />
            <path d="M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className={strokeClass} style={{ strokeDasharray: isHovered ? 'none' : '4 4', transition: 'all 0.5s' }} />
          </svg>
        );
      default: return null;
    }
  };

  return (
    <section className="w-full bg-ax-warm-white py-32 border-t border-[rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20">
          <h2 className="text-xl md:text-2xl font-medium text-ax-ink mb-4">Why AlterX</h2>
          <p className="text-[clamp(34px,4vw,58px)] font-medium leading-[1] text-ax-ink max-w-3xl">
            Important work needs more than a convincing answer.
          </p>
        </div>

        <div className="flex flex-col border-t border-[rgba(0,0,0,0.1)]">
          {WHY_ITEMS.map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <div 
                key={item.id}
                className="group border-b border-[rgba(0,0,0,0.1)] py-8 lg:py-12 flex flex-col md:flex-row items-start md:items-center justify-between outline-none cursor-default"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setHoveredId(item.id)}
                onBlur={() => setHoveredId(null)}
                tabIndex={0}
              >
                <div className="flex items-center gap-8 w-full md:w-1/2 mb-4 md:mb-0">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0">
                    {getIcon(item.id, isHovered)}
                  </div>
                  <h3 className={`text-xl lg:text-3xl font-medium transition-colors duration-300 ${isHovered ? 'text-ax-ink' : 'text-ax-ink/60 group-hover:text-ax-ink'}`}>
                    {item.title}
                  </h3>
                </div>
                <div className="w-full md:w-1/2 md:pl-8 border-l-0 md:border-l border-[rgba(0,0,0,0)] transition-colors duration-500 group-hover:border-[rgba(241,90,36,0.2)] relative overflow-hidden">
                  {/* Semantic line drawn on hover */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[1px] bg-ax-orange-core transition-all duration-500 hidden md:block ${isHovered ? 'h-full opacity-100' : 'h-0 opacity-0'}`} />
                  
                  {/* Refinement 09: Contained orange gradient edge/band */}
                  <div 
                    className={`absolute left-0 top-0 bottom-0 w-[160px] pointer-events-none transition-opacity duration-500 hidden md:block ${isHovered ? 'opacity-30' : 'opacity-0'}`}
                    style={{ background: 'var(--ax-gradient-edge)' }}
                  />

                  <p className="relative z-10 text-lg text-ax-ink/70 max-w-md">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
