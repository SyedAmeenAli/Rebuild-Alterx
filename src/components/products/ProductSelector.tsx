"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { ProductVisual } from "@/components/shared/ProductVisual";
import BorderGlow from "@/components/shared/BorderGlow";
import { PRODUCTS } from "@/content/navigation";

export function ProductSelector() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            The ecosystem
          </p>
          <h2 className="font-display mt-5 max-w-[560px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
            One ecosystem, one execution core, one product built on it.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
            <div role="tablist" aria-label="ALTERX products" className="flex flex-col border-t border-ax-mint/10">
              {PRODUCTS.map((p, i) => (
                <button
                  key={p.href}
                  role="tab"
                  aria-selected={selected === i}
                  onClick={() => setSelected(i)}
                  onMouseEnter={() => setSelected(i)}
                  className="group flex flex-col items-start gap-1.5 border-b border-ax-mint/10 py-6 text-left transition-colors focus-visible:outline-ax-mint focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <span
                    className="font-display text-[24px] font-medium transition-colors sm:text-[28px]"
                    style={{ color: selected === i ? "#9FFFC0" : "#F4FFF8" }}
                  >
                    {p.label}
                  </span>
                  {p.desc && (
                    <span className={`max-w-[320px] text-[14px] leading-[1.55] transition-colors ${selected === i ? "text-ax-text/85" : "text-ax-muted"}`}>
                      {p.desc}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-[320px]">
              <BorderGlow borderRadius={16} backgroundColor="rgba(0,0,0,0)" className="h-full w-full">
                <div key={selected} className="menu-visual-switch h-full min-h-[320px] w-full overflow-hidden rounded-[16px]">
                  <ProductVisual visual={PRODUCTS[selected].visual} />
                </div>
              </BorderGlow>
            </div>
          </div>
        </Reveal>

        {PRODUCTS[selected].href !== "/" && (
          <Reveal delay={140}>
            <Link
              href={PRODUCTS[selected].href}
              className="mt-8 inline-flex items-center gap-1.5 text-[14px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
            >
              Jump to {PRODUCTS[selected].label}
              <span aria-hidden="true">↓</span>
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
