"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { alterEngineDestination } from '@/content/navigation';

export type MegaMenuId =
  | "engine"
  | "solutions"
  | "products"
  | "developers"
  | "company"
  | "resources"
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
      // Opening
      // eslint-disable-next-line
      setMountedMenu(activeMenu);
      setIsOpen(true);
    } else if (activeMenu && isOpen && activeMenu !== mountedMenu) {
      // Switching menu content
      setIsFading(true);
      timer = setTimeout(() => {
        setMountedMenu(activeMenu);
        setIsFading(false);
      }, 90); // Out duration for internal content transition
    } else if (!activeMenu && mountedMenu) {
      // Closing (we check mountedMenu instead of isOpen so we can actually set mountedMenu to null)
      if (isOpen) setIsOpen(false);
      timer = setTimeout(() => {
        setMountedMenu(null);
      }, 120); // Close duration
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [activeMenu, isOpen, mountedMenu]);

  if (!isOpen && !mountedMenu) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-x-0 bottom-0 z-[var(--z-menu-backdrop)] bg-ax-black/60 transition-all duration-[120ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ top: 'var(--header-height, 84px)' }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mega Menu Portal Panel */}
      <div 
        className={`fixed left-1/2 -translate-x-1/2 z-[var(--z-mega-menu)] w-[min(1440px,calc(100vw-96px))] xl:w-[calc(100vw-40px)] max-h-[calc(100svh-var(--header-height,84px)-36px)] overflow-y-auto bg-ax-ivory border border-ax-border-light/100 rounded-sm shadow-xl transition-all ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'opacity-100 translate-y-0 duration-[180ms]' : 'opacity-0 -translate-y-1 duration-[120ms]'}`}
        style={{ top: 'calc(var(--header-height, 84px) + 12px)' }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className={`transition-all ease-[cubic-bezier(0.25,1,0.5,1)] ${isFading ? 'opacity-0 translate-y-1 duration-[90ms]' : 'opacity-100 translate-y-0 duration-[160ms]'}`}>
          {mountedMenu === 'engine' && <EngineMenu />}
          {mountedMenu === 'solutions' && <SolutionsMenu />}
          {mountedMenu === 'products' && <ProductsMenu />}
          {mountedMenu === 'developers' && <DevelopersMenu />}
          {mountedMenu === 'company' && <CompanyMenu />}
          {mountedMenu === 'resources' && <ResourcesMenu />}
        </div>
      </div>
    </>
  );
}

function Column({ children, isLast }: { children: React.ReactNode, isLast?: boolean }) {
  return (
    <div className={`p-8 lg:p-12 ${!isLast ? 'border-r border-ax-border-light/40' : ''}`}>
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="text-[12px] font-semibold text-ax-text-muted uppercase tracking-wider mb-6">{children}</div>;
}

function NavLink({ href, title, desc, large }: { href: string, title: string, desc?: string, large?: boolean }) {
  return (
    <Link href={href} className="group block mb-5 last:mb-0">
      <div className={`font-medium transition-colors group-hover:text-ax-orange flex items-center gap-2 ${large ? 'text-[22px] md:text-[26px] leading-[1.2]' : 'text-[16px] md:text-[18px] leading-[1.3] text-ax-black'}`}>
        {title}
        {large && <span className="text-ax-orange opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">→</span>}
      </div>
      {desc && <div className="text-[15px] text-ax-text-muted mt-1.5 leading-relaxed">{desc}</div>}
    </Link>
  );
}

/* Specific Menus */

function EngineMenu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[380px]">
      <Column>
        <div className="flex flex-col h-full">
          <div>
            <div className="text-[26px] font-medium text-ax-black leading-tight mb-4">Start with the outcome.</div>
            <div className="text-[16px] text-ax-text-muted leading-relaxed mb-8">See how Alter Engine turns a complex objective into planned and reviewable work.</div>
          </div>
          <div className="mt-auto bg-ax-paper border border-ax-border-light/60 rounded p-6 flex flex-col gap-2">
            {['Understand', 'Plan', 'Approve', 'Act', 'Check'].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${step === 'Approve' ? 'bg-ax-orange' : 'bg-ax-border-light'}`} />
                <div className={`text-[15px] font-medium ${step === 'Approve' ? 'text-ax-orange' : 'text-ax-black'}`}>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </Column>
      <Column>
        <SectionLabel>Product</SectionLabel>
        <NavLink href="#engine" title="Alter Engine overview" />
        <NavLink href="#how-it-works" title="How it works" />
        <div className="mt-8 pt-6 border-t border-ax-border-light/40">
          <NavLink href={alterEngineDestination} title="Try Alter Engine" large />
        </div>
      </Column>
      <Column>
        <SectionLabel>Control</SectionLabel>
        <NavLink href="#approval" title="Human approval" />
        <NavLink href="#recovery" title="Checking and recovery" />
        <NavLink href="#security" title="Security and governance" />
      </Column>
      <Column isLast>
        <SectionLabel>Explore</SectionLabel>
        <NavLink href="#operational" title="Operational coordination" />
        <NavLink href="#research" title="Research and reporting" />
        <NavLink href="#custom" title="Custom workflows" />
      </Column>
    </div>
  );
}

function SolutionsMenu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[380px]">
      <Column>
        <SectionLabel>Featured</SectionLabel>
        <div className="text-[26px] font-medium text-ax-black leading-tight mb-4">Cognitive AI</div>
        <div className="text-[16px] text-ax-text-muted leading-relaxed mb-8">Inventory operations powered by Alter Engine.</div>
        <div className="mt-auto h-32 bg-ax-paper border border-ax-border-light/60 rounded flex items-center justify-center relative overflow-hidden">
           <div className="w-16 h-16 border-[4px] border-ax-orange/20 rounded-full flex items-center justify-center">
             <div className="w-8 h-8 bg-ax-orange rounded-full animate-pulse" />
           </div>
        </div>
      </Column>
      <Column>
        <SectionLabel>Solution</SectionLabel>
        <NavLink href="#cognitive-ai" title="Cognitive AI" />
        <NavLink href="#custom-workflows" title="Custom workflows" />
      </Column>
      <Column>
        <SectionLabel>Operating contexts</SectionLabel>
        <NavLink href="#inventory" title="Inventory decisions" />
        <NavLink href="#operational" title="Operational coordination" />
        <NavLink href="#research" title="Research and reporting" />
      </Column>
      <Column isLast>
        <SectionLabel>Access</SectionLabel>
        <NavLink href={alterEngineDestination} title="Try Alter Engine" />
        <NavLink href="#discuss" title="Discuss a workflow" />
        <NavLink href="#contact" title="Contact AlterX" />
      </Column>
    </div>
  );
}

function ProductsMenu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[380px]">
      <Column>
        <SectionLabel>Featured</SectionLabel>
        <div className="text-[26px] font-medium text-ax-black leading-tight mb-4">Alter Engine</div>
        <div className="text-[16px] text-ax-text-muted leading-relaxed">The flagship AlterX product.</div>
      </Column>
      <Column>
        <SectionLabel>Product</SectionLabel>
        <NavLink href="#engine" title="Alter Engine" />
        <NavLink href="#cognitive-ai" title="Cognitive AI" />
      </Column>
      <Column>
        <SectionLabel>Experience</SectionLabel>
        <NavLink href="#platform" title="Platform experience" desc="The workspace used to define, supervise and review Alter Engine work." />
      </Column>
      <Column isLast>
        <SectionLabel>Access</SectionLabel>
        <NavLink href={alterEngineDestination} title="Try Alter Engine" />
        <NavLink href="#explore" title="Explore product workflow" />
        <NavLink href="#contact" title="Talk to AlterX" />
      </Column>
    </div>
  );
}

function DevelopersMenu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[380px]">
      <Column>
        <SectionLabel>Featured</SectionLabel>
        <div className="text-[26px] font-medium text-ax-black leading-tight mb-4">Build with AlterX</div>
        <div className="text-[16px] text-ax-text-muted leading-relaxed">Explore bringing approval-aware Engine workflows into a product or internal system.</div>
      </Column>
      <Column>
        <SectionLabel>Technical</SectionLabel>
        <NavLink href="#dev-overview" title="Developer overview" />
        <NavLink href="#architecture" title="Architecture" />
      </Column>
      <Column>
        <SectionLabel>Workflow</SectionLabel>
        <NavLink href="#goal-submission" title="Goal submission" />
        <NavLink href="#approval-events" title="Approval events" />
        <NavLink href="#execution-states" title="Execution states" />
        <NavLink href="#reviewable-results" title="Reviewable results" />
      </Column>
      <Column isLast>
        <SectionLabel>Access</SectionLabel>
        <NavLink href={alterEngineDestination} title="Try Alter Engine" large />
      </Column>
    </div>
  );
}

function CompanyMenu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[380px]">
      <Column>
        <div className="text-[26px] font-medium text-ax-black leading-tight">AI should remain accountable for the work it performs.</div>
      </Column>
      <Column>
        <SectionLabel>Company</SectionLabel>
        <NavLink href="#about" title="About AlterX" />
        <NavLink href="#mission" title="Mission" />
      </Column>
      <Column>
        <SectionLabel>Principles</SectionLabel>
        <NavLink href="#human-authority" title="Human authority" />
        <NavLink href="#visible-work" title="Visible work" />
        <NavLink href="#checked-results" title="Checked results" />
      </Column>
      <Column isLast>
        <SectionLabel>Contact</SectionLabel>
        <NavLink href="#contact" title="Contact AlterX" />
        <NavLink href="#partnership" title="Partnership enquiry" />
      </Column>
    </div>
  );
}

function ResourcesMenu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[380px]">
      <Column>
        <div className="text-[26px] font-medium text-ax-black leading-tight mb-4">Understand the system before adopting it.</div>
        <div className="mt-8 flex gap-2">
           <div className="w-8 h-8 rounded-full border-2 border-ax-orange flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-ax-orange"/></div>
           <div className="w-8 h-8 rounded-full border border-ax-border-light flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-ax-black"/></div>
        </div>
      </Column>
      <Column>
        <SectionLabel>Learn</SectionLabel>
        <NavLink href="#how-it-works" title="How Alter Engine works" />
        <NavLink href="#overview" title="Alter Engine overview" />
      </Column>
      <Column>
        <SectionLabel>Trust</SectionLabel>
        <NavLink href="#security" title="Security and governance" />
        <NavLink href="#approval" title="Human approval" />
        <NavLink href="#recovery" title="Checking and recovery" />
      </Column>
      <Column isLast>
        <SectionLabel>Company information</SectionLabel>
        <NavLink href="#contact" title="Contact" />
        <NavLink href="#privacy" title="Privacy" />
        <NavLink href="#terms" title="Terms" />
        <NavLink href="#security-contact" title="Security contact" />
      </Column>
    </div>
  );
}
