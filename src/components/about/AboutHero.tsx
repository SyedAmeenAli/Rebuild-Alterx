import Image from "next/image";
import Link from "next/link";
import { alterEngineDestination, talkToUsDestination } from "@/content/navigation";

export function AboutHero() {
  return (
    <section className="relative flex min-h-[80svh] flex-col overflow-clip bg-ax-black text-ax-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/06_about_hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover hero-image-drift"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(2,5,4,0.5) 0%, rgba(2,5,4,0.35) 40%, rgba(2,5,4,0.92) 100%)",
          }}
        />
      </div>

      <div className="relative z-[2] flex flex-1 flex-col justify-end container-ax pb-20 pt-[150px] lg:pb-24">
        <p className="hero-reveal text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
          About ALTERX
        </p>

        <h1 className="hero-reveal font-display mt-6 max-w-[600px] text-balance text-[36px] leading-[1.1] tracking-[-0.02em] text-ax-white sm:text-[46px] lg:text-[52px]">
          Building the system behind the work.
        </h1>

        <p className="hero-reveal mt-6 max-w-[460px] text-[17px] leading-[1.55] text-ax-text/85">
          ALTERX is focused on one problem: making autonomous execution reliable enough for work
          that matters.
        </p>

        <div className="hero-reveal mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href={alterEngineDestination}
            className="inline-flex h-12 items-center justify-center rounded-[4px] bg-ax-mint px-7 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
          >
            Explore the Engine
            <span aria-hidden="true" className="ml-2">→</span>
          </Link>
          <Link
            href={talkToUsDestination}
            className="inline-flex items-center gap-2 text-[15px] font-medium text-ax-white/85 transition-colors hover:text-ax-mint"
          >
            Talk to us
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
