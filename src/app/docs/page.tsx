import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { talkToUsDestination } from "@/content/navigation";
import GlareHover from "@/components/shared/GlareHover";
import { FileTree } from "@/components/shared/FileTree";

const CONCEPTS = ["Execution", "Planning", "Tool binding", "Verification", "Recovery", "Integration interfaces"];

export const metadata: Metadata = {
  title: "Documentation — ALTERX",
  description: "Documentation for ALTERX isn't published yet — here's what to expect when it ships.",
};

export default function DocsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <section className="relative flex-1 bg-ax-black py-28 pt-[160px] lg:py-36 lg:pt-[180px]">
        <div className="container-ax max-w-[980px]">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_320px] lg:gap-16">
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
                Documentation
              </p>
              <h1 className="font-display mt-5 text-balance text-[32px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[40px]">
                Not published yet.
              </h1>
              <p className="mt-8 max-w-[560px] text-[16px] leading-[1.6] text-ax-muted">
                Documentation is where the technical surface of ALTERX will live. When it ships,
                it is expected to cover the concepts engineers need to understand the system:
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {CONCEPTS.map((c) => (
                  <GlareHover key={c} height="auto" className="!h-auto !w-auto" glass>
                    <span className="block px-4 py-2 text-[13px] font-medium text-ax-text/85">{c}</span>
                  </GlareHover>
                ))}
              </div>

              <p className="mt-8 max-w-[560px] text-[16px] leading-[1.6] text-ax-muted">
                The first release isn&apos;t a public self-service developer platform — the team
                works with you directly. Until documentation is published, this page stays
                intentionally limited rather than presenting incomplete APIs, SDKs, or examples
                as finished products.
              </p>

              <Link
                href={talkToUsDestination}
                className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
              >
                Talk to us
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="lg:pt-[52px]">
              <FileTree />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
