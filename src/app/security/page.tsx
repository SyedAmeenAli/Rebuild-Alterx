import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import GlareHover from "@/components/shared/GlareHover";

const CONTROLS = [
  { label: "Identity and access", copy: "Access is identity-based. Roles define who can create missions, approve actions, connect systems and export evidence." },
  { label: "Workspace separation", copy: "Missions, data, workflows and evidence stay inside their workspace. Separation is structural, not cosmetic." },
  { label: "Permissioned connections", copy: "Every connected system carries explicit scope. Missions can be configured to never exceed the granted permissions." },
  { label: "Human approval boundaries", copy: "Sensitive actions are designed to pause for the person with authority — with the action, reason, scope, risk and rollback in front of them." },
  { label: "Data handling and retention", copy: "What is kept, and for how long, is a configuration. Retention supports the evidence model without becoming an accidental archive." },
  { label: "Audit and evidence", copy: "Decisions, approvals, artifacts and checks keep their trail. The record is designed to survive review." },
  { label: "Availability and resilience", copy: "The service is designed for graceful degradation — failures are classified and surfaced, not hidden." },
  { label: "Responsible AI and evaluation", copy: "Outputs are designed to be checked against criteria before acceptance. Weak steps can be returned for revision instead of shipped." },
];

export const metadata: Metadata = {
  title: "Security — ALTERX",
  description: "Access, permissions, human checkpoints and evidence are part of the mission, not separate from it.",
};

export default function SecurityPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <section className="relative overflow-hidden bg-ax-black pb-16 pt-[150px] lg:pb-20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse 55% 90% at 30% 10%, rgba(50,201,122,0.1) 0%, rgba(91,234,153,0.03) 45%, rgba(0,0,0,0) 75%)",
          }}
          aria-hidden="true"
        />
        <div className="relative container-ax max-w-[760px]">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Security
          </p>
          <h1 className="font-display mt-6 text-balance text-[34px] leading-[1.1] tracking-[-0.02em] text-ax-white sm:text-[46px]">
            Control is not an add-on.
          </h1>
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.6] text-ax-text/80">
            AlterX is designed so that access, permissions, human checkpoints and evidence remain
            part of the mission, not separate from it. AlterX is designed to support and enforce
            these controls — formal audits and certifications will be published only when
            completed.
          </p>
          <Link
            href="mailto:alterx@alterx.co.in?subject=Security%20enquiry"
            className="mt-7 inline-flex h-12 w-fit items-center justify-center rounded-[4px] bg-ax-mint px-7 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
          >
            Request security information
          </Link>
        </div>
      </section>

      <section className="relative bg-ax-black pb-24 lg:pb-32">
        <div className="container-ax">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CONTROLS.map((c, i) => (
              <GlareHover key={c.label} height="auto" className="!h-auto" glass>
                <div className="flex h-full flex-col gap-2 p-6">
                  <span className="text-[12px] font-medium tracking-[0.04em] text-ax-mint/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-[17px] font-medium text-ax-white">{c.label}</p>
                  <p className="text-[14px] leading-[1.6] text-ax-muted">{c.copy}</p>
                </div>
              </GlareHover>
            ))}
          </div>

          <div className="mt-14 max-w-[640px] border-t border-ax-mint/10 pt-8">
            <p className="text-[13px] leading-[1.6] text-ax-muted/70">
              Language on this page is deliberately qualified — &quot;designed to&quot;,
              &quot;supports&quot;, &quot;can be configured to&quot;. Security and retention
              behaviour depends on the configured plan and deployment. Additional security
              information is available during evaluation.
            </p>
            <p className="mt-5 text-[14px] text-ax-white">
              Suspected vulnerabilities:{" "}
              <a
                href="mailto:alterx@alterx.co.in?subject=Security%20enquiry"
                className="text-ax-mint underline underline-offset-2"
              >
                alterx@alterx.co.in
              </a>{" "}
              — subject line &quot;Security enquiry&quot;.
            </p>
            <p className="mt-3 text-[14px] text-ax-muted">
              Privacy, terms, acceptable use and the DPA are published as review drafts.
              Certifications appear only when completed.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
