"use client";

import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";

type Row = { label: string; value: string };
type Area = {
  label: string;
  rows?: Row[];
  statement?: string;
};

const AREAS: Area[] = [
  {
    label: "Catalogue",
    rows: [
      { label: "Category", value: "Shirts" },
      { label: "Brand", value: "AX Studio" },
      { label: "Material / Colour", value: "Cotton / Olive" },
      { label: "Variants", value: "S, M, L, XL" },
      { label: "Retail price", value: "₹2,499" },
    ],
  },
  {
    label: "Stock",
    rows: [
      { label: "Overshirt / M — Store 01", value: "8" },
      { label: "Overshirt / M — Store 02", value: "6" },
      { label: "Overshirt / M — Warehouse", value: "10" },
      { label: "T-Shirt / M — across locations", value: "45" },
    ],
  },
  {
    label: "Sales",
    rows: [
      { label: "Sale", value: "Men's Overshirt / M" },
      { label: "Amount", value: "₹2,499" },
      { label: "Inventory after sale", value: "24 units left" },
      { label: "Store 02 volume today", value: "+11" },
    ],
  },
  {
    label: "Purchasing",
    rows: [
      { label: "Draft PO generated", value: "+24 units" },
      { label: "Status", value: "Draft → Ordered" },
      { label: "Next", value: "Receiving → Received" },
    ],
  },
  {
    label: "GST",
    statement: "Indian tax rules are part of the data model rather than added afterward.",
  },
  {
    label: "Books",
    statement: "A genuine double-entry ledger sits underneath the financial records.",
  },
];

export function AxInventoryCapabilities() {
  const [active, setActive] = useState(0);
  const area = AREAS[active];

  return (
    <section className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            What it does
          </p>
          <h2 className="font-display mt-5 max-w-[520px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
            One system, from catalogue to books.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div role="tablist" aria-label="AxInventory areas" className="flex flex-col border-t border-ax-mint/10">
              {AREAS.map((a, i) => (
                <button
                  key={a.label}
                  role="tab"
                  aria-selected={active === i}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex items-baseline gap-5 border-b border-ax-mint/10 py-5 text-left transition-colors"
                >
                  <span
                    className={`text-[13px] font-medium tracking-[0.04em] transition-colors ${
                      active === i ? "text-ax-mint" : "text-ax-muted"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display text-[20px] font-medium transition-colors sm:text-[24px] ${
                      active === i ? "text-ax-white" : "text-ax-muted group-hover:text-ax-white/80"
                    }`}
                  >
                    {a.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="min-h-[280px] rounded-[6px] border border-ax-mint/15 bg-ax-black/50 p-7 sm:p-9">
              <div className="flex items-center gap-2 border-b border-ax-mint/10 pb-4">
                <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-muted">
                  {area.label}
                </span>
              </div>

              {area.rows ? (
                <div className="mt-6 flex flex-col gap-4">
                  {area.rows.map((r) => (
                    <div
                      key={r.label}
                      className="flex flex-col gap-1.5 border-b border-ax-mint/5 pb-4 last:border-b-0 last:pb-0"
                    >
                      <span className="text-[12px] font-medium uppercase tracking-[0.06em] text-ax-muted">
                        {r.label}
                      </span>
                      <span className="font-display text-[16px] font-medium text-ax-white">
                        {r.value}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-8 max-w-[380px] text-[17px] leading-[1.6] text-ax-white">
                  {area.statement}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
