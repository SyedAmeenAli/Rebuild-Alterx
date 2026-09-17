import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

export function AxInventoryShowcase() {
  return (
    <section className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            AxInventory
          </p>
          <h2 className="font-display mt-5 max-w-[560px] text-balance text-[32px] leading-[1.15] tracking-[-0.015em] text-ax-white sm:text-[40px] lg:text-[44px]">
            A real product. Real work.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="relative mt-14 aspect-[16/9] w-full overflow-hidden sm:mt-16 lg:aspect-[21/9]">
          <Image
            src="/hero/10_products_showcase.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(6,17,11,0) 55%, rgba(6,17,11,0.9) 100%)",
            }}
          />

          <div className="container-ax absolute inset-x-0 bottom-0 pb-10 lg:pb-14">
            <p className="max-w-[520px] text-[16px] leading-[1.6] text-ax-text/90 sm:text-[18px]">
              Inventory, point of sale, purchasing, GST and accounting for Indian retail
              businesses in one system.
            </p>
            <Link
              href="/products#axinventory"
              className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
            >
              Explore AxInventory
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
