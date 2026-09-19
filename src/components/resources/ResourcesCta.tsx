import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";

export function ResourcesCta() {
  return (
    <section className="relative overflow-hidden bg-ax-black py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[350px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 90% at 80% 100%, rgba(50,201,122,0.08) 0%, rgba(91,234,153,0.02) 45%, rgba(0,0,0,0) 75%)",
        }}
        aria-hidden="true"
      />

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
              className="inline-flex w-full flex-shrink-0 items-center justify-center gap-2 rounded-[4px] bg-ax-mint px-6 py-3 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald sm:w-auto"
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
