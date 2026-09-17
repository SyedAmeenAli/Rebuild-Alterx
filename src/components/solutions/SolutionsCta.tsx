import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";

export function SolutionsCta() {
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
              "linear-gradient(90deg, rgba(2,5,4,0.92) 0%, rgba(2,5,4,0.55) 45%, rgba(2,5,4,0.3) 100%)",
          }}
        />
      </div>

      <div className="relative container-ax">
        <Reveal>
          <h2 className="font-display max-w-[460px] text-balance text-[32px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[42px] lg:text-[48px]">
            Bring us a process that matters.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 max-w-[380px] text-[16px] leading-[1.6] text-ax-text/85">
            The hard part is what happens after the demo.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-9 flex flex-col items-start gap-3">
            <Link
              href={talkToUsDestination}
              className="inline-flex items-center gap-2 rounded-[4px] bg-ax-mint px-7 py-3 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
            >
              Talk to us
              <span aria-hidden="true">→</span>
            </Link>
            <span className="text-[13px] text-ax-muted">Tell us what needs to happen.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
