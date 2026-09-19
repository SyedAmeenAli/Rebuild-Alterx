"use client";

import { useRef } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { ScrollFollow } from "@/components/shared/ScrollFollow";

const INVENTORY_ROWS = [
  { label: "Cardamom Whole Organic 1kg", value: "42 units" },
  { label: "Kashmiri Chilli Powder Premium", value: "115 bags" },
  { label: "Sona Masoori Rice Raw 25kg", value: "88 bags" },
  { label: "CTC Tea Assam Blend 5kg", value: "19 units" },
  { label: "Cold Pressed Coconut Oil 1L", value: "204 bottles" },
];

const CAPABILITIES = [
  { label: "Catalogue", copy: "Products stay in one list." },
  { label: "Stock", copy: "What you have, what moved." },
  { label: "POS", copy: "Sell at the counter, even offline, then sync." },
  { label: "Purchasing", copy: "Orders in, stock up." },
  { label: "Tax", copy: "GST-native behaviour." },
  { label: "Books", copy: "Real double-entry ledger." },
];

export function HomeAxInventory() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="axinventory" ref={sectionRef} className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ScrollFollow sectionRef={sectionRef}>
              <div className="rounded-[6px] border border-ax-mint/10 bg-ax-surface/40 p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-medium text-ax-text">Counter Inventory / Live State</p>
                  <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-ax-mint/70">
                    Offline sync active
                  </span>
                </div>
                <div className="mt-6 flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10">
                  {INVENTORY_ROWS.map((row) => (
                    <div
                      key={row.label}
                      className="group flex items-center justify-between px-2 py-3.5 -mx-2 text-[14px] transition-colors duration-200 hover:bg-ax-mint/[0.04]"
                    >
                      <span className="text-ax-muted transition-colors duration-200 group-hover:text-ax-text">{row.label}</span>
                      <span className="text-ax-white transition-colors duration-200 group-hover:text-ax-mint">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFollow>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
                AxInventory
              </p>
              <h2 className="font-display mt-5 max-w-[440px] text-balance text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-ax-white sm:text-[40px]">
                Inventory, counter, and books — in one place.
              </h2>
              <p className="mt-4 text-[15px] leading-[1.6] text-ax-muted">
                Built for Indian retail. Not a chatbot.
              </p>

              <div className="mt-9 flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10">
                {CAPABILITIES.map((c) => (
                  <div
                    key={c.label}
                    className="group grid grid-cols-[110px_1fr] items-baseline gap-6 px-2 py-3.5 -mx-2 transition-colors duration-200 hover:bg-ax-mint/[0.04]"
                  >
                    <span className="text-[14px] font-medium text-ax-white transition-colors duration-200 group-hover:text-ax-mint">{c.label}</span>
                    <span className="text-[14px] leading-[1.5] text-ax-muted">{c.copy}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
