import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import "@/components/shared/FaqPlus.css";

const FAQS = [
  { q: "What happens after I reach out?", a: "Someone on the team looks at what you're trying to do and replies from there — no queue, no auto-responder pretending otherwise." },
  { q: "What should I include?", a: "The problem or outcome you're working toward, and the systems it touches today. That's what the message field above is for." },
  {
    q: "Can I work with ALTERX as a developer?",
    a: "v1 is managed-service — the team works with you directly rather than through a self-service platform. Get in touch and we'll figure out the right way to work together.",
  },
  { q: "Is there a public API?", a: "Not currently. See how execution is actually built —", link: { href: "/developers", label: "Developers" } },
];

export function ContactFaq() {
  return (
    <section className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            FAQ
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 max-w-[720px] divide-y divide-ax-mint/10 border-t border-ax-mint/10">
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
                  {faq.link && (
                    <>
                      {" "}
                      <Link href={faq.link.href} className="text-ax-mint underline underline-offset-2">
                        {faq.link.label}
                      </Link>
                    </>
                  )}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
