import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { AxInventorySection } from "@/components/products/AxInventorySection";
import { AxInventoryCapabilities } from "@/components/products/AxInventoryCapabilities";
import { AxInventoryPos } from "@/components/products/AxInventoryPos";
import { AxInventoryCta } from "@/components/products/AxInventoryCta";

export const metadata: Metadata = {
  title: "AxInventory — Products — ALTERX",
  description: "Inventory, point of sale, purchasing, GST and accounting software for Indian retail.",
};

export default function AxInventoryPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <AxInventorySection />
      <AxInventoryCapabilities />
      <AxInventoryPos />
      <AxInventoryCta />
    </main>
  );
}
