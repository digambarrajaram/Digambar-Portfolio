'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { personalInfo } from '@/data/portfolio';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Close mobile menu on scroll
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      
      // Remove focus from any focused element when menu opens
      // This prevents the Contact button from being auto-focused
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 backface-hidden ${
      isScrolled
        ? 'bg-[#0A0E13]/95 backdrop-blur-xl border-b border-[#2A3441] shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="font-bold text-white text-sm">DR</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#60A5FA] transition-colors duration-300">
                {personalInfo.name.split(' ')[0]}
              </h1>
              <p className="text-xs text-[#94A3B8]">
                {personalInfo.title}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className="px-4 py-2.5 text-[#CBD5E1] hover:text-[#60A5FA] rounded-xl hover:bg-[#1A1F2E] transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-2.5 text-[#CBD5E1] hover:text-[#60A5FA] rounded-xl hover:bg-[#1A1F2E] transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2.5 text-[#CBD5E1] hover:text-[#60A5FA] rounded-xl hover:bg-[#1A1F2E] transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              Projects
            </Link>
            <Link
              href="/resume"
              className="px-4 py-2.5 text-[#CBD5E1] hover:text-[#60A5FA] rounded-xl hover:bg-[#1A1F2E] transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="ml-3 px-6 py-2.5 text-[#CBD5E1] hover:text-[#60A5FA] rounded-xl hover:bg-[#1A1F2E] transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2.5 rounded-xl glass-card border border-[#2A3441] text-[#CBD5E1] hover:text-[#60A5FA] hover:border-[#3B82F6]/50 transition-all duration-300 hover:scale-105"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Full-screen backdrop */}
            <div
              className="md:hidden fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
            {/* Menu panel */}
            <div
              ref={mobileMenuRef}
              className="md:hidden fixed top-20 left-0 right-0 bottom-0 z-[1000] bg-[#0F1419] border-t border-[#2A3441] shadow-2xl overflow-y-auto"
            >
              <nav className="flex flex-col gap-2 p-6">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="px-4 py-3 text-[#CBD5E1] hover:text-[#60A5FA] hover:bg-[#1A1F2E] rounded-xl transition-all duration-300 text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="px-4 py-3 text-[#CBD5E1] hover:text-[#60A5FA] hover:bg-[#1A1F2E] rounded-xl transition-all duration-300 text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  onClick={closeMobileMenu}
                  className="px-4 py-3 text-[#CBD5E1] hover:text-[#60A5FA] hover:bg-[#1A1F2E] rounded-xl transition-all duration-300 text-sm font-medium"
                >
                  Projects
                </Link>
                <Link
                  href="/resume"
                  onClick={closeMobileMenu}
                  className="px-4 py-3 text-[#CBD5E1] hover:text-[#60A5FA] hover:bg-[#1A1F2E] rounded-xl transition-all duration-300 text-sm font-medium"
                >
                  Resume
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="px-4 py-3 text-[#CBD5E1] hover:text-[#60A5FA] hover:bg-[#1A1F2E] rounded-xl transition-all duration-300 text-sm font-medium"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
