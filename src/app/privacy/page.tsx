import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — ALTERX",
  description: "ALTERX's privacy policy. This page is being finalized.",
};

export default function PrivacyPage() {
  return <LegalPage label="Legal" title="Privacy Policy" />;
}
