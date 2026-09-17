"use client";

import { useState } from "react";
import { MediaFrame } from "@/components/frames/MediaFrame";
import { Reveal } from "@/components/shared/Reveal";
import { image } from "@/lib/media";

const ITEMS = [
  { label: "Sales & Support", copy: "Keep handoffs moving from request to resolution." },
  { label: "Lead Qualification", copy: "Understand a lead, apply the relevant criteria and move the process forward." },
  { label: "Order & Inventory", copy: "Coordinate information across operational systems." },
  { label: "Onboarding", copy: "Move people, documents and approvals through a defined process." },
  { label: "Document Processing", copy: "Handle information that needs to be read, checked and carried into another step." },
  { label: "Reporting", copy: "Turn operational information into a completed reporting workflow." },
];

export function WhereItFits() {
  const [active, setActive] = useState(0);

  return (
    <section id="fits" className="relative bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Where it fits
          </p>
          <h2 className="font-display mt-5 max-w-[620px] text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[44px]">
            Work that crosses systems. Work that still needs to finish.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-16 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div
              role="tablist"
              aria-label="Process categories"
              className="flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10 lg:border-t-0"
            >
              {ITEMS.map((item, i) => (
                <button
                  key={item.label}
                  role="tab"
                  aria-selected={active === i}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex items-baseline gap-5 py-5 text-left transition-colors first:pt-0"
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
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            <MediaFrame
              media={image("/hero/02_solutions_hero.jpg", "", `${20 + active * 12}% 40%`)}
              aspect="aspect-[4/3] lg:aspect-auto lg:h-full"
              className="min-h-[260px]"
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
                  {ITEMS[active].label}
                </p>
                <p className="mt-2 max-w-[340px] text-[14px] leading-[1.5] text-ax-text/85">
                  {ITEMS[active].copy}
                </p>
              </div>
            </MediaFrame>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
