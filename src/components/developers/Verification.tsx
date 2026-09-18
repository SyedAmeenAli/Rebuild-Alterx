import { MediaFrame } from "@/components/frames/MediaFrame";
import { Reveal } from "@/components/shared/Reveal";
import { alterxMedia, toMedia } from "@/content/alterx-media";

const EXAMPLES = ["Sending a message", "Writing a record", "Approving a transaction"];

export function Verification() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Verification
          </p>
          <h2 className="font-display mt-5 max-w-[480px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
            Doing the work is not enough. The result has to hold.
          </h2>
          <p className="mt-5 max-w-[440px] text-[16px] leading-[1.6] text-ax-text/80">
            Before an action reaches the outside world, the result is checked. That includes
            things like {EXAMPLES[0].toLowerCase()}, {EXAMPLES[1].toLowerCase()} or{" "}
            {EXAMPLES[2].toLowerCase()}.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <Reveal delay={80}>
            <MediaFrame
              media={toMedia(alterxMedia.verificationFrame)}
              aspect="aspect-[4/3] lg:aspect-auto lg:h-full"
              className="min-h-[280px]"
            />
          </Reveal>

          <Reveal delay={140}>
            <div className="flex h-full flex-col items-start justify-center gap-4 rounded-[6px] border border-ax-mint/10 bg-ax-bg-soft/40 px-7 py-9 sm:px-9 sm:py-11">
              <span className="rounded-full border border-ax-mint/20 px-4 py-1.5 text-[13px] font-medium text-ax-text/80">
                Output
              </span>
              <span aria-hidden="true" className="pl-4 text-ax-mint/40">↓</span>
              <span className="rounded-full border border-ax-mint/40 px-4 py-1.5 text-[13px] font-medium text-ax-white">
                Check
              </span>
              <span aria-hidden="true" className="pl-4 text-ax-mint/40">↓</span>
              <div className="flex flex-col gap-3 pl-2">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-ax-mint px-4 py-1.5 text-[13px] font-medium text-ax-black">
                    Pass
                  </span>
                  <span className="text-[13px] text-ax-muted">→ Continue</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-ax-mint/30 px-4 py-1.5 text-[13px] font-medium text-ax-text/80">
                    Fail
                  </span>
                  <span className="text-[13px] text-ax-muted">→ Recover / Ask / Stop</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
