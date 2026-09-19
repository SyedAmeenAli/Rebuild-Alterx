"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navigationData } from "@/content/navigation";
import { MegaMenu } from "./MegaMenu";

const CHEVRON = (open: boolean) => (
  <svg
    width="9"
    height="6"
    viewBox="0 0 9 6"
    fill="none"
    className="transition-transform duration-200"
    style={{ transform: open ? "rotate(180deg)" : "none" }}
    aria-hidden="true"
  >
    <path d="M1 1L4.5 4.5L8 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function DesktopNavigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("navDropdownState", { detail: { isOpen: activeMenu !== null } }));
  }, [activeMenu]);

  const open = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setActiveMenu(id), 70);
  };

  const close = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 160);
  };

  const cancelClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveMenu(activeMenu === id ? null : id);
    }
    if (e.key === "ArrowRight" && index < navigationData.length - 1) {
      e.preventDefault();
      (e.currentTarget.closest("[data-nav-item]")?.nextElementSibling?.querySelector("button,a") as HTMLElement)?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      (e.currentTarget.closest("[data-nav-item]")?.previousElementSibling?.querySelector("button,a") as HTMLElement)?.focus();
    }
    if (e.key === "Escape") setActiveMenu(null);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveMenu(id);
      setTimeout(() => {
        const firstLink = document.querySelector(`[data-menu-panel="${id}"] a`) as HTMLElement;
        if (firstLink) firstLink.focus();
      }, 50);
    }
  };

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMenu(null);
    };
    const handleScroll = () => {
      if (activeMenu) setActiveMenu(null);
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeMenu]);

  return (
    <>
      <nav className="flex items-center gap-1">
        {navigationData.map((menu, i) => {
          const isActive = activeMenu === menu.id;
          const isCurrentPage = !!menu.href && (pathname === menu.href || (menu.href !== "/" && pathname.startsWith(`${menu.href}/`)));
          const triggerClass = `relative flex items-center gap-1.5 px-4 py-2 text-[14px] font-medium leading-[1] transition-colors duration-200 focus-visible:outline-ax-mint focus-visible:outline-2 focus-visible:outline-offset-2 ${
            isCurrentPage ? "text-ax-mint" : "text-white/80 hover:text-white"
          }`;

          if (menu.type === "link") {
            return (
              <div key={menu.id} data-nav-item>
                <Link href={menu.href ?? "#"} aria-current={isCurrentPage ? "page" : undefined} className={triggerClass}>
                  {menu.label}
                  {isCurrentPage && <span className="absolute inset-x-4 -bottom-[1px] h-[2px] rounded-full bg-ax-mint" aria-hidden="true" />}
                </Link>
              </div>
            );
          }

          if (menu.type === "mega") {
            return (
              <div key={menu.id} data-nav-item onMouseEnter={() => open(menu.id)} onMouseLeave={close}>
                <button
                  data-menuid={menu.id}
                  onFocus={() => open(menu.id)}
                  onClick={() => setActiveMenu(isActive ? null : menu.id)}
                  onKeyDown={(e) => handleKeyDown(e, menu.id, i)}
                  aria-expanded={isActive}
                  aria-current={isCurrentPage ? "page" : undefined}
                  aria-haspopup="true"
                  className={triggerClass}
                >
                  {menu.label}
                  {CHEVRON(isActive)}
                  {isCurrentPage && !isActive && <span className="absolute inset-x-4 -bottom-[1px] h-[2px] rounded-full bg-ax-mint" aria-hidden="true" />}
                </button>
              </div>
            );
          }

          // compact list dropdown — positioned inline, directly under its own trigger
          return (
            <div key={menu.id} data-nav-item className="relative" onMouseEnter={() => open(menu.id)} onMouseLeave={close}>
              <button
                data-menuid={menu.id}
                onFocus={() => open(menu.id)}
                onClick={() => setActiveMenu(isActive ? null : menu.id)}
                onKeyDown={(e) => handleKeyDown(e, menu.id, i)}
                aria-expanded={isActive}
                aria-current={isCurrentPage ? "page" : undefined}
                aria-haspopup="true"
                className={triggerClass}
              >
                {menu.label}
                {CHEVRON(isActive)}
                {isCurrentPage && !isActive && <span className="absolute inset-x-4 -bottom-[1px] h-[2px] rounded-full bg-ax-mint" aria-hidden="true" />}
              </button>

              <div
                data-menu-panel={menu.id}
                onMouseEnter={cancelClose}
                onMouseLeave={close}
                className={`absolute left-0 top-full z-[var(--z-mega-menu)] w-[300px] rounded-[14px] border border-ax-mint/10 bg-ax-surface/98 p-2 shadow-2xl transition-all duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isActive ? "pointer-events-auto translate-y-2 opacity-100" : "pointer-events-none translate-y-0 opacity-0"
                }`}
                style={{ marginTop: "10px" }}
              >
                <div className="flex flex-col">
                  {menu.items?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setActiveMenu(null)}
                      className="group rounded-[10px] px-3.5 py-2.5 transition-colors hover:bg-ax-mint/[0.06]"
                    >
                      <div className="text-[14px] font-medium text-ax-white transition-colors group-hover:text-ax-mint">{item.label}</div>
                      {item.desc && <div className="mt-0.5 text-[12.5px] leading-[1.45] text-ax-muted">{item.desc}</div>}
                    </Link>
                  ))}
                </div>
                {menu.footerHref && (
                  <>
                    <div className="my-1.5 border-t border-ax-mint/10" />
                    <Link
                      href={menu.footerHref}
                      onClick={() => setActiveMenu(null)}
                      className="group flex items-center gap-1.5 rounded-[10px] px-3.5 py-2.5 text-[13px] font-medium text-ax-muted transition-colors hover:text-ax-mint"
                    >
                      {menu.footerLabel}
                      <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </nav>

      <MegaMenu
        activeMenu={activeMenu === "products" ? "products" : null}
        onClose={() => setActiveMenu(null)}
        onMouseEnter={cancelClose}
        onMouseLeave={close}
      />
    </>
  );
}
