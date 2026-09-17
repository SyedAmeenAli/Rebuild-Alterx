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

export default function RequestAccess() {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', company: '', role: '', enquiryType: 'Evaluate Alter Engine',
    accomplish: '', systems: '', approval: '', consent: false, honeypot: ''
  });
  
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
      // Simulate API call
      await new Promise(r => setTimeout(r, 1500));
      
      // Since no backend is configured, we store locally and show development state.
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

  return (
    <main className="flex min-h-screen flex-col bg-ax-ivory pt-32 pb-24">
      <Header />
      
      <div className="max-w-3xl mx-auto px-6 w-full">
        
        <div className="mb-16">
          <h1 className="text-[clamp(34px,4vw,58px)] font-medium leading-[1] text-ax-black mb-6">
            Tell us what needs to be completed.
          </h1>
          <p className="text-lg text-ax-text-muted">
            Describe the result, the systems involved and where people need to remain in control.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-[#f0f9f4] border border-[#d1eadd] p-8 rounded-sm">
            <h2 className="text-xl font-medium text-[#1c5d36] mb-4">Development Submission Saved</h2>
            <p className="text-[#2c8a52] mb-6">
              Your request was validated and stored locally in the browser session. No backend integration is currently configured for this environment.
            </p>
            <button 
              onClick={() => {
                setStatus('idle');
                setFormData({name: '', email: '', company: '', role: '', enquiryType: 'Evaluate Alter Engine', accomplish: '', systems: '', approval: '', consent: false, honeypot: ''});
              }}
              className="text-sm font-semibold text-[#1c5d36] hover:underline focus-visible:outline-ax-orange"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            
            {/* Honeypot field - visually hidden but available to screen readers / bots */}
            <div className="absolute opacity-0 -left-[9999px]" aria-hidden="true">
              <label htmlFor="honeypot">Leave this field blank</label>
              <input type="text" id="honeypot" name="honeypot" value={formData.honeypot} onChange={handleChange} tabIndex={-1} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-ax-black mb-2">Name</label>
                <input 
                  type="text" id="name" name="name" 
                  value={formData.name} onChange={handleChange}
                  className={`w-full h-12 px-4 bg-ax-white border ${errors.name ? 'border-red-500' : 'border-ax-border-light'} rounded-sm focus:outline-none focus:border-ax-orange transition-colors`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <p id="name-error" className="mt-2 text-xs text-red-500">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-ax-black mb-2">Work email</label>
                <input 
                  type="email" id="email" name="email" 
                  value={formData.email} onChange={handleChange}
                  className={`w-full h-12 px-4 bg-ax-white border ${errors.email ? 'border-red-500' : 'border-ax-border-light'} rounded-sm focus:outline-none focus:border-ax-orange transition-colors`}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-ax-black mb-2">Company</label>
                <input 
                  type="text" id="company" name="company" 
                  value={formData.company} onChange={handleChange}
                  className={`w-full h-12 px-4 bg-ax-white border ${errors.company ? 'border-red-500' : 'border-ax-border-light'} rounded-sm focus:outline-none focus:border-ax-orange transition-colors`}
                />
                {errors.company && <p className="mt-2 text-xs text-red-500">{errors.company}</p>}
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-ax-black mb-2">Role</label>
                <input 
                  type="text" id="role" name="role" 
                  value={formData.role} onChange={handleChange}
                  className={`w-full h-12 px-4 bg-ax-white border ${errors.role ? 'border-red-500' : 'border-ax-border-light'} rounded-sm focus:outline-none focus:border-ax-orange transition-colors`}
                />
                {errors.role && <p className="mt-2 text-xs text-red-500">{errors.role}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="enquiryType" className="block text-sm font-semibold text-ax-black mb-2">Enquiry type</label>
              <select 
                id="enquiryType" name="enquiryType"
                value={formData.enquiryType} onChange={handleChange}
                className="w-full h-12 px-4 bg-ax-white border border-ax-border-light rounded-sm focus:outline-none focus:border-ax-orange transition-colors appearance-none"
              >
                <option>Evaluate Alter Engine</option>
                <option>Explore Cognitive AI</option>
                <option>Discuss a custom workflow</option>
                <option>Request developer access</option>
                <option>Partnership</option>
                <option>General enquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="accomplish" className="block text-sm font-semibold text-ax-black mb-2">What are you trying to accomplish?</label>
              <textarea 
                id="accomplish" name="accomplish" rows={4}
                value={formData.accomplish} onChange={handleChange}
                className={`w-full p-4 bg-ax-white border ${errors.accomplish ? 'border-red-500' : 'border-ax-border-light'} rounded-sm focus:outline-none focus:border-ax-orange transition-colors resize-y`}
              />
              {errors.accomplish && <p className="mt-2 text-xs text-red-500">{errors.accomplish}</p>}
            </div>

            <div>
              <label htmlFor="systems" className="block text-sm font-semibold text-ax-black mb-2">Which systems are involved?</label>
              <textarea 
                id="systems" name="systems" rows={3}
                value={formData.systems} onChange={handleChange}
                className={`w-full p-4 bg-ax-white border ${errors.systems ? 'border-red-500' : 'border-ax-border-light'} rounded-sm focus:outline-none focus:border-ax-orange transition-colors resize-y`}
              />
              {errors.systems && <p className="mt-2 text-xs text-red-500">{errors.systems}</p>}
            </div>

            <div>
              <label htmlFor="approval" className="block text-sm font-semibold text-ax-black mb-2">Where is approval or judgement required?</label>
              <textarea 
                id="approval" name="approval" rows={3}
                value={formData.approval} onChange={handleChange}
                className={`w-full p-4 bg-ax-white border ${errors.approval ? 'border-red-500' : 'border-ax-border-light'} rounded-sm focus:outline-none focus:border-ax-orange transition-colors resize-y`}
              />
              {errors.approval && <p className="mt-2 text-xs text-red-500">{errors.approval}</p>}
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center h-6">
                <input 
                  id="consent" name="consent" type="checkbox"
                  checked={formData.consent} onChange={handleChange}
                  className="w-4 h-4 text-ax-orange border-ax-border-light rounded-sm focus:ring-ax-orange"
                />
              </div>
              <div>
                <label htmlFor="consent" className="text-sm text-ax-text-muted">
                  I agree to the privacy policy and consent to being contacted by AlterX regarding this enquiry.
                </label>
                {errors.consent && <p className="mt-1 text-xs text-red-500">{errors.consent}</p>}
              </div>
            </div>

            <div className="pt-6 border-t border-ax-border-light">
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-8 h-12 bg-ax-black text-white text-sm font-medium rounded-full hover:bg-ax-carbon focus-visible:outline-ax-orange disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
              >
                {status === 'loading' ? 'Submitting...' : 'Request access'}
              </button>
            </div>

          </form>
        )}

      </div>
    </main>
  );
}
