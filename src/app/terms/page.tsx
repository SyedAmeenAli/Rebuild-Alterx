import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Terms of Use — ALTERX" };

export default function TermsPage() {
  return <LegalPage label="Legal" title="Terms of Use" />;
}
