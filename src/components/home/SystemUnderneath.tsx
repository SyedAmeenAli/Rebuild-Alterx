"use client";

import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";

const CARDS = [
  { label: "Understand", copy: "Reads what you want in normal language.", col: "lg:col-span-4", h: "lg:min-h-[140px]" },
  { label: "Plan", copy: "Breaks it into a path.", col: "lg:col-span-5", h: "lg:min-h-[140px]" },
  { label: "Connect", copy: "Hooks the tools the work needs.", col: "lg:col-span-3", h: "lg:min-h-[140px]" },
  { label: "Do", copy: "Runs the steps and keeps a record.", col: "lg:col-span-6", h: "lg:min-h-[190px]" },
  { label: "Check", copy: "Looks at the result before it is finished.", col: "lg:col-span-3", h: "lg:min-h-[190px]" },
  { label: "Recover", copy: "If something fails, it classifies and continues.", col: "lg:col-span-3", h: "lg:min-h-[190px]" },
];

export function SystemUnderneath() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="engine" className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Alter Engine
          </p>
          <h2 className="font-display mt-5 max-w-[640px] text-balance text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-ax-white sm:text-[44px] lg:text-[52px]">
            The system that runs the work.
          </h2>
          <p className="mt-5 max-w-[560px] text-[17px] leading-[1.6] text-ax-muted">
            You do not build the workflow. The engine does.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12">
            {CARDS.map((c, i) => {
              const isHovered = hovered === i;
              const isReceded = hovered !== null && hovered !== i;
              return (
                <div
                  key={c.label}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  tabIndex={0}
                  className={`relative flex min-h-[150px] flex-col justify-between rounded-[6px] border p-6 transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${c.col} ${c.h}`}
                  style={{
                    borderColor: isHovered ? "#32C97A" : "rgba(159,255,192,0.1)",
                    backgroundColor: isHovered ? "rgba(50,201,122,0.06)" : "rgba(9,23,15,0.4)",
                    transform: isHovered ? "translateY(-3px)" : isReceded ? "scale(0.985)" : "none",
                    opacity: isReceded ? 0.55 : 1,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="font-display text-[17px] font-medium uppercase tracking-[0.02em] transition-colors duration-200"
                      style={{ color: isHovered ? "#9FFFC0" : "#E8F7EE" }}
                    >
                      {c.label}
                    </span>
                    {isHovered && (
                      <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-ax-mint/70">
                        Active state
                      </span>
                    )}
                  </div>
                  <span className="mt-4 max-w-[260px] text-[14px] leading-[1.5] text-ax-muted">{c.copy}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
