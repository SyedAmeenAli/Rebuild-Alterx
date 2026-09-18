import { MediaFrame } from "@/components/frames/MediaFrame";
import { Reveal } from "@/components/shared/Reveal";
import { alterxMedia, toMedia } from "@/content/alterx-media";

export function ProductsHero() {
  return (
    <section className="relative bg-ax-black pb-20 pt-[150px] lg:pb-28 lg:pt-[170px]">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Products
          </p>
          <h1 className="font-display mt-6 max-w-[720px] text-balance text-[38px] leading-[1.08] tracking-[-0.02em] text-ax-white sm:text-[52px] lg:text-[64px]">
            Built for the work behind the work.
          </h1>
          <p className="mt-7 max-w-[460px] text-[17px] leading-[1.55] text-ax-text/80">
            ALTERX brings together an execution system and the products built on top of it.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="mt-16 lg:mt-20">
          <MediaFrame media={toMedia(alterxMedia.engineStill)} aspect="aspect-[16/9] lg:aspect-[21/9]" drift />
        </div>
      </Reveal>
    </section>
  );
}
