'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useMobileMenu } from '@/components/MobileMenuContext';
import { mobileNavItems } from '@/lib/constants';

export default function MobileMenuOverlay() {
  const { isOpen, close } = useMobileMenu();
  const pathname = usePathname();

  useEffect(() => {
    // Lock body scroll
    document.documentElement.toggleAttribute(
      'data-mobile-menu-open',
      isOpen
    );

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu-root"
      className="fixed inset-0 z-[1500] md:hidden"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/60 transition-opacity duration-300"
        onClick={close}
        aria-hidden
      />

      <div className={`fixed top-18 right-0 bottom-0 w-full max-w-sm bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b border-slate-700">
          <h2 className="text-lg font-semibold text-slate-200">Menu</h2>
        </div>
        <nav className="flex flex-col p-6 space-y-2">
          {mobileNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              aria-current={pathname === item.href ? 'page' : undefined}
              className={`flex items-center gap-3 py-4 px-4 text-lg font-medium rounded-lg transition-colors duration-200 ${
                pathname === item.href
                  ? 'bg-emerald-500/10 text-emerald-400 border-l-4 border-emerald-400'
                  : 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/50'
              }`}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}