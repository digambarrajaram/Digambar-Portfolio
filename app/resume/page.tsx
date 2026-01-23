import type { Metadata } from "next";
import { personalInfo, about, coreSkills, stats } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Resume | Digambar Rajaram",
  description: "Download the resume of Digambar Rajaram - DevOps & Cloud Engineer. Experience with AWS, Terraform, Kubernetes, and CI/CD automation.",
};

export default function Resume() {
  return (
    <div className="relative">
      {/* Background Gradient */}
      <div className="fixed inset-0 gradient-bg pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {/* Page Header */}
        <div className="mb-16">
          <span className="text-sm font-semibold text-[#38BDF8] tracking-wide uppercase">Career Overview</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-gradient mt-4 mb-4">
            Resume
          </h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] rounded-full"></div>
        </div>

        {/* Download Section */}
        <section className="mb-20">
          <div className="frosted-glass p-12 rounded-2xl border border-[#38BDF8]/30 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-2xl bg-gradient-to-br from-[#38BDF8]/20 to-[#0EA5E9]/10 border border-[#38BDF8]/30 glow-md">
              <svg
                className="w-12 h-12 text-[#38BDF8]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            
            <h2 className="text-3xl font-bold text-[#E5E7EB] mb-3">
              Professional Resume
            </h2>
            <p className="text-[#9CA3AF] mb-8">
              Download my complete resume in PDF format
            </p>
            
            <a
              href={personalInfo.resumeFile}
              download="digambar_rajaram_resume.pdf"
              className="inline-flex items-center px-8 py-4 text-sm font-semibold text-[#0B0F14] bg-[#38BDF8] hover:bg-[#0EA5E9] rounded-lg transition-all duration-300 glow-md hover:glow-lg"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </a>
            
            <p className="text-xs text-[#6B7280] mt-6">
              digambar_rajaram_resume.pdf
            </p>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="text-sm font-semibold text-[#38BDF8] tracking-wide uppercase">Overview</span>
            <h2 className="text-4xl font-bold text-[#E5E7EB] mt-2">
              Professional Summary
            </h2>
          </div>
          
          <div className="glass-card p-8 rounded-xl border border-[#38BDF8]/20">
            <p className="text-[#9CA3AF] text-lg leading-relaxed">
              {about.summary}
            </p>
          </div>
        </section>

        {/* Core Skills */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="text-sm font-semibold text-[#38BDF8] tracking-wide uppercase">Expertise</span>
            <h2 className="text-4xl font-bold text-[#E5E7EB] mt-2">
              Core Competencies
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreSkills.map((skill, index) => (
              <div
                key={index}
                className="group glass-card elevated-card flex items-center p-5 rounded-xl border border-[#1F2937] hover:border-[#38BDF8]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#E5E7EB] font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Stats */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-sm font-semibold text-[#38BDF8] tracking-wide uppercase">Impact</span>
            <h2 className="text-4xl font-bold text-[#E5E7EB] mt-2">
              Experience Metrics
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass-card elevated-card p-8 rounded-2xl border border-[#1F2937] hover:border-[#38BDF8]/50 text-center transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#38BDF8]/20 to-[#0EA5E9]/10 border border-[#38BDF8]/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#38BDF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-gradient mb-2">
                {stats.yearsExperience}
              </div>
              <div className="text-[#9CA3AF] uppercase tracking-wide text-sm font-semibold">
                Years Experience
              </div>
            </div>
            
            <div className="glass-card elevated-card p-8 rounded-2xl border border-[#1F2937] hover:border-[#2DD4BF]/50 text-center transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#2DD4BF]/20 to-[#14B8A6]/10 border border-[#2DD4BF]/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-gradient mb-2">
                {stats.projectsCompleted}
              </div>
              <div className="text-[#9CA3AF] uppercase tracking-wide text-sm font-semibold">
                Projects Deployed
              </div>
            </div>
            
            <div className="glass-card elevated-card p-8 rounded-2xl border border-[#1F2937] hover:border-[#38BDF8]/50 text-center transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#A78BFA]/20 to-[#8B5CF6]/10 border border-[#A78BFA]/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-gradient mb-2">
                {stats.certifications}
              </div>
              <div className="text-[#9CA3AF] uppercase tracking-wide text-sm font-semibold">
                Certifications
              </div>
            </div>
          </div>
        </section>

        {/* Info Note */}
        <div className="glass-card p-6 rounded-xl border border-[#38BDF8]/20">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#38BDF8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-[#38BDF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-[#9CA3AF]">
                <span className="text-[#38BDF8] font-semibold">Note:</span> Add your resume PDF file as{" "}
                <code className="px-2 py-1 glass-card text-[#38BDF8] border border-[#38BDF8]/20 rounded">
                  /public/resume.pdf
                </code>{" "}
                to enable downloads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
