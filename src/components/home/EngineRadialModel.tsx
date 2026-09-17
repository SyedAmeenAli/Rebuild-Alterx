"use client";

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useSectionVisibility, useReducedMotion } from './AnimationCoordinator';

const RADIAL_SEGMENTS = [
  { id: 'context', label: 'Context', explanation: 'What information does the work require?' },
  { id: 'plan', label: 'Plan', explanation: 'What steps and dependencies are proposed?' },
  { id: 'permission', label: 'Permission', explanation: 'What may the Engine use, and where must a person decide?' },
  { id: 'action', label: 'Action', explanation: 'What approved work is currently being performed?' },
  { id: 'evidence', label: 'Evidence', explanation: 'What supports the result and the decisions made along the way?' },
];

export function EngineRadialModel() {
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useSectionVisibility(containerRef);
  const reducedMotion = useReducedMotion();

  // SVG parameters
  const size = 640;
  const center = size / 2;
  const r1 = 280; // Outer node ring
  const r2 = 200; // Middle structural ring
  const r3 = 120; // Inner structural ring
  
  // Angle calculations for the 5 segments
  const numSegments = RADIAL_SEGMENTS.length;
  const anglePerSegment = 360 / numSegments;
  
  // We want the active node to end up at the "focus" position. 
  // Let's define focus as -90 degrees (top center) or 0 degrees (right). Let's use 0 degrees (right side, closest to the text rail).
  const FOCUS_ANGLE = 0; 
  
  // Calculate shortest path rotation
  // Current natural angle of the selected segment
  const naturalAngle = (activeSegmentIndex * anglePerSegment);
  
  // The base rotation needed to bring it to focus
  const targetRotation = FOCUS_ANGLE - naturalAngle;
  
  // Adjust to shortest path using state
  const [finalRotation, setFinalRotation] = useState(0);
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFinalRotation(prev => {
      let diff = targetRotation - (prev % 360);
      if (diff > 180) diff -= 360;
      if (diff < -180) diff += 360;
      return prev + diff;
    });
  }, [targetRotation]);

  const displayRotation = reducedMotion ? 0 : finalRotation;

  // Helper to get coordinates
  const getPoint = (radius: number, angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad)
    };
  };

  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#030303] py-32 border-t border-[rgba(255,255,255,0.1)] relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
        
        <div className="mb-20 max-w-2xl">
          <h2 className="text-[clamp(34px,4vw,48px)] font-medium leading-[1] text-ax-warm-white mb-6">
            What keeps Alter Engine accountable while work moves forward.
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between">
          
          {/* SVG Orbit */}
          <div className="w-[640px] h-[640px] relative shrink-0 -ml-[5%]">
            
            {/* Orange contained radial field behind the active node focus point */}
            <div 
              className="absolute w-[60%] h-[60%] pointer-events-none transition-opacity duration-1000"
              style={{
                right: '0%', 
                top: '20%',
                background: 'radial-gradient(circle, rgba(255,90,31,0.20) 0%, rgba(255,90,31,0.065) 30%, rgba(0,0,0,0) 66%)',
                opacity: isVisible ? 1 : 0
              }} 
            />

            <svg 
              width={size} 
              height={size} 
              viewBox={`0 0 ${size} ${size}`} 
              className="relative z-10 outline-none"
            >
              {/* Background structural rings */}
              <circle cx={center} cy={center} r={r1} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 8" />
              <circle cx={center} cy={center} r={r2} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <circle cx={center} cy={center} r={r3} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

              {/* Rotatable Group */}
              <g 
                className="transition-transform duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                style={{ transform: `rotate(${displayRotation}deg)`, transformOrigin: 'center' }}
              >
                
                {/* Active Orange Arc on r2 */}
                {/* Draws a partial arc connecting the center to the active node */}
                <path 
                  d={`M ${getPoint(r2, -90).x} ${getPoint(r2, -90).y} A ${r2} ${r2} 0 0 1 ${getPoint(r2, naturalAngle).x} ${getPoint(r2, naturalAngle).y}`}
                  fill="none" 
                  stroke="var(--ax-orange-core)" 
                  strokeWidth="2"
                  className="transition-all duration-[800ms]"
                  strokeDasharray="1000"
                  strokeDashoffset={isVisible ? 0 : 1000}
                />

                {/* Nodes */}
                {RADIAL_SEGMENTS.map((seg, i) => {
                  const nodeAngle = i * anglePerSegment;
                  const isActive = i === activeSegmentIndex;
                  const isPast = (activeSegmentIndex > i && !(activeSegmentIndex === 4 && i === 0)) || (activeSegmentIndex === 0 && i === 4);
                  
                  const pOuter = getPoint(r1, nodeAngle);
                  
                  return (
                    <g 
                      key={seg.id}
                      onClick={() => setActiveSegmentIndex(i)}
                      onFocus={() => setActiveSegmentIndex(i)}
                      tabIndex={0}
                      className="cursor-pointer outline-none group"
                    >
                      {/* Interaction Target */}
                      <circle cx={pOuter.x} cy={pOuter.y} r={40} fill="transparent" />
                      
                      {/* Connection line to center */}
                      <line 
                        x1={getPoint(r3, nodeAngle).x} 
                        y1={getPoint(r3, nodeAngle).y} 
                        x2={pOuter.x} 
                        y2={pOuter.y} 
                        stroke={isActive ? 'rgba(241,90,36,0.5)' : 'rgba(255,255,255,0.08)'} 
                        strokeWidth="1" 
                        className="transition-colors duration-[600ms]"
                      />

                      {/* Node point */}
                      <circle 
                        cx={pOuter.x} 
                        cy={pOuter.y} 
                        r={isActive ? 8 : 4} 
                        fill={isActive ? 'var(--ax-orange-core)' : isPast ? 'rgba(255,255,255,0.4)' : '#101010'}
                        stroke={isActive ? 'var(--ax-orange-core)' : 'rgba(255,255,255,0.2)'}
                        strokeWidth="2"
                        className="transition-all duration-[600ms]"
                      />
                      
                      {/* Active glow */}
                      {isActive && (
                         <circle cx={pOuter.x} cy={pOuter.y} r={20} fill="rgba(241,90,36,0.15)" className="animate-pulse" />
                      )}

                      {/* Text Label - Counter-rotated so it remains upright */}
                      <g 
                        className="transition-transform duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                        style={{ transform: `rotate(${-displayRotation}deg)`, transformOrigin: `${pOuter.x}px ${pOuter.y}px` }}
                      >
                        {/* We offset the text based on where the focus angle is. Focus is at 0 (right). So we position text slightly right and up of the node. */}
                        <text 
                          x={pOuter.x + 24} 
                          y={pOuter.y} 
                          dominantBaseline="middle"
                          className={`text-sm font-semibold tracking-wider uppercase transition-colors duration-[600ms] ${isActive ? 'fill-ax-warm-white' : 'fill-[rgba(255,255,255,0.4)] group-hover:fill-ax-warm-white/80'}`}
                        >
                          {seg.label}
                        </text>
                      </g>
                    </g>
                  );
                })}

                {/* Central Engine Core */}
                <g className="transition-transform duration-[600ms]" style={{ transform: `rotate(${-displayRotation / 2}deg)`, transformOrigin: 'center' }}>
                  <circle cx={center} cy={center} r={42} fill="#050505" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                  <circle cx={center} cy={center} r={34} fill="#0a0a0a" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  
                  {/* Dynamic Core Indicator based on active state */}
                  {RADIAL_SEGMENTS.map((_, i) => {
                     const ang = i * anglePerSegment;
                     const p = getPoint(24, ang);
                     return (
                        <circle 
                          key={`core-${i}`} 
                          cx={p.x} 
                          cy={p.y} 
                          r={2} 
                          fill={i === activeSegmentIndex ? 'var(--ax-orange-core)' : 'rgba(255,255,255,0.2)'} 
                          className="transition-colors duration-500"
                        />
                     )
                  })}
                  
                  <text x={center} y={center} textAnchor="middle" dominantBaseline="middle" className="text-[10px] font-bold tracking-widest fill-ax-warm-white uppercase opacity-80" style={{ transform: `rotate(${displayRotation / 2}deg)`, transformOrigin: 'center' }}>
                    Engine
                  </text>
                </g>

              </g>
            </svg>
          </div>

          {/* Right Explanation Rail */}
          <div className="flex-1 max-w-[420px] ml-16 flex flex-col justify-center gap-6 z-20">
            {RADIAL_SEGMENTS.map((seg, i) => {
              const isActive = activeSegmentIndex === i;
              return (
                <button
                  key={seg.id}
                  onClick={() => setActiveSegmentIndex(i)}
                  className={`group text-left pl-6 border-l-2 py-2 outline-none transition-all duration-[400ms] ${
                    isActive 
                      ? 'border-ax-orange-core' 
                      : 'border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.3)]'
                  }`}
                >
                   <div className={`text-xl font-medium transition-colors ${isActive ? 'text-ax-warm-white' : 'text-ax-warm-white/40 group-hover:text-ax-warm-white/60'}`}>
                     {seg.label}
                   </div>
                   <div className={`grid transition-all duration-[400ms] ease-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                     <div className="overflow-hidden text-[15px] leading-relaxed text-ax-warm-white/70">
                       {seg.explanation}
                     </div>
                   </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center">
           {/* Static SVG for mobile */}
           <svg width="240" height="240" viewBox="0 0 240 240" className="mb-12">
              <circle cx="120" cy="120" r="100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <circle cx="120" cy="120" r="40" fill="#0a0a0a" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <text x="120" y="120" textAnchor="middle" dominantBaseline="middle" className="text-[10px] font-bold fill-ax-warm-white uppercase opacity-80">
                Engine
              </text>
              <circle cx="120" cy="20" r="8" fill="var(--ax-orange-core)" />
           </svg>

           <div className="w-full flex flex-col border-t border-[rgba(255,255,255,0.1)]">
             {RADIAL_SEGMENTS.map((seg, i) => {
               const isActive = activeSegmentIndex === i;
               return (
                 <div key={seg.id} className="border-b border-[rgba(255,255,255,0.1)]">
                   <button 
                     className="w-full text-left py-5 flex items-center justify-between font-medium text-ax-warm-white outline-none"
                     onClick={() => setActiveSegmentIndex(isActive ? -1 : i)}
                   >
                     {seg.label}
                     <span className={`text-ax-orange-core transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>▼</span>
                   </button>
                   <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                     <p className="text-sm text-ax-warm-white/70">{seg.explanation}</p>
                   </div>
                 </div>
               );
             })}
           </div>
        </div>

      </div>
    </section>
  );
}
