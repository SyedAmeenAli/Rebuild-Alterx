import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { CareersHero } from "@/components/careers/CareersHero";
import { TheProblem } from "@/components/careers/TheProblem";
import { WhatWeCareAbout } from "@/components/careers/WhatWeCareAbout";
import { HowWeWork } from "@/components/careers/HowWeWork";
import { Roles } from "@/components/careers/Roles";
import { WhyThisProblem } from "@/components/careers/WhyThisProblem";
import { CareersCta } from "@/components/careers/CareersCta";

export const metadata: Metadata = {
  title: "Careers — ALTERX",
  description: "ALTERX is building the systems that make autonomous execution dependable enough for real work.",
};

export default function CareersPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <CareersHero />
      <TheProblem />
      <WhatWeCareAbout />
      <HowWeWork />
      <Roles />
      <WhyThisProblem />
      <CareersCta />
    </main>
  );
}
