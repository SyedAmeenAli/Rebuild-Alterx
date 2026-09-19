import { Reveal } from "@/components/shared/Reveal";
import "@/components/shared/FaqPlus.css";

const FAQS = [
  {
    q: "What's here that isn't on the homepage?",
    a: "The homepage shows a short preview. This page is the fuller list, plus engineering notes as they get written.",
  },
  {
    q: "How often is this updated?",
    a: "When there's something worth publishing, not on a schedule.",
  },
  {
    q: "Is there a newsletter or RSS feed?",
    a: "Not currently.",
  },
  {
    q: "Can I talk to the team about something here?",
    a: "Yes — the contact page is the fastest way to reach us.",
  },
];

export function ResourcesFaq() {
  return (
    <section id="faq" className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax">
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
                  <span className="faq-plus" aria-hidden="true">
                    <svg viewBox="0 0 30 30">
                      <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z" />
                    </svg>
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
