import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

const FAQS = [
  {
    q: "What is ALTERX?",
    a: "ALTERX turns a business objective into planned, executed and verified work, instead of leaving the user to operate a workflow builder or agent framework directly.",
  },
  {
    q: "What is Alter Engine?",
    a: "The execution system underneath ALTERX. It plans, binds, compiles, executes, verifies and recovers work across the systems involved.",
  },
  {
    q: "What is AxInventory?",
    a: "A real product built on top of Alter Engine — inventory, point of sale, purchasing, GST and accounting for Indian retail businesses.",
  },
  {
    q: "How does ALTERX handle failures?",
    a: "Failures are classified and a response is chosen through explicit policy, rather than blindly retrying everything. See the Developers page for the full picture.",
  },
  {
    q: "Is there a public API or SDK?",
    a: "Not currently. ALTERX v1 is managed-service — the team works with you directly rather than shipping a self-service developer platform.",
  },
  {
    q: "Can I talk to the team?",
    a: "Yes — the contact page is the fastest way to reach us.",
  },
];

export function ResourcesFaq() {
  return (
    <section id="faq" className="relative overflow-hidden bg-ax-bg-soft py-24 lg:py-32">
      <div className="absolute inset-0 opacity-[0.1]">
        <Image src="/hero/14_faq.jpg" alt="" fill sizes="100vw" className="object-cover" />
      </div>

      <div className="relative container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            FAQ
          </p>
          <h2 className="font-display mt-5 max-w-[440px] text-balance text-[26px] leading-[1.25] tracking-[-0.01em] text-ax-white sm:text-[32px]">
            Common questions.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 max-w-[720px] divide-y divide-ax-mint/10 border-t border-ax-mint/10">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-medium text-ax-white marker:content-none focus-visible:outline-ax-mint focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-[18px]">
                  {faq.q}
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 text-[18px] text-ax-mint transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[600px] text-[14px] leading-[1.6] text-ax-muted">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
