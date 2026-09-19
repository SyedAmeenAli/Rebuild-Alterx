import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { SolutionsSubHero } from "@/components/solutions/SolutionsSubHero";
import { SolutionsSubNav } from "@/components/solutions/SolutionsSubNav";
import { SolutionsCta } from "@/components/solutions/SolutionsCta";
import GlareHover from "@/components/shared/GlareHover";

const STATES = [
  { label: "Working", copy: "The process is running normally." },
  { label: "Problem", copy: "Something doesn't match what was expected." },
  { label: "Identify", copy: "The failure is classified before anything else happens." },
  { label: "Respond", copy: "A response is chosen — retry, escalate or stop." },
  { label: "Continue", copy: "Execution picks back up from where it left off." },
];

export const metadata: Metadata = {
  title: "Reliability — Solutions — ALTERX",
  description: "How the system holds up when execution changes.",
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {STATES.map((s, i) => (
              <GlareHover
                key={s.label}
                height="auto"
                className="!h-auto"
                background={i === STATES.length - 1 ? "#123D27" : "#06110B"}
              >
                <div className="flex h-full flex-col gap-2 p-5">
                  <p
                    className="font-display text-[16px] font-medium"
                    style={{ color: i === STATES.length - 1 ? "#9FFFC0" : "#F4FFF8" }}
                  >
                    {s.label}
                  </p>
                  <p className="text-[13px] leading-[1.55] text-ax-muted">{s.copy}</p>
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
