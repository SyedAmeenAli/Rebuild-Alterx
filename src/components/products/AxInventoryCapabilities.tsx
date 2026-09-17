"use client";

import { useState } from "react";
import { MediaFrame } from "@/components/frames/MediaFrame";
import { Reveal } from "@/components/shared/Reveal";
import { image } from "@/lib/media";

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
          <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div role="tablist" aria-label="AxInventory areas" className="flex flex-col border-t border-ax-mint/10">
              {AREAS.map((area, i) => (
                <button
                  key={area.label}
                  role="tab"
                  aria-selected={active === i}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex items-baseline gap-5 border-b border-ax-mint/10 py-5 text-left transition-colors"
                >
                  <span
                    className={`text-[13px] font-medium tracking-[0.04em] transition-colors ${
                      active === i ? "text-ax-mint" : "text-ax-muted"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display text-[20px] font-medium transition-colors sm:text-[24px] ${
                      active === i ? "text-ax-white" : "text-ax-muted group-hover:text-ax-white/80"
                    }`}
                  >
                    {area.label}
                  </span>
                </button>
              ))}
            </div>

            <MediaFrame
              media={image("/hero/10_products_showcase.jpg", "", `${active * 18}% ${20 + active * 8}%`)}
              aspect="aspect-[4/3] lg:aspect-auto lg:h-full"
              className="min-h-[280px]"
              drift
            >
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(0deg, rgba(2,5,4,0.85) 0%, rgba(2,5,4,0.1) 55%)" }}
              />
              <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
                <span className="text-[13px] font-medium tracking-[0.04em] text-ax-mint">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <p className="font-display mt-2 text-[22px] leading-[1.25] text-ax-white sm:text-[26px]">
                  {AREAS[active].label}
                </p>
                <p className="mt-2 max-w-[340px] text-[14px] leading-[1.5] text-ax-text/85">
                  {AREAS[active].copy}
                </p>
              </div>
            </MediaFrame>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
