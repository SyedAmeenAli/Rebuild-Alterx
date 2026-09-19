import type { Metadata } from "next";
import { Header } from "@/components/site/Header";

const PROHIBITED = [
  "Violate law, regulation, contract, or third-party rights.",
  "Facilitate fraud, deception, unauthorized impersonation, or unlawful manipulation.",
  "Create, distribute, or operate malware, credential theft, destructive code, or unauthorized access.",
  "Bypass authentication, permissions, rate limits, policy controls, or security boundaries.",
  "Submit, extract, expose, or sell personal data without authority.",
  "Process child data where required consent and safeguards are absent.",
  "Conduct unlawful surveillance or tracking.",
  "Make prohibited discriminatory or unlawful decisions.",
  "Deploy consequential automated decisions without required human review and safeguards.",
  "Create or distribute child sexual abuse material or sexual exploitation content.",
  "Facilitate terrorism, violence, weapons misuse, or illegal controlled substances.",
  "Infringe intellectual property, privacy, publicity, confidentiality, or contractual rights.",
  "Reverse engineer or unlawfully extract protected prompts, models, credentials, source code, or systems.",
  "Overload, disrupt, benchmark for competitive extraction, scrape, or interfere with the service without written authorization.",
  "Use connected tools outside the permission granted by the account owner.",
  "Misrepresent AI output as verified evidence when it has not been verified.",
  "Circumvent human approvals, audit controls, or safeguards configured by an organization.",
  "Use the service to generate or distribute unlawful synthetic or manipulated content.",
];

export const metadata: Metadata = {
  title: "Acceptable Use Policy — ALTERX",
  description: "What may and may not be done with ALTERX products and services.",
};

export default function AcceptableUsePage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <section className="relative flex-1 bg-ax-black py-28 pt-[160px] lg:py-36 lg:pt-[180px]">
        <div className="container-ax max-w-[720px]">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Legal
          </p>
          <h1 className="font-display mt-5 text-balance text-[32px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[40px]">
            Acceptable Use Policy
          </h1>
          <p className="mt-3 text-[13px] text-ax-muted/70">
            Last updated: 9 August 2026 · Published by ALTERX. Not legal advice; has not been
            reviewed by outside legal counsel.
          </p>
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.6] text-ax-text/80">
            This policy defines what may and may not be done with ALTERX products and services.
            ALTERX may investigate, restrict, suspend, preserve relevant information, or
            terminate access where reasonably necessary and legally permitted.
          </p>

          <h2 className="mt-12 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            1. Prohibited uses
          </h2>
          <p className="mt-3 text-[15px] text-ax-text/80">Users must not use ALTERX to:</p>
          <ul className="mt-4 flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10">
            {PROHIBITED.map((item) => (
              <li key={item} className="py-3 text-[14px] leading-[1.6] text-ax-muted">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            2. Enforcement
          </h2>
          <p className="mt-3 max-w-[560px] text-[15px] leading-[1.6] text-ax-text/80">
            ALTERX may investigate, restrict, suspend, preserve relevant information, or
            terminate access where reasonably necessary and legally permitted.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            3. Reporting abuse
          </h2>
          <p className="mt-3 max-w-[560px] text-[15px] leading-[1.6] text-ax-text/80">
            Report suspected abuse to{" "}
            <a href="mailto:alterx@alterx.co.in?subject=Abuse%20report" className="text-ax-mint underline underline-offset-2">
              alterx@alterx.co.in
            </a>{" "}
            with the subject line &quot;Abuse report&quot;.
          </p>

          <p className="mt-12 border-t border-ax-mint/10 pt-6 text-[13px] leading-[1.6] text-ax-muted/70">
            Contact and grievance: alterx@alterx.co.in · +91 93905 85526 · 8-1-346/10/A/1, Sabza
            Colony, Brindavan Colony, Toli Chowki, Hyderabad, Telangana 500008, India
          </p>
        </div>
      </section>
    </main>
  );
}
