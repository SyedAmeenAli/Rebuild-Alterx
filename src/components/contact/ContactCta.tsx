import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-ax-black py-28 lg:py-36">
      <div className="absolute inset-0">
        <Image src="/hero/15_cta.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(2,5,4,0.55) 0%, rgba(2,5,4,0.4) 45%, rgba(2,5,4,0.92) 100%)",
          }}
        />
      </div>

      <div className="relative container-ax text-center">
        <Reveal>
          <h2 className="font-display mx-auto max-w-[520px] text-balance text-[30px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[44px]">
            Tell us what needs to happen.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <Link
            href="#form"
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
