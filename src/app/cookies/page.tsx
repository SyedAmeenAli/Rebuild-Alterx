import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { talkToUsDestination } from "@/content/navigation";

export const metadata: Metadata = {
  title: "Cookie Policy — ALTERX",
  description: "How ALTERX uses cookies. The site currently sets no non-essential tracking cookies.",
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
          <p className="mt-8 max-w-[520px] text-[16px] leading-[1.6] text-ax-muted">
            This policy is being finalized. The site does not currently set non-essential
            tracking cookies.
          </p>

          <div id="preferences" className="mt-16 border-t border-ax-mint/10 pt-10">
            <h2 className="font-display text-[22px] font-medium text-ax-white">
              Cookie Preferences
            </h2>
            <p className="mt-4 max-w-[520px] text-[15px] leading-[1.6] text-ax-muted">
              There&apos;s no cookie consent choice to manage yet — the site isn&apos;t using
              tracking cookies. This will update if that changes.
            </p>
          </div>

          <Link
            href={talkToUsDestination}
            className="mt-10 inline-flex items-center gap-2 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
          >
            Talk to us
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
