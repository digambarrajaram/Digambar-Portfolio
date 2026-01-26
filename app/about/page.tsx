'use client';


import { useEffect } from 'react';
import { about, experience, skills, certifications } from "@/data/portfolio";

export default function About() {
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
        {/* Enhanced Page Header */}
        <div className="mb-20 text-center">
          <span className="typography-caption text-[#60A5FA] block mb-6">Get to Know Me</span>
          <h1 className="typography-heading-1 text-[#F8FAFC] mb-6 leading-tight">
            About Me
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] rounded-full mx-auto"></div>
        </div>

        {/* Introduction */}
        <section className="mb-20 fade-in-up">
          <div className="frosted-glass p-8 rounded-2xl border border-[#30363D]">
            <div className="space-y-6 text-[#9198A1] text-lg leading-relaxed">
              {about.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-24">
          <div className="mb-12 text-center">
            <span className="typography-caption text-[#60A5FA] block mb-4">Career Path</span>
            <h2 className="typography-heading-2 text-[#F8FAFC] mb-6 leading-tight">
              Professional Experience
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] rounded-full mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-[#30363D]">
                {/* Timeline Dot */}
                <div className="absolute -left-[13px] top-0 w-6 h-6 bg-[#388BFD] rounded-full border-4 border-[#0A0E13]"></div>
                
                {/* Job Card */}
                <div className="glass-card elevated-card p-6 rounded-xl border border-[#21262D] hover:border-[#388BFD] hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#E6EDF3] mb-1">
                        {job.role}
                      </h3>
                      <div className="text-[#388BFD] font-semibold">
                        {job.company}
                      </div>
                    </div>
                    <span className="px-4 py-2 glass-card rounded-lg text-[#9198A1] text-sm font-medium border border-[#30363D]">
                      {job.duration}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {job.responsibilities.map((item, idx) => (
                      <div key={idx} className="flex gap-3 text-[#9198A1]">
                        <div className="w-1.5 h-1.5 bg-[#388BFD] rounded-full flex-shrink-0 mt-2"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                    {job.achievements && job.achievements.length > 0 && (
                      <div className="mt-4">
                        <div className="font-semibold text-[#E6EDF3] mb-2">Achievements:</div>
                        <div className="space-y-3">
                          {job.achievements.map((ach, aidx) => (
                            <div key={aidx} className="flex gap-3 text-[#9198A1]">
                              <div className="w-1.5 h-1.5 bg-[#388BFD] rounded-full flex-shrink-0 mt-2"></div>
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="mb-24">
          <div className="mb-12 text-center">
            <span className="typography-caption text-[#60A5FA] block mb-4">Expertise</span>
            <h2 className="typography-heading-2 text-[#F8FAFC] mb-6 leading-tight">
              Technical Skills
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="glass-card elevated-card p-6 rounded-xl border border-[#21262D] hover:border-[#388BFD] hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[#388BFD]/10 border border-[#388BFD]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#388BFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#E6EDF3]">
                      {category === 'cloudInfrastructure' ? 'Cloud Infrastructure'
                        : category === 'devOpsAutomation' ? 'DevOps Automation'
                        : category === 'observabilitySecurity' ? 'Observability Security'
                        : category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {skillList.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[#9198A1]">
                        <div className="w-1.5 h-1.5 bg-[#388BFD] rounded-full"></div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <div className="mb-10">
            <span className="text-sm font-semibold text-[#388BFD] tracking-wide uppercase">Achievements</span>
            <h2 className="text-4xl font-bold text-[#E6EDF3] mt-2">
              Certifications
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card elevated-card p-6 rounded-xl border border-[#21262D] hover:border-[#388BFD] hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#388BFD]/10 border border-[#388BFD]/20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#388BFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-[#E6EDF3] mb-3 text-lg leading-snug">
                  {cert.name}
                </h3>
                <div className="mt-auto">
                  <p className="text-sm text-[#9198A1] mb-1 font-medium">{cert.provider}</p>
                  {cert.duration && <p className="text-xs text-[#656D76]">{cert.duration}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
