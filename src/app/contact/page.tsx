import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { OtherWaysToReach } from "@/components/contact/OtherWaysToReach";
import { ContactFaq } from "@/components/contact/ContactFaq";
import { ContactCta } from "@/components/contact/ContactCta";

export const metadata: Metadata = {
  title: "Contact — ALTERX",
  description: "Tell us what you're working on. We'll figure out where ALTERX fits.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <ContactHero />
      <ContactForm />
      <OtherWaysToReach />
      <ContactFaq />
      <ContactCta />
    </main>
  );
}
