'use client';

import { technologies } from '@/data/portfolio';
import { useState } from 'react';

export default function TechnologiesSection() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const handleTechClick = (tech: string) => {
    setSelectedTech(selectedTech === tech ? null : tech);
  };

  return (
    <section className="py-24 fade-in-up scroll-reveal" suppressHydrationWarning={true}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <span className="typography-caption text-[#60A5FA] slide-in-left">Technologies</span>
        </div>
        <h2 className="typography-heading-1 text-[#F8FAFC] mb-8 leading-tight slide-in-right stagger-1">
          Tech Stack & Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              onClick={() => handleTechClick(tech)}
              className={`glass-card p-4 rounded-xl border border-[#2A3441] hover:border-[#3B82F6]/30 transition-all duration-300 hover:shadow-xl hover:scale-105 card-interactive stagger-${(index % 6) + 1} group cursor-pointer text-center`}
            >
              <span className="typography-body text-[#CBD5E1] group-hover:text-[#E5E7EB] transition-colors duration-300">
                {tech}
              </span>
              {selectedTech === tech && (
                <div className="mt-2 text-xs text-[#60A5FA] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to explore projects
                </div>
              )}
            </div>
          ))}
        </div>
        {selectedTech && (
          <div className="mt-8 text-center">
            <a
              href="/projects"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-[#F8FAFC] glass-card border border-[#3B82F6]/40 rounded-xl transition-all duration-300 hover:border-[#3B82F6] hover:bg-[#3B82F6]/10 hover:scale-105"
            >
              View Projects Using {selectedTech}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
