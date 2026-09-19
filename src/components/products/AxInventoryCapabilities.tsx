import { Reveal } from "@/components/shared/Reveal";
import GlareHover from "@/components/shared/GlareHover";

const AREAS = [
  {
    label: "Inventory",
    copy: "Shows what you have, what moved, and what needs attention. You do not have to keep separate lists.",
  },
  {
    label: "POS",
    copy: "Handles sales at the counter. It can keep working offline and sync later when a connection is available.",
  },
  {
    label: "Purchasing",
    copy: "Helps you manage orders and stock coming in, so buying is connected to what you already have.",
  },
  {
    label: "GST",
    copy: "Built into the product's workflow, helping retail operations work with GST-related requirements.",
  },
  {
    label: "Books",
    copy: "A real double-entry ledger, keeping sales and financial records connected instead of managing them separately.",
  },
];

export function AxInventoryCapabilities() {
  return (
    <section className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            What it does
          </p>
          <h2 className="font-display mt-5 max-w-[560px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
            Your shop&apos;s inventory, counter, purchasing, GST, and books — in one place.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {AREAS.map((a, i) => (
              <GlareHover
                key={a.label}
                height="auto"
                className={`!h-auto${i === AREAS.length - 1 ? " sm:col-span-2 lg:col-span-1" : ""}`}
                glass
              >
                <div className="flex h-full flex-col gap-2 p-6">
                  <p className="font-display text-[17px] font-medium text-ax-white">{a.label}</p>
                  <p className="text-[14px] leading-[1.6] text-ax-muted">{a.copy}</p>
                </div>
              </GlareHover>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
