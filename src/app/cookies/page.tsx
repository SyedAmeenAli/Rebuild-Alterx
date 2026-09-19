import type { Metadata } from "next";
import { Header } from "@/components/site/Header";

const CONTACT_LINE =
  "Contact and grievance: alterx@alterx.co.in · +91 93905 85526 · 8-1-346/10/A/1, Sabza Colony, Brindavan Colony, Toli Chowki, Hyderabad, Telangana 500008, India";

export const metadata: Metadata = {
  title: "Cookie Policy — ALTERX",
  description: "How ALTERX uses cookies and local storage. The marketing site sets no tracking cookies.",
};

export default function CookiesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <section className="relative flex-1 bg-ax-black py-28 pt-[160px] lg:py-36 lg:pt-[180px]">
        <div className="container-ax max-w-[720px]">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Legal
          </p>
          <h1 className="font-display mt-5 text-balance text-[32px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[40px]">
            Cookie Policy
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
              This policy describes the cookies and similar technologies ALTERX currently uses
              on alterx.co.in. The marketing website does not set tracking or advertising
              cookies. Local storage is used only inside the Try Alter Engine demonstration to
              hold your own demo workspace state on your device.
            </p>
          </div>

          <h2 className="mt-12 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            1. What this policy covers
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            This Policy describes cookies, local storage, and similar technologies used on
            alterx.co.in, including the Try Alter Engine demonstration area.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            2. Cookies
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            The ALTERX marketing website does not currently set analytics, advertising, or
            tracking cookies. If that changes, this Policy will be updated to name the
            technology, its purpose, and how to manage it before it is deployed.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            3. Local storage in Try Alter Engine
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            The Try Alter Engine demonstration area stores a small amount of information
            directly in your browser&apos;s local storage — for example, the demo workspace name
            and the missions, connections, and knowledge items you create while exploring the
            demo.
          </p>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            This information stays on your device, is not transmitted to ALTERX servers, and
            exists only to make the demonstration usable across a session. Clearing it
            (available from the demo&apos;s settings, or by clearing your browser&apos;s site
            data) removes it.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            4. Fonts and other embedded resources
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            The website loads Hanken Grotesk from Google Fonts. Loading a font from a
            third-party host can expose your IP address and request information to that host,
            consistent with the host&apos;s own practices.
          </p>

          <h2 id="preferences" className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            5. Managing storage
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Browser settings can block or delete cookies and local storage, though this may
            affect the Try Alter Engine demonstration&apos;s ability to remember your session.
            There is no cookie consent choice to manage here — the site isn&apos;t using tracking
            cookies. This will update if that changes.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            6. Changes
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            If ALTERX adds analytics, advertising, or other non-essential tracking technology in
            the future, this Policy will be updated first to disclose it accurately.
          </p>

          <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            7. Contact
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-ax-text/80">
            Questions about cookies or storage may be sent to{" "}
            <a href="mailto:alterx@alterx.co.in" className="text-ax-mint underline underline-offset-2">
              alterx@alterx.co.in
            </a>
            .
          </p>

          <p className="mt-12 border-t border-ax-mint/10 pt-6 text-[13px] leading-[1.6] text-ax-muted/70">
            {CONTACT_LINE}
          </p>
        </div>
      </section>
    </main>
  );
}
