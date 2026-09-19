"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { LATEST_NEWS } from "@/content/latestNews";

// Homepage shows a short preview of this same list; the self-referential
// "Update" placeholder card only makes sense there, not linked from here.
const ITEMS = LATEST_NEWS.filter((item) => item.href !== "/resources");

export function ResourcesLatest() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Latest
          </p>
          <h2 className="font-display mt-5 max-w-[480px] text-balance text-[26px] leading-[1.25] tracking-[-0.01em] text-ax-white sm:text-[30px]">
            What ALTERX has been building.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-col divide-y divide-ax-mint/10 border-t border-b border-ax-mint/10">
            {ITEMS.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className="group flex flex-col gap-1.5 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <div className="flex items-baseline gap-5">
                  <span className="w-20 flex-shrink-0 text-[12px] font-medium uppercase tracking-[0.08em] text-ax-mint/70">
                    {item.category}
                  </span>
                  <span className="font-display text-[19px] font-medium text-ax-white sm:text-[22px]">
                    {item.title}
                  </span>
                </div>
                <span
                  aria-hidden="true"
                  className={`pl-[100px] text-[15px] transition-all duration-300 sm:pl-0 ${
                    active === i ? "translate-x-0 text-ax-mint opacity-100" : "-translate-x-1 text-ax-muted opacity-0 group-hover:opacity-100"
                  }`}
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
