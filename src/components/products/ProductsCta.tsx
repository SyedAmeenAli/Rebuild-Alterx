import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { alterEngineDestination, talkToUsDestination } from "@/content/navigation";

export function ProductsCta() {
  return (
    <section className="relative overflow-hidden bg-ax-black py-28 lg:py-36">
      <div className="absolute inset-0">
        <Image
          src="/hero/15_cta.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(2,5,4,0.55) 0%, rgba(2,5,4,0.35) 45%, rgba(2,5,4,0.92) 100%)",
          }}
        />
      </div>

      <div className="relative container-ax text-center">
        <Reveal>
          <h2 className="font-display mx-auto max-w-[560px] text-balance text-[30px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[44px]">
            See the work behind the interface.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-5 max-w-[420px] text-[16px] leading-[1.6] text-ax-text/85">
            Start with the engine, or explore the product.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link
              href={alterEngineDestination}
              className="inline-flex items-center gap-2 rounded-[4px] bg-ax-mint px-7 py-3 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
            >
              Explore Alter Engine
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href={talkToUsDestination}
              className="inline-flex items-center gap-2 text-[15px] font-medium text-ax-white/85 transition-colors hover:text-ax-mint"
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
