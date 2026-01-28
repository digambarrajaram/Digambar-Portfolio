'use client';

import { useEffect, useState } from 'react';

interface SharedLayoutProps {
  children: React.ReactNode;
}

export default function SharedLayout({ children }: SharedLayoutProps) {
  const [scrollY, setScrollY] = useState(0);
  const [parallaxRate, setParallaxRate] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calculate parallax effect
      const rate = currentScrollY * -0.2;
      setParallaxRate(rate);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial scroll position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Background Gradient with Parallax */}
      <div 
        className="fixed inset-0 bg-[#0A0E13] pointer-events-none"
        style={{
          transform: `translateY(${parallaxRate}px)`
        }}
      />

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${scrollY > 300 ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Page Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-0">
        {children}
      </div>
    </div>
  );
}
