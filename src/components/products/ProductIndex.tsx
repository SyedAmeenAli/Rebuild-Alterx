"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

const ITEMS = [
  {
    n: "01",
    label: "Alter Engine",
    copy: "The execution layer underneath ALTERX.",
    href: "#alter-engine",
  },
  {
    n: "02",
    label: "AxInventory",
    copy: "Inventory, point of sale, purchasing, GST and accounting for Indian retail.",
    href: "#axinventory",
  },
];

export function ProductIndex() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-ax-bg-soft py-20 lg:py-28">
      <div className="container-ax">
        <Reveal>
          <div className="flex flex-col divide-y divide-ax-mint/10 border-t border-b border-ax-mint/10">
            {ITEMS.map((item, i) => (
              <Link
                key={item.n}
                href={item.href}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
              >
                <div className="flex items-baseline gap-5">
                  <span
                    className={`text-[13px] font-medium tracking-[0.06em] transition-colors ${
                      active === i ? "text-ax-mint" : "text-ax-muted"
                    }`}
                  >
                    {item.n}
                  </span>
                  <span className="font-display text-[28px] font-medium text-ax-white transition-colors sm:text-[36px] lg:text-[42px]">
                    {item.label}
                  </span>
                </div>
                <div className="flex items-center gap-4 pl-[42px] sm:pl-0">
                  <span className="max-w-[280px] text-[14px] leading-[1.5] text-ax-muted">
                    {item.copy}
                  </span>
                  <span
                    className={`hidden h-px flex-shrink-0 bg-ax-mint transition-all duration-300 sm:block ${
                      active === i ? "w-10" : "w-4"
                    }`}
                  />
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
