"use client";

import { useState } from "react";

const INQUIRY_TYPES = ["General", "Sales", "Partnerships", "Careers", "Other"] as const;
const CONTACT_EMAIL = "alterx@alterx.co.in";

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
};

export function ContactForm() {
  const [inquiry, setInquiry] = useState<(typeof INQUIRY_TYPES)[number]>("General");
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", role: "", message: "" });
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${inquiry}] ${form.company || form.name || "New enquiry"}`);
    const bodyLines = [
      `Name: ${form.name}`,
      `Work email: ${form.email}`,
      `Company: ${form.company}`,
      form.role ? `Role: ${form.role}` : null,
      `Interested in: ${inquiry}`,
      "",
      form.message,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("ready");
  };

  return (
    <section id="form" className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.7fr_1fr] lg:gap-20">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
              Send a message
            </p>
            <h2 className="font-display mt-5 max-w-[360px] text-balance text-[26px] leading-[1.25] tracking-[-0.01em] text-ax-white sm:text-[30px]">
              What are you interested in?
            </h2>

            <div role="tablist" aria-label="Inquiry type" className="mt-8 flex flex-wrap gap-2">
              {INQUIRY_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  role="tab"
                  aria-selected={inquiry === type}
                  onClick={() => setInquiry(type)}
                  className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors focus-visible:outline-ax-mint focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    inquiry === type
                      ? "border-ax-mint bg-ax-mint text-ax-black"
                      : "border-ax-mint/25 text-ax-text/80 hover:border-ax-mint/50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Name" id="name" value={form.name} onChange={update("name")} required />
              <Field label="Work email" id="email" type="email" value={form.email} onChange={update("email")} required />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Company" id="company" value={form.company} onChange={update("company")} required />
              <Field label="Role (optional)" id="role" value={form.role} onChange={update("role")} />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-[13px] font-medium text-ax-muted">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={form.message}
                onChange={update("message")}
                className="w-full rounded-[6px] border border-ax-mint/20 bg-ax-black/40 px-4 py-3 text-[15px] text-ax-white outline-none transition-colors placeholder:text-ax-muted focus:border-ax-mint"
                placeholder="What needs to happen?"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-[4px] bg-ax-mint px-7 py-3 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
            >
              Send message
              <span aria-hidden="true">→</span>
            </button>

            {status === "ready" && (
              <p role="status" className="text-[13px] text-ax-muted">
                Opening your email client with this message addressed to {CONTACT_EMAIL}. If nothing
                opened, email us directly at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-ax-mint underline underline-offset-2">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[13px] font-medium text-ax-muted">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-[6px] border border-ax-mint/20 bg-ax-black/40 px-4 py-3 text-[15px] text-ax-white outline-none transition-colors focus:border-ax-mint"
      />
    </div>
  );
}
