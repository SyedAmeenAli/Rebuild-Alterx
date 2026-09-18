import { MediaFrame } from "@/components/frames/MediaFrame";
import { Reveal } from "@/components/shared/Reveal";
import { alterxMedia, toMedia } from "@/content/alterx-media";

const STATES = ["Working", "Problem", "Identify", "Respond", "Continue"];

export function WhyItHoldsTogether() {
  return (
    <section id="reliability" className="relative bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Reliability
          </p>
          <h2 className="font-display mt-5 max-w-[560px] text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[42px]">
            Real work doesn&apos;t always go to plan.
          </h2>
          <p className="mt-5 max-w-[520px] text-[16px] leading-[1.6] text-ax-text/80">
            ALTERX is built to recognize when something changes, respond deliberately, and keep
            the process moving when it can.
          </p>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="mt-14 lg:mt-16">
          <MediaFrame media={toMedia(alterxMedia.verificationFrame)} aspect="aspect-[21/9]">
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(0deg, rgba(2,5,4,0.75) 0%, rgba(2,5,4,0.15) 55%)" }}
            />
            <div className="absolute bottom-6 left-6 flex flex-wrap items-center gap-2 sm:bottom-10 sm:left-10 sm:gap-3">
              {STATES.map((s, i) => (
                <div key={s} className="flex items-center gap-2 sm:gap-3">
                  <span
                    className={`rounded-full border px-3.5 py-1.5 text-[13px] font-medium backdrop-blur-sm ${
                      i === STATES.length - 1
                        ? "border-ax-mint bg-ax-mint text-ax-black"
                        : "border-ax-mint/30 bg-ax-black/40 text-ax-text"
                    }`}
                  >
                    {s}
                  </span>
                  {i < STATES.length - 1 && (
                    <span aria-hidden="true" className="text-ax-mint/40">→</span>
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
