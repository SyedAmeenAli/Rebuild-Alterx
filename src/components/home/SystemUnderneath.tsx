"use client";

import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";

const FRAMES = [
  { label: "Understand", copy: "Reads the request and what it actually means.", col: "lg:col-span-2", h: "lg:min-h-[120px]" },
  { label: "Plan", copy: "Works out the steps needed to reach the outcome.", col: "lg:col-span-3", h: "lg:min-h-[180px]" },
  { label: "Connect", copy: "Reaches the systems the work touches.", col: "lg:col-span-2", h: "lg:min-h-[140px]" },
  { label: "Execute", copy: "Runs the steps across those systems.", col: "lg:col-span-5", h: "lg:min-h-[140px]" },
  { label: "Verify", copy: "Checks the result before moving on.", col: "lg:col-span-3", h: "lg:min-h-[160px]" },
  { label: "Recover", copy: "Responds deliberately when something breaks.", col: "lg:col-span-2", h: "lg:min-h-[130px]" },
];

const MOBILE_HEIGHTS = ["min-h-[120px]", "min-h-[180px]", "min-h-[140px]", "min-h-[220px]", "min-h-[140px]", "min-h-[160px]"];

export function SystemUnderneath() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <h2 className="font-display max-w-[680px] text-balance text-[30px] leading-[1.15] tracking-[-0.015em] text-ax-white sm:text-[42px] lg:text-[52px]">
            Behind a simple request is a real system.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12">
            {FRAMES.map((f, i) => {
              const isHovered = hovered === i;
              const isReceded = hovered !== null && hovered !== i;
              return (
                <div
                  key={f.label}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  tabIndex={0}
                  className={`relative flex flex-col justify-between rounded-[4px] border bg-ax-bg-soft/40 p-5 transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${f.col} ${MOBILE_HEIGHTS[i]} ${f.h}`}
                  style={{
                    borderColor: isHovered ? "#123D27" : "#09170F",
                    transform: isHovered ? "translateY(-3px)" : isReceded ? "scale(0.985)" : "none",
                    opacity: isReceded ? 0.55 : 1,
                  }}
                >
                  {isHovered && (
                    <div
                      className="pointer-events-none absolute inset-0 rounded-[4px]"
                      style={{ boxShadow: "inset 0 0 0 8px rgba(159,255,192,0.06)" }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="font-display text-[22px] font-medium text-ax-white sm:text-[26px]">
                    {f.label}
                  </span>
                  <span className="mt-4 max-w-[280px] text-[14px] leading-[1.5] text-ax-muted sm:text-[15px]">
                    {f.copy}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
