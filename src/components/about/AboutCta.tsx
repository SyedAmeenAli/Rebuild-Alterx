import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";

export function AboutCta() {
  return (
    <section className="relative overflow-hidden bg-ax-black py-24 lg:py-28">
      <div className="absolute inset-0">
        <Image src="/hero/15_cta.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(2,5,4,0.4) 0%, rgba(2,5,4,0.4) 45%, rgba(2,5,4,0.9) 100%)",
          }}
        />
      </div>

      <div className="relative container-ax">
        <Reveal>
          <h2 className="font-display max-w-[520px] text-balance text-[30px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[42px]">
            Build something that matters.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 max-w-[420px] text-[16px] leading-[1.6] text-ax-text/85">
            Tell us what you&apos;re trying to make happen.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <Link
            href={talkToUsDestination}
            className="mt-8 inline-flex items-center gap-2 rounded-[4px] bg-ax-mint px-7 py-3 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
          >
            Talk to us
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
