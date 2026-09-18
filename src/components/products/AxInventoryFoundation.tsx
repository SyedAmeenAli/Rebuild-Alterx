import { Reveal } from "@/components/shared/Reveal";

const CONCEPTS = [
  { label: "GST-native", copy: "Indian tax rules are part of the data model rather than added afterward." },
  { label: "Real books", copy: "A genuine double-entry ledger sits underneath the financial records." },
  { label: "Isolated workspaces", copy: "Each shop's data is separated at the database level." },
];

export function AxInventoryFoundation() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
              What makes it different
            </p>
            <h2 className="font-display mt-5 max-w-[420px] text-balance text-[28px] leading-[1.25] tracking-[-0.015em] text-ax-white sm:text-[34px]">
              Built for how retail actually works.
            </h2>
          </Reveal>

          <div className="flex flex-col">
            {CONCEPTS.map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <div className="border-t border-ax-mint/10 py-7 first:border-t-0 lg:border-t lg:first:border-t">
                  <div className="font-display text-[19px] font-medium text-ax-white">{c.label}</div>
                  <p className="mt-3 max-w-[420px] text-[14px] leading-[1.6] text-ax-muted">{c.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
