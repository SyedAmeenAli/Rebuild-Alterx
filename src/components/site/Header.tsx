"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Logo } from '../shared/Logo';
import { DesktopNavigation } from './DesktopNavigation';
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

      <div className="flex-shrink-0 relative z-20 h-6">
        <Link href="/" aria-label="ALTERX Homepage" className="block h-full focus-visible:outline-ax-mint focus-visible:outline-2 focus-visible:outline-offset-4 rounded-sm">
          <Logo className="h-full w-auto" />
        </Link>
      </div>

      <div className="hidden lg:flex flex-1 justify-center relative z-10 w-full max-w-[1280px] mx-auto">
        <DesktopNavigation />
      </div>

      <div className="flex-shrink-0 flex items-center justify-end relative z-20">
        <Link
          href={talkToUsDestination}
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-[4px] bg-ax-mint text-ax-black focus-visible:outline-ax-mint focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200 hover:bg-ax-emerald"
        >
          Talk to us
        </Link>
      </div>
    </header>
  );
}
