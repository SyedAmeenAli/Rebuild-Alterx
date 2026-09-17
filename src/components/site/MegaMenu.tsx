"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { alterEngineDestination } from '@/content/navigation';

export type MegaMenuId =
  | "products"
  | "solutions"
  | "developers"
  | "resources"
  | "about"
  | null;

interface MegaMenuProps {
  activeMenu: MegaMenuId;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function MegaMenu({ activeMenu, onClose, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  const [mountedMenu, setMountedMenu] = useState<MegaMenuId>(activeMenu);
  const [isFading, setIsFading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (activeMenu && !isOpen) {
      setMountedMenu(activeMenu);
      setIsOpen(true);
    } else if (activeMenu && isOpen && activeMenu !== mountedMenu) {
      setIsFading(true);
      timer = setTimeout(() => {
        setMountedMenu(activeMenu);
        setIsFading(false);
      }, 90);
    } else if (!activeMenu && mountedMenu) {
      if (isOpen) setIsOpen(false);
      timer = setTimeout(() => {
        setMountedMenu(null);
      }, 120);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [activeMenu, isOpen, mountedMenu]);

  if (!isOpen && !mountedMenu) return null;

  return (
    <>
      <div
        className={`fixed inset-x-0 bottom-0 z-[var(--z-menu-backdrop)] bg-ax-black/70 transition-all duration-[120ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ top: 'var(--header-height, 72px)' }}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`mega-menu-portal-panel fixed left-1/2 -translate-x-1/2 z-[var(--z-mega-menu)] w-[min(1160px,calc(100vw-56px))] max-h-[calc(100svh-var(--header-height,72px)-36px)] overflow-y-auto bg-ax-surface/98 backdrop-blur-xl border border-ax-mint/10 rounded-lg shadow-2xl transition-all ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'opacity-100 translate-y-0 duration-[180ms]' : 'opacity-0 -translate-y-1 duration-[120ms]'}`}
        style={{ top: 'calc(var(--header-height, 72px) + 10px)' }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className={`transition-all ease-[cubic-bezier(0.25,1,0.5,1)] ${isFading ? 'opacity-0 translate-y-1 duration-[90ms]' : 'opacity-100 translate-y-0 duration-[160ms]'}`}>
          {mountedMenu === 'products' && <ProductsMenu />}
          {mountedMenu === 'solutions' && <SolutionsMenu />}
          {mountedMenu === 'developers' && <DevelopersMenu />}
          {mountedMenu === 'resources' && <ResourcesMenu />}
          {mountedMenu === 'about' && <AboutMenu />}
        </div>
      </div>
    </>
  );
}

function Column({ children, isLast }: { children: React.ReactNode, isLast?: boolean }) {
  return (
    <div className={`p-8 lg:p-10 ${!isLast ? 'border-r border-ax-mint/10' : ''}`}>
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="text-[12px] font-semibold text-ax-muted uppercase tracking-wider mb-6">{children}</div>;
}

function NavLink({ href, title, desc, large }: { href: string, title: string, desc?: string, large?: boolean }) {
  return (
    <Link href={href} className="group block mb-5 last:mb-0">
      <div className={`font-medium transition-colors group-hover:text-ax-mint flex items-center gap-2 ${large ? 'font-display text-[22px] md:text-[26px] leading-[1.2] text-ax-white' : 'text-[16px] leading-[1.3] text-ax-text'}`}>
        {title}
        {large && <span className="text-ax-mint opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">→</span>}
      </div>
      {desc && <div className="text-[14px] text-ax-muted mt-1.5 leading-relaxed">{desc}</div>}
    </Link>
  );
}

function ProductsMenu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 min-h-[320px]">
      <Column>
        <div className="font-display text-[24px] text-ax-white leading-tight mb-3">The intelligence behind execution.</div>
        <div className="text-[15px] text-ax-muted leading-relaxed">Two real products built on the same execution technology.</div>
      </Column>
      <Column>
        <SectionLabel>Alter Engine</SectionLabel>
        <NavLink href="/products#alter-engine" title="Alter Engine" desc="Turns objectives into planned, executed and verified work." large />
      </Column>
      <Column isLast>
        <SectionLabel>AxInventory</SectionLabel>
        <NavLink href="/products#axinventory" title="AxInventory" desc="Inventory, POS, purchasing, GST and accounting." large />
      </Column>
    </div>
  );
}

function SolutionsMenu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 min-h-[320px]">
      <Column>
        <div className="font-display text-[24px] text-ax-white leading-tight mb-3">From objective to outcome.</div>
        <div className="text-[15px] text-ax-muted leading-relaxed">How ALTERX moves work forward.</div>
      </Column>
      <Column>
        <SectionLabel>Process</SectionLabel>
        <NavLink href="/solutions#understand" title="Understand" />
        <NavLink href="/solutions#plan" title="Plan" />
      </Column>
      <Column>
        <SectionLabel>&nbsp;</SectionLabel>
        <NavLink href="/solutions#execute" title="Execute" />
        <NavLink href="/solutions#verify" title="Verify" />
      </Column>
      <Column isLast>
        <SectionLabel>Access</SectionLabel>
        <NavLink href={alterEngineDestination} title="Try Alter Engine" />
      </Column>
    </div>
  );
}

function DevelopersMenu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 min-h-[320px]">
      <Column>
        <div className="font-display text-[24px] text-ax-white leading-tight mb-3">Build with ALTERX.</div>
        <div className="text-[15px] text-ax-muted leading-relaxed">Bring execution into your own systems.</div>
      </Column>
      <Column>
        <SectionLabel>Technical</SectionLabel>
        <NavLink href="/developers#overview" title="Developer overview" />
        <NavLink href="/developers#documentation" title="Documentation" />
      </Column>
      <Column isLast>
        <SectionLabel>Access</SectionLabel>
        <NavLink href="/developers#apis" title="APIs / SDKs" />
        <NavLink href="/developers#playground" title="Playground" />
      </Column>
    </div>
  );
}

function ResourcesMenu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 min-h-[320px]">
      <Column>
        <div className="font-display text-[24px] text-ax-white leading-tight mb-3">Understand the system.</div>
        <div className="text-[15px] text-ax-muted leading-relaxed">Guides, research and product updates.</div>
      </Column>
      <Column>
        <SectionLabel>Learn</SectionLabel>
        <NavLink href="/resources" title="Resource hub" />
        <NavLink href="/resources#guides" title="Guides" />
      </Column>
      <Column isLast>
        <SectionLabel>Read</SectionLabel>
        <NavLink href="/resources#case-studies" title="Case studies" />
        <NavLink href="/resources#research" title="Research and updates" />
      </Column>
    </div>
  );
}

function AboutMenu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 min-h-[320px]">
      <Column>
        <div className="font-display text-[22px] text-ax-white leading-tight">AI should remain accountable for the work it performs.</div>
      </Column>
      <Column>
        <SectionLabel>Company</SectionLabel>
        <NavLink href="/about#story" title="Our story" />
        <NavLink href="/about#mission" title="Mission" />
      </Column>
      <Column>
        <SectionLabel>&nbsp;</SectionLabel>
        <NavLink href="/about#company" title="Company" />
        <NavLink href="/careers" title="Careers" />
      </Column>
      <Column isLast>
        <SectionLabel>Contact</SectionLabel>
        <NavLink href="/contact" title="Talk to us" />
      </Column>
    </div>
  );
}
