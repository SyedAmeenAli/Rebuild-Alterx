import React from 'react';
import Link from 'next/link';

export default function TryAlterEngine() {
  return (
    <div className="min-h-screen bg-ax-carbon text-ax-white flex flex-col pt-[120px] pb-24">
      <div className="w-full max-w-[900px] mx-auto px-7 lg:px-10">
        
        <header className="mb-16 border-b border-ax-border-dark pb-10">
          <h1 className="text-[48px] md:text-[64px] font-medium leading-[1.1] mb-6">
            Try Alter Engine
          </h1>
          <p className="text-[18px] text-white/80 max-w-[600px] leading-[1.5]">
            Preview how Alter Engine structures the work. This deterministic demonstration shows how a raw objective becomes a reviewable, step-by-step plan.
          </p>
        </header>

        <main className="flex flex-col gap-12">
          
          <section className="bg-ax-black/20 border border-ax-border-dark p-8 rounded">
            <h2 className="text-[12px] font-semibold tracking-widest text-ax-orange uppercase mb-6">1. The Objective</h2>
            <div className="text-[20px] font-medium p-4 bg-ax-black rounded border border-ax-border-dark/50">
              &quot;Check supplier inventory for Q3 delays and re-route the highest priority stock.&quot;
            </div>
          </section>

          <section className="bg-ax-black/20 border border-ax-border-dark p-8 rounded">
            <h2 className="text-[12px] font-semibold tracking-widest text-ax-orange uppercase mb-6">2. Engine Structure</h2>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ax-carbon border border-ax-border-light flex items-center justify-center text-sm">1</div>
                <div>
                  <h3 className="font-medium mb-1">Understand</h3>
                  <p className="text-white/70 text-[15px]">Extracts supplier endpoints, identifies Q3 shipping manifests, and determines inventory priorities from the CRM.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ax-carbon border border-ax-border-light flex items-center justify-center text-sm">2</div>
                <div>
                  <h3 className="font-medium mb-1">Plan</h3>
                  <p className="text-white/70 text-[15px]">Generates a sequence to ping supplier APIs, sort delays, and compile a re-routing strategy for high-priority SKUs.</p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-4 h-[2px] bg-ax-orange" />
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ax-orange text-ax-black flex items-center justify-center text-sm font-semibold">3</div>
                <div>
                  <h3 className="font-medium text-ax-orange mb-1">Approve (Human Decision)</h3>
                  <p className="text-white/70 text-[15px]">The Engine halts. The operator reviews the proposed re-routing strategy before any stock is actually moved.</p>
                </div>
              </div>

              <div className="flex gap-4 opacity-50">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ax-carbon border border-ax-border-light flex items-center justify-center text-sm">4</div>
                <div>
                  <h3 className="font-medium mb-1">Act</h3>
                  <p className="text-white/70 text-[15px]">Executes approved re-routing API calls to the warehouse management system.</p>
                </div>
              </div>

              <div className="flex gap-4 opacity-50">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ax-carbon border border-ax-border-light flex items-center justify-center text-sm">5</div>
                <div>
                  <h3 className="font-medium mb-1">Check</h3>
                  <p className="text-white/70 text-[15px]">Verifies that API responses match the intended re-routing state.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-ax-orange/10 border border-ax-orange/30 p-8 rounded flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-[22px] font-medium mb-2">Ready for a real evaluation?</h2>
              <p className="text-white/70">Connect Alter Engine to your own environment.</p>
            </div>
            <Link href="/request-access" className="flex-shrink-0 inline-flex h-12 items-center justify-center rounded-[4px] bg-[#f15a24] px-8 text-sm font-medium text-[#090909] hover:bg-[#d94a18] transition-colors shadow-none">
              Continue to Evaluation Form
            </Link>
          </section>

        </main>
      </div>
    </div>
  );
}
