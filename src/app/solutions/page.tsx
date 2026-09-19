import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { SolutionsTopicIndex } from "@/components/solutions/SolutionsTopicIndex";
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
      <SolutionsTopicIndex />
      <ExampleWork />
      <SolutionsCta />
    </main>
  );
}
