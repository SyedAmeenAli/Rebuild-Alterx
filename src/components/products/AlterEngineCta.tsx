import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

export function AlterEngineCta() {
  return (
    <section className="relative overflow-hidden bg-ax-black py-28 lg:py-36">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 90% at 20% 100%, rgba(50,201,122,0.08) 0%, rgba(91,234,153,0.02) 45%, rgba(0,0,0,0) 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative container-ax">
        <Reveal>
          <h2 className="font-display max-w-[460px] text-balance text-[32px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[42px] lg:text-[48px]">
            One engine. A product built on it.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 max-w-[380px] text-[16px] leading-[1.6] text-ax-text/85">
            AxInventory is one real product built on Alter Engine.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <Link
            href="/products/axinventory"
            className="mt-9 inline-flex items-center gap-2 rounded-[4px] bg-ax-mint px-7 py-3 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
          >
            Explore AxInventory
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
