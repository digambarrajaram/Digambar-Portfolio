'use client';

import { useEffect, useState } from 'react';
import { about, skills, stats, personalInfo } from '@/data/portfolio';

interface AboutSummaryProps {
  isFullPage?: boolean;
}

export default function AboutSummary({ isFullPage = false }: AboutSummaryProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Format experience years for display
  const experienceText = stats.experienceYears >= 1 
    ? `${stats.experienceYears.toFixed(1)}+ years`
    : '1+ year';

  useEffect(() => {
    const section = document.getElementById('home-about');
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Cloud & DevOps",
      description: skills.cloudDevOps.join(', ')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "Virtualization & Infrastructure",
      description: skills.infrastructureVirtualization.join(', ')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Observability & Scripting",
      description: skills.monitoringAutomation.join(', ')
    }
  ];

  // Key achievements - now dynamic from portfolio data
  const achievements = [
    { value: stats.vmsManaged, label: "VMs Managed" },
    { value: stats.esxiHosts, label: "ESXi Hosts" },
    { value: stats.backupStorage, label: "Backup Storage" },
    { value: stats.uptime, label: "Uptime" }
  ];

  return (
    <section
      id="home-about"
      className="relative w-full py-8"
    >
      <div className="site-container">

        {/* ================= HEADER ================= */}
        <div
          className={`text-center mb-12 transition-all duration-700 ease-out
            ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
        >
          <span
            className="
              inline-block mb-4 px-4 py-2
              text-xs font-bold tracking-widest uppercase
              rounded-full
              bg-gradient-to-r from-emerald-500/20 to-teal-500/20
              text-emerald-300
              border border-emerald-500/30
              shadow-lg shadow-emerald-500/10
            "
          >
            🚀 Professional Summary
          </span>

          <h2 className="mb-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 sm:text-5xl md:text-6xl">
            About Me
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-slate-300 sm:text-xl leading-relaxed">
            <span className="font-semibold text-white">
              {personalInfo.title}
            </span>{' '}
          </p>
        </div>

        {/* ================= ACHIEVEMENTS STATS BAR ================= */}
        <div
          className={`mb-10 transition-all duration-700 ease-out delay-100
            ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="
                  relative group
                  p-4 md:p-6
                  rounded-2xl
                  border border-slate-700/50
                  bg-gradient-to-br from-slate-800/60 to-slate-900/60
                  backdrop-blur-sm
                  overflow-hidden
                  transition-all duration-300
                  hover:border-emerald-500/30 hover:scale-[1.02]
                "
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-400 font-medium">
                    {achievement.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MAIN CONTENT CARD ================= */}
        <div
          className={`relative mx-auto max-w-6xl transition-all duration-700 ease-out delay-200
            ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
        >
          {/* Ambient Glow Effects */}
          <div
            aria-hidden
            className="
              absolute -top-20 -left-20
              h-48 w-48
              rounded-full
              bg-emerald-500/15
              blur-[120px]
              animate-pulse
            "
          />
          <div
            aria-hidden
            className="
              absolute -bottom-20 -right-20
              h-48 w-48
              rounded-full
              bg-teal-500/10
              blur-[120px]
              animate-pulse
              animation-delay-1000
            "
          />

          {/* Main Card */}
          <div
            className="
              relative
              rounded-3xl
              border border-slate-700/50
              bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80
              backdrop-blur-2xl
              pt-10 pb-10 px-6 sm:px-10 md:px-14
              shadow-[0_40px_80px_rgba(0,0,0,0.5)]
              overflow-hidden
            "
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full blur-2xl" />

            {/* Content Grid - Center Aligned */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">

              {/* Left Column - Main Content */}
              <div className="space-y-6">
                {/* Section Title */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">
                    My Professional Journey
                  </h3>
                </div>

                {/* Intro Content - Fixed mapping with proper text */}
                <div className="space-y-4">
                  {about.intro.slice(0, 5).map((paragraph, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-3 group"
                    >
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400" />
                      </div>
                      <p className="text-base leading-relaxed text-slate-300 group-hover:text-slate-200 transition-colors">
                        {paragraph}
                      </p>
                    </div>
                  ))}
                </div>

                {/* View More Link - Only show on home page */}
                {!isFullPage && (
                  <a 
                    href="/about" 
                    className="
                      inline-flex items-center space-x-2
                      text-emerald-400 font-medium
                      hover:text-emerald-300
                      transition-colors
                      group/link
                    "
                  >
                    <span>View full profile</span>
                    <svg 
                      className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Right Column - Highlights Cards */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/25">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">
                    Core Expertise
                  </h3>
                </div>
                
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className={`
                      group relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer
                      ${hoveredCard === index
                        ? 'border-emerald-400/50 bg-emerald-500/5 shadow-lg shadow-emerald-500/10 scale-[1.01]'
                        : 'border-slate-700/40 bg-slate-800/30 hover:border-slate-600/50 hover:bg-slate-800/50'
                      }
                    `}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`
                        flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300
                        ${hoveredCard === index
                          ? 'bg-emerald-500/20 text-emerald-300 scale-110'
                          : 'bg-slate-700/50 text-slate-400 group-hover:bg-slate-600/50'
                        }
                      `}>
                        {highlight.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`
                          text-base font-semibold mb-1.5 transition-colors duration-300
                          ${hoveredCard === index ? 'text-emerald-300' : 'text-slate-200'}
                        `}>
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                          {highlight.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover effect line */}
                    <div className={`
                      absolute bottom-0 left-5 right-5 h-[2px] transition-all duration-300
                      ${hoveredCard === index
                        ? 'bg-gradient-to-r from-emerald-400 to-teal-400 scale-x-100'
                        : 'bg-slate-700/40 scale-x-0'
                      }
                    `} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
