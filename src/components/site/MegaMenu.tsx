"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/content/navigation";
import dynamic from "next/dynamic";
import { ProductVisual } from "@/components/shared/ProductVisual";
import BorderGlow from "@/components/shared/BorderGlow";

// Lazy-loaded: pulls in `motion` for the drag gesture, only needed once
// someone actually opens Products and lands on AxInventory — not worth
// adding to the header's shared bundle that ships on every page.
const AxInventorySwipeVisual = dynamic(
  () => import("@/components/site/AxInventorySwipeVisual").then((m) => m.AxInventorySwipeVisual),
  { ssr: false }
);

interface MegaMenuProps {
  activeMenu: "products" | null;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function MegaMenu({ activeMenu, onClose, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (activeMenu === "products") {
      setIsOpen(true);
      setSelected(0);
    } else {
      setIsOpen(false);
    }
  }, [activeMenu]);

  if (!isOpen && activeMenu !== "products") return null;

  return (
    <>
      <div
        className={`fixed inset-x-0 bottom-0 z-[var(--z-menu-backdrop)] bg-ax-black/70 transition-opacity duration-[120ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ top: "var(--header-height, 72px)" }}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`mega-menu-portal-panel fixed left-1/2 z-[var(--z-mega-menu)] w-[min(920px,calc(100vw-56px))] -translate-x-1/2 overflow-hidden rounded-[20px] border border-ax-mint/10 bg-[#06110B] shadow-2xl transition-all ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isOpen ? "translate-y-0 opacity-100 duration-[220ms]" : "-translate-y-1.5 opacity-0 duration-[160ms]"
        }`}
        style={{ top: "calc(var(--header-height, 72px) + 10px)" }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        data-menu-panel="products"
      >
        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr]">
          <div className="p-7 md:p-8">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ax-muted">Products</p>
            <div className="flex flex-col">
              {PRODUCTS.map((p, i) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onMouseEnter={() => setSelected(i)}
                  onFocus={() => setSelected(i)}
                  onClick={onClose}
                  className="group rounded-[10px] px-3 py-3 transition-colors hover:bg-ax-mint/[0.06]"
                >
                  <div
                    className="font-display text-[19px] font-medium transition-colors"
                    style={{ color: selected === i ? "#9FFFC0" : "#F4FFF8" }}
                  >
                    {p.label}
                  </div>
                  {p.desc && <div className="mt-1 text-[13px] leading-[1.5] text-ax-muted">{p.desc}</div>}
                </Link>
              ))}
            </div>

            <div className="mt-2 border-t border-ax-mint/10 pt-2">
              <Link
                href="/products"
                onClick={onClose}
                className="group flex items-center gap-1.5 rounded-[10px] px-3 py-2.5 text-[13px] font-medium text-ax-muted transition-colors hover:text-ax-mint"
              >
                Explore all products
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="relative hidden border-l border-ax-mint/10 p-6 md:block">
            <BorderGlow borderRadius={12} backgroundColor="rgba(0,0,0,0)" className="h-full w-full">
              <div key={selected} className="menu-visual-switch h-full w-full overflow-hidden rounded-[12px]">
                {PRODUCTS[selected].visual === "inventory" ? (
                  <AxInventorySwipeVisual />
                ) : (
                  <ProductVisual visual={PRODUCTS[selected].visual} />
                )}
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </>
  );
}
