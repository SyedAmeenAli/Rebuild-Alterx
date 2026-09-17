"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navigationData, talkToUsDestination } from "@/content/navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative z-20 flex h-9 w-9 flex-col items-center justify-center gap-[5px] focus-visible:outline-ax-mint focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <span
          className={`block h-[1.5px] w-5 bg-ax-white transition-transform duration-200 ${
            open ? "translate-y-[3.25px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-[1.5px] w-5 bg-ax-white transition-transform duration-200 ${
            open ? "-translate-y-[3.25px] -rotate-45" : ""
          }`}
        />
      </button>

      <div
        className={`fixed inset-0 z-10 bg-ax-bg/98 backdrop-blur-md transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col justify-center gap-1 px-8">
          {navigationData.map((item) => (
            <Link
              key={item.id}
              href={item.href ?? "#"}
              onClick={() => setOpen(false)}
              className="font-display border-b border-ax-mint/10 py-4 text-[28px] font-medium text-ax-white transition-colors hover:text-ax-mint"
            >
              {item.trigger}
            </Link>
          ))}
          <Link
            href={talkToUsDestination}
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex w-fit items-center justify-center rounded-[4px] bg-ax-mint px-6 py-3 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
          >
            Talk to us
          </Link>
        </nav>
      </div>
    </div>
  );
}
