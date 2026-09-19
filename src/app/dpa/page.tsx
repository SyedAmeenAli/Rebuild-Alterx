import type { Metadata } from "next";
import { Header } from "@/components/site/Header";

const COVERAGE = [
  "Party roles.",
  "Processing subject, duration, nature, and purpose.",
  "Categories of personal data and individuals.",
  "Documented instructions.",
  "Confidentiality obligations.",
  "Security measures.",
  "Subprocessors and notice/objection process.",
  "Assistance with rights requests, incidents, impact assessments, and regulators.",
  "Deletion or return of data.",
  "Audit and information rights.",
  "International-transfer mechanisms.",
  "India, EEA, UK, California, and other required annexes.",
  "Conflict hierarchy with the main agreement.",
  "A verified security-measures schedule.",
  "A verified subprocessor schedule.",
];

export const metadata: Metadata = {
  title: "Data Processing Addendum — ALTERX",
  description: "ALTERX's Data Processing Addendum is being finalized — current status and scope.",
};

export default function DpaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <section className="relative flex-1 bg-ax-black py-28 pt-[160px] lg:py-36 lg:pt-[180px]">
        <div className="container-ax max-w-[720px]">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Legal
          </p>
          <h1 className="font-display mt-5 text-balance text-[32px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[40px]">
            Data Processing Addendum
          </h1>
          <p className="mt-3 text-[13px] text-ax-muted/70">
            Last updated: 9 August 2026 · Draft structure only — not an executable or signed
            agreement.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            1. Current status
          </h2>
          <p className="mt-3 max-w-[560px] text-[16px] leading-[1.6] text-ax-text/80">
            ALTERX&apos;s Data Processing Addendum is being finalized to match the production
            entity, security schedule, subprocessors, processing locations, and transfer terms.
            Customers evaluating ALTERX may request the current review draft from{" "}
            <a href="mailto:alterx@alterx.co.in" className="text-ax-mint underline underline-offset-2">
              alterx@alterx.co.in
            </a>
            .
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            2. What the final DPA will cover
          </h2>
          <ul className="mt-4 flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10">
            {COVERAGE.map((item) => (
              <li key={item} className="py-3 text-[14px] leading-[1.6] text-ax-muted">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            3. Publication rule
          </h2>
          <p className="mt-3 max-w-[560px] text-[15px] leading-[1.6] text-ax-text/80">
            A click-to-sign DPA will not be published until the legal entity, vendor list,
            security schedule, data locations, and transfer mechanisms are confirmed.
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
