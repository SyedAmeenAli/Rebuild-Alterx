import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";

export function AxInventorySection() {
  return (
    <section id="axinventory" className="relative overflow-hidden bg-ax-black">
      <div className="relative aspect-[16/9] w-full lg:aspect-[21/9] lg:min-h-[560px]">
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
              "linear-gradient(200deg, rgba(2,5,4,0.9) 0%, rgba(2,5,4,0.4) 42%, rgba(2,5,4,0.65) 100%)",
          }}
        />

        <div className="absolute inset-0 flex flex-col justify-center container-ax">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
              AxInventory
            </p>
            <h2 className="font-display mt-5 max-w-[420px] text-balance text-[32px] leading-[1.15] tracking-[-0.015em] text-ax-white sm:text-[42px] lg:text-[46px]">
              A real product. Real work.
            </h2>
            <p className="mt-6 max-w-[420px] text-[16px] leading-[1.55] text-ax-text/90">
              AxInventory is inventory, point of sale and accounting software for Indian retail
              businesses. It brings catalogue, stock, sales, purchasing, tax compliance and books
              into one system.
            </p>
            <Link
              href={talkToUsDestination}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-[4px] bg-ax-mint px-6 py-3 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
            >
              Explore AxInventory
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
