import { MediaFrame } from "@/components/frames/MediaFrame";
import { Reveal } from "@/components/shared/Reveal";
import { alterxMedia, toMedia } from "@/content/alterx-media";

export function RequestToWork() {
  return (
    <section id="how" className="relative bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <h2 className="font-display max-w-[620px] text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[44px]">
            You describe the work. ALTERX handles the workflow.
          </h2>
          <p className="mt-5 max-w-[480px] text-[16px] leading-[1.6] text-ax-text/80">
            You don&apos;t need to build the process yourself. Start with what you need to
            happen.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="mt-14 lg:mt-16">
          <MediaFrame media={toMedia(alterxMedia.homeRequestFrame)} aspect="aspect-[21/9]" />
        </div>
      </Reveal>
    </section>
  );
}
