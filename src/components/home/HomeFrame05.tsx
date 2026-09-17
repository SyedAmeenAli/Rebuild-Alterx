import Link from "next/link";
import { MediaFrame } from "@/components/frames/MediaFrame";
import { Reveal } from "@/components/shared/Reveal";
import { image } from "@/lib/media";

export function HomeFrame05() {
  return (
    <section className="relative bg-ax-black pb-24 pt-24 lg:pb-32 lg:pt-32">
      <Reveal>
        <div className="relative">
          <MediaFrame
            media={image("/hero/10_products_showcase.jpg", "", "center 20%")}
            aspect="aspect-[4/5] sm:aspect-[16/10]"
            drift
          >
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(0deg, rgba(2,5,4,0.75) 0%, rgba(2,5,4,0) 45%)" }}
            />
          </MediaFrame>

          <div className="container-ax">
            <div className="relative -mt-24 max-w-[420px] rounded-[6px] border border-ax-mint/15 bg-ax-black/80 p-8 backdrop-blur-md sm:-mt-20">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
                05 — Real product
              </p>
              <h2 className="font-display mt-3 text-balance text-[24px] leading-[1.2] text-ax-white sm:text-[28px]">
                AxInventory.
              </h2>
              <p className="mt-3 text-[14px] leading-[1.6] text-ax-muted">
                Inventory, POS, purchasing, GST and accounting for Indian retail — built on
                Alter Engine.
              </p>
              <Link
                href="/products#axinventory"
                className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
              >
                Explore AxInventory
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
