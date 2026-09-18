import Link from "next/link";
import { MediaFrame } from "@/components/frames/MediaFrame";
import { Reveal } from "@/components/shared/Reveal";
import { alterxMedia, toMedia } from "@/content/alterx-media";
import { alterEngineDestination } from "@/content/navigation";

export function AlterEngineSection() {
  return (
    <section id="alter-engine" className="relative bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Alter Engine
          </p>
          <h2 className="font-display mt-5 max-w-[560px] text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[46px]">
            The execution system underneath ALTERX.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="mt-10 lg:mt-14">
          <MediaFrame media={toMedia(alterxMedia.engineStill)} aspect="aspect-[16/9] lg:aspect-[21/9]" drift />
        </div>
      </Reveal>

      <div className="container-ax mt-10 lg:mt-14">
        <Reveal delay={150}>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[480px] text-[16px] leading-[1.6] text-ax-text/80">
              ALTER ENGINE turns an objective into executable work. It plans, runs, verifies and
              recovers across the systems involved.
            </p>
            <Link
              href={alterEngineDestination}
              className="inline-flex flex-shrink-0 items-center gap-2 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
            >
              Explore Alter Engine
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
