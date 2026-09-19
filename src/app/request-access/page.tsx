"use client";

import React, { useState } from 'react';
import { Header } from '@/components/site/Header';

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  enquiryType: string;
  accomplish: string;
  systems: string;
  approval: string;
  consent: boolean;
  honeypot: string; // Anti-spam
}

const EMPTY_FORM: FormData = {
  name: '', email: '', company: '', role: '', enquiryType: 'Evaluate Alter Engine',
  accomplish: '', systems: '', approval: '', consent: false, honeypot: ''
};

export default function RequestAccess() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid work email is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.role.trim()) newErrors.role = 'Role is required';
    if (!formData.accomplish.trim()) newErrors.accomplish = 'This field is required';
    if (!formData.systems.trim()) newErrors.systems = 'This field is required';
    if (!formData.approval.trim()) newErrors.approval = 'This field is required';
    if (!formData.consent) newErrors.consent = 'You must consent to continue';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent reject for spam

    if (validate()) {
      setStatus('loading');
      await new Promise((r) => setTimeout(r, 600));
      // No backend is configured for this environment: store locally and say so plainly.
      sessionStorage.setItem('lastSubmission', JSON.stringify(formData));
      setStatus('success');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (hasError?: string) =>
    `w-full h-12 px-4 bg-ax-black/40 border rounded-[6px] text-ax-white outline-none transition-colors ${
      hasError ? 'border-red-400/60' : 'border-ax-mint/20 focus:border-ax-mint'
    }`;

  const textareaClass = (hasError?: string) =>
    `w-full p-4 bg-ax-black/40 border rounded-[6px] text-ax-white outline-none transition-colors resize-y ${
      hasError ? 'border-red-400/60' : 'border-ax-mint/20 focus:border-ax-mint'
    }`;

  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <section className="flex-1 bg-ax-black pb-24 pt-[150px]">
        <div className="container-ax max-w-[720px]">
          <div className="mb-14">
            <h1 className="font-display text-[32px] font-medium leading-[1.1] text-ax-white sm:text-[44px]">
              Tell us what needs to be completed.
            </h1>
            <p className="mt-5 text-[17px] leading-[1.55] text-ax-text/80">
              Describe the result, the systems involved and where people need to remain in
              control.
            </p>
          </div>

          {status === 'success' ? (
            <div className="rounded-[8px] border border-ax-mint/25 bg-ax-mint/5 p-8">
              <h2 className="mb-4 text-[20px] font-medium text-ax-white">Saved on this device</h2>
              <p className="mb-6 text-[15px] leading-[1.6] text-ax-muted">
                Your request was validated and stored locally in this browser session. No backend
                is connected yet, so nothing was sent to ALTERX — email{' '}
                <a href="mailto:alterx@alterx.co.in" className="text-ax-mint underline underline-offset-2">
                  alterx@alterx.co.in
                </a>{' '}
                directly if you'd like this reviewed.
              </p>
              <button
                onClick={() => {
                  setStatus('idle');
                  setFormData(EMPTY_FORM);
                }}
                className="text-[14px] font-semibold text-ax-mint hover:underline focus-visible:outline-ax-mint"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
              <div className="absolute opacity-0 -left-[9999px]" aria-hidden="true">
                <label htmlFor="honeypot">Leave this field blank</label>
                <input type="text" id="honeypot" name="honeypot" value={formData.honeypot} onChange={handleChange} tabIndex={-1} />
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-[13px] font-medium text-ax-muted">Name</label>
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleChange}
                    className={inputClass(errors.name)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && <p id="name-error" className="mt-2 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-[13px] font-medium text-ax-muted">Work email</label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange}
                    className={inputClass(errors.email)}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="company" className="mb-2 block text-[13px] font-medium text-ax-muted">Company</label>
                  <input
                    type="text" id="company" name="company"
                    value={formData.company} onChange={handleChange}
                    className={inputClass(errors.company)}
                  />
                  {errors.company && <p className="mt-2 text-xs text-red-400">{errors.company}</p>}
                </div>

                <div>
                  <label htmlFor="role" className="mb-2 block text-[13px] font-medium text-ax-muted">Role</label>
                  <input
                    type="text" id="role" name="role"
                    value={formData.role} onChange={handleChange}
                    className={inputClass(errors.role)}
                  />
                  {errors.role && <p className="mt-2 text-xs text-red-400">{errors.role}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="enquiryType" className="mb-2 block text-[13px] font-medium text-ax-muted">Enquiry type</label>
                <select
                  id="enquiryType" name="enquiryType"
                  value={formData.enquiryType} onChange={handleChange}
                  className={`${inputClass()} appearance-none`}
                >
                  <option>Evaluate Alter Engine</option>
                  <option>Explore AxInventory</option>
                  <option>Discuss a custom workflow</option>
                  <option>Request developer access</option>
                  <option>Partnership</option>
                  <option>General enquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="accomplish" className="mb-2 block text-[13px] font-medium text-ax-muted">What are you trying to accomplish?</label>
                <textarea
                  id="accomplish" name="accomplish" rows={4}
                  value={formData.accomplish} onChange={handleChange}
                  className={textareaClass(errors.accomplish)}
                />
                {errors.accomplish && <p className="mt-2 text-xs text-red-400">{errors.accomplish}</p>}
              </div>

              <div>
                <label htmlFor="systems" className="mb-2 block text-[13px] font-medium text-ax-muted">Which systems are involved?</label>
                <textarea
                  id="systems" name="systems" rows={3}
                  value={formData.systems} onChange={handleChange}
                  className={textareaClass(errors.systems)}
                />
                {errors.systems && <p className="mt-2 text-xs text-red-400">{errors.systems}</p>}
              </div>

              <div>
                <label htmlFor="approval" className="mb-2 block text-[13px] font-medium text-ax-muted">Where is approval or judgement required?</label>
                <textarea
                  id="approval" name="approval" rows={3}
                  value={formData.approval} onChange={handleChange}
                  className={textareaClass(errors.approval)}
                />
                {errors.approval && <p className="mt-2 text-xs text-red-400">{errors.approval}</p>}
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-6 items-center">
                  <input
                    id="consent" name="consent" type="checkbox"
                    checked={formData.consent} onChange={handleChange}
                    className="h-4 w-4 rounded-sm border-ax-mint/30 text-ax-mint focus:ring-ax-mint"
                  />
                </div>
                <div>
                  <label htmlFor="consent" className="text-[14px] text-ax-muted">
                    I agree to the privacy policy and consent to being contacted by ALTERX
                    regarding this enquiry.
                  </label>
                  {errors.consent && <p className="mt-1 text-xs text-red-400">{errors.consent}</p>}
                </div>
              </div>

              <div className="border-t border-ax-mint/10 pt-6">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex h-12 w-full items-center justify-center rounded-[4px] bg-ax-mint px-8 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald disabled:opacity-60 sm:w-auto"
                >
                  {status === 'loading' ? 'Submitting…' : 'Request access'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
