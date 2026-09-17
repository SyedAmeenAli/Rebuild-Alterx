import { MediaFrame } from "@/components/frames/MediaFrame";
import { Reveal } from "@/components/shared/Reveal";
import { image } from "@/lib/media";

const STEPS = ["Request", "Structured work"];

export function HomeFrame01() {
  return (
    <section className="relative bg-ax-black pt-24 lg:pt-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            01
          </p>
          <h2 className="font-display mt-4 max-w-[520px] text-balance text-[30px] leading-[1.15] tracking-[-0.015em] text-ax-white sm:text-[38px]">
            Tell it what you need.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="mt-10 lg:mt-14">
          <MediaFrame
            media={image("/hero/11_how_it_works.jpg", "", "20% center")}
            aspect="aspect-[21/9]"
            drift
          >
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, rgba(2,5,4,0.55) 0%, rgba(2,5,4,0) 45%)" }}
            />
            <div className="absolute bottom-6 left-6 flex items-center gap-3 sm:bottom-10 sm:left-10">
              {STEPS.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-full border border-ax-mint/30 bg-ax-black/40 px-4 py-1.5 text-[13px] font-medium text-ax-text backdrop-blur-sm">
                    {step}
                  </span>
                  {i < STEPS.length - 1 && (
                    <span aria-hidden="true" className="text-ax-mint/50">→</span>
                  )}
                </div>
              ))}
            </div>
          </MediaFrame>
        </div>
      </Reveal>
    </section>
  );
}
