"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LiquidLogo } from '../shared/LiquidLogo';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNav } from './MobileNav';
import { talkToUsDestination } from '@/content/navigation';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[var(--z-header)] h-[72px] text-ax-white"
      style={{ ['--header-height' as string]: '72px' }}
    >
      <div
        className={`absolute inset-0 pointer-events-none border-b transition-all duration-300 ${
          scrolled
            ? 'bg-ax-bg/85 backdrop-blur-md border-ax-mint/10'
            : 'bg-gradient-to-b from-ax-black/55 to-transparent border-transparent'
        }`}
      />

      <div className="container-ax relative flex h-full items-center justify-between">
        {/* Reserves layout space for LiquidLogo, which is position:fixed and
            self-positions — sized for its widest (hero) state so nav never
            gets covered at any scroll position. */}
        <div className="flex-shrink-0 w-[70px] lg:w-[320px]" aria-hidden="true" />
        <LiquidLogo />

        <div className="hidden lg:flex flex-1 items-center justify-start relative z-10">
          <DesktopNavigation />
        </div>

        <div className="flex-shrink-0 flex items-center justify-end gap-5 relative z-20">
          <Link
            href={talkToUsDestination}
            className="group inline-flex items-center gap-1.5 rounded-[6px] border px-4 py-2 text-[14px] font-medium transition-all duration-200 hover:-translate-y-px focus-visible:outline-ax-mint focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: "#123D27", borderColor: "rgba(91,234,153,0.20)", color: "#D8FFE7" }}
          >
            Talk to us
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
