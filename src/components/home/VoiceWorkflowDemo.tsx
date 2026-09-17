"use client";

import React, { useEffect, useState } from 'react';
import { siteAvailability } from '@/content/siteAvailability';

export function VoiceWorkflowDemo() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!siteAvailability.voiceWorkflows) return;
    
    // Simulate progression
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 5);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!siteAvailability.voiceWorkflows) {
    return null; // Do not render if unavailable
  }

  const steps = [
    { text: 'Intent understood', completed: activeStep > 0, active: activeStep === 0 },
    { text: 'Information checked', completed: activeStep > 1, active: activeStep === 1 },
    { text: 'Approval required', completed: activeStep > 2, active: activeStep === 2 },
    { text: 'Approved action', completed: activeStep > 3, active: activeStep === 3 },
    { text: 'Result returned', completed: activeStep === 4, active: activeStep === 4 },
  ];

  return (
    <section className="w-full bg-ax-ivory py-24 border-t border-ax-border-light">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-ax-text-muted mb-4">
            Voice Workflows
          </div>
          <h2 className="text-[clamp(34px,4vw,48px)] font-medium leading-[1] text-ax-black mb-6 max-w-2xl">
            A conversation can move real work forward.
          </h2>
          <p className="text-lg text-ax-text-muted max-w-2xl">
            A voice interaction should not end with a transcript. It can gather context, request a decision, use an approved system and return a result for review.
          </p>
        </div>

        {/* Demo Window */}
        <div className="w-full rounded-sm border border-ax-border-light bg-ax-white shadow-xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[500px]">
          
          {/* Left: Waveform & State */}
          <div className="w-full md:w-[25%] border-b md:border-b-0 md:border-r border-ax-border-light bg-ax-paper p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                {/* Custom Voice Icon */}
                <div className="w-10 h-10 rounded-full bg-ax-white border border-ax-border-light flex items-center justify-center text-ax-orange relative overflow-hidden group">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4v16M8 8v8M16 8v8M4 11v2M20 11v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-[pulse_1s_ease-in-out_infinite]" />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-ax-black">Voice Agent</div>
              </div>
              <div className="text-xs uppercase tracking-wider text-ax-orange font-semibold mb-2">Connected</div>
              <div className="text-2xl font-mono text-ax-black">02:45</div>
            </div>
            
            <div className="hidden md:flex h-32 items-center justify-center">
               <svg viewBox="0 0 100 40" className="w-full h-12 stroke-ax-text-muted" fill="none" strokeWidth="2" strokeLinecap="round">
                 <path d="M 0 20 Q 10 0, 20 20 T 40 20 T 60 20 T 80 20 T 100 20" className="animate-[pulse_2s_linear_infinite]" />
               </svg>
            </div>
          </div>

          {/* Centre: Transcript */}
          <div className="w-full md:w-[45%] border-b md:border-b-0 md:border-r border-ax-border-light bg-ax-white p-8 overflow-y-auto relative">
            <div className="text-xs font-semibold text-ax-text-muted uppercase tracking-widest mb-8 border-b border-ax-border-light pb-4">Live Transcript</div>
            
            <div className="space-y-6">
              <div className="flex flex-col items-end">
                <div className="bg-ax-paper text-ax-black text-sm p-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg max-w-[85%]">
                  Can you reallocate 50 units of the Pro sensor to the Berlin warehouse?
                </div>
              </div>
              
              <div className="flex flex-col items-start">
                <div className="bg-ax-ivory border border-ax-border-light text-ax-black text-sm p-4 rounded-tr-lg rounded-bl-lg rounded-br-lg max-w-[85%]">
                  Yes. Let me check the current stock levels at the main hub first. 
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="bg-ax-paper text-ax-black text-sm p-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg max-w-[85%]">
                  Great, do we have enough?
                </div>
              </div>

              <div className="flex flex-col items-start">
                <div className="bg-ax-orange/10 border border-ax-orange/20 text-ax-black text-sm p-4 rounded-tr-lg rounded-bl-lg rounded-br-lg max-w-[85%] relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-ax-orange" />
                  We do. I have prepared the transfer request. Since it affects major inventory, it requires manager approval. I have sent the notification.
                </div>
              </div>
            </div>
          </div>

          {/* Right: Action Path */}
          <div className="w-full md:w-[30%] bg-ax-ivory p-8">
            <div className="text-xs font-semibold text-ax-text-muted uppercase tracking-widest mb-8 border-b border-ax-border-light pb-4">Action Path</div>
            
            <div className="relative border-l border-ax-border-light ml-3 space-y-8 py-2">
              {steps.map((step, i) => (
                <div key={i} className="relative flex items-center pl-6">
                  {/* Node */}
                  <div className={`absolute -left-[5px] w-[9px] h-[9px] rounded-full transition-colors duration-300 ${
                    step.completed ? 'bg-ax-black border-2 border-ax-black' : step.active ? 'bg-ax-orange border-2 border-ax-orange' : 'bg-ax-white border-2 border-ax-border-light'
                  }`} />
                  
                  {/* Label */}
                  <div className={`text-sm transition-colors duration-300 ${
                    step.completed ? 'text-ax-text-muted' : step.active ? 'text-ax-black font-semibold' : 'text-ax-text-muted/50'
                  }`}>
                    {step.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
