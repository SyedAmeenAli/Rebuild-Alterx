import { Reveal } from "@/components/shared/Reveal";

export function ProductTransition() {
  return (
    <section className="relative bg-ax-bg-soft py-16 lg:py-20">
      <div className="container-ax">
        <Reveal>
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.14em] text-ax-muted">
              <span className="h-px w-12 bg-ax-mint/30 sm:w-24" />
              <span>From the engine</span>
              <span className="text-ax-mint">→</span>
              <span>To the product</span>
              <span className="h-px w-12 bg-ax-mint/30 sm:w-24" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
