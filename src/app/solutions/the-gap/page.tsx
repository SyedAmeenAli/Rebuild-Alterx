import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { SolutionsSubHero } from "@/components/solutions/SolutionsSubHero";
import { SolutionsSubNav } from "@/components/solutions/SolutionsSubNav";
import { SolutionsCta } from "@/components/solutions/SolutionsCta";
import GlareHover from "@/components/shared/GlareHover";

const FAILURES = [
  { label: "Stale context", copy: "Information used to decide is no longer current." },
  { label: "Malformed data", copy: "What comes back doesn't match what was expected." },
  { label: "API timeout", copy: "A system involved doesn't respond in time." },
  { label: "Incorrect interpretation", copy: "The request was understood differently than intended." },
  { label: "A step finishing unnoticed", copy: "Something completes without triggering what comes next." },
];

export const metadata: Metadata = {
  title: "The gap — Solutions — ALTERX",
  description: "Where plain software stops short of real execution, and where those gaps actually show up.",
};

export default function TheGapPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <SolutionsSubHero eyebrow="The gap" title="The steps aren't the hard part. Keeping them together is.">
        <p className="mt-6 max-w-[560px] text-[16px] leading-[1.6] text-ax-text/80">
          A single request can mean understanding what was asked, checking company information,
          confirming availability, preparing something, updating a system of record and
          triggering the next action. The individual steps are easy. Process breaks where those
          steps meet.
        </p>
      </SolutionsSubHero>

      <section className="relative bg-ax-black pb-24 lg:pb-32">
        <div className="container-ax">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Where it actually breaks
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FAILURES.map((f) => (
              <GlareHover key={f.label} height="auto" className="!h-auto" glass>
                <div className="p-6">
                  <p className="font-display text-[18px] font-medium text-ax-white">{f.label}</p>
                  <p className="mt-2 text-[14px] leading-[1.6] text-ax-muted">{f.copy}</p>
                </div>
              </GlareHover>
            ))}
          </div>
        </div>
      </section>

      <SolutionsSubNav current="the-gap" />
      <SolutionsCta />
    </main>
  );
}
