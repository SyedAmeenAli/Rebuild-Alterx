import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

export function FeaturedResource() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <div className="mx-auto max-w-[600px] text-center">
          <Reveal>
            <h2 className="font-display text-balance text-[26px] leading-[1.3] tracking-[-0.01em] text-ax-white sm:text-[32px] lg:text-[36px]">
              Build less noise.
              <br />
              Keep more clarity.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/developers"
              className="mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
            >
              Explore the system
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
