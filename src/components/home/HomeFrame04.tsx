import Link from "next/link";
import { MediaFrame } from "@/components/frames/MediaFrame";
import { Reveal } from "@/components/shared/Reveal";
import { image } from "@/lib/media";

export function HomeFrame04() {
  return (
    <section className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.7fr] lg:gap-16">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            04 — Built underneath
          </p>
          <h2 className="font-display mt-4 max-w-[340px] text-balance text-[30px] leading-[1.15] tracking-[-0.015em] text-ax-white sm:text-[38px]">
            Alter Engine.
          </h2>
          <p className="mt-5 max-w-[320px] text-[15px] leading-[1.6] text-ax-muted">
            The execution system underneath. Plans, runs, verifies, recovers.
          </p>
          <Link
            href="/products#alter-engine"
            className="mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
          >
            Explore Alter Engine
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <MediaFrame
            media={image("/hero/11_how_it_works.jpg", "", "center 30%")}
            aspect="aspect-square"
            drift
          />
        </Reveal>
      </div>
    </section>
  );
}
