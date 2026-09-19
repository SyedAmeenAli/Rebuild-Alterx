import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";

export function SolutionsCta() {
  return (
    <section className="relative overflow-hidden bg-ax-black py-28 lg:py-36">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 90% at 20% 100%, rgba(50,201,122,0.08) 0%, rgba(91,234,153,0.02) 45%, rgba(0,0,0,0) 75%)",
        }}
        aria-hidden="true"
      />

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
