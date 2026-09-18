import { Reveal } from "@/components/shared/Reveal";

export function EditorialPause() {
  return (
    <section className="relative bg-ax-black py-32 lg:py-44">
      <div className="container-ax">
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal>
            <p className="font-display text-balance text-[28px] leading-[1.3] tracking-[-0.01em] text-ax-white sm:text-[38px] lg:text-[44px]">
              AI is easy to demonstrate.
              <br />
              Making work survive reality is harder.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
