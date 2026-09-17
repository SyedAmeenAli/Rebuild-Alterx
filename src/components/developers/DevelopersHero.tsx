import Image from "next/image";
import Link from "next/link";
import { alterEngineDestination } from "@/content/navigation";

export function DevelopersHero() {
  return (
    <section className="relative flex min-h-[86svh] flex-col overflow-clip bg-ax-black text-ax-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/04_developers_hero.jpg"
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
              "linear-gradient(180deg, rgba(2,5,4,0.6) 0%, rgba(2,5,4,0.4) 40%, rgba(2,5,4,0.92) 100%)",
          }}
        />
      </div>

      <div className="relative z-[2] flex flex-1 flex-col justify-end container-ax pb-20 pt-[150px] lg:pb-24">
        <p className="hero-reveal text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
          Developers
        </p>

        <h1 className="hero-reveal font-display mt-6 max-w-[680px] text-balance text-[38px] leading-[1.08] tracking-[-0.02em] text-ax-white sm:text-[48px] lg:text-[56px]">
          Build on a system designed to execute.
        </h1>

        <p className="hero-reveal mt-6 max-w-[480px] text-[17px] leading-[1.55] text-ax-text/85">
          ALTERX separates intelligence from the machinery that makes work reliable.
        </p>

        <div className="hero-reveal mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href={alterEngineDestination}
            className="inline-flex h-12 items-center justify-center rounded-[4px] bg-ax-mint px-7 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
          >
            Explore the engine
            <span aria-hidden="true" className="ml-2">→</span>
          </Link>
          <Link
            href="#system"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-ax-white/85 transition-colors hover:text-ax-mint"
          >
            See how it works
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
