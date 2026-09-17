import { Reveal } from "@/components/shared/Reveal";

const SYSTEMS = ["Model", "Search", "Messaging", "Payments", "Data", "Other systems"];

export function Adapters() {
  return (
    <section className="relative bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Adapters
          </p>
          <h2 className="font-display mt-5 max-w-[520px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
            Your systems shouldn&apos;t dictate the architecture.
          </h2>
          <p className="mt-5 max-w-[520px] text-[16px] leading-[1.6] text-ax-text/80">
            External providers sit behind interfaces ALTERX owns. A provider can change without
            rewriting the planning, execution or verification system around it.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-16 flex flex-col items-center gap-10 lg:mt-20">
            <div className="grid w-full max-w-[560px] grid-cols-3 items-center gap-x-4 gap-y-6 sm:gap-x-6">
              <span className="col-span-1 justify-self-end rounded-full border border-ax-mint/20 px-4 py-2 text-center text-[13px] font-medium text-ax-text/80 sm:justify-self-center">
                {SYSTEMS[0]}
              </span>
              <span className="col-span-1" />
              <span className="col-span-1 justify-self-start rounded-full border border-ax-mint/20 px-4 py-2 text-center text-[13px] font-medium text-ax-text/80 sm:justify-self-center">
                {SYSTEMS[1]}
              </span>

              <span className="col-span-1 justify-self-end rounded-full border border-ax-mint/20 px-4 py-2 text-center text-[13px] font-medium text-ax-text/80 sm:justify-self-center">
                {SYSTEMS[2]}
              </span>
              <span className="col-span-1 justify-self-center rounded-[6px] border border-ax-mint bg-ax-mint/10 px-5 py-3 text-center font-display text-[16px] font-medium text-ax-mint">
                Alter Engine
              </span>
              <span className="col-span-1 justify-self-start rounded-full border border-ax-mint/20 px-4 py-2 text-center text-[13px] font-medium text-ax-text/80 sm:justify-self-center">
                {SYSTEMS[3]}
              </span>

              <span className="col-span-1 justify-self-end rounded-full border border-ax-mint/20 px-4 py-2 text-center text-[13px] font-medium text-ax-text/80 sm:justify-self-center">
                {SYSTEMS[4]}
              </span>
              <span className="col-span-1" />
              <span className="col-span-1 justify-self-start rounded-full border border-ax-mint/20 px-4 py-2 text-center text-[13px] font-medium text-ax-text/80 sm:justify-self-center">
                {SYSTEMS[5]}
              </span>
            </div>
            <p className="max-w-[420px] text-center text-[13px] leading-[1.6] text-ax-muted">
              The center stays stable. The outer systems can change.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
