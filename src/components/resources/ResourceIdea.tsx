"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

const CONCEPTS = ["Intent", "Plan", "Execute", "Verify", "Recover"];

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
                  key={concept}
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
                    {concept}
                  </span>
                </button>
              ))}
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[8px] border border-ax-mint/10">
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out"
                style={{ transform: `translateX(${active * -1.5}%)` }}
              >
                <Image
                  src="/media/alterx/03_alter_engine_still.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="scale-110 object-cover"
                />
              </div>
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(0deg, rgba(2,5,4,0.55) 0%, rgba(2,5,4,0.1) 55%)" }}
              />
              <div className="absolute bottom-6 left-6">
                <span className="rounded-full border border-ax-mint/40 bg-ax-black/50 px-4 py-1.5 text-[13px] font-medium text-ax-mint backdrop-blur-sm">
                  {CONCEPTS[active]}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
