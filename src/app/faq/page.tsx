import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { FaqHero } from "@/components/faq/FaqHero";
import { FaqAccordion } from "@/components/faq/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ — ALTERX",
  description: "Common questions about ALTERX, Alter Engine, and AxInventory, answered plainly.",
};

export default function FaqPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <FaqHero />
      <FaqAccordion />
    </main>
  );
}
