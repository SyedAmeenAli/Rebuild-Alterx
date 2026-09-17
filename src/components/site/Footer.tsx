import Link from 'next/link';
import { Logo } from '../shared/Logo';

const columns = [
  { title: 'Products', href: '/products' },
  { title: 'Solutions', href: '/solutions' },
  { title: 'Developers', href: '/developers' },
  { title: 'Resources', href: '/resources' },
  { title: 'About', href: '/about' },
];

export function Footer() {
  return (
    <footer className="w-full bg-ax-black text-ax-text py-20 pb-10 relative border-t border-ax-mint/10">
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-40 pointer-events-none"
        style={{ background: 'var(--ax-gradient-edge)' }}
      />

      <div className="container-ax">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16 pb-16 border-b border-white/10">
          <div className="h-7">
            <Logo className="h-full w-auto" />
          </div>

          <nav className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
            {columns.map((col) => (
              <Link key={col.href} href={col.href} className="text-ax-muted hover:text-ax-mint transition-colors">
                {col.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ax-muted">
          <p>&copy; {new Date().getFullYear()} ALTERX. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ax-text transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-ax-text transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
