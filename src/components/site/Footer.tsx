"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '../shared/Logo';

export function Footer() {
  const xContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (xContainerRef.current) {
        const rect = xContainerRef.current.getBoundingClientRect();
        
        // Only react if within a certain distance
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;
        const dist = Math.sqrt(distX * distX + distY * distY);
        
        if (dist < 400) {
          const strength = 1 - (dist / 400);
          const xMove = (distX / 400) * 14 * strength; // max 14px displacement
          const yMove = (distY / 400) * 14 * strength;
          
          xContainerRef.current.style.setProperty('--x-move', `${xMove}px`);
          xContainerRef.current.style.setProperty('--y-move', `${yMove}px`);
        } else {
          xContainerRef.current.style.setProperty('--x-move', `0px`);
          xContainerRef.current.style.setProperty('--y-move', `0px`);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer className="w-full bg-ax-black text-ax-warm-white py-24 pb-12 overflow-hidden relative">
      {/* Refinement 09: Subtle upper boundary line */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px] opacity-40 pointer-events-none"
        style={{ background: 'var(--ax-gradient-edge)' }}
      />
      
      <div className="max-w-[1560px] mx-auto px-7 lg:px-10 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-start justify-between mb-24 pb-24 border-b border-[rgba(255,255,255,0.16)]">
          
          <div className="w-full lg:w-1/3 mb-16 lg:mb-0 relative">
            <Logo className="h-12 w-auto text-ax-warm-white mb-8" />
            <p className="text-xl text-white/60 max-w-sm leading-relaxed">
              From objective to completed, reviewable work.
            </p>
          </div>
          
          <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-sm">
            <div>
              <h4 className="font-semibold text-white/40 mb-6 uppercase tracking-widest text-[11px]">Alter Engine</h4>
              <ul className="space-y-4">
                <li><Link href="#overview" className="hover:text-ax-orange transition-colors">Overview</Link></li>
                <li><Link href="#how-it-works" className="hover:text-ax-orange transition-colors">How it works</Link></li>
                <li><Link href="#governance" className="hover:text-ax-orange transition-colors">Control & governance</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white/40 mb-6 uppercase tracking-widest text-[11px]">Solutions</h4>
              <ul className="space-y-4">
                <li><Link href="#cognitive-ai" className="hover:text-ax-orange transition-colors">Cognitive AI</Link></li>
                <li><Link href="#custom-workflows" className="hover:text-ax-orange transition-colors">Custom workflows</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white/40 mb-6 uppercase tracking-widest text-[11px]">Developers</h4>
              <ul className="space-y-4">
                <li><Link href="#api" className="hover:text-ax-orange transition-colors">API documentation</Link></li>
                <li><Link href="#sdks" className="hover:text-ax-orange transition-colors">SDKs & Tools</Link></li>
                <li><Link href="#status" className="hover:text-ax-orange transition-colors">System status</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white/40 mb-6 uppercase tracking-widest text-[11px]">Resources</h4>
              <ul className="space-y-4">
                <li><Link href="#blog" className="hover:text-ax-orange transition-colors">Blog</Link></li>
                <li><Link href="#case-studies" className="hover:text-ax-orange transition-colors">Case studies</Link></li>
                <li><Link href="#help" className="hover:text-ax-orange transition-colors">Help center</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white/40 mb-6 uppercase tracking-widest text-[11px]">Company</h4>
              <ul className="space-y-4">
                <li><Link href="#about" className="hover:text-ax-orange transition-colors">About AlterX</Link></li>
                <li><Link href="#mission" className="hover:text-ax-orange transition-colors">Mission</Link></li>
                <li><Link href="#contact" className="hover:text-ax-orange transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} AlterX Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <Link href="#privacy" className="hover:text-ax-warm-white transition-colors">Privacy & terms</Link>
            <Link href="#security" className="hover:text-ax-warm-white transition-colors">Security</Link>
            <Link href="#legal" className="hover:text-ax-warm-white transition-colors">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
