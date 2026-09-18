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
      { label: 'Solutions', href: '/solutions' },
      { label: 'How it works', href: '/solutions#process' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'Developers', href: '/developers' },
      { label: 'Architecture', href: '/developers#system' },
      { label: 'Documentation', href: '/docs' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Resources', href: '/resources' },
      { label: 'Engineering Notes', href: '/resources#engineering-notes' },
      { label: 'FAQ', href: '/resources#faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Talk to us', href: talkToUsDestination },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Cookie Preferences', href: '/cookies#preferences' },
    ],
  },
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

        <p className="text-center text-xs text-ax-muted md:text-left">
          &copy; {new Date().getFullYear()} ALTERX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
