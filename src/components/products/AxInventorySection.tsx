import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";

const RECORD = [
  { label: "Product", value: "Men's Overshirt" },
  { label: "Variant", value: "Olive / M" },
  { label: "SKU", value: "AX-OS-OLV-M" },
  { label: "Stock", value: "24" },
  { label: "Locations", value: "Store 01 (10), Store 02 (14)" },
];

export function AxInventorySection() {
  return (
    <section className="relative overflow-hidden bg-ax-black pb-20 pt-[150px] lg:pb-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 90% at 30% 10%, rgba(50,201,122,0.1) 0%, rgba(91,234,153,0.03) 45%, rgba(0,0,0,0) 75%)",
        }}
        aria-hidden="true"
      />
      <div className="relative container-ax">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
              Products · AxInventory
            </p>
            <h2 className="font-display mt-5 max-w-[440px] text-balance text-[32px] leading-[1.15] tracking-[-0.015em] text-ax-white sm:text-[42px] lg:text-[46px]">
              A real product. Real work.
            </h2>
            <p className="mt-6 max-w-[440px] text-[16px] leading-[1.55] text-ax-text/85">
              AxInventory is inventory, point of sale, purchasing, GST and accounting software for
              Indian retail.
            </p>
            <p className="mt-4 max-w-[440px] text-[16px] leading-[1.55] text-ax-text/85">
              Catalogue, stock, sales, purchasing, tax compliance and books in one system.
            </p>
            <Link
              href={talkToUsDestination}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-[4px] bg-ax-mint px-6 py-3 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
            >
              Talk to us
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[6px] border border-ax-mint/15 bg-ax-bg-soft/60 p-7 sm:p-9">
              <div className="flex items-center gap-2 border-b border-ax-mint/10 pb-4">
                <span className="h-[7px] w-[7px] rounded-full bg-ax-mint/40" />
                <span className="h-[7px] w-[7px] rounded-full bg-ax-mint/40" />
                <span className="h-[7px] w-[7px] rounded-full bg-ax-mint/40" />
                <span className="ml-2 text-[12px] font-medium uppercase tracking-[0.1em] text-ax-muted">
                  AxInventory core
                </span>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                {RECORD.map((r) => (
                  <div key={r.label} className="flex flex-col gap-1.5 border-b border-ax-mint/5 pb-4 last:border-b-0 last:pb-0">
                    <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-ax-muted">
                      {r.label}
                    </span>
                    <span className="font-display text-[16px] font-medium text-ax-white">
                      {r.value}
                    </span>
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
