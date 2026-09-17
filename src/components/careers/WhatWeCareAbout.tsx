"use client";

import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";

const PRINCIPLES = [
  { label: "Build the hard part", copy: "Solve the part most products leave to someone else." },
  { label: "Know what happened", copy: "Systems should be able to explain the state of their work." },
  { label: "Make failure visible", copy: "A failure that is understood can be handled." },
  { label: "Keep the interface simple", copy: "Complexity belongs underneath the experience." },
  { label: "Ship with discipline", copy: "If it can't be explained, it isn't ready to ship." },
];

export function WhatWeCareAbout() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            What we care about
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10">
            {PRINCIPLES.map((p, i) => {
              const isActive = active === i;
              return (
                <button
                  key={p.label}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onBlur={() => setActive(null)}
                  className="group flex w-full flex-col gap-2 py-6 text-left sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
                >
                  <div className="flex items-baseline gap-5">
                    <span
                      className={`h-[6px] w-[6px] flex-shrink-0 self-center rounded-full transition-colors ${
                        isActive ? "bg-ax-mint" : "bg-ax-mint/25"
                      }`}
                    />
                    <span className="font-display text-[20px] font-medium text-ax-white sm:text-[24px]">
                      {p.label}
                    </span>
                  </div>
                  <span
                    className={`max-w-[360px] text-[14px] leading-[1.5] transition-opacity duration-300 ${
                      isActive ? "text-ax-muted opacity-100" : "opacity-0"
                    }`}
                  >
                    {p.copy}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
