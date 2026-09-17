import { Reveal } from "@/components/shared/Reveal";

const CONCEPTS = [
  { label: "GST-native", copy: "Indian tax rules are part of the data model rather than added afterward." },
  { label: "Real books", copy: "A genuine double-entry ledger sits underneath the financial records." },
  { label: "Multi-tenant isolation", copy: "Each shop operates inside its own isolated workspace even though the service uses shared infrastructure." },
];

export function AxInventoryFoundation() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            What makes it different
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {CONCEPTS.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <div className="border-t border-ax-mint/15 pt-5">
                <div className="font-display text-[19px] font-medium text-ax-white">{c.label}</div>
                <p className="mt-3 text-[14px] leading-[1.6] text-ax-muted">{c.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={280}>
          <p className="mt-14 text-[13px] text-ax-muted/70">
            Technical foundation details are available on request.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
