"use client";

import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";

const FRAMES = [
  { label: "Understand", copy: "Figures out what you actually need done.", col: "lg:col-span-2", h: "lg:min-h-[130px]", tint: 0.05 },
  { label: "Plan", copy: "Works out the steps needed to get there.", col: "lg:col-span-3", h: "lg:min-h-[190px]", tint: 0.07 },
  { label: "Connect", copy: "Reaches the systems and tools involved.", col: "lg:col-span-2", h: "lg:min-h-[150px]", tint: 0.06 },
  { label: "Execute", copy: "Carries out the work.", col: "lg:col-span-5", h: "lg:min-h-[150px]", tint: 0.09 },
  { label: "Verify", copy: "Checks that the result is what it should be.", col: "lg:col-span-3", h: "lg:min-h-[170px]", tint: 0.06 },
  { label: "Recover", copy: "Responds when something goes wrong.", col: "lg:col-span-2", h: "lg:min-h-[140px]", tint: 0.08 },
];

const MOBILE_HEIGHTS = ["min-h-[120px]", "min-h-[180px]", "min-h-[140px]", "min-h-[220px]", "min-h-[140px]", "min-h-[160px]"];

const ANNOTATIONS = ["Planning", "Binding", "Durable execution", "Verification", "Recovery", "Memory"];

export function SystemUnderneath() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="engine" className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-mint/70">
            Alter Engine
          </p>
          <h2 className="font-display mt-4 max-w-[560px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[36px] lg:text-[42px]">
            The execution core beneath ALTERX.
          </h2>
          <p className="mt-5 max-w-[560px] text-[16px] leading-[1.6] text-ax-muted">
            ALTER ENGINE turns a request into a sequence of real actions, connects the systems
            those actions depend on, checks what happened, and responds when reality changes.
          </p>
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
                  className={`relative flex flex-col justify-between overflow-hidden rounded-[6px] border p-5 backdrop-blur-sm transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${f.col} ${MOBILE_HEIGHTS[i]} ${f.h}`}
                  style={{
                    borderColor: isHovered ? "#123D27" : "#09170F",
                    backgroundColor: `rgba(50, 201, 122, ${f.tint})`,
                    transform: isHovered ? "translateY(-3px)" : isReceded ? "scale(0.985)" : "none",
                    opacity: isReceded ? 0.55 : 1,
                  }}
                >
                  {isHovered && (
                    <div
                      className="pointer-events-none absolute inset-0 rounded-[6px]"
                      style={{ boxShadow: "inset 0 0 0 8px rgba(159,255,192,0.06)" }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="font-display text-[22px] font-medium text-ax-white sm:text-[26px]">
                    {f.label}
                  </span>
                  <span className="mt-4 max-w-[280px] text-[14px] leading-[1.5] text-ax-text/80 sm:text-[15px]">
                    {f.copy}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 lg:mt-12">
            {ANNOTATIONS.map((a) => (
              <span key={a} className="text-[13px] text-ax-muted">
                {a}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
