import type { Metadata } from "next";
import { Header } from "@/components/site/Header";

const CONTACT_LINE =
  "Contact and grievance: alterx@alterx.co.in · +91 93905 85526 · 8-1-346/10/A/1, Sabza Colony, Brindavan Colony, Toli Chowki, Hyderabad, Telangana 500008, India";

export const metadata: Metadata = {
  title: "Privacy Policy — ALTERX",
  description: "How ALTERX collects, uses, discloses, stores and protects personal data.",
};

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <section className="relative flex-1 bg-ax-black py-28 pt-[160px] lg:py-36 lg:pt-[180px]">
        <div className="container-ax max-w-[720px]">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Legal
          </p>
          <h1 className="font-display mt-5 text-balance text-[32px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[40px]">
            Privacy Policy
          </h1>
          <p className="mt-3 text-[13px] text-ax-muted/70">
            Last updated: 9 August 2026 · Published by ALTERX. Not legal advice; has not been
            reviewed by outside legal counsel.
          </p>

          <div className="mt-8 rounded-[6px] border border-ax-mint/15 bg-ax-mint/5 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
              Plain-language summary
            </p>
            <p className="mt-3 text-[14px] leading-[1.6] text-ax-muted">
              This policy explains how ALTERX collects, uses, discloses, stores and protects
              personal data when you visit alterx.co.in, use Alter Engine or the ALTERX Platform,
              use Cognitive AI, contact us, request a trial, receive support or apply for a role.
              Marketing consent is always separate and optional. Requests and grievances go to{" "}
              <a href="mailto:alterx@alterx.co.in" className="text-ax-mint underline underline-offset-2">
                alterx@alterx.co.in
              </a>
              .
            </p>
          </div>

          <h2 className="mt-12 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            1. Who we are
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            This Privacy Policy explains how ALTERX (&quot;ALTERX,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) collects, uses, discloses, stores, and protects
            personal data when you visit alterx.co.in, use Alter Engine or the ALTERX Platform,
            use Cognitive AI by ALTERX, contact us, request a trial or demonstration, receive
            support, apply for a role, or otherwise interact with our services.
          </p>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            ALTERX — 8-1-346/10/A/1, Sabza Colony, Brindavan Colony, Toli Chowki, Hyderabad,
            Telangana 500008, India. Primary email: alterx@alterx.co.in. Telephone:
            +91 93905 85526.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            2. Scope and roles
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            For website, account, sales, support, recruitment, and service-administration
            information, ALTERX generally determines why and how personal data is processed and
            acts as the relevant Data Fiduciary or controller.
          </p>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            When a customer uses ALTERX services to process information under its instructions,
            the customer generally determines the purpose of that processing and ALTERX generally
            acts as a Data Processor or processor/service provider under the customer agreement
            and Data Processing Addendum.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            3. Personal data we may collect
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Depending on your interaction, we may collect:
          </p>
          <ul className="mt-4 flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10">
            {[
              "Identity and contact data: name, business email, telephone number, role, company, address, country, and communication preferences.",
              "Account and access data: account ID, organization, workspace, role, authentication events, invitations, permissions, and security settings.",
              "Commercial data: subscription, order, billing contact, invoice, payment status, tax information, and contract records.",
              "Communications: contact forms, emails, support messages, call notes, survey responses, event registrations, and meeting information.",
              "Customer and mission content: instructions, prompts, uploaded files, connected-system data, approvals, outputs, artifacts, evidence, and related metadata submitted or created through the service.",
              "Integration data: connection identifiers, permission scopes, event payloads, and data requested through integrations selected by a customer.",
              "Usage and device data: IP address, browser, device, operating system, pages or features used, timestamps, referring pages, diagnostic data, and approximate location inferred from IP.",
              "Security data: audit events, suspicious activity, access attempts, rate-limit events, and incident information.",
              "Marketing data: campaign source, engagement, preferences, and consent record.",
              "Recruitment data: résumé, work history, education, portfolio, interview information, references, and eligibility information.",
            ].map((item) => (
              <li key={item} className="py-3 text-[14px] leading-[1.6] text-ax-muted">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[14px] leading-[1.6] text-ax-muted/80">
            We do not configure the website or product to collect special-category, sensitive,
            financial, health, biometric, or children&apos;s data unless the use is explicitly
            approved, documented, secured, and supported by an appropriate lawful basis and
            customer agreement.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            4. Sources of personal data
          </h2>
          <ul className="mt-4 flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10">
            {[
              "Directly from you.",
              "From your employer, organization, or account administrator.",
              "From connected services that you or your organization authorize.",
              "From service providers supporting authentication, payments, communications, hosting, analytics, security, and support.",
              "From public business sources where lawful.",
              "Automatically from browsers, devices, logs, and service usage.",
            ].map((item) => (
              <li key={item} className="py-3 text-[14px] leading-[1.6] text-ax-muted">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            5. Why we use personal data
          </h2>
          <ul className="mt-4 flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10">
            {[
              "Provide, operate, secure, and support the website and ALTERX services.",
              "Create and administer accounts, workspaces, roles, and permissions.",
              "Process requested missions, workflows, connections, approvals, artifacts, and evidence.",
              "Authenticate users and prevent abuse, fraud, or unauthorized access.",
              "Communicate about inquiries, trials, service changes, support, and incidents.",
              "Process billing, accounting, taxation, and contracts.",
              "Improve reliability, performance, usability, and accessibility.",
              "Conduct permitted analytics.",
              "Send marketing where allowed and provide an opt-out.",
              "Recruit and assess candidates.",
              "Comply with law, enforce agreements, and protect rights and safety.",
            ].map((item) => (
              <li key={item} className="py-3 text-[14px] leading-[1.6] text-ax-muted">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[14px] leading-[1.6] text-ax-muted/80">
            Where lawful-basis terminology applies, the basis may include performance of a
            contract, steps requested before a contract, consent, compliance with legal
            obligations, and legitimate interests that are not overridden by individual rights.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            6. AI and mission processing
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            ALTERX may process instructions, prompts, uploaded content, connected-system
            information, approvals, tool results, and generated outputs to perform a requested
            mission or workflow.
          </p>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            ALTERX does not use customer mission content to train a generally available model
            unless the customer has received clear notice and provided any consent or contractual
            authorization required for that use.
          </p>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Production documentation must accurately state which providers or subprocessors may
            receive mission data, whether model providers retain content, whether customer
            content is used for provider training, and available opt-out, isolation, regional, or
            enterprise controls. This section will be replaced with the verified production
            configuration before launch.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            7. Sharing and subprocessors
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            We may share personal data with authorized service providers supporting hosting,
            authentication, storage, communications, analytics, security, customer support,
            payments, and other contracted operations.
          </p>
          <ul className="mt-4 flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10">
            {[
              "At the direction of a customer or user.",
              "To protect users, ALTERX, or third parties.",
              "To investigate abuse or security incidents.",
              "When required by law, legal process, or a competent authority.",
              "In connection with a corporate transaction, subject to appropriate safeguards.",
            ].map((item) => (
              <li key={item} className="py-3 text-[14px] leading-[1.6] text-ax-muted">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[14px] leading-[1.6] text-ax-muted/80">
            A production subprocessor list will be published or made available before customer
            processing begins.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            8. International processing
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Personal data may be processed in countries other than the country where it was
            collected. ALTERX will use legally required contractual, organizational, and
            technical safeguards where applicable. A specific data-residency location will not be
            promised until the production hosting and subprocessor architecture is verified.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            9. Retention and deletion
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            ALTERX retains personal data only for as long as reasonably necessary for the
            purposes described in this Policy, including providing services, maintaining security
            and evidence, complying with law, resolving disputes, and enforcing agreements.
          </p>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Verified retention periods will be published before launch for contact and sales
            inquiries, accounts and authentication records, mission content and evidence,
            security logs, billing and tax records, support communications, recruitment records,
            and backups.
          </p>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Users and customers may request deletion where applicable. Some information may be
            retained where required by law, necessary for security, or preserved under a customer
            agreement.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            10. Security
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            ALTERX uses reasonable administrative, technical, and organizational measures
            designed to protect personal data. No internet transmission or storage method can be
            guaranteed completely secure.
          </p>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Public claims use qualified language such as &quot;designed to,&quot;
            &quot;supports,&quot; or &quot;can be configured to&quot; unless a specific control
            has been independently verified.
          </p>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Security enquiries and suspected vulnerabilities may be sent to alterx@alterx.co.in
            with the subject line &quot;Security enquiry&quot;.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            11. Your choices and rights
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Depending on applicable law, you may have rights to:
          </p>
          <ul className="mt-4 flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10">
            {[
              "Receive information about processing.",
              "Access personal data.",
              "Correct inaccurate or incomplete data.",
              "Request deletion.",
              "Withdraw consent where consent is the basis.",
              "Object to or restrict certain processing.",
              "Receive a portable copy where required.",
              "Nominate another person where applicable.",
              "Submit a grievance or complaint.",
            ].map((item) => (
              <li key={item} className="py-3 text-[14px] leading-[1.6] text-ax-muted">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[14px] leading-[1.6] text-ax-muted/80">
            Requests may be sent to alterx@alterx.co.in. ALTERX may need to verify identity and
            authority before acting on a request.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            12. Marketing communications
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            ALTERX will not silently subscribe a contact-form user to marketing. Marketing
            consent must be separate and optional. Every marketing email includes an unsubscribe
            method. Transactional, security, account, and service communications may still be
            sent where necessary.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            13. Children
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            ALTERX services are intended for business and professional use. We do not knowingly
            collect or process children&apos;s personal data unless the use has been specifically
            approved and all required consent and safeguards are implemented.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            14. Third-party services
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            ALTERX may link to or connect with third-party services. Their independent privacy
            practices are governed by their own terms and notices. Customers are responsible for
            selecting and authorizing connections appropriate to their use.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            15. Changes
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            ALTERX may update this Policy. The page will show the current date and may provide
            additional notice where legally required or where a change is material.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            16. Contact and grievance redressal
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            ALTERX, 8-1-346/10/A/1, Sabza Colony, Brindavan Colony, Toli Chowki, Hyderabad,
            Telangana 500008, India.
          </p>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Email:{" "}
            <a href="mailto:alterx@alterx.co.in" className="text-ax-mint underline underline-offset-2">
              alterx@alterx.co.in
            </a>{" "}
            · Telephone: +91 93905 85526.
          </p>

          <p className="mt-12 border-t border-ax-mint/10 pt-6 text-[13px] leading-[1.6] text-ax-muted/70">
            {CONTACT_LINE}
          </p>
        </div>
      </section>
    </main>
  );
}
