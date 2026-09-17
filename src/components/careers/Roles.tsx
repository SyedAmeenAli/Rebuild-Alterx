import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";

export function Roles() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Roles
          </p>
          <h2 className="font-display mt-5 text-[24px] font-medium text-ax-white sm:text-[28px]">
            Nothing open right now.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-8 border-t border-ax-mint/10 pt-8">
            <p className="text-[16px] text-ax-white">Still interested?</p>
            <p className="mt-2 max-w-[420px] text-[15px] leading-[1.6] text-ax-muted">
              Tell us what you&apos;d like to work on.
            </p>
            <Link
              href={talkToUsDestination}
              className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
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
