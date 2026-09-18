import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { alterEngineDestination, talkToUsDestination } from "@/content/navigation";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ax-black py-32 lg:py-44">
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
              "linear-gradient(180deg, rgba(2,5,4,0.75) 0%, rgba(2,5,4,0.45) 45%, rgba(2,5,4,0.85) 100%)",
          }}
        />
      </div>

      <div className="relative container-ax text-center">
        <Reveal>
          <h2 className="font-display mx-auto max-w-[680px] text-balance text-[32px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[42px] lg:text-[50px]">
            Start with one result.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-[440px] text-[16px] leading-[1.6] text-ax-text/85">
            Tell us what you want to get done.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link
              href={alterEngineDestination}
              className="inline-flex items-center gap-2 rounded-[4px] bg-ax-mint px-7 py-3 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
            >
              Try Engine
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href={talkToUsDestination}
              className="inline-flex items-center gap-2 text-[15px] font-medium text-ax-white/85 transition-colors hover:text-ax-mint"
            >
              Talk to us
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
