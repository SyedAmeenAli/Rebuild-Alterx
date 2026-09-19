import { Reveal } from "@/components/shared/Reveal";
import { RoadmapDial } from "./RoadmapDial";

export function WhatsNext() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            What&apos;s next
          </p>
          <h2 className="font-display mt-5 max-w-[520px] text-balance text-[26px] leading-[1.25] tracking-[-0.01em] text-ax-white sm:text-[30px]">
            We&apos;re continuing to expand what ALTERX can work with.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 rounded-[8px] border border-ax-mint/10 bg-ax-bg-soft/40 p-8 sm:p-10">
            <RoadmapDial />
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-[560px] text-[13px] leading-[1.6] text-ax-muted/70">
            These are directions we&apos;re exploring and building toward, not promises tied to a
            specific release date.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
