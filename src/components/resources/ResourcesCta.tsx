import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";

export function ResourcesCta() {
  return (
    <section className="relative overflow-hidden bg-ax-black py-20 lg:py-24">
      <div className="absolute inset-0">
        <Image src="/hero/15_cta.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(2,5,4,0.75) 0%, rgba(2,5,4,0.6) 50%, rgba(2,5,4,0.85) 100%)",
          }}
        />
      </div>

      <div className="relative container-ax">
        <Reveal>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display max-w-[380px] text-balance text-[24px] leading-[1.25] tracking-[-0.01em] text-ax-white sm:text-[28px]">
                We build systems by learning where they break.
              </h2>
              <p className="mt-3 text-[15px] text-ax-text/80">
                Tell us what you&apos;re working on.
              </p>
            </div>
            <Link
              href={talkToUsDestination}
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-[4px] bg-ax-mint px-6 py-3 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
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
