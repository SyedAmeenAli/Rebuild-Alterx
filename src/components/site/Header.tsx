"use client";

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Logo } from '../shared/Logo';
import { DesktopNavigation } from './DesktopNavigation';
import { alterEngineDestination } from '@/content/navigation';

export function Header() {
  const [themeProgress, setThemeProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const handleDropdown = (e: Event) => {
      const customEvent = e as CustomEvent;
      setMenuOpen(customEvent.detail.isOpen);
    };
    window.addEventListener('navDropdownState', handleDropdown);
    return () => window.removeEventListener('navDropdownState', handleDropdown);
  }, []);

  useEffect(() => {
    if (menuOpen) return; // Freeze when menu is open

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const progress = Math.min(Math.max(scrollY / heroHeight, 0), 1);
      
      let newThemeProgress = 0;
      if (progress > 0.48 && progress <= 0.76) {
        newThemeProgress = (progress - 0.48) / (0.76 - 0.48);
      } else if (progress > 0.76) {
        newThemeProgress = 1;
      }
      
      if (Math.abs(newThemeProgress - progressRef.current) > 0.01 || newThemeProgress === 0 || newThemeProgress === 1) {
        progressRef.current = newThemeProgress;
        setThemeProgress(newThemeProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  // Flip text color at roughly 0.68 hero progress.
  // 0.68 hero progress corresponds to themeProgress of ~0.71 ( (0.68 - 0.48) / 0.28 )
  const isLightText = themeProgress <= 0.71;
  const textColorClass = isLightText ? 'text-ax-warm-white' : 'text-ax-ink';

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-[var(--z-header)] flex items-center justify-between px-7 lg:px-10 h-[72px] transition-colors duration-100 ${textColorClass}`}
      data-header-text-theme={isLightText ? 'dark-background' : 'light-background'}
    >
      {/* Background Layers */}
      <div 
        className="absolute inset-0 pointer-events-none bg-[#000000] border-b border-[rgba(255,255,255,0.12)]" 
        style={{ opacity: 1 - themeProgress }} 
      />
      <div 
        className="absolute inset-0 pointer-events-none bg-[rgba(251,250,247,0.98)] border-b border-[rgba(9,9,9,0.14)]" 
        style={{ opacity: themeProgress }} 
      />

      <div className="flex-shrink-0 relative z-20">
        <Link href="/" aria-label="AlterX Homepage" className="block focus-visible:outline-ax-orange focus-visible:outline-2 focus-visible:outline-offset-4 rounded-sm text-inherit">
          <Logo className="h-8 w-auto" />
        </Link>
      </div>

      <div className="hidden lg:flex flex-1 justify-center relative z-10 w-full max-w-[1280px] mx-auto">
        <DesktopNavigation />
      </div>

      <div className="flex-shrink-0 flex items-center justify-end relative z-20">
        <Link 
          href={alterEngineDestination}
          style={{ background: 'var(--ax-orange-gradient)' }}
          className={`inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-[4px] focus-visible:outline-ax-orange focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200 text-[#090909] hover:brightness-110 shadow-none`}
        >
          Try Alter Engine
        </Link>
      </div>
    </header>
  );
}
