import { Reveal } from "@/components/shared/Reveal";

const CONTACT_EMAIL = "alterx@alterx.co.in";
const CONTACT_PHONES = ["+91 93905 85526", "+91 77025 03684"];
const ADDRESS = "8-1-346/10/A/1, Sabza Colony, Brindavan Colony, Toli Chowki, Hyderabad, Telangana 500008, India";

export function OtherWaysToReach() {
  return (
    <section className="relative bg-ax-black py-20 lg:py-24">
      <div className="container-ax">
        <Reveal>
          <div className="flex flex-col gap-8 border-t border-ax-mint/10 pt-8 sm:flex-row sm:justify-between">
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
              Other ways to reach us
            </p>
            <div className="flex flex-col gap-4 sm:items-end">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-display text-[18px] font-medium text-ax-white transition-colors hover:text-ax-mint"
              >
                {CONTACT_EMAIL}
              </a>
              <div className="flex flex-wrap gap-x-3 gap-y-1 sm:justify-end">
                {CONTACT_PHONES.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="text-[15px] text-ax-text/85 transition-colors hover:text-ax-mint"
                  >
                    {phone}
                  </a>
                ))}
              </div>
              <p className="max-w-[320px] text-[13px] leading-[1.6] text-ax-muted sm:text-right">
                {ADDRESS}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
