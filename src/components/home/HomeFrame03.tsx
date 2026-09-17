import { MediaFrame } from "@/components/frames/MediaFrame";
import { Reveal } from "@/components/shared/Reveal";
import { image } from "@/lib/media";

export function HomeFrame03() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax mb-10 lg:mb-14">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            03
          </p>
          <h2 className="font-display mt-4 max-w-[440px] text-balance text-[30px] leading-[1.15] tracking-[-0.015em] text-ax-white sm:text-[38px]">
            See the work happen.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <MediaFrame
          media={image("/hero/11_how_it_works.jpg", "", "right center")}
          aspect="aspect-[32/9]"
          drift
        >
          <div className="absolute bottom-6 right-6 text-[12px] text-ax-muted sm:bottom-8 sm:right-10">
            Execution, in real time
          </div>
        </MediaFrame>
      </Reveal>
    </section>
  );
}
