import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { ProductsHero } from "@/components/products/ProductsHero";
import { ProductSelector } from "@/components/products/ProductSelector";
import { EngineProductRelationship } from "@/components/products/EngineProductRelationship";
import { ProductsCta } from "@/components/products/ProductsCta";

export const metadata: Metadata = {
  title: "Products — ALTERX",
  description: "ALTERX brings together an execution engine and the products built on top of it.",
};

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <ProductsHero />
      <ProductSelector />
      <EngineProductRelationship />
      <ProductsCta />
    </main>
  );
}
