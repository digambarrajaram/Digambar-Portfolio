'use client';

import Image from 'next/image';
import { personalInfo, about, stats } from '@/data/portfolio';

export default function HeroSection() {
  return (
    <section className="relative flex items-center py-0 md:py-20 sm:py-32 lg:py-40 overflow-hidden md:min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E13] via-[#0F1419] to-[#161B22]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.08),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1 space-y-8 scroll-reveal text-center md:text-left" suppressHydrationWarning={true}>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-card border border-[#3B82F6]/20 rounded-full hover:border-[#3B82F6]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#3B82F6]/20 relative overflow-hidden backdrop-blur-sm" style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.1)' }}>
              <div className="relative">
                <span className="w-3 h-3 bg-[#38BDF8] rounded-full ambient-glow-dot"></span>
              </div>
              <span className="text-sm font-semibold text-[#E5E7EB] tracking-wide relative z-10">Available for Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/5 to-[#38BDF8]/5 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tighter text-reveal">
                <span className="block text-[#F8FAFC] drop-shadow-lg">
                  {personalInfo.name.split(' ')[0]}
                </span>
                <span className="block bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#1D4ED8] bg-clip-text text-transparent drop-shadow-lg">
                  {personalInfo.name.split(' ')[1]}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E5E7EB] leading-tight slide-in-left stagger-1 max-w-2xl">
              {personalInfo.title}
            </h2>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-[#9CA3AF] leading-relaxed max-w-3xl slide-in-right stagger-2 font-light">
              {about.headline}
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <a
                href="/projects"
                className="group relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-[#F8FAFC] glass-card border-2 border-transparent rounded-2xl transition-all duration-500 hover:border-[#3B82F6] hover:bg-[#3B82F6]/10 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 transform-gpu btn-interactive overflow-hidden"
              >
                <span className="mr-4 relative z-10">View My Work</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-[#F8FAFC] glass-card border-2 border-[#3B82F6]/40 rounded-2xl transition-all duration-500 hover:border-[#3B82F6] hover:bg-[#3B82F6]/10 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 transform-gpu btn-interactive overflow-hidden"
              >
                <span className="mr-4 relative z-10">Let&apos;s Connect</span>
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>

            {/* Stats or Social Proof */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-[#2A3441]/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#60A5FA]">{stats.experienceYears}</div>
                <div className="text-sm text-[#9CA3AF] uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#60A5FA]">{stats.projects}</div>
                <div className="text-sm text-[#9CA3AF] uppercase tracking-wide">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#60A5FA]">{stats.certifications}</div>
                <div className="text-sm text-[#9CA3AF] uppercase tracking-wide">Certifications</div>
              </div>
            </div>
          </div>

          {/* Right: Enhanced Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#3B82F6]/20 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-[#8B5CF6]/15 rounded-full blur-xl" />

              {/* Main Image Container */}
              <div className="relative w-full max-w-[400px] lg:max-w-[500px] float-animation focus:outline-none">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 via-[#8B5CF6]/10 to-[#3B82F6]/20 rounded-3xl blur-2xl scale-110" />

                  {/* Image Frame */}
                  <div className="relative bg-gradient-to-br from-[#161B22] via-[#1C2128] to-[#161B22] p-3 border border-[#2A3441] rounded-3xl hover-glow transition-all duration-500 hover:border-[#3B82F6]/50 hover:shadow-2xl">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F1419] to-[#161B22]">
                      <Image
                        src="/Digambar_Photo.png"
                        alt={`${personalInfo.name} - Professional ${personalInfo.title} specializing in DevOps and Cloud Engineering`}
                        width={500}
                        height={600}
                        priority
                        className="w-full h-auto transition-all duration-500 hover:scale-105 filter hover:brightness-110"
                      />

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E13]/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
