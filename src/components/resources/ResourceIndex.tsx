"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";

const ITEMS = [
  { label: "Products", copy: "Explore Alter Engine and AxInventory.", href: "/products" },
  { label: "Solutions", copy: "See where ALTERX fits into real operational work.", href: "/solutions" },
  { label: "Developers", copy: "Explore the system underneath the interface.", href: "/developers" },
  { label: "About", copy: "Understand why ALTERX exists and what it is building.", href: "/about" },
  { label: "Contact", copy: "Bring us a process worth discussing.", href: talkToUsDestination },
];

export function ResourceIndex() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="index" className="relative bg-ax-bg-soft py-20 lg:py-28">
      <div className="container-ax">
        <Reveal>
          <div className="flex flex-col divide-y divide-ax-mint/10 border-t border-b border-ax-mint/10">
            {ITEMS.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onBlur={() => setActive(null)}
                className="group flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <div className="flex items-baseline gap-5">
                  <span
                    className={`text-[13px] font-medium tracking-[0.06em] transition-colors ${
                      active === i ? "text-ax-mint" : "text-ax-muted"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[24px] font-medium text-ax-white transition-colors sm:text-[30px]">
                    {item.label}
                  </span>
                </div>
                <div className="flex items-center gap-3 pl-[42px] sm:pl-0">
                  <span className="text-[14px] leading-[1.5] text-ax-muted">{item.copy}</span>
                  <span
                    aria-hidden="true"
                    className={`text-[15px] transition-all duration-300 ${
                      active === i ? "translate-x-0 text-ax-mint opacity-100" : "-translate-x-1 text-ax-muted opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
