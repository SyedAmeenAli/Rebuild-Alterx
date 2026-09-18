import Image from "next/image";
import Link from "next/link";
import { talkToUsDestination } from "@/content/navigation";

export function CareersHero() {
  return (
    <section className="relative flex min-h-[80svh] flex-col overflow-clip bg-ax-black text-ax-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/alterx/08_careers_still.jpg"
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
              "linear-gradient(200deg, rgba(2,5,4,0.55) 0%, rgba(2,5,4,0.4) 40%, rgba(2,5,4,0.92) 100%)",
          }}
        />
      </div>

      <div className="relative z-[2] flex flex-1 flex-col justify-end container-ax pb-20 pt-[150px] lg:pb-24">
        <p className="hero-reveal text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
          Careers
        </p>

        <h1 className="hero-reveal font-display mt-6 max-w-[560px] text-balance text-[36px] leading-[1.1] tracking-[-0.02em] text-ax-white sm:text-[46px] lg:text-[52px]">
          Work on the hard part.
        </h1>

        <p className="hero-reveal mt-6 max-w-[460px] text-[17px] leading-[1.55] text-ax-text/85">
          ALTERX is building the systems that make autonomous execution dependable enough for
          real work.
        </p>

        <div className="hero-reveal mt-9 flex flex-col gap-4">
          <Link
            href={talkToUsDestination}
            className="inline-flex h-12 w-fit items-center justify-center rounded-[4px] bg-ax-mint px-7 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
          >
            Talk to us
            <span aria-hidden="true" className="ml-2">→</span>
          </Link>
          <p className="text-[14px] text-ax-muted">
            We&apos;re always interested in people who care about difficult systems problems.
          </p>
        </div>
      </div>
    </section>
  );
}
