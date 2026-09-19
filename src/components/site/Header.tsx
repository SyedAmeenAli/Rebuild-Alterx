"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Logo } from '../shared/Logo';
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
      className="fixed top-0 left-0 right-0 z-[var(--z-header)] flex items-center justify-between px-6 lg:px-9 h-[72px] text-ax-white"
      style={{ ['--header-height' as string]: '72px' }}
    >
      <div
        className={`absolute inset-0 pointer-events-none border-b transition-all duration-300 ${
          scrolled
            ? 'bg-ax-bg/85 backdrop-blur-md border-ax-mint/10'
            : 'bg-gradient-to-b from-ax-black/55 to-transparent border-transparent'
        }`}
      />

      <div className="flex-shrink-0 relative z-20 h-8 sm:h-9">
        <Link href="/" aria-label="ALTERX Homepage" className="block h-full focus-visible:outline-ax-mint focus-visible:outline-2 focus-visible:outline-offset-4 rounded-sm">
          <Logo className="h-full w-auto" />
        </Link>
      </div>

      <div className="hidden lg:flex flex-1 justify-center relative z-10 w-full max-w-[1280px] mx-auto">
        <DesktopNavigation />
      </div>

      <div className="flex-shrink-0 flex items-center justify-end gap-5 relative z-20">
        <Link
          href="/careers"
          className="hidden lg:inline-block text-[14px] font-medium text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline-ax-mint focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm"
        >
          Careers
        </Link>
        <Link
          href={talkToUsDestination}
          className="group inline-flex items-center gap-1.5 rounded-[4px] border border-ax-mint/15 bg-ax-mint/[0.08] px-4 py-2 text-[14px] font-medium text-ax-mint transition-colors duration-200 hover:bg-ax-mint/[0.14] focus-visible:outline-ax-mint focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Talk to us
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}
