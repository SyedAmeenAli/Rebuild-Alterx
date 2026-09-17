import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { TheGap } from "@/components/solutions/TheGap";
import { WhereItFits } from "@/components/solutions/WhereItFits";
import { ProcessMap } from "@/components/solutions/ProcessMap";
import { WhyItHoldsTogether } from "@/components/solutions/WhyItHoldsTogether";
import { FeatureVisual } from "@/components/solutions/FeatureVisual";
import { ExampleWork } from "@/components/solutions/ExampleWork";
import { SolutionsCta } from "@/components/solutions/SolutionsCta";

export const metadata: Metadata = {
  title: "Solutions — ALTERX",
  description: "ALTERX connects the intent behind a business objective to the work required to carry it through.",
};

export default function SolutionsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <SolutionsHero />
      <TheGap />
      <WhereItFits />
      <ProcessMap />
      <WhyItHoldsTogether />
      <FeatureVisual />
      <ExampleWork />
      <SolutionsCta />
    </main>
  );
}
