import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use — ALTERX",
  description: "ALTERX's terms of use. This page is being finalized.",
};

export default function TermsPage() {
  return <LegalPage label="Legal" title="Terms of Use" />;
}
