import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { SolutionsSubHero } from "@/components/solutions/SolutionsSubHero";
import { SolutionsSubNav } from "@/components/solutions/SolutionsSubNav";
import { SolutionsCta } from "@/components/solutions/SolutionsCta";
import GlareHover from "@/components/shared/GlareHover";

const ITEMS = [
  { label: "Sales & Support", copy: "Keep handoffs moving from request to resolution." },
  { label: "Lead Qualification", copy: "Understand a lead, apply the relevant criteria and move the process forward." },
  { label: "Order & Inventory", copy: "Coordinate information across operational systems." },
  { label: "Onboarding", copy: "Move people, documents and approvals through a defined process." },
  { label: "Document Processing", copy: "Handle information that needs to be read, checked and carried into another step." },
  { label: "Reporting", copy: "Turn operational information into a completed reporting workflow." },
];

export const metadata: Metadata = {
  title: "Where it fits — Solutions — ALTERX",
  description: "How ALTERX sits alongside the systems you already run.",
};

export default function WhereItFitsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <SolutionsSubHero eyebrow="Where it fits" title="Work that crosses systems." />

      <section className="relative bg-ax-black pb-24 lg:pb-32">
        <div className="container-ax">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ITEMS.map((item, i) => (
              <GlareHover key={item.label} height="auto" className="!h-auto">
                <div className="flex h-full flex-col p-6">
                  <span className="text-[13px] font-medium tracking-[0.04em] text-ax-mint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display mt-3 text-[19px] font-medium text-ax-white">{item.label}</p>
                  <p className="mt-2 text-[14px] leading-[1.6] text-ax-muted">{item.copy}</p>
                </div>
              </GlareHover>
            ))}
          </div>
        </div>
      </section>

      <SolutionsSubNav current="where-it-fits" />
      <SolutionsCta />
    </main>
  );
}
