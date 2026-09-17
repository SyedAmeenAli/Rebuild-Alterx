"use client";

import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { MegaMenu, MegaMenuId } from './MegaMenu';

const triggers: { id: MegaMenuId, label: string, href: string }[] = [
  { id: 'products', label: 'Products', href: '/products' },
  { id: 'solutions', label: 'Solutions', href: '/solutions' },
  { id: 'developers', label: 'Developers', href: '/developers' },
  { id: 'resources', label: 'Resources', href: '/resources' },
  { id: 'about', label: 'About', href: '/about' },
];

export function DesktopNavigation() {
  const [activeMenu, setActiveMenu] = useState<MegaMenuId>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Notify hero to pause/resume
    window.dispatchEvent(new CustomEvent('navDropdownState', { detail: { isOpen: activeMenu !== null } }));
  }, [activeMenu]);

  const handleMouseEnter = (id: MegaMenuId) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(id);
    }, 70); // 70ms intent delay
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 160); // 160ms close delay
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: MegaMenuId, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveMenu(activeMenu === id ? null : id);
    }
    if (e.key === 'ArrowRight' && index < triggers.length - 1) {
      e.preventDefault();
      (e.currentTarget.nextElementSibling as HTMLElement)?.focus();
    }
    if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault();
      (e.currentTarget.previousElementSibling as HTMLElement)?.focus();
    }
    if (e.key === 'Escape') {
      setActiveMenu(null);
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveMenu(id);
      // Wait for render then focus first link inside mega menu
      setTimeout(() => {
        const firstLink = document.querySelector('.mega-menu-portal-panel a') as HTMLElement;
        if (firstLink) firstLink.focus();
      }, 50);
    }
  };

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        // Focus the trigger if focus is inside menu
        if (document.activeElement?.closest('.mega-menu-portal-panel')) {
           const activeTrigger = document.querySelector(`button[data-menuid="${activeMenu}"]`) as HTMLElement;
           if (activeTrigger) activeTrigger.focus();
        }
      }
    };
    const handleScroll = () => {
      if (activeMenu) {
        setActiveMenu(null);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeMenu]);

  return (
    <>
      <nav 
        className="flex items-center space-x-1" 
        onMouseLeave={handleMouseLeave}
      >
        {triggers.map((menu, i) => {
          const isActive = activeMenu === menu.id;
          const isCurrentPage = pathname === menu.href || pathname.startsWith(`${menu.href}/`);
          const textColor = isActive
            ? 'text-ax-black'
            : isCurrentPage
              ? 'text-ax-mint hover:text-ax-mint'
              : 'text-white/80 hover:text-white';

          return (
            <button
              key={menu.id}
              data-menuid={menu.id}
              onMouseEnter={() => handleMouseEnter(menu.id)}
              onFocus={() => handleMouseEnter(menu.id)}
              onKeyDown={(e) => handleKeyDown(e, menu.id, i)}
              aria-expanded={isActive}
              aria-current={isCurrentPage ? 'page' : undefined}
              aria-haspopup="true"
              className={`relative px-4 py-2 text-[15px] font-medium leading-[1] rounded-[3px] transition-all duration-[150ms] ease-[cubic-bezier(0.25,1,0.5,1)] focus-visible:outline-ax-mint focus-visible:outline-2 focus-visible:outline-offset-2 ${
                isActive ? 'bg-ax-mint text-ax-black' : `bg-transparent ${textColor}`
              }`}
            >
              {menu.label}
              {isCurrentPage && !isActive && (
                <span className="absolute inset-x-4 -bottom-[1px] h-[2px] rounded-full bg-ax-mint" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Render the MegaMenu Portal Child here since we share the Header z-index context */}
      <MegaMenu 
        activeMenu={activeMenu} 
        onClose={() => setActiveMenu(null)}
        onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
        onMouseLeave={handleMouseLeave}
      />
    </>
  );
}
