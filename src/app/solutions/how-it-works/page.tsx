import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { SolutionsSubHero } from "@/components/solutions/SolutionsSubHero";
import { SolutionsSubNav } from "@/components/solutions/SolutionsSubNav";
import { SolutionsCta } from "@/components/solutions/SolutionsCta";
import Stepper, { Step } from "@/components/shared/Stepper";

const STEPS = [
  { label: "Objective", copy: "Describe the outcome you need in plain language." },
  { label: "Understand", copy: "ALTERX reads the request and works out what it's actually asking for." },
  { label: "Decide", copy: "The system works out what needs to happen, and in what order." },
  { label: "Execute", copy: "The steps run against the real systems involved." },
  { label: "Verify", copy: "The result is checked before anything is considered done." },
  { label: "Continue", copy: "Work resumes or wraps up, depending on what happened." },
];

export const metadata: Metadata = {
  title: "How it works — Solutions — ALTERX",
  description: "From a plain-language objective to verified execution, step by step.",
};

export default function HowItWorksPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <SolutionsSubHero eyebrow="How it works" title="From objective to outcome." />

      <section className="relative bg-ax-black pb-24 lg:pb-32">
        <div className="container-ax">
          <Stepper backButtonText="Back" nextButtonText="Next">
            {STEPS.map((s, i) => (
              <Step key={s.label}>
                <span className="text-[13px] font-medium tracking-[0.04em] text-ax-mint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display mt-3 text-[24px] font-medium text-ax-white sm:text-[28px]">{s.label}</h2>
                <p className="mt-3 text-[15px] leading-[1.6] text-ax-muted">{s.copy}</p>
              </Step>
            ))}
          </Stepper>
        </div>
      </section>

      <SolutionsSubNav current="how-it-works" />
      <SolutionsCta />
    </main>
  );
}
