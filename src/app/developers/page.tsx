import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { DevelopersHero } from "@/components/developers/DevelopersHero";
import { SystemOverview } from "@/components/developers/SystemOverview";
import { IntelligenceControl } from "@/components/developers/IntelligenceControl";
import { DurableExecution } from "@/components/developers/DurableExecution";
import { Verification } from "@/components/developers/Verification";
import { FailureHandling } from "@/components/developers/FailureHandling";
import { Adapters } from "@/components/developers/Adapters";
import { ForBuilders } from "@/components/developers/ForBuilders";
import { DeveloperResources } from "@/components/developers/DeveloperResources";
import { DevelopersCta } from "@/components/developers/DevelopersCta";

export const metadata: Metadata = {
  title: "Developers — ALTERX",
  description: "ALTERX separates intelligence from the machinery that makes work reliable.",
};

export default function DevelopersPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <DevelopersHero />
      <SystemOverview />
      <IntelligenceControl />
      <DurableExecution />
      <Verification />
      <FailureHandling />
      <Adapters />
      <ForBuilders />
      <DeveloperResources />
      <DevelopersCta />
    </main>
  );
}
