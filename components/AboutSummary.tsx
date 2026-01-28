'use client';


import { useEffect, useState } from 'react';

export default function AboutSummary() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
      title: "High-Performance Systems",
      description: "Optimized for scale and reliability"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Security-First Approach",
      description: "Compliance and protection built-in"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Data-Driven Operations",
      description: "Monitoring and analytics excellence"
    }
  ];

  return (
    <section
      id="home-about"
      className="relative w-full"
    >
      <div className="site-container">

        {/* ================= HEADER ================= */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out
            ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
        >
          <span
            className="
              inline-block mb-6 px-5 py-2
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

          <h2 className="mb-6 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 sm:text-5xl md:text-6xl">
            About Me
          </h2>

          <p className="mx-auto max-w-4xl text-xl text-slate-300 sm:text-2xl leading-relaxed">
            <span className="font-bold text-white">
              Infrastructure & DevOps Engineer
            </span>{' '}
          </p>
        </div>

        {/* ================= SUMMARY CARD ================= */}
        <div
          className={`relative mx-auto max-w-6xl transition-all duration-700 ease-out delay-150
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
              absolute -top-16 -left-16
              h-40 w-40
              rounded-full
              bg-emerald-500/20
              blur-[100px]
              animate-pulse
            "
          />
          <div
            aria-hidden
            className="
              absolute -bottom-16 -right-16
              h-40 w-40
              rounded-full
              bg-teal-500/15
              blur-[100px]
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
              pt-12 pb-12 px-8 sm:px-12 md:px-16
              shadow-[0_40px_80px_rgba(0,0,0,0.6)]
              overflow-hidden
            "
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full blur-xl" />

            {/* Content Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left Column - Main Content */}
              <div className="space-y-8">
                {/* Lead paragraph */}
                <div className="space-y-4">
                  <p className="text-xl font-semibold leading-relaxed text-slate-200 sm:text-2xl">
                    With over{' '}
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                      2+ years of enterprise experience
                    </span>
                    , I architect and maintain mission-critical infrastructure for
                    large-scale government platforms serving millions of users.
                  </p>
                </div>

                {/* Elegant Divider */}
                <div className="flex items-center space-x-4">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
                  <div className="w-2 h-2 rounded-full bg-emerald-400/60" />
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
                </div>

                {/* Supporting content with enhanced styling */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <p className="text-lg leading-relaxed text-slate-300 group-hover:text-slate-200 transition-colors">
                      My expertise spans{' '}
                      <span className="font-semibold text-slate-100">
                        AWS cloud infrastructure
                      </span>
                      , VMware vSphere datacenter operations, and modern DevOps
                      practices including CI/CD automation, containerization,
                      and infrastructure as code.
                    </p>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-teal-400" />
                    </div>
                    <p className="text-lg leading-relaxed text-slate-300 group-hover:text-slate-200 transition-colors">
                      I follow a{' '}
                      <span className="font-semibold text-slate-100">
                        security-first mindset
                      </span>{' '}
                      — from OS hardening and access controls to observability and
                      monitoring — ensuring systems remain stable, auditable, and resilient
                      under real-world load.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Highlights Cards */}
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className={`
                      group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer
                      ${hoveredCard === index
                        ? 'border-emerald-400/60 bg-emerald-500/5 shadow-lg shadow-emerald-500/10 scale-[1.02]'
                        : 'border-slate-700/40 bg-slate-800/40 hover:border-slate-600/60 hover:bg-slate-800/60'
                      }
                    `}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`
                        flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                        ${hoveredCard === index
                          ? 'bg-emerald-500/20 text-emerald-300 scale-110'
                          : 'bg-slate-700/50 text-slate-400 group-hover:bg-slate-600/50'
                        }
                      `}>
                        {highlight.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`
                          text-lg font-bold mb-2 transition-colors duration-300
                          ${hoveredCard === index ? 'text-emerald-300' : 'text-slate-200'}
                        `}>
                          {highlight.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                          {highlight.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover effect line */}
                    <div className={`
                      absolute bottom-0 left-6 right-6 h-[1px] transition-all duration-300
                      ${hoveredCard === index
                        ? 'bg-gradient-to-r from-emerald-400/60 to-teal-400/60 scale-x-100'
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
