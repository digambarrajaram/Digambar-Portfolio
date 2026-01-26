'use client';

import { useEffect } from 'react';
import { projects } from "@/data/portfolio";

export default function ProjectsClient() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = document.querySelector('.scroll-to-top');
      if (scrollButton) {
        if (window.scrollY > 300) {
          scrollButton.classList.add('visible');
        } else {
          scrollButton.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Background Gradient */}
      <div className="fixed inset-0 gradient-bg pointer-events-none" />

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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {/* Page Header */}
        <div className="mb-20 text-center">
          <span className="typography-caption text-[#60A5FA] block mb-6">Portfolio</span>
          <h1 className="typography-heading-1 text-[#F8FAFC] mb-6 leading-tight">
            My Projects
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] rounded-full mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card elevated-card p-6 rounded-xl border border-[#21262D] hover:border-[#388BFD] hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="mb-4">
                <span className="px-3 py-1 text-xs font-semibold text-[#388BFD] bg-[#388BFD]/10 rounded-full border border-[#388BFD]/20">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#E6EDF3] mb-3 leading-snug group-hover:text-[#388BFD] transition-colors">
                {project.title}
              </h3>
              <p className="text-[#9198A1] mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs text-[#9198A1] bg-[#21262D] rounded-md border border-[#30363D]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
