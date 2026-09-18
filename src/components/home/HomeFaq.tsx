import { Reveal } from "@/components/shared/Reveal";

const FAQS = [
  { q: "What is ALTERX?", a: "ALTERX turns a business objective into planned, executed and verified work." },
  { q: "What is Alter Engine?", a: "The execution system underneath ALTERX — it plans, binds, compiles, executes, verifies and recovers work." },
  { q: "What is AxInventory?", a: "A real product built on Alter Engine — inventory, point of sale, purchasing, GST and accounting for Indian retail." },
  { q: "Do I need to build workflows myself?", a: "No. You describe the outcome; ALTERX works out the steps." },
  { q: "Is ALTERX a public API?", a: "Not currently. There is no self-serve public API or SDK." },
  { q: "Is ALTERX currently self-service?", a: "No. ALTERX v1 is managed-service — the team works with you directly." },
];

export function HomeFaq() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-mint/70">
            FAQ
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 max-w-[720px] divide-y divide-ax-mint/10 border-t border-ax-mint/10">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-medium text-ax-white marker:content-none focus-visible:outline-ax-mint focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-[17px]">
                  {faq.q}
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 text-[18px] text-ax-mint transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[600px] text-[14px] leading-[1.6] text-ax-muted">{faq.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
