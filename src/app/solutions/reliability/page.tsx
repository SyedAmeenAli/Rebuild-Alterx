import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { SolutionsSubHero } from "@/components/solutions/SolutionsSubHero";
import { SolutionsSubNav } from "@/components/solutions/SolutionsSubNav";
import { SolutionsCta } from "@/components/solutions/SolutionsCta";
import GlareHover from "@/components/shared/GlareHover";

const PRINCIPLES = [
  {
    label: "Verify before done",
    copy: "Reliable execution starts with not treating every successful-looking response as a completed job. Results are verified before work is considered finished.",
  },
  {
    label: "Handle failure explicitly",
    copy: "Failures are expected, not exceptional. The system records where execution stopped, classifies the problem, and follows an available recovery path instead of silently ending.",
  },
  {
    label: "Least-privilege access",
    copy: "Security starts with controlling access to tools, credentials, and data. Execution uses only the permissions required for the work in front of it.",
  },
  {
    label: "Data isolation",
    copy: "Tenant data stays separated, so one customer's information is never exposed to another.",
  },
  {
    label: "Reliability is systemic",
    copy: "Testing, observability, verification, and recovery work together. Reliability is a property of the whole system, not a single feature bolted on.",
  },
];

export const metadata: Metadata = {
  title: "Reliability — Solutions — ALTERX",
  description: "How the system holds up when execution changes — verification, recovery, access control and isolation.",
};

export default function ReliabilityPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <SolutionsSubHero eyebrow="Reliability" title="Real work doesn't always go to plan.">
        <p className="mt-6 max-w-[560px] text-[16px] leading-[1.6] text-ax-text/80">
          ALTERX is built to recognize when something changes, respond deliberately, and keep the
          process moving when it can.
        </p>
      </SolutionsSubHero>

      <section className="relative bg-ax-black pb-24 lg:pb-32">
        <div className="container-ax">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Principles
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <GlareHover
                key={p.label}
                height="auto"
                className={`!h-auto${i === PRINCIPLES.length - 1 ? " lg:col-span-2" : ""}`}
                glass
              >
                <div className="flex h-full flex-col gap-2 p-6">
                  <p className="font-display text-[17px] font-medium text-ax-white">{p.label}</p>
                  <p className="max-w-[560px] text-[14px] leading-[1.6] text-ax-muted">{p.copy}</p>
                </div>
              </GlareHover>
            ))}
          </div>
        </div>
      </section>

      <SolutionsSubNav current="reliability" />
      <SolutionsCta />
    </main>
  );
}
