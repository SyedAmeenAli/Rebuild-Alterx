import type { Metadata } from "next";
import { Header } from "@/components/site/Header";

const CONTACT_LINE =
  "Contact and grievance: alterx@alterx.co.in · +91 93905 85526 · 8-1-346/10/A/1, Sabza Colony, Brindavan Colony, Toli Chowki, Hyderabad, Telangana 500008, India";

export const metadata: Metadata = {
  title: "Terms of Service — ALTERX",
  description: "Terms governing access to ALTERX websites, Alter Engine, and related services.",
};

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <section className="relative flex-1 bg-ax-black py-28 pt-[160px] lg:py-36 lg:pt-[180px]">
        <div className="container-ax max-w-[720px]">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Legal
          </p>
          <h1 className="font-display mt-5 text-balance text-[32px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[40px]">
            Terms of Service
          </h1>
          <p className="mt-3 text-[13px] text-ax-muted/70">
            Last updated: 9 August 2026 · Draft — commercial and legal review required.
          </p>

          <div className="mt-8 rounded-[6px] border border-ax-mint/15 bg-ax-mint/5 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
              Plain-language summary
            </p>
            <p className="mt-3 text-[14px] leading-[1.6] text-ax-muted">
              These Terms govern access to ALTERX websites, Alter Engine, ALTERX Platform,
              Cognitive AI, trials, APIs, documentation, and related services. Liability,
              indemnity and final commercial terms are intentionally not finalized in this draft
              and require counsel approval.
            </p>
          </div>

          <h2 className="mt-12 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            1. Agreement
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            These Terms govern access to ALTERX websites, Alter Engine, ALTERX Platform,
            Cognitive AI by ALTERX, trials, APIs, documentation, and related services. By using
            the services on behalf of an organization, you confirm that you have authority to
            bind that organization.
          </p>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            The final Terms will identify the legal constitution and registration details of
            ALTERX.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            2. Eligibility and accounts
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            You must provide accurate account information, protect credentials, use appropriate
            access controls, and notify ALTERX of suspected unauthorized access. An organization
            administrator may manage users, content, connections, permissions, and account
            settings.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            3. Trials, previews, and beta services
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Trial, preview, or beta functionality may be limited, changed, suspended, or
            discontinued. It may not be suitable for production or consequential use. Any trial
            period, usage cap, support scope, or deletion term will be shown at sign-up.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            4. License and permitted use
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Subject to the applicable agreement and payment obligations, ALTERX grants the
            customer a limited, non-exclusive, non-transferable right to use the service for
            authorized internal purposes during the applicable term.
          </p>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            No right is granted to resell, sublicense, reverse engineer, extract protected
            systems, or use the service beyond the permitted scope.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            5. Customer content and instructions
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            The customer retains rights in Customer Content and grants ALTERX the rights
            necessary to host, process, transmit, and create requested outputs solely to
            provide, secure, support, and improve the contracted service as permitted by the
            agreement and privacy terms.
          </p>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            The customer represents that it has the rights and lawful basis needed to submit
            content, connect systems, and instruct processing.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            6. Connected services
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Third-party services are selected and authorized by the customer. Their terms,
            availability, and independent processing remain their responsibility. ALTERX may
            suspend a connection that creates security, legal, or operational risk.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            7. AI outputs and verification
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            AI-assisted outputs may be incomplete, inaccurate, or unsuitable for a particular
            purpose. Customers must review outputs and configure human oversight appropriate to
            the risk, industry, and intended action.
          </p>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            ALTERX does not warrant that an output is legally, financially, medically,
            professionally, or factually correct.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            8. Consequential actions
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Customers must not rely on ALTERX as the sole decision-maker for actions that create
            legal or similarly significant effects without required human review, validation,
            permissions, and safeguards.
          </p>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Customers are responsible for final decisions and for compliance with domain-specific
            law.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            9. Customer responsibilities
          </h2>
          <ul className="mt-4 flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10">
            {[
              "Authorized use by their users.",
              "Configuring roles, permissions, approvals, and connected systems.",
              "Reviewing plans, actions, outputs, and evidence.",
              "Maintaining lawful notices, permissions, and instructions.",
              "Protecting credentials and endpoint security.",
              "Avoiding prohibited or high-risk use without appropriate controls.",
            ].map((item) => (
              <li key={item} className="py-3 text-[14px] leading-[1.6] text-ax-muted">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            10. Fees and taxes
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Final prices, metering, payment terms, taxes, renewal, cancellation, refunds, and
            late-payment consequences will be stated in an order form or approved pricing terms.
            Invented prices or refund promises are not published.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            11. Confidentiality
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Each party must protect the other party&apos;s confidential information with
            reasonable care and use it only for the agreement. Standard exclusions and
            compelled-disclosure procedures will be finalized in the customer contract.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            12. Privacy and security
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Processing of personal data is governed by the Privacy Policy, customer agreement,
            and Data Processing Addendum where applicable. Security commitments apply only to
            the documented service and scope.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            13. Suspension
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            ALTERX may restrict or suspend access where reasonably necessary to address security
            risk, unlawful use, non-payment, material breach, harm to the service, or a legal
            requirement. Where practical, ALTERX will provide notice and an opportunity to
            remedy.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            14. Termination and export
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Termination rights, cure periods, export windows, deletion timing, and
            post-termination obligations will be stated in the order form or agreement. The
            product and website will not promise export or deletion behaviour that has not been
            implemented and tested.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            15. Warranties and disclaimers
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Final warranty and disclaimer language will be drafted by counsel. At minimum, the
            Terms distinguish documented service commitments from beta functionality,
            third-party services, customer-controlled configurations, and illustrative
            demonstrations.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            16. Liability and indemnity
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Liability caps, exclusions, indemnities, and exceptions are intentionally not
            finalized in this draft. They require commercial and legal approval and must align
            with the legal entity, insurance, customer segment, and applicable law.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            17. Governing law and disputes
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Provisional position, subject to counsel: These Terms are governed by the laws of
            India. Courts located in Hyderabad, Telangana will have jurisdiction, subject to
            mandatory law and any dispute mechanism stated in an order form.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            18. Changes
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            ALTERX may update these Terms. Material changes will be communicated where required.
            Continued use after an effective date may constitute acceptance where legally
            permitted.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            19. Contact
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            ALTERX, 8-1-346/10/A/1, Sabza Colony, Brindavan Colony, Toli Chowki, Hyderabad,
            Telangana 500008, India ·{" "}
            <a href="mailto:alterx@alterx.co.in" className="text-ax-mint underline underline-offset-2">
              alterx@alterx.co.in
            </a>{" "}
            · +91 93905 85526.
          </p>

          <p className="mt-12 border-t border-ax-mint/10 pt-6 text-[13px] leading-[1.6] text-ax-muted/70">
            {CONTACT_LINE}
          </p>
        </div>
      </section>
    </main>
  );
}
