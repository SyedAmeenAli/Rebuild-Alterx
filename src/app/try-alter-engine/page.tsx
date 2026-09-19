import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { GeneratingGate } from "@/components/shared/GeneratingGate";

export const metadata: Metadata = {
  title: "Try Alter Engine — ALTERX",
  description: "Preview how Alter Engine structures an objective into a reviewable, step-by-step plan.",
};

const STEPS = [
  { n: "1", label: "Understand", copy: "Extracts supplier endpoints, identifies Q3 shipping manifests, and determines inventory priorities from the CRM.", state: "done" as const },
  { n: "2", label: "Plan", copy: "Generates a sequence to ping supplier APIs, sort delays, and compile a re-routing strategy for high-priority SKUs.", state: "done" as const },
  { n: "3", label: "Approve (human decision)", copy: "The Engine halts. The operator reviews the proposed re-routing strategy before any stock is actually moved.", state: "active" as const },
  { n: "4", label: "Act", copy: "Executes approved re-routing API calls to the warehouse management system.", state: "pending" as const },
  { n: "5", label: "Check", copy: "Verifies that API responses match the intended re-routing state.", state: "pending" as const },
];

export default function TryAlterEngine() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <section className="flex-1 bg-ax-black pb-24 pt-[150px]">
        <div className="container-ax max-w-[820px]">
          <header className="mb-14 border-b border-ax-mint/10 pb-10">
            <h1 className="font-display text-[36px] font-medium leading-[1.1] text-ax-white sm:text-[46px]">
              Try Alter Engine
            </h1>
            <p className="mt-5 max-w-[560px] text-[17px] leading-[1.55] text-ax-text/80">
              Preview how Alter Engine structures the work. This deterministic demonstration
              shows how a raw objective becomes a reviewable, step-by-step plan.
            </p>
          </header>

          <div className="flex flex-col gap-12">
            <section className="rounded-[8px] border border-ax-mint/10 bg-ax-bg-soft/60 p-8">
              <h2 className="mb-6 text-[12px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
                The objective
              </h2>
              <div className="rounded-[6px] border border-ax-mint/10 bg-ax-black p-4 text-[19px] font-medium text-ax-white">
                &quot;Check supplier inventory for Q3 delays and re-route the highest priority
                stock.&quot;
              </div>
            </section>

            <section className="rounded-[8px] border border-ax-mint/10 bg-ax-bg-soft/60 p-8">
              <h2 className="mb-7 text-[12px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
                Engine structure
              </h2>

              <GeneratingGate>
                <div className="flex flex-col gap-6">
                  {STEPS.map((step) => (
                    <div key={step.n} className={`flex gap-4 ${step.state === "pending" ? "opacity-50" : ""}`}>
                      <div
                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-[13px] font-semibold ${
                          step.state === "active"
                            ? "border-ax-mint bg-ax-mint text-ax-black"
                            : "border-ax-mint/20 bg-ax-black text-ax-text"
                        }`}
                      >
                        {step.n}
                      </div>
                      <div>
                        <h3 className={`mb-1 font-medium ${step.state === "active" ? "text-ax-mint" : "text-ax-white"}`}>
                          {step.label}
                        </h3>
                        <p className="text-[15px] text-ax-text/70">{step.copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GeneratingGate>
            </section>

            <section className="flex flex-col items-start justify-between gap-6 rounded-[8px] border border-ax-mint/20 bg-ax-mint/5 p-8 md:flex-row md:items-center">
              <div>
                <h2 className="mb-2 text-[20px] font-medium text-ax-white">
                  Ready for a real evaluation?
                </h2>
                <p className="text-ax-text/70">Connect Alter Engine to your own environment.</p>
              </div>
              <Link
                href="/request-access"
                className="inline-flex h-12 w-full flex-shrink-0 items-center justify-center rounded-[4px] bg-ax-mint px-7 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald md:w-auto"
              >
                Continue to evaluation form
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
