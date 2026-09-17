import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

export function FinalStatement() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax text-center">
        <Reveal>
          <p className="font-display mx-auto max-w-[440px] text-balance text-[24px] leading-[1.3] tracking-[-0.01em] text-ax-white sm:text-[30px]">
            Some problems are easier to solve together.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Link
            href="#form"
            className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
          >
            Talk to us
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
