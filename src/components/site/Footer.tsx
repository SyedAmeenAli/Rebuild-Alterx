import Link from 'next/link';
import { Logo } from '../shared/Logo';
import { navigationData, PRODUCTS, talkToUsDestination } from '@/content/navigation';

// Derived from the same navigationData/PRODUCTS the header uses, instead of a
// separately hand-maintained list — that drift is exactly how AxInventory
// previously ended up filed under "Solutions" and "Reliability" under
// "Developers" here, even though the header never made that mistake.
const solutionsMenu = navigationData.find((m) => m.id === 'solutions');
const developerMenu = navigationData.find((m) => m.id === 'developer');
const companyMenu = navigationData.find((m) => m.id === 'company');

const GROUPS = [
  {
    title: 'Products',
    links: PRODUCTS.map((p) => ({ label: p.label, href: p.href })),
  },
  {
    title: 'Solutions',
    links: (solutionsMenu?.items ?? []).map((i) => ({ label: i.label, href: i.href })),
  },
  {
    title: 'Developers',
    links: (developerMenu?.items ?? []).map((i) => ({ label: i.label, href: i.href })),
  },
  {
    title: 'Resources',
    links: [
      { label: 'Latest', href: '/resources#index' },
      { label: 'Engineering Notes', href: '/resources#engineering-notes' },
      { label: 'Resources FAQ', href: '/resources#faq' },
    ],
  },
  {
    title: 'Company',
    links: (companyMenu?.items ?? [])
      .filter((i) => i.label !== 'FAQ')
      .map((i) => ({ label: i.label, href: i.href })),
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

export function Footer() {
  return (
    <footer className="w-full bg-ax-black text-ax-text py-20 pb-10 relative border-t border-ax-mint/10 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-40 pointer-events-none"
        style={{ background: 'var(--ax-gradient-edge)' }}
      />

      <div className="container-ax relative">
        <div className="flex flex-col gap-12 pb-16 mb-12 border-b border-white/10 lg:flex-row lg:justify-between lg:gap-8">
          <div className="flex flex-col gap-3">
            <div className="h-9 flex-shrink-0">
              <Logo className="h-full w-auto" />
            </div>
            <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-ax-muted/80">
              AI that does the work.
            </p>
            <p className="max-w-[220px] text-[13px] leading-[1.6] text-ax-muted/70">
              Outcome first. Governed by design. Proven in use.
            </p>
            <Link
              href={talkToUsDestination}
              className="group mt-1 inline-flex w-fit items-center gap-1.5 text-[13px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
            >
              Talk to us
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
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
