import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";

export function DevelopersCta() {
  return (
    <section className="relative overflow-hidden bg-ax-black py-28 lg:py-36">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 90% at 80% 100%, rgba(50,201,122,0.08) 0%, rgba(91,234,153,0.02) 45%, rgba(0,0,0,0) 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative container-ax flex justify-end">
        <div className="max-w-[460px] text-right">
          <Reveal>
            <h2 className="font-display text-balance text-[30px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[42px]">
              Build on something that takes execution seriously.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-[16px] leading-[1.6] text-ax-text/85">
              ALTERX is being built from the hard part outward.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <Link
              href={talkToUsDestination}
              className="mt-9 inline-flex items-center gap-2 rounded-[4px] bg-ax-mint px-7 py-3 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
            >
              Talk to us
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
