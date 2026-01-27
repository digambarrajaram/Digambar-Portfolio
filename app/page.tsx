'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// Dynamically import components for code splitting
const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  loading: () => <div className="py-24 flex items-center justify-center"><div className="spinner"></div></div>
});

const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  loading: () => <div className="py-24 flex items-center justify-center"><div className="spinner"></div></div>
});

const TechnologiesSection = dynamic(() => import('@/components/TechnologiesSection'), {
  loading: () => <div className="py-24 flex items-center justify-center"><div className="spinner"></div></div>
});

export default function Home() {
  useEffect(() => {
    // Scroll handlers
    const handleScroll = () => {
      const scrollButton = document.querySelector('.scroll-to-top');
      if (scrollButton) {
        if (window.scrollY > 300) {
          scrollButton.classList.add('visible');
        } else {
          scrollButton.classList.remove('visible');
        }
      }

      // Subtle parallax effect
      const parallaxBg = document.querySelector('.parallax-bg');
      if (parallaxBg) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.2;
        (parallaxBg as HTMLElement).style.transform = `translateY(${rate}px)`;
      }

      // Scroll reveal animations
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          reveal.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Background Gradient with Parallax */}
      <div className="fixed inset-0 bg-[#0A0E13] pointer-events-none" />

      {/* Scroll to Top Button */}
      <button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <TechnologiesSection />
      </div>
    </div>
  );
}
