'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { personalInfo } from '@/data/portfolio';
import { useMobileMenu } from '@/components/MobileMenuContext';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const { toggle, isOpen } = useMobileMenu();

  return (
    <header
      className="fixed inset-x-0 top-0 z-[2000] border-b border-slate-800
                 bg-slate-950/95 backdrop-blur-xl"
      style={{ height: 'var(--header-height)' }}
    >
      <div className="site-container h-full">
        <nav className="flex h-full items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link
            href="/"
            aria-label={`Home - ${personalInfo.name}`}
            className="flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-xl
                            bg-gradient-to-br from-emerald-500 to-emerald-700
                            flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-white">DR</span>
            </div>

            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-bold text-slate-50">
                {personalInfo.name}
              </div>
              <div className="text-xs text-slate-400">
                {personalInfo.title}
              </div>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition
                    ${
                      active
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60'
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            type="button"
            onClick={toggle}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="md:hidden inline-flex items-center justify-center
                       w-12 h-12 rounded-xl
                       border border-slate-600 bg-slate-800/80 backdrop-blur-sm
                       text-slate-300 hover:text-emerald-400
                       hover:border-emerald-500/50 hover:bg-slate-700/80
                       transition-all duration-200 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-emerald-500/50
                       active:scale-95"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </nav>
      </div>
    </header>
  );
}