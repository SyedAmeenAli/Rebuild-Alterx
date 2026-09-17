import Link from "next/link";
import { MediaFrame } from "@/components/frames/MediaFrame";
import { Reveal } from "@/components/shared/Reveal";
import { image } from "@/lib/media";
import { alterEngineDestination } from "@/content/navigation";

const FLOW = ["Objective", "Plan", "Execute", "Verify", "Recover", "Done"];

export function AlterEngineSection() {
  return (
    <section id="alter-engine" className="relative bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Alter Engine
          </p>
          <h2 className="font-display mt-5 max-w-[520px] text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[44px]">
            The engine underneath the simplicity.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="mt-10 lg:mt-14">
          <MediaFrame media={image("/hero/11_how_it_works.jpg", "", "center 30%")} aspect="aspect-[21/9]" drift>
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, rgba(2,5,4,0.6) 0%, rgba(2,5,4,0) 50%)" }}
            />
            <div className="absolute bottom-6 left-6 flex flex-wrap items-center gap-2 sm:bottom-10 sm:left-10 sm:gap-3">
              {FLOW.map((step, i) => (
                <div key={step} className="flex items-center gap-2 sm:gap-3">
                  <span
                    className={`rounded-full border px-3.5 py-1.5 text-[13px] font-medium backdrop-blur-sm ${
                      i === FLOW.length - 1
                        ? "border-ax-mint bg-ax-mint text-ax-black"
                        : "border-ax-mint/30 bg-ax-black/40 text-ax-text"
                    }`}
                  >
                    {step}
                  </span>
                  {i < FLOW.length - 1 && (
                    <span aria-hidden="true" className="text-ax-mint/40">→</span>
                  )}
                </div>
              ))}
            </div>
          </MediaFrame>
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
