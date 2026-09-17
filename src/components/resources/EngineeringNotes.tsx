import { Reveal } from "@/components/shared/Reveal";

export function EngineeringNotes() {
  return (
    <section id="engineering-notes" className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Engineering notes
          </p>
          <h2 className="font-display mt-5 max-w-[520px] text-balance text-[26px] leading-[1.25] tracking-[-0.01em] text-ax-white sm:text-[30px]">
            Some things are worth explaining properly.
          </h2>
          <p className="mt-4 max-w-[480px] text-[15px] leading-[1.6] text-ax-muted">
            Coming when there is something worth publishing. We&apos;d rather publish a few
            useful things than fill a page with announcements.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
