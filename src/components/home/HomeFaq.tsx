"use client";

import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";

const FAQS = [
  { q: "What is ALTERX?", a: "A system that runs work you describe in plain language, instead of a tool you configure." },
  { q: "How does ALTERX work?", a: "Alter Engine understands the request, plans it, connects the tools it needs, runs it, checks the result, and recovers if a step fails." },
  { q: "What is Alter Engine?", a: "The execution system underneath ALTERX — planning, binding, durable execution, verification, recovery, and memory." },
  { q: "What is AxInventory?", a: "Inventory, counter (POS), purchasing, GST, and books for Indian retail, built on ALTERX." },
  { q: "Do I need to build workflows myself?", a: "No. You describe the outcome. The engine plans and runs the steps." },
  { q: "Is ALTERX a public API?", a: "Not in v1. It is a managed service." },
];

export function HomeFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-ax-bg-soft pb-24 lg:pb-32">
      <div className="container-ax">
        <Reveal>
          <h2 className="font-display text-[28px] font-medium leading-[1.1] tracking-[-0.02em] text-ax-white sm:text-[34px]">
            Questions
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-col divide-y divide-ax-mint/10 border-t border-b border-ax-mint/10">
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
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-[18px] leading-none text-ax-mint transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                    >
                      +
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
      </div>
    </section>
  );
}
