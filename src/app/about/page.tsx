import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { AboutHero } from "@/components/about/AboutHero";
import { WhyWeExist } from "@/components/about/WhyWeExist";
import { WhatWeBelieve } from "@/components/about/WhatWeBelieve";
import { HowWeBuild } from "@/components/about/HowWeBuild";
import { TheCompany } from "@/components/about/TheCompany";
import { Vision } from "@/components/about/Vision";
import { AboutCta } from "@/components/about/AboutCta";

export const metadata: Metadata = {
  title: "About — ALTERX",
  description: "ALTERX is focused on one problem: making autonomous execution reliable enough for work that matters.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <AboutHero />
      <WhyWeExist />
      <WhatWeBelieve />
      <HowWeBuild />
      <TheCompany />
      <Vision />
      <AboutCta />
    </main>
  );
}
