import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

const RECORD = [
  { label: "Product", value: "Men's Overshirt" },
  { label: "SKU", value: "AX-OS-OLV-M" },
  { label: "Stock", value: "24" },
];

const CAPABILITIES = [
  { label: "Inventory", copy: "Know what you have, where it is, and what needs attention.", pos: "lg:top-0 lg:left-0" },
  { label: "POS", copy: "Sell even when the connection drops, then sync later where supported.", pos: "lg:top-0 lg:right-0" },
  { label: "Accounting", copy: "Keep sales and financial records connected.", pos: "lg:bottom-0 lg:left-0" },
  { label: "Purchasing", copy: "Track what you buy and what comes in.", pos: "lg:bottom-0 lg:right-0" },
];

export function HomeAxInventory() {
  return (
    <section id="axinventory" className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-mint/70">
            AxInventory
          </p>
          <h2 className="font-display mt-4 max-w-[520px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[36px] lg:text-[42px]">
            Inventory, POS and accounting built for Indian retail.
          </h2>
        </Reveal>

        <div className="relative mt-14 lg:mt-16">
          <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-10">
            <div className="order-2 flex flex-col gap-8 lg:order-1">
              {CAPABILITIES.slice(0, 2).map((c) => (
                <div key={c.label}>
                  <p className="text-[13px] font-medium uppercase tracking-[0.06em] text-ax-mint/70">
                    {c.label}
                  </p>
                  <p className="mt-1.5 max-w-[220px] text-[14px] leading-[1.5] text-ax-muted lg:ml-auto lg:text-right">
                    {c.copy}
                  </p>
                </div>
              ))}
            </div>

            <Reveal delay={80}>
              <div className="group relative order-1 mx-auto w-full max-w-[420px] overflow-hidden rounded-[6px] border border-ax-mint/10 bg-ax-bg-soft/40 p-8 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02] lg:order-2 sm:p-9">
                <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-muted">
                  AxInventory core
                </p>
                <div className="mt-6 flex flex-col gap-4">
                  {RECORD.map((r) => (
                    <div
                      key={r.label}
                      className="flex flex-col gap-1.5 border-b border-ax-mint/5 pb-4 last:border-b-0 last:pb-0"
                    >
                      <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-ax-muted">
                        {r.label}
                      </span>
                      <span className="font-display text-[18px] font-medium text-ax-white">
                        {r.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="order-3 flex flex-col gap-8">
              {CAPABILITIES.slice(2, 4).map((c) => (
                <div key={c.label}>
                  <p className="text-[13px] font-medium uppercase tracking-[0.06em] text-ax-mint/70">
                    {c.label}
                  </p>
                  <p className="mt-1.5 max-w-[220px] text-[14px] leading-[1.5] text-ax-muted">
                    {c.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={140}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-ax-mint/10 pt-8 text-[14px] text-ax-muted lg:mt-16">
            <span>Tax — built around GST requirements.</span>
            <span className="text-ax-mint/30">·</span>
            <span>Books — kept structured and accountable.</span>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-8 text-center">
            <Link
              href="/products#axinventory"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
            >
              Explore AxInventory
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
