import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-ax-black py-20 lg:py-24">
      <div className="container-ax">
        <div className="relative overflow-hidden rounded-[12px] border border-ax-mint/15">
          <div className="absolute inset-0">
            <Image src="/hero/15_cta.jpg" alt="" fill sizes="100vw" className="object-cover" />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(2,5,4,0.72)" }}
            />
          </div>
          <div className="relative px-8 py-16 text-center sm:px-16 sm:py-20">
            <Reveal>
              <h2 className="font-display mx-auto max-w-[440px] text-balance text-[28px] leading-[1.25] tracking-[-0.01em] text-ax-white sm:text-[36px]">
                Bring us the process.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-[15px] text-ax-text/80">Tell us what needs to happen.</p>
            </Reveal>
            <Reveal delay={180}>
              <Link
                href="#form"
                className="mt-7 inline-flex items-center gap-2 rounded-[4px] bg-ax-mint px-7 py-3 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
              >
                Talk to us
                <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
