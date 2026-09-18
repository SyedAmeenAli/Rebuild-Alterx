import { Reveal } from "@/components/shared/Reveal";

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
  return (
    <section id="axinventory" className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="rounded-[6px] border border-ax-mint/10 bg-ax-surface/40 p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <p className="text-[13px] font-medium text-ax-text">Counter Inventory / Live State</p>
                <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-ax-mint/70">
                  Offline sync active
                </span>
              </div>
              <div className="mt-6 flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10">
                {INVENTORY_ROWS.map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-3.5 text-[14px]">
                    <span className="text-ax-muted">{row.label}</span>
                    <span className="text-ax-white">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-mint/70">
                AxInventory
              </p>
              <h2 className="font-display mt-4 max-w-[440px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px]">
                Inventory, counter, and books — in one place.
              </h2>
              <p className="mt-4 text-[15px] leading-[1.6] text-ax-muted">
                Built for Indian retail. Not a chatbot.
              </p>

              <div className="mt-9 flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10">
                {CAPABILITIES.map((c) => (
                  <div key={c.label} className="grid grid-cols-[110px_1fr] items-baseline gap-6 py-3.5">
                    <span className="text-[14px] font-medium text-ax-white">{c.label}</span>
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
