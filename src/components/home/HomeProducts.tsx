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

      <div className="container-ax mt-14 lg:mt-16">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          <Reveal>
            <Link href={alterEngineDestination} className="group relative block overflow-hidden">
              <MediaFrame media={toMedia(alterxMedia.engineStill)} aspect="aspect-[4/3]" drift>
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(0deg, rgba(2,5,4,0.75) 0%, rgba(2,5,4,0) 45%)" }}
                />
              </MediaFrame>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-mint/80">
                    Alter Engine
                  </p>
                  <p className="mt-1.5 max-w-[280px] text-[14px] leading-[1.4] text-ax-text/80">
                    Turns an objective into executable work.
                  </p>
                </div>
                <span className="flex-shrink-0 text-[14px] font-medium text-ax-white opacity-0 transition-opacity group-hover:opacity-100">
                  Explore →
                </span>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <Link href="/products#axinventory" className="group relative block overflow-hidden bg-ax-black">
              <div className="aspect-[4/3] p-7 pb-20 sm:p-9 sm:pb-24">
                <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-muted">
                  AxInventory core
                </span>
                <div className="mt-6 flex flex-col gap-3">
                  {RECORD.map((r) => (
                    <div key={r.label} className="flex items-baseline justify-between gap-4 border-b border-ax-mint/5 pb-3">
                      <span className="text-[12px] font-medium uppercase tracking-[0.06em] text-ax-muted">
                        {r.label}
                      </span>
                      <span className="font-display text-[15px] font-medium text-ax-white">
                        {r.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-mint/80">
                    AxInventory
                  </p>
                  <p className="mt-1.5 max-w-[280px] text-[14px] leading-[1.4] text-ax-text/80">
                    Inventory, POS, purchasing, GST and accounting for Indian retail.
                  </p>
                </div>
                <span className="flex-shrink-0 text-[14px] font-medium text-ax-white opacity-0 transition-opacity group-hover:opacity-100">
                  Explore →
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
