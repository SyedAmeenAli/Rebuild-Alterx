import Link from "next/link";
import { MediaFrame } from "@/components/frames/MediaFrame";
import { Reveal } from "@/components/shared/Reveal";
import { alterxMedia, toMedia } from "@/content/alterx-media";
import { alterEngineDestination } from "@/content/navigation";

const RECORD = [
  { label: "Product", value: "Men's Overshirt" },
  { label: "SKU", value: "AX-OS-OLV-M" },
  { label: "Stock", value: "24" },
];

export function HomeProducts() {
  return (
    <section className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <h2 className="font-display max-w-[560px] text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[44px]">
            Two products. One execution system.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="mt-14 lg:mt-16">
          <MediaFrame media={toMedia(alterxMedia.engineStill)} aspect="aspect-[16/9] lg:aspect-[21/9]" drift />
        </div>
      </Reveal>
      <div className="container-ax mt-8 lg:mt-10">
        <Reveal delay={140}>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
                Alter Engine
              </p>
              <p className="mt-2 max-w-[420px] text-[16px] leading-[1.55] text-ax-text/85">
                Turns an objective into executable work.
              </p>
            </div>
            <Link
              href={alterEngineDestination}
              className="inline-flex flex-shrink-0 items-center gap-2 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
            >
              Explore Alter Engine
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="container-ax mt-20 lg:mt-24">
        <Reveal delay={100}>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
                AxInventory
              </p>
              <p className="mt-3 max-w-[420px] text-[16px] leading-[1.55] text-ax-text/85">
                Inventory, point of sale, purchasing, GST and accounting for Indian retail.
              </p>
              <Link
                href="/products#axinventory"
                className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
              >
                Explore AxInventory
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="rounded-[6px] border border-ax-mint/15 bg-ax-black/40 p-7 sm:p-9">
              <div className="flex items-center gap-2 border-b border-ax-mint/10 pb-4">
                <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-muted">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
