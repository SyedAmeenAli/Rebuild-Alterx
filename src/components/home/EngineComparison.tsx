"use client";

import React, { useState } from 'react';
import { comparisonData } from '@/content/comparison';
import { useSectionVisibility } from './AnimationCoordinator';

const SvgCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="inline-block shrink-0">
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function EngineComparison() {
  const [activeRow, setActiveRow] = useState<string | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isVisible = useSectionVisibility(containerRef);

  // Entrance staggered animation handled via simple CSS if isVisible
  
  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#f3f0e9] py-32 border-t border-[rgba(0,0,0,0.06)] relative overflow-hidden"
    >
      {/* Restrained orange atmospheric gradient near the right (Alter Engine column) */}
      <div 
        className="absolute w-[60vw] h-[80vh] right-0 top-[10%] pointer-events-none opacity-40 mix-blend-multiply"
        style={{ background: 'radial-gradient(ellipse at 80% 40%, rgba(255,90,31,0.12) 0%, rgba(255,90,31,0.03) 40%, transparent 70%)' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-[clamp(34px,4vw,48px)] font-medium leading-[1] text-[#090909] mb-6 max-w-2xl">
            Different tools stop at different points.
          </h2>
          <p className="text-lg text-[#090909]/70 max-w-2xl">
            An assistant can suggest the work. An automation can repeat it. Alter Engine is designed to structure, follow and check it.
          </p>
        </div>

        {/* Desktop Runway */}
        <div className="hidden lg:block w-full relative">
          
          {/* Header row */}
          <div className="grid grid-cols-[38%_20%_20%_22%] pb-6 border-b border-[rgba(0,0,0,0.1)] text-xs font-semibold uppercase tracking-widest text-[#090909]/50 mb-2">
            <div className="pl-6">Capability</div>
            <div className="text-center">AI Assistant</div>
            <div className="text-center">Fixed Automation</div>
            <div className="text-center text-ax-orange-core font-bold">Alter Engine</div>
          </div>
          
          {/* Vertical Engine Spine */}
          <div className="absolute top-[52px] bottom-0 right-[11%] w-[2px] bg-gradient-to-b from-[#ff761f] via-[#f15a24] to-[#d94316] z-0 opacity-80" />

          <div className="flex flex-col relative z-10">
            {comparisonData.map((row, idx) => {
              const isActive = activeRow === row.id;
              
              // Entrance animation stagger
              const delay = idx * 0.05;
              const transformClass = isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0';

              return (
                <div 
                  key={row.id}
                  className={`group relative outline-none transition-all duration-[500ms] ease-out ${transformClass}`}
                  style={{ transitionDelay: `${isVisible ? delay : 0}s` }}
                  onMouseEnter={() => setActiveRow(row.id)}
                  onMouseLeave={() => setActiveRow(null)}
                  onFocus={() => setActiveRow(row.id)}
                  onBlur={() => setActiveRow(null)}
                  tabIndex={0}
                >
                  {/* Background Highlight */}
                  <div className={`absolute inset-0 -mx-4 rounded-sm transition-colors duration-300 ${isActive ? 'bg-[#ffffff] shadow-sm border border-[rgba(0,0,0,0.04)]' : 'bg-transparent border border-transparent'}`} />
                  
                  <div className={`relative grid grid-cols-[38%_20%_20%_22%] items-center transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'py-6' : 'py-5'}`}>
                    
                    {/* Capability Name & Explanation */}
                    <div className="pl-6 pr-4 relative">
                      <div className={`text-base font-medium transition-colors duration-300 ${isActive ? 'text-[#090909]' : 'text-[#090909]/70 group-hover:text-[#090909]/90'}`}>
                        {row.feature}
                      </div>
                      
                      <div className={`grid transition-all duration-[300ms] ease-out ${isActive ? 'grid-rows-[1fr] mt-2 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="text-[13px] text-[#090909]/60 overflow-hidden pr-4 leading-relaxed">
                          {row.explanation}
                        </div>
                      </div>
                      
                      {/* Active signal path starting dot */}
                      <div className={`absolute left-0 top-[26px] w-1.5 h-1.5 rounded-full bg-[#090909] transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
                    
                    {/* AI Assistant */}
                    <div className="text-center font-medium relative h-full flex flex-col justify-center items-center">
                       {/* Connecting line */}
                       <div className="absolute left-0 right-1/2 top-1/2 h-[1px] bg-[rgba(0,0,0,0.06)] -z-10" />
                       
                       {/* Animated Signal Path */}
                       {isActive && (
                         <div className="absolute left-[-100%] right-1/2 top-1/2 h-[1px] bg-[#090909]/30 -z-10 origin-left animate-[signalMove_0.5s_ease-out_forwards]" />
                       )}

                       <div className={`transition-all duration-300 ${isActive ? 'text-[#090909] scale-105' : 'text-[#090909]/50'}`}>
                          <div className="text-sm flex items-center justify-center gap-2 bg-[#f3f0e9] px-2">
                             {row.assistant}
                          </div>
                          {/* Endpoint Marker */}
                          {isActive && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[rgba(0,0,0,0.1)] bg-[radial-gradient(circle,rgba(0,0,0,0.03)_40%,transparent_100%)] -z-10" />}
                       </div>
                    </div>
                    
                    {/* Fixed Automation */}
                    <div className="text-center font-medium relative h-full flex flex-col justify-center items-center">
                       {/* Connecting line from AI assistant center to here */}
                       <div className="absolute left-[-50%] right-1/2 top-1/2 h-[1px] bg-[rgba(0,0,0,0.06)] -z-10" />
                       
                       {/* Animated Signal Path */}
                       {isActive && (
                         <div className="absolute left-[-150%] right-1/2 top-1/2 h-[1px] bg-[#090909]/50 -z-10 origin-left animate-[signalMove_0.6s_ease-out_forwards]" />
                       )}

                       <div className={`transition-all duration-300 ${isActive ? 'text-[#090909] scale-105' : 'text-[#090909]/50'}`}>
                          <div className="text-sm flex items-center justify-center gap-2 bg-[#f3f0e9] px-2">
                             {row.automation}
                          </div>
                          {/* Endpoint Marker */}
                          {isActive && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[rgba(0,0,0,0.15)] bg-[radial-gradient(circle,rgba(0,0,0,0.05)_40%,transparent_100%)] -z-10" />}
                       </div>
                    </div>
                    
                    {/* Alter Engine */}
                    <div className="text-center font-medium relative h-full flex flex-col justify-center items-center">
                       {/* Connecting line to Engine spine */}
                       <div className="absolute left-[-50%] right-1/2 top-1/2 h-[1px] bg-[rgba(0,0,0,0.06)] -z-10" />
                       
                       {/* Animated Orange Signal Path connecting to spine */}
                       {isActive && (
                         <div className="absolute left-[-250%] right-1/2 top-1/2 h-[1.5px] bg-ax-orange-core -z-10 origin-left animate-[signalMove_0.7s_ease-out_forwards]" />
                       )}

                       <div className={`transition-all duration-300 ${isActive ? 'text-ax-orange-core font-bold scale-105' : 'text-[#090909]'}`}>
                          <div className="text-sm flex items-center justify-center gap-2 bg-[#f3f0e9] px-2">
                             {isActive && row.engine === 'Yes' ? <SvgCheck /> : null}
                             {row.engine}
                          </div>
                          {/* Orange Endpoint Marker */}
                          {isActive && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-ax-orange-core/30 bg-[radial-gradient(circle,rgba(241,90,36,0.1)_40%,transparent_100%)] -z-10" />}
                       </div>
                    </div>
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden flex flex-col border-t border-[rgba(0,0,0,0.1)]">
          {comparisonData.map((row) => {
            const isActive = activeRow === row.id;
            return (
              <div key={row.id} className="border-b border-[rgba(0,0,0,0.1)]">
                <button 
                  className="w-full text-left py-5 flex items-center justify-between font-medium text-[#090909] outline-none"
                  onClick={() => setActiveRow(isActive ? null : row.id)}
                >
                  {row.feature}
                  <span className={`text-ax-orange-core transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`grid transition-all duration-500 ease-out ${isActive ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="text-sm text-[#090909]/60 mb-6">{row.explanation}</p>
                    <div className="flex flex-col gap-3 text-sm">
                      <div className="bg-[#ffffff] border border-[rgba(0,0,0,0.04)] p-3 rounded-sm flex justify-between">
                        <span className="text-xs uppercase font-semibold text-[#090909]/50 tracking-wider">AI Assistant</span>
                        <span className="font-medium text-[#090909]/70">{row.assistant}</span>
                      </div>
                      <div className="bg-[#ffffff] border border-[rgba(0,0,0,0.04)] p-3 rounded-sm flex justify-between">
                        <span className="text-xs uppercase font-semibold text-[#090909]/50 tracking-wider">Fixed Automation</span>
                        <span className="font-medium text-[#090909]/70">{row.automation}</span>
                      </div>
                      <div className="bg-[rgba(241,90,36,0.04)] border border-ax-orange-core/20 p-3 rounded-sm flex justify-between relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-ax-orange-core" />
                        <span className="text-xs uppercase font-semibold text-ax-orange-core tracking-wider">Alter Engine</span>
                        <span className="font-bold text-ax-orange-core flex items-center gap-2">
                           {row.engine === 'Yes' ? <SvgCheck /> : null}
                           {row.engine}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes signalMove {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}} />
    </section>
  );
}
