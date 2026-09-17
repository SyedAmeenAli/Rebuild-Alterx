"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { HeroMotionFilm } from './HeroMotionFilm';
import { alterEngineDestination } from '@/content/navigation';
import Link from 'next/link';

const phrases = [
  "a clear plan.",
  "work in motion.",
  "the right approval.",
  "a checked result."
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [pointer, setPointer] = useState<{ x: number, y: number, active: boolean }>({ x: 0, y: 0, active: false });
  const [isTouch, setIsTouch] = useState(false);

  // Pause rotation
  useEffect(() => {
    const handleDropdown = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsPaused(customEvent.detail.isOpen);
    };
    const handleVisibility = () => {
      setIsPaused(document.hidden);
    };
    window.addEventListener('navDropdownState', handleDropdown);
    document.addEventListener('visibilitychange', handleVisibility);
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsPaused(!entry.isIntersecting);
    });
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      window.removeEventListener('navDropdownState', handleDropdown);
      document.removeEventListener('visibilitychange', handleVisibility);
      observer.disconnect();
    };
  }, []);

  // Phrase rotation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused) return;

    let timeoutId: NodeJS.Timeout;

    const runCycle = () => {
      timeoutId = setTimeout(() => {
        // Exit
        gsap.to('.hero-phrase-active', { y: -8, autoAlpha: 0, duration: 0.15, ease: "power2.in" });
        
        setTimeout(() => {
          setCurrentIdx(prev => (prev + 1) % phrases.length);
          gsap.set('.hero-phrase-active', { y: 8, autoAlpha: 0 });
          // Enter
          gsap.to('.hero-phrase-active', { y: 0, autoAlpha: 1, duration: 0.28, ease: "power2.out" });
          
          runCycle();
        }, 150 + 50); // Exit + Gap
      }, 5200); // Hold
    };
    
    runCycle();
    return () => clearTimeout(timeoutId);
  }, [isPaused]);

  // Pointer interaction
  useEffect(() => {
    const matchMedia = window.matchMedia('(hover: none) and (pointer: coarse)');
    // eslint-disable-next-line
    setIsTouch(matchMedia.matches);
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isTouch) return;
    if (!stackRef.current) return;
    const rect = stackRef.current.getBoundingClientRect();
    setPointer({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    });
  };

  const handlePointerLeave = () => {
    setPointer(prev => ({ ...prev, active: false }));
  };

  return (
    <section 
      ref={containerRef}
      className="hero relative min-h-[100svh] flex flex-col justify-center px-7 lg:px-10 overflow-clip z-[var(--z-page-content)] bg-ax-black text-ax-white"
      style={{ isolation: 'isolate' }}
    >
      <div className="absolute inset-0 z-0">
        <HeroMotionFilm />
      </div>

      <div className="absolute inset-0 z-[1] bg-black/40 pointer-events-none" />
      
      {/* Refinement 09: Restrained deep-orange glow near lower edges */}
      <div 
        className="absolute inset-x-0 bottom-0 h-64 z-[1] pointer-events-none"
        style={{ background: 'var(--ax-gradient-dark)', transform: 'translateY(30%) scaleY(0.8)' }}
      />

      <div className="heroCopy relative z-[2] w-full max-w-[1180px] mx-auto flex flex-col items-start justify-center pt-[140px] pb-[80px]">
        
        <div className="heroEyebrow text-[11px] font-semibold tracking-[0.08em] uppercase text-ax-orange mb-8 select-none">
          ALTER ENGINE
        </div>
        
        <div 
          ref={stackRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className="heroHeadlineStack relative grid w-full max-w-[1080px] select-none"
          style={{
            ['--mouse-x' as string]: `${pointer.x}px`,
            ['--mouse-y' as string]: `${pointer.y}px`
          }}
        >
          {/* Base Layer */}
          <h1 className="heroHeadlineBase col-start-1 row-start-1 w-full m-0 z-[1] text-ax-warm-white">
            <HeroText currentIdx={currentIdx} isBase={true} />
          </h1>

          {/* Reveal Orange Layer */}
          {!isTouch && (
            <div 
              aria-hidden="true"
              className="heroHeadlineOrange col-start-1 row-start-1 w-full m-0 z-[2] text-ax-orange-core pointer-events-none pb-[300px] mb-[-300px]"
              style={{
                opacity: pointer.active ? 1 : 0,
                maskImage: 'radial-gradient(100px circle at var(--mouse-x) var(--mouse-y), black 99%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(100px circle at var(--mouse-x) var(--mouse-y), black 99%, transparent 100%)',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                transition: 'opacity 160ms ease-in-out'
              }}
            >
              <HeroText currentIdx={currentIdx} isBase={false} />
            </div>
          )}
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .heroHeadlineBase, .heroHeadlineOrange {
            font-size: clamp(46px, 13vw, 64px);
            line-height: 0.94;
            letter-spacing: -0.045em;
            font-weight: 560;
          }
          @media (min-width: 900px) {
            .heroHeadlineBase, .heroHeadlineOrange {
              font-size: clamp(58px, 7.4vw, 80px);
              line-height: 0.91;
              letter-spacing: -0.052em;
              max-width: 900px;
            }
          }
          @media (min-width: 1180px) {
            .heroHeadlineBase, .heroHeadlineOrange {
              font-size: clamp(58px, 7vw, 92px);
              max-width: 1080px;
            }
          }
          .phraseShell {
             position: relative;
             display: inline-block;
             vertical-align: top;
             width: 0;
          }
          .phraseVisible {
             position: absolute;
             inset: 0;
          }
        `}} />

        <p className="heroSupport mt-6 md:mt-[34px] text-[17px] md:text-[18px] leading-[1.5] text-white/80 max-w-[680px] font-normal z-30">
          Alter Engine structures complex work, carries out approved steps and keeps important decisions open to review.
        </p>

        <div className="heroActions mt-6 md:mt-[32px] flex flex-col sm:flex-row items-center gap-6 z-30">
          <Link 
            href={alterEngineDestination} 
            style={{ background: 'var(--ax-orange-gradient)' }}
            className="inline-flex h-12 items-center justify-center rounded-[4px] px-8 text-[var(--body-small)] font-medium text-ax-ink hover:brightness-110 transition-all focus-visible:outline-ax-white focus-visible:outline-2 focus-visible:outline-offset-4 shadow-none"
          >
            Try Alter Engine
          </Link>
          <Link href="#how-it-works" className="inline-flex h-12 items-center justify-center px-6 text-[var(--body-small)] font-medium text-white hover:text-ax-orange transition-colors">
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
}

function HeroText({ currentIdx, isBase }: { currentIdx: number, isBase: boolean }) {
  return (
    <>
      <div className="block">Start with the outcome.</div>
      <div className="block flex flex-wrap gap-x-[0.22em]">
        <span>Watch it become</span>
        <span className="phraseShell">
          <span className={`phraseVisible ${isBase ? 'hero-phrase-active' : 'hero-phrase-active'}`}>
            {phrases[currentIdx]}
          </span>
        </span>
      </div>
    </>
  );
}
