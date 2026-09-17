"use client";

import React, { useRef } from 'react';
import { engineStages } from '@/content/engineStages';
import { useSectionVisibility, useReducedMotion } from './AnimationCoordinator';

// Simple hook for intersection observer to set active step
function useActiveStep() {
  const [activeStep, setActiveStep] = React.useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    if (!containerRef.current) return;
    const sentinels = containerRef.current.querySelectorAll('.engine-sentinel');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveStep(index);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' } // Trigger when center crosses center
    );
    
    sentinels.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return { containerRef, activeStep, setActiveStep };
}

export function EngineScrollStory() {
  const { containerRef, activeStep } = useActiveStep();
  // Call hooks to ensure tracking works, but we don't necessarily read the values here
  useSectionVisibility(containerRef);
  useReducedMotion();

  return (
    <section 
      ref={containerRef} 
      className="engineNarrative relative min-h-[500svh] bg-[#000000] border-t border-[rgba(255,255,255,0.1)] isolation-isolate"
      id="engine-narrative"
    >
      <div className="engineNarrativeSticky sticky top-[var(--header-height,72px)] h-[calc(100svh-var(--header-height,72px))] overflow-clip w-full flex items-center">
        
        {/* Subtle orange directional form near outer edge */}
        <div className="engineNarrativeGradient absolute w-[min(760px,58vw)] h-[min(420px,42vw)] right-[-12%] bottom-[4%] pointer-events-none"
             style={{ background: 'radial-gradient(ellipse, rgba(255,90,31,0.19) 0%, rgba(255,90,31,0.065) 34%, rgba(0,0,0,0) 72%)' }} />

        <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-10 h-full py-8 lg:py-16 grid lg:grid-cols-[minmax(0,1.62fr)_minmax(320px,0.88fr)] gap-[clamp(40px,5vw,80px)] pointer-events-none">
          
          {/* Left Stage */}
          <div className="engineNarrativeStage relative w-full h-[min(72vh,720px)] self-center pointer-events-auto rounded-md overflow-hidden bg-[#101010] border border-[rgba(255,255,255,0.14)]"
               style={{ background: 'radial-gradient(ellipse at 66% 42%, rgba(255,90,31,0.09), rgba(255,90,31,0) 56%), #101010' }}>
            
            {/* Stable Product Screen Structure */}
            <div className="w-full h-full flex flex-col p-6 text-ax-warm-white">
              
              {/* Objective Input */}
              <div className={`transition-opacity duration-300 ${activeStep >= 0 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-[11px] font-semibold text-ax-warm-white/50 uppercase tracking-widest mb-3">Objective</div>
                <div className="p-4 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-sm">
                  <span className="font-medium">Prepare a decision-ready supplier comparison.</span>
                </div>
              </div>

              {/* Context Collection (Stage 1+) */}
              <div className={`mt-6 transition-all duration-[460ms] ease-out ${activeStep >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="text-[11px] font-semibold text-ax-warm-white/50 uppercase tracking-widest mb-3">Context Gathering</div>
                <div className="flex gap-3 text-sm">
                   <div className="px-3 py-1.5 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-sm flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-ax-orange" />
                     Supplier criteria
                   </div>
                   <div className="px-3 py-1.5 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-sm flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-ax-orange" />
                     Missing decision date
                   </div>
                </div>
              </div>

              {/* Plan & Execution (Stage 1+) */}
              <div className={`mt-8 flex-1 transition-all duration-[460ms] ease-out ${activeStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                 <div className="text-[11px] font-semibold text-ax-warm-white/50 uppercase tracking-widest mb-3 border-b border-[rgba(255,255,255,0.08)] pb-2">Execution Route</div>
                 
                 <div className="relative mt-4 pl-4 space-y-4">
                    {/* SVG Line */}
                    <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-[rgba(255,255,255,0.08)]" />
                    <div className="absolute left-[5px] top-2 bottom-2 w-[2px] origin-top bg-ax-orange transition-all duration-[720ms]" 
                         style={{ transform: `scaleY(${Math.max(0, (activeStep - 1) / 3)})` }} />

                    {/* Steps */}
                    {[
                      { idx: 1, label: 'Gather approved supplier records' },
                      { idx: 2, label: 'Check delivery constraints (Approval Required)' },
                      { idx: 3, label: 'Prepare recommendation' }
                    ].map((step, i) => {
                       const isPast = activeStep - 1 > i;
                       const isCurrent = activeStep - 1 === i;

                       return (
                         <div key={i} className="relative flex items-center gap-4">
                           <div className={`absolute -left-[16.5px] w-3 h-3 rounded-full border-[2px] bg-[#101010] z-10 transition-colors duration-300 ${
                             isPast ? 'border-ax-orange bg-ax-orange' : isCurrent ? 'border-ax-orange shadow-[0_0_0_4px_rgba(241,90,36,0.15)]' : 'border-[rgba(255,255,255,0.2)]'
                           }`} />
                           <div className={`px-4 py-2.5 rounded-sm border transition-colors duration-300 ${
                             isPast ? 'border-[rgba(255,255,255,0.1)] text-ax-warm-white/60' :
                             isCurrent ? 'border-ax-orange/40 bg-[rgba(241,90,36,0.05)] text-ax-warm-white' :
                             'border-[rgba(255,255,255,0.05)] text-ax-warm-white/30'
                           }`}>
                             <div className="text-sm font-medium">{step.label}</div>
                             
                             {/* Approval Card injected at step 2 */}
                             {i === 1 && activeStep === 2 && (
                               <div className="mt-3 p-3 bg-[#0a0a0a] border border-ax-orange/30 rounded-sm">
                                  <div className="text-xs text-ax-orange mb-2">Human decision required</div>
                                  <div className="flex gap-2">
                                    <button className="px-3 py-1 bg-ax-orange text-white text-xs rounded-sm">Approve</button>
                                    <button className="px-3 py-1 bg-transparent border border-[rgba(255,255,255,0.2)] text-white/70 text-xs rounded-sm">Reject</button>
                                  </div>
                               </div>
                             )}
                           </div>
                         </div>
                       );
                    })}
                 </div>
              </div>

              {/* Result (Stage 4) */}
              <div className={`absolute bottom-6 right-6 left-[40%] transition-all duration-[460ms] ease-out ${activeStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                 <div className="p-4 bg-[rgba(20,20,20,0.95)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-sm shadow-2xl">
                    <div className="flex items-center justify-between mb-2">
                       <div className="text-sm font-medium">Result Summary</div>
                       <div className="text-[10px] text-ax-orange border border-ax-orange/30 px-2 py-0.5 rounded-sm">Verified</div>
                    </div>
                    <div className="text-xs text-ax-warm-white/60">Objective met. Evidence preserved.</div>
                 </div>
              </div>

            </div>
          </div>
          
          {/* Right Copy Rail */}
          <div className="engineNarrativeRail flex flex-col justify-center pointer-events-auto max-w-sm">
            {engineStages.map((stage, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => {
                    // Find sentinel and scroll to it
                    const sentinel = document.querySelector(`.engine-sentinel[data-index="${idx}"]`);
                    if (sentinel) {
                      sentinel.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className={`group text-left p-4 rounded-sm border transition-all duration-[240ms] outline-none focus-visible:border-ax-orange ${
                    isActive 
                      ? 'bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.1)] -translate-x-2' 
                      : 'bg-transparent border-transparent hover:bg-[rgba(255,255,255,0.02)]'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors ${isActive ? 'bg-ax-orange' : 'bg-transparent'}`} />
                    <h3 className={`text-lg font-medium transition-colors ${isActive ? 'text-ax-warm-white' : 'text-ax-warm-white/40 group-hover:text-ax-warm-white/60'}`}>
                      {stage.heading}
                    </h3>
                  </div>
                  <div className={`grid transition-all duration-[240ms] ease-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="overflow-hidden text-[var(--body-small)] text-ax-warm-white/70 pl-[18px]">
                      {stage.explanation}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Invisible Normal-Flow Sentinels */}
      <div className="engineNarrativeSentinels w-full absolute top-0 pointer-events-none pb-[50svh]">
        <div className="h-[100svh]" /> {/* Offset for entrance */}
        {engineStages.map((_, idx) => (
          <div 
            key={idx} 
            className="engine-sentinel h-[100svh] w-full"
            data-index={idx}
          />
        ))}
      </div>
    </section>
  );
}
