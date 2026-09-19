"use client";

import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import BorderGlow from "@/components/shared/BorderGlow";

const CONCEPTS = [
  { label: "Intent", copy: "The request is understood before anything runs." },
  { label: "Plan", copy: "Steps are sequenced before execution starts." },
  { label: "Execute", copy: "The steps run against the real systems involved." },
  { label: "Verify", copy: "The result is checked before anything is considered done." },
  { label: "Recover", copy: "If something fails, execution continues from where it left off." },
];

export function ResourceIdea() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            The idea
          </p>
          <h2 className="font-display mt-5 max-w-[560px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
            AI is only useful when the work gets done.
          </h2>
          <p className="mt-5 max-w-[520px] text-[16px] leading-[1.6] text-ax-text/80">
            ALTERX is built around the part that comes after the model produces an answer —
            turning an objective into a process that can actually run, be checked and continue.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-16 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-4">
            <div
              role="tablist"
              aria-label="ALTERX concepts"
              className="flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10 lg:border-t-0"
            >
              {CONCEPTS.map((concept, i) => (
                <button
                  key={concept.label}
                  role="tab"
                  aria-selected={active === i}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex items-baseline gap-4 py-5 text-left"
                >
                  <span
                    className={`text-[13px] font-medium tracking-[0.04em] transition-colors ${
                      active === i ? "text-ax-mint" : "text-ax-muted"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display text-[22px] font-medium transition-colors sm:text-[26px] ${
                      active === i ? "text-ax-white" : "text-ax-muted group-hover:text-ax-white/80"
                    }`}
                  >
                    {concept.label}
                  </span>
                </button>
              ))}
            </div>

            <BorderGlow glass borderRadius={8} className="min-h-[280px] w-full">
              <div className="flex h-full min-h-[280px] flex-col justify-center p-8 sm:p-10">
                <span className="w-fit rounded-full border border-ax-mint/40 bg-ax-black/50 px-4 py-1.5 text-[13px] font-medium text-ax-mint">
                  {CONCEPTS[active].label}
                </span>
                <p className="mt-5 max-w-[420px] text-[22px] leading-[1.4] text-ax-white sm:text-[26px]">
                  {CONCEPTS[active].copy}
                </p>
              </div>
            </BorderGlow>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
