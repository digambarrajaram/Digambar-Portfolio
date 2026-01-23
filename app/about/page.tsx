import type { Metadata } from "next";
import { about, experience, skills, certifications } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About | Digambar Rajaram",
  description: "Learn more about Digambar Rajaram's professional background, experience, and expertise in DevOps and Cloud Engineering.",
};

export default function About() {
  return (
    <div className="relative">
      {/* Background Gradient */}
      <div className="fixed inset-0 gradient-bg pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {/* Page Header */}
        <div className="mb-16">
          <span className="text-sm font-semibold text-[#38BDF8] tracking-wide uppercase">Get to Know Me</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-gradient mt-4 mb-4">
            About Me
          </h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] rounded-full"></div>
        </div>

        {/* Introduction */}
        <section className="mb-20">
          <div className="frosted-glass p-8 rounded-2xl border border-[#38BDF8]/20">
            <div className="space-y-6 text-[#9CA3AF] text-lg leading-relaxed">
              {about.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-20">
          <div className="mb-10">
            <span className="text-sm font-semibold text-[#38BDF8] tracking-wide uppercase">Career Path</span>
            <h2 className="text-4xl font-bold text-[#E5E7EB] mt-2">
              Professional Experience
            </h2>
          </div>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-[#38BDF8]/30">
                {/* Timeline Dot */}
                <div className="absolute -left-[13px] top-0 w-6 h-6 bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] rounded-full border-4 border-[#0B0F14] glow-sm"></div>
                
                {/* Job Card */}
                <div className="glass-card elevated-card p-6 rounded-xl border border-[#1F2937] hover:border-[#38BDF8]/50 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#E5E7EB] mb-1">
                        {job.title}
                      </h3>
                      <div className="text-[#38BDF8] font-semibold">
                        {job.company}
                      </div>
                    </div>
                    <span className="px-4 py-2 glass-card rounded-lg text-[#9CA3AF] text-sm font-medium border border-[#38BDF8]/20">
                      {job.period}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {job.responsibilities.map((item, idx) => (
                      <div key={idx} className="flex gap-3 text-[#9CA3AF]">
                        <svg className="w-5 h-5 text-[#38BDF8] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="mb-20">
          <div className="mb-10">
            <span className="text-sm font-semibold text-[#38BDF8] tracking-wide uppercase">Expertise</span>
            <h2 className="text-4xl font-bold text-[#E5E7EB] mt-2">
              Technical Skills
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => {
              const gradients = [
                'from-[#38BDF8] to-[#0EA5E9]', // Cyan
                'from-[#A78BFA] to-[#8B5CF6]', // Purple
                'from-[#2DD4BF] to-[#14B8A6]', // Teal
                'from-[#60A5FA] to-[#3B82F6]', // Blue
              ];
              const gradient = gradients[index % gradients.length];
              
              return (
                <div key={index} className="glass-card elevated-card p-6 rounded-xl border border-[#1F2937] hover:border-[#38BDF8]/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center glow-sm`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gradient">
                      {category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {skillList.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[#9CA3AF]">
                        <div className="w-1.5 h-1.5 bg-[#38BDF8] rounded-full"></div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <div className="mb-10">
            <span className="text-sm font-semibold text-[#38BDF8] tracking-wide uppercase">Achievements</span>
            <h2 className="text-4xl font-bold text-[#E5E7EB] mt-2">
              Certifications
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="glass-card elevated-card p-6 rounded-xl border border-[#1F2937] hover:border-[#38BDF8]/50 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#38BDF8]/20 to-[#0EA5E9]/10 border border-[#38BDF8]/30 flex items-center justify-center group-hover:glow-sm transition-all duration-300">
                    <svg className="w-7 h-7 text-[#38BDF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-[#E5E7EB] mb-3 text-lg leading-snug">
                  {cert.name}
                </h3>
                <div className="mt-auto">
                  <p className="text-sm text-[#9CA3AF] mb-1 font-medium">{cert.issuer}</p>
                  <p className="text-xs text-[#6B7280]">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
