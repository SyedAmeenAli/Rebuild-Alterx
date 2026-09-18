import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

const RECORD = [
  { label: "Product", value: "Men's Overshirt" },
  { label: "SKU", value: "AX-OS-OLV-M" },
  { label: "Stock", value: "24" },
];

const CAPABILITIES = ["Inventory", "POS", "Accounting", "Purchasing", "Tax", "Books"];

export function HomeAxInventory() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-0">
        <Reveal>
          <div className="group relative lg:-mr-16">
            <div className="overflow-hidden rounded-[4px] border border-ax-mint/10 bg-ax-bg-soft/40 p-8 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02] sm:p-10">
              <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-muted">
                AxInventory core
              </p>
              <div className="mt-7 flex flex-col gap-4">
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
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="lg:pl-10">
            <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-mint/70">
              AxInventory
            </p>
            <h2 className="font-display mt-4 max-w-[360px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px]">
              Built to do real work.
            </h2>
            <div className="mt-6 flex flex-wrap gap-x-2 gap-y-2 text-[16px] text-ax-muted">
              {CAPABILITIES.map((c, i) => (
                <span key={c}>
                  {c}
                  {i < CAPABILITIES.length - 1 && <span className="ml-2 text-ax-mint/30">·</span>}
                </span>
              ))}
            </div>
            <Link
              href="/products#axinventory"
              className="mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
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
