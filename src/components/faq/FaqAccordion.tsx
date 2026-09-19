"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";
import "@/components/shared/FaqPlus.css";

const FAQS = [
  { q: "What is ALTERX?", a: "A system that runs work you describe in plain language, instead of a tool you configure." },
  { q: "How does ALTERX work?", a: "Alter Engine understands the request, plans it, connects the tools it needs, runs it, checks the result, and recovers if a step fails." },
  { q: "What is Alter Engine?", a: "The execution system underneath ALTERX — planning, binding, durable execution, verification, recovery, and memory." },
  { q: "What is AxInventory?", a: "Inventory, counter (POS), purchasing, GST, and books for Indian retail, built on ALTERX." },
  { q: "Do I need to build workflows myself?", a: "No. You describe the outcome. The engine plans and runs the steps." },
  { q: "Is ALTERX a public API?", a: "Not in v1. It is a managed service." },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-ax-bg-soft pb-24 lg:pb-32">
      <div className="container-ax">
        <Reveal>
          <div className="flex flex-col divide-y divide-ax-mint/10 border-t border-b border-ax-mint/10">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[15px] font-medium text-ax-white">{faq.q}</span>
                    <span className={`faq-plus${isOpen ? " is-open" : ""}`} aria-hidden="true">
                      <svg viewBox="0 0 30 30">
                        <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    className="grid overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="min-h-0 pb-5 text-[14px] leading-[1.6] text-ax-muted">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-8 text-[14px] text-ax-muted">
            Still have a question?{" "}
            <Link href={talkToUsDestination} className="font-medium text-ax-mint hover:text-ax-emerald">
              Talk to us
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
