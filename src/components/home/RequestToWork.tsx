"use client";

import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";

const NODES = ["Intent", "Understand", "Plan", "Connect", "Execute", "Verify", "Recover"];

export function RequestToWork() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="how" className="relative bg-ax-black py-24 lg:py-28">
      <Reveal>
        <div className="container-ax">
          <div className="rounded-[4px] border border-ax-mint/10 bg-ax-bg-soft/30 px-6 py-14 sm:px-10 lg:py-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_2fr] lg:gap-12">
              <div>
                <p className="font-display text-[19px] font-medium leading-[1.3] text-ax-white">
                  A request becomes a path.
                </p>
              </div>

              <div
                role="list"
                className="relative flex flex-wrap items-center gap-x-2 gap-y-6"
                onMouseLeave={() => setActive(null)}
              >
                {NODES.map((node, i) => (
                  <div key={node} className="flex items-center gap-2">
                    <button
                      type="button"
                      role="listitem"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onBlur={() => setActive(null)}
                      className="text-[15px] font-medium transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{
                        color: active === null || active === i ? "#5BEA99" : "#123D27",
                        opacity: active === null || active === i ? 1 : 0.4,
                      }}
                    >
                      {node}
                    </button>
                    {i < NODES.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="h-px w-6 transition-colors duration-[240ms]"
                        style={{
                          backgroundColor: active === i || active === i + 1 ? "#5BEA99" : "#123D27",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
