import { Reveal } from "@/components/shared/Reveal";
import { AdapterCard } from "./AdapterCard";

const ADAPTERS = [
  {
    title: "Model",
    copy: "Language and reasoning providers behind planning and generation.",
    className: "sm:row-span-2",
  },
  { title: "Search", copy: "External search and retrieval systems for grounding results." },
  {
    title: "Data",
    copy: "Databases, files and structured records a mission can read and write.",
  },
  { title: "Messaging", copy: "Email, chat and notification channels connected to a mission." },
  {
    title: "Payments",
    copy: "Billing, invoicing and payment rails used inside a workflow.",
    className: "sm:row-span-2",
  },
  { title: "Other system", copy: "Any additional system connected behind a defined interface." },
];

export function Adapters() {
  return (
    <section className="relative bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Adapters
          </p>
          <h2 className="font-display mt-5 max-w-[520px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
            Your systems shouldn&apos;t dictate the architecture.
          </h2>
          <p className="mt-5 max-w-[520px] text-[16px] leading-[1.6] text-ax-text/80">
            External providers sit behind interfaces ALTERX owns. A provider can change without
            rewriting the planning, execution or verification system around it.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:grid-rows-2 lg:mt-20">
            {ADAPTERS.map((a) => (
              <AdapterCard key={a.title} title={a.title} copy={a.copy} className={a.className} />
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-[420px] text-center text-[13px] leading-[1.6] text-ax-muted lg:mt-14">
            The center stays stable. The outer systems can change.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
