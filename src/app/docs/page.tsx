import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { talkToUsDestination } from "@/content/navigation";

export const metadata: Metadata = {
  title: "Documentation — ALTERX",
  description: "API documentation for ALTERX. Coming once there's a public, self-serve API to document.",
};

export default function DocsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <section className="relative flex-1 bg-ax-black py-28 pt-[160px] lg:py-36 lg:pt-[180px]">
        <div className="container-ax max-w-[720px]">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Documentation
          </p>
          <h1 className="font-display mt-5 text-balance text-[32px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[40px]">
            Not published yet.
          </h1>
          <p className="mt-8 max-w-[520px] text-[16px] leading-[1.6] text-ax-muted">
            ALTERX v1 is managed-service — the team works with you directly rather than through a
            self-serve API. This page will carry real endpoints and examples once that exists.
            Nothing here is invented in the meantime.
          </p>
          <Link
            href={talkToUsDestination}
            className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
          >
            Talk to us
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
