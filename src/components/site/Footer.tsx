import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../shared/Logo';
import { talkToUsDestination } from '@/content/navigation';

const GROUPS = [
  {
    title: 'Products',
    links: [
      { label: 'Alter Engine', href: '/products#alter-engine' },
      { label: 'AxInventory', href: '/products#axinventory' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'From intent to execution', href: '/solutions#process' },
      { label: 'Operations', href: '/solutions' },
      { label: 'Inventory', href: '/products#axinventory' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'How it is built', href: '/developers#system' },
      { label: 'Reliability', href: '/solutions#reliability' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: talkToUsDestination },
      { label: 'Resources', href: '/resources' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'FAQs', href: '/resources#faq' },
      { label: 'Contact', href: talkToUsDestination },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Cookies', href: '/cookies' },
    ],
  },
];

const FAQS = [
  { q: 'What do I actually do?', a: 'You describe the outcome in normal language.' },
  { q: 'Is this a chatbot?', a: 'No. It runs work and keeps a record.' },
  { q: 'What is ALTER ENGINE?', a: 'The execution system under ALTERX.' },
  { q: 'What is AXINVENTORY?', a: 'Inventory, POS, accounting for Indian retail.' },
  { q: 'Can I get an API key?', a: 'Not in v1. Managed service.' },
  { q: 'Where are you?', a: 'Hyderabad.' },
];

export function Footer() {
  return (
    <footer className="w-full bg-ax-black text-ax-text py-20 pb-10 relative border-t border-ax-mint/10 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none">
        <Image src="/media/alterx/10_footer_still.jpg" alt="" fill sizes="100vw" className="object-cover object-bottom" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(0deg, rgba(2,5,4,0.3) 0%, rgba(2,5,4,0.85) 60%, rgba(2,5,4,0.98) 100%)" }}
        />
      </div>
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-40 pointer-events-none"
        style={{ background: 'var(--ax-gradient-edge)' }}
      />

      <div className="container-ax relative">
        <div className="flex flex-col gap-12 pb-16 mb-12 border-b border-white/10 lg:flex-row lg:justify-between lg:gap-8">
          <div className="flex flex-col gap-3">
            <div className="h-7 flex-shrink-0">
              <Logo className="h-full w-auto" />
            </div>
            <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-ax-muted/80">
              AI that does the work.
            </p>
            <p className="max-w-[220px] text-[13px] leading-[1.6] text-ax-muted/70">
              Outcome first. Governed by design. Proven in use.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-10">
            {GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ax-muted/70">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-ax-text/85 transition-colors hover:text-ax-mint"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="pb-12 mb-10 border-b border-white/10">
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ax-mint/70">
            Frequently asked questions
          </h3>
          <div className="mt-6 flex flex-col divide-y divide-white/10">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[280px_1fr] sm:items-baseline sm:gap-6"
              >
                <span className="text-[14px] font-medium text-ax-white">{faq.q}</span>
                <span className="text-[14px] text-ax-muted">{faq.a}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ax-muted">
            &copy; {new Date().getFullYear()} ALTERX. All rights reserved.
          </p>
          <p className="text-xs text-ax-muted">Hyderabad</p>
        </div>
      </div>
    </footer>
  );
}
