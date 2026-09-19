import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import GlareHover from "@/components/shared/GlareHover";

const WORKFLOWS = [
  {
    n: "01",
    title: "Comparing supplier information before a sourcing decision.",
    copy: "A structured comparison that keeps quotes, quality evidence and the commitment point visible before anything is approved.",
    condition: "A sourcing team needs to compare current supplier information before a decision, with quotes and quality evidence scattered across separate threads and files.",
  },
  {
    n: "02",
    title: "Turning a stock discrepancy into a reviewable exception.",
    copy: "A workflow that surfaces an inventory exception with its evidence, instead of letting it sit unnoticed in a report.",
    condition: "A stock count doesn't match the system record, and it isn't clear who should look at it or what evidence supports either number.",
  },
  {
    n: "03",
    title: "Handling a mid-order change without losing the audit trail.",
    copy: "A workflow that structures a requested order change — what's changing, why, and what it affects — before it is committed.",
    condition: "An order needs to change after it was placed — a different delivery address, quantity or item — and the change needs to be checked against what has already been committed.",
  },
];

export const metadata: Metadata = {
  title: "Work — ALTERX",
  description: "Illustrative workflows showing how Alter Engine structures a specific kind of work.",
};

export default function WorkPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <section className="relative overflow-hidden bg-ax-black pb-16 pt-[150px] lg:pb-20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse 55% 90% at 30% 10%, rgba(50,201,122,0.1) 0%, rgba(91,234,153,0.03) 45%, rgba(0,0,0,0) 75%)",
          }}
          aria-hidden="true"
        />
        <div className="relative container-ax max-w-[720px]">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Illustrative workflows
          </p>
          <h1 className="font-display mt-6 text-balance text-[34px] leading-[1.1] tracking-[-0.02em] text-ax-white sm:text-[46px]">
            How the work actually moves.
          </h1>
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.6] text-ax-text/80">
            These are illustrative workflows, not customer case studies — no company, outcome or
            metric here is real. Each shows how Alter Engine structures a specific kind of work.
          </p>
        </div>
      </section>

      <section className="relative bg-ax-black pb-24 lg:pb-32">
        <div className="container-ax">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {WORKFLOWS.map((w) => (
              <GlareHover key={w.n} height="auto" className="!h-auto" glass>
                <div className="flex h-full flex-col gap-4 p-6">
                  <span className="w-fit rounded-full border border-ax-mint/40 bg-ax-black/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-ax-mint">
                    Illustrative workflow — not a customer case study
                  </span>
                  <p className="font-display text-[18px] font-medium leading-[1.3] text-ax-white">
                    {w.title}
                  </p>
                  <p className="text-[14px] leading-[1.6] text-ax-muted">{w.copy}</p>
                  <div className="mt-auto border-t border-ax-mint/10 pt-4">
                    <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-ax-mint/70">
                      The condition
                    </p>
                    <p className="mt-2 text-[13px] leading-[1.6] text-ax-muted">{w.condition}</p>
                  </div>
                </div>
              </GlareHover>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
