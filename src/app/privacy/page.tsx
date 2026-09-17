import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy — ALTERX" };

export default function PrivacyPage() {
  return <LegalPage label="Legal" title="Privacy Policy" />;
}
