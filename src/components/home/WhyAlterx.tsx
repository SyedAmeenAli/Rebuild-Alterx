"use client";

import { useState } from "react";

const ROWS = [
  { label: "Execute", copy: "The work runs." },
  { label: "Verify", copy: "The result is checked." },
  { label: "Continue", copy: "Failure is classified and the path goes on." },
];

export function WhyAlterx() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative bg-ax-black py-24 lg:py-28">
      <div className="container-ax">
        <div className="flex flex-col border-t border-ax-mint/10" onMouseLeave={() => setActive(null)}>
          {ROWS.map((row, i) => {
            const isActive = active === i;
            const isDimmed = active !== null && !isActive;
            return (
              <div
                key={row.label}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                tabIndex={0}
                className="relative flex flex-col gap-1.5 border-b border-ax-mint/10 py-8 transition-opacity duration-300 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
                style={{ opacity: isDimmed ? 0.4 : 1 }}
              >
                <span
                  className="absolute left-0 top-0 h-px transition-all duration-300"
                  style={{
                    width: isActive ? "64px" : "0px",
                    backgroundColor: "#32C97A",
                  }}
                  aria-hidden="true"
                />
                <span className="font-display text-[22px] font-medium text-ax-white sm:text-[26px]">
                  {row.label}
                </span>
                <span className="max-w-[360px] text-[15px] leading-[1.5] text-ax-muted sm:text-right">
                  {row.copy}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
