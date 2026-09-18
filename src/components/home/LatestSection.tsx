import { Reveal } from "@/components/shared/Reveal";

export function LatestSection() {
  return (
    <section className="relative bg-ax-bg-soft pb-24 lg:pb-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-mint/70">Latest</p>
          <p className="mt-4 text-[15px] text-ax-muted">Notes will live here when they are real.</p>
        </Reveal>
      </div>
    </section>
  );
}
