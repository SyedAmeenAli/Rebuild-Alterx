"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navigationData, PRODUCTS, talkToUsDestination } from "@/content/navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setExpanded(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative z-20 flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-[6px] border border-ax-mint/20 bg-ax-black/40 backdrop-blur-sm focus-visible:outline-ax-mint focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <span
          className={`block h-[2px] w-5 rounded-full bg-ax-white transition-transform duration-200 ${
            open ? "translate-y-[3.25px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-[2px] w-5 rounded-full bg-ax-white transition-transform duration-200 ${
            open ? "-translate-y-[3.25px] -rotate-45" : ""
          }`}
        />
      </button>

      <div
        className={`fixed inset-0 z-10 overflow-y-auto bg-ax-bg/98 backdrop-blur-md transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex min-h-full flex-col justify-center gap-1 px-8 py-28">
          {navigationData.map((menu) => {
            if (menu.type === "link") {
              return (
                <Link
                  key={menu.id}
                  href={menu.href ?? "#"}
                  onClick={close}
                  className="font-display border-b border-ax-mint/10 py-4 text-[26px] font-medium text-ax-white transition-colors hover:text-ax-mint"
                >
                  {menu.label}
                </Link>
              );
            }

            const isExpanded = expanded === menu.id;
            const items = menu.id === "products" ? PRODUCTS : menu.items ?? [];

            return (
              <div key={menu.id} className="border-b border-ax-mint/10">
                <button
                  type="button"
                  onClick={() => setExpanded(isExpanded ? null : menu.id)}
                  aria-expanded={isExpanded}
                  className="font-display flex w-full items-center justify-between py-4 text-[26px] font-medium text-ax-white transition-colors hover:text-ax-mint"
                >
                  {menu.label}
                  <svg
                    width="14"
                    height="9"
                    viewBox="0 0 9 6"
                    fill="none"
                    className="transition-transform duration-200"
                    style={{ transform: isExpanded ? "rotate(180deg)" : "none" }}
                    aria-hidden="true"
                  >
                    <path d="M1 1L4.5 4.5L8 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0">
                    <div className="flex flex-col gap-4 pb-5 pl-1">
                      {items.map((item) => (
                        <Link key={item.href} href={item.href} onClick={close} className="block">
                          <div className="text-[16px] font-medium text-ax-text transition-colors hover:text-ax-mint">{item.label}</div>
                          {item.desc && <div className="mt-0.5 text-[13px] leading-[1.5] text-ax-muted">{item.desc}</div>}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <Link
            href={talkToUsDestination}
            onClick={close}
            className="mt-8 inline-flex w-fit items-center gap-1.5 rounded-[6px] border px-6 py-3 text-[15px] font-medium"
            style={{ backgroundColor: "#123D27", borderColor: "rgba(91,234,153,0.20)", color: "#D8FFE7" }}
          >
            Talk to us
            <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
