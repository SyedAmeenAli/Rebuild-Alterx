"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useSectionVisibility, useReducedMotion } from './AnimationCoordinator';

const SECURITY_STAGES = [
  { id: 'input', label: 'Input classified' },
  { id: 'permission', label: 'Source permission checked' },
  { id: 'policy', label: 'Policy matched' },
  { id: 'redaction', label: 'Sensitive field redacted' },
  { id: 'check', label: 'Output checked' },
  { id: 'audit', label: 'Audit event stored' }
];

const FRAGMENTS_POOL = [
  'AUTHORITY', 'EVIDENCE', 'APPROVAL', 'RESULT', 'TRACE', 'REVIEW', 
  'CHECK', 'CONTROL', 'EVENT', 'STATE', 'PLAN', 'ACTION',
  'AX7F9', '0F31A', 'KX24M', 'N4RX8', '7B91C', 'Q3T8V', 'M8A2X'
];

function generateScrambledString() {
  const base = FRAGMENTS_POOL[Math.floor(Math.random() * FRAGMENTS_POOL.length)];
  return base.split('').map(c => Math.random() > 0.7 ? chars[Math.floor(Math.random() * chars.length)] : c).join('');
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_#*&';

function EvidenceCipherField({ isVisible }: { isVisible: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId = 0;
    let width = 0;
    let height = 0;

    // We use a lower DPR for performance
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    // Create 9 curved bands (8-11 requested)
    const numBands = 9;
    const bands = Array.from({ length: numBands }).map((_, i) => {
      const radius = 0.2 + (i / numBands) * 0.7; // 0.2 to 0.9 of half-width
      const isInner = i < 4;
      const direction = isInner ? -1 : 1; // inner counter-clockwise, outer clockwise
      
      const fragments = Array.from({ length: 30 + Math.floor(Math.random() * 20) }).map(() => ({
        angle: Math.random() * Math.PI * 2,
        char: chars[Math.floor(Math.random() * chars.length)],
        opacity: isInner ? (Math.random() * 0.4 + 0.3) : (Math.random() * 0.2 + 0.1),
        charChangeTimer: Math.random() * 100
      }));

      return {
        radius,
        speed: (Math.random() * 0.002 + 0.001) * direction,
        tilt: 0.3 + (i / numBands) * 0.1, // Elliptical compression
        fragments
      };
    });

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      // Delta time normalization is omitted for brevity, assuming ~60fps
      if (!isVisible) {
        // Stop requesting frames if not visible
        return;
      }

      ctx.clearRect(0, 0, width, height);
      
      const cx = width / 2;
      const cy = height / 2;
      const maxR = Math.min(width, height) * 0.55;
      
      // Draw Bands
      bands.forEach(band => {
        const r = maxR * band.radius;
        
        ctx.strokeStyle = 'rgba(241,90,36,0.03)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(cx, cy, r, r * band.tilt, 0, 0, Math.PI * 2);
        ctx.stroke();

        band.fragments.forEach(f => {
          f.angle += band.speed;
          
          f.charChangeTimer--;
          if (f.charChangeTimer <= 0) {
            f.char = chars[Math.floor(Math.random() * chars.length)];
            f.charChangeTimer = Math.random() * 60 + 20;
          }

          const x = cx + Math.cos(f.angle) * r;
          const y = cy + Math.sin(f.angle) * r * band.tilt;
          
          const z = Math.sin(f.angle);
          
          ctx.font = '11px monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = `rgba(241, 90, 36, ${f.opacity * (z > 0 ? 1 : 0.4)})`;
          ctx.fillText(f.char, x, y);
        });
      });

      animationFrameId = requestAnimationFrame(render);
    };

    if (isVisible && !reducedMotion) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      // Just render a static frame
      render();
    }

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, reducedMotion]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-ax-carbon" aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}

export function SecurityVerificationStream() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useSectionVisibility(containerRef);
  
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [scrambledString, setScrambledString] = useState('EVIDENCE_OK');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isVisible) {
      interval = setInterval(() => {
        setActiveStageIdx(prev => (prev + 1) % SECURITY_STAGES.length);
        setScrambledString(generateScrambledString());
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section 
      ref={containerRef}
      className="securitySection w-full py-32 border-t border-[rgba(255,255,255,0.06)] relative min-h-[600px] flex items-center" 
      style={{ isolation: 'isolate', overflow: 'clip' }}
    >
      
      {/* Background Canvas */}
      <EvidenceCipherField isVisible={isVisible} />

      {/* Verification Core (Static SVG) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none flex flex-col items-center justify-center">
         <div className="relative w-24 h-24 flex items-center justify-center">
            {/* Structural Brackets */}
            <div className="absolute inset-0 border border-ax-orange-core/20 rounded-full" />
            <div className="absolute inset-2 border border-[rgba(255,255,255,0.08)] rounded-full border-dashed" />
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="absolute">
               <path d="M12 12 L28 28 M28 12 L12 28" stroke="var(--ax-warm-white)" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
            <div className="w-2 h-2 rounded-full bg-ax-orange-core shadow-[0_0_12px_rgba(241,90,36,0.8)] z-10" />
         </div>
         {/* Scrambled evidence string beneath core */}
         <div className="mt-6 text-[11px] font-mono text-ax-orange-core/80 tracking-[0.2em] transition-opacity duration-300">
           [{scrambledString}]
         </div>
      </div>

      {/* Readability mask */}
      <div className="securityReadabilityLayer absolute inset-0 z-10 pointer-events-none" 
           style={{ background: 'radial-gradient(ellipse 54% 44% at 25% 23%, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.86) 45%, rgba(0, 0, 0, 0) 78%)' }} 
      />
      
      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-10 relative z-20 pointer-events-none">
        
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start pointer-events-auto max-w-4xl">
          
          <div className="flex flex-col gap-6">
            <div className="text-xs text-ax-orange-core uppercase tracking-widest font-semibold">Verified Architecture</div>
            <h2 className="text-[clamp(34px,4vw,48px)] font-medium leading-[1.1] text-ax-warm-white">
              Security should be visible, not implied.
            </h2>
          </div>

          <div className="flex flex-col gap-12 pt-8">
            <p className="text-lg text-ax-warm-white/70 leading-relaxed">
              Every important action should pass through defined permissions, policies and checks before it becomes part of the result.
            </p>
            
            <div className="flex flex-col gap-4 border-t border-[rgba(255,255,255,0.1)] pt-8">
              {SECURITY_STAGES.map((stage, i) => {
                const isActive = activeStageIdx === i;
                return (
                  <div key={stage.id} className="flex items-center gap-4 transition-all duration-300" style={{ opacity: isActive ? 1 : 0.4 }}>
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isActive ? 'bg-ax-orange-core' : 'bg-[rgba(255,255,255,0.4)]'}`} />
                    <div className={`text-sm font-medium transition-colors duration-300 ${isActive ? 'text-ax-warm-white' : 'text-ax-warm-white/60'}`}>
                      {stage.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
