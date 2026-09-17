import { MediaFrame } from "@/components/frames/MediaFrame";
import { Reveal } from "@/components/shared/Reveal";
import { image } from "@/lib/media";

const STAGES = ["Intent", "Plan", "Execute", "Verify", "Outcome"];

export function HomeFrame02() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            02
          </p>
          <h2 className="font-display mt-4 max-w-[360px] text-balance text-[30px] leading-[1.15] tracking-[-0.015em] text-ax-white sm:text-[38px]">
            From intent to execution.
          </h2>

          <div className="mt-10 flex flex-col gap-4">
            {STAGES.map((stage, i) => (
              <div key={stage} className="flex items-baseline gap-4 border-t border-ax-mint/10 pt-4 first:border-t-0 first:pt-0">
                <span className="text-[13px] font-medium text-ax-mint/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[16px] font-medium text-ax-white">{stage}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <MediaFrame
            media={image("/hero/11_how_it_works.jpg", "", "80% center")}
            aspect="aspect-[3/4] lg:aspect-auto lg:h-full"
            rounded
            drift
          />
        </Reveal>
      </div>
    </section>
  );
}
