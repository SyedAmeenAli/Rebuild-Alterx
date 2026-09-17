"use client";

import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";

const AREAS = [
  { label: "Catalogue", copy: "Manage what the business sells." },
  { label: "Stock", copy: "Track inventory and movement." },
  { label: "Sales", copy: "Run sales through the point of sale." },
  { label: "Purchasing", copy: "Manage purchases and suppliers." },
  { label: "GST", copy: "Handle GST-related transactions and compliance workflows." },
  { label: "Books", copy: "Maintain the accounting records." },
];

export function AxInventoryCapabilities() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            What it does
          </p>
          <h2 className="font-display mt-5 max-w-[520px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
            One system, from catalogue to books.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div
            role="tablist"
            aria-label="AxInventory areas"
            className="mt-14 flex flex-col border-t border-ax-mint/10 lg:mt-16"
          >
            {AREAS.map((area, i) => (
              <button
                key={area.label}
                role="tab"
                aria-selected={active === i}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group flex items-center justify-between gap-6 border-b border-ax-mint/10 py-6 text-left transition-colors"
              >
                <div className="flex items-baseline gap-5">
                  <span
                    className={`text-[13px] font-medium tracking-[0.04em] transition-colors ${
                      active === i ? "text-ax-mint" : "text-ax-muted"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display text-[22px] font-medium transition-colors sm:text-[28px] ${
                      active === i ? "text-ax-white" : "text-ax-muted group-hover:text-ax-white/80"
                    }`}
                  >
                    {area.label}
                  </span>
                </div>
                <span
                  className={`hidden max-w-[320px] text-right text-[14px] leading-[1.5] transition-opacity duration-200 sm:block ${
                    active === i ? "text-ax-muted opacity-100" : "opacity-0"
                  }`}
                >
                  {area.copy}
                </span>
              </button>
            ))}
          </div>
          <p className="mt-4 text-[14px] leading-[1.5] text-ax-muted sm:hidden">
            {AREAS[active].copy}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
