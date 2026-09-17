import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { ResourcesHero } from "@/components/resources/ResourcesHero";
import { ResourceIndex } from "@/components/resources/ResourceIndex";
import { ResourceIdea } from "@/components/resources/ResourceIdea";
import { EngineeringNotes } from "@/components/resources/EngineeringNotes";
import { FeaturedResource } from "@/components/resources/FeaturedResource";
import { ProductExploration } from "@/components/resources/ProductExploration";
import { TechnicalExploration } from "@/components/resources/TechnicalExploration";
import { ResourcesFaq } from "@/components/resources/ResourcesFaq";
import { ResourcesContact } from "@/components/resources/ResourcesContact";
import { ResourcesCta } from "@/components/resources/ResourcesCta";

export const metadata: Metadata = {
  title: "Resources — ALTERX",
  description: "Explore the ideas, products and engineering behind ALTERX.",
};

export default function ResourcesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <ResourcesHero />
      <ResourceIndex />
      <ResourceIdea />
      <EngineeringNotes />
      <FeaturedResource />
      <ProductExploration />
      <TechnicalExploration />
      <ResourcesFaq />
      <ResourcesContact />
      <ResourcesCta />
    </main>
  );
}
