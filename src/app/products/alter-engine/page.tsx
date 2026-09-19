import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { AlterEngineSection } from "@/components/products/AlterEngineSection";
import { EngineInOneView } from "@/components/products/EngineInOneView";
import { AlterEngineCta } from "@/components/products/AlterEngineCta";

export const metadata: Metadata = {
  title: "Alter Engine — Products — ALTERX",
  description: "The execution system underneath ALTERX — plans, runs, verifies and recovers.",
};

export default function AlterEnginePage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <AlterEngineSection />
      <EngineInOneView />
      <AlterEngineCta />
    </main>
  );
}
