import type { Metadata } from "next";
import { personalInfo, about, coreSkills, stats } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Resume | Digambar Rajaram",
  description: "Download the resume of Digambar Rajaram - DevOps & Cloud Engineer. Experience with AWS, Terraform, Kubernetes, and CI/CD automation.",
};

export default function Resume() {
  return (
    <div className="relative">
      {/* Background Grid */}
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-50" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {/* Page Header */}
        <div className="mb-16">
          <div className="font-mono text-sm text-[#6B7280] mb-2">
            ~/resume <span className="text-[#38BDF8]">--download</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#E5E7EB] mb-4">
            Resume
          </h1>
          <div className="w-20 h-1 bg-[#38BDF8]"></div>
        </div>

        {/* Download Section - Terminal Style */}
        <section className="mb-20">
          <div className="relative bg-[#000]/60 border-2 border-[#38BDF8] p-12">
            {/* Terminal Header */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-[#1F2937] border-b border-[#38BDF8] flex items-center px-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
              </div>
              <span className="font-mono text-xs text-[#9CA3AF] ml-4">download-resume.sh</span>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-[#38BDF8]/10 border-2 border-[#38BDF8]">
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
              
              <h2 className="text-3xl font-bold text-[#E5E7EB] mb-3 font-mono">
                RESUME.PDF
              </h2>
              <p className="text-[#9CA3AF] mb-8 font-mono text-sm">
                <span className="text-[#6B7280]">{"//"}</span> Professional resume in PDF format
              </p>
              
              <a
                href={personalInfo.resumeFile}
                download="digambar_rajaram_resume.pdf"
                className="inline-flex items-center px-8 py-4 font-mono text-sm font-medium text-[#0B0F14] bg-[#38BDF8] hover:bg-[#0EA5E9] transition-all duration-200"
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
                <span>$ wget resume.pdf</span>
              </a>
              
              <p className="text-xs text-[#6B7280] mt-6 font-mono">
                digambar_rajaram_resume.pdf
              </p>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="mono-label">SUMMARY.TXT</span>
            <h2 className="text-4xl font-bold text-[#E5E7EB] mt-2">
              Professional Summary
            </h2>
          </div>
          
          <div className="p-6 bg-[#111827] border-l-4 border-[#38BDF8]">
            <p className="text-[#9CA3AF] text-lg leading-relaxed">
              {about.summary}
            </p>
          </div>
        </section>

        {/* Core Skills - Grid */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="mono-label">CORE_SKILLS.CONF</span>
            <h2 className="text-4xl font-bold text-[#E5E7EB] mt-2">
              Core Competencies
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreSkills.map((skill, index) => (
              <div
                key={index}
                className="group flex items-center p-5 bg-[#111827] border border-[#1F2937] hover:border-[#38BDF8] transition-colors"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-[#38BDF8]/10 border border-[#38BDF8]/30 mr-4 flex-shrink-0">
                  <span className="text-[#38BDF8] font-mono font-bold text-sm">✓</span>
                </div>
                <span className="text-[#E5E7EB] font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Stats - Dashboard Style */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="mono-label">METRICS.LOG</span>
            <h2 className="text-4xl font-bold text-[#E5E7EB] mt-2">
              Experience Metrics
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="relative bg-[#111827] border border-[#1F2937] p-8 text-center group hover:border-[#38BDF8] transition-colors overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#38BDF8]"></div>
              <div className="text-6xl font-bold text-[#38BDF8] mb-3 font-mono">
                {stats.yearsExperience}
              </div>
              <div className="text-[#9CA3AF] uppercase tracking-wide text-sm font-mono">
                Years Experience
              </div>
            </div>
            
            <div className="relative bg-[#111827] border border-[#1F2937] p-8 text-center group hover:border-[#10B981] transition-colors overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#10B981]"></div>
              <div className="text-6xl font-bold text-[#10B981] mb-3 font-mono">
                {stats.projectsCompleted}
              </div>
              <div className="text-[#9CA3AF] uppercase tracking-wide text-sm font-mono">
                Projects Deployed
              </div>
            </div>
            
            <div className="relative bg-[#111827] border border-[#1F2937] p-8 text-center group hover:border-[#F59E0B] transition-colors overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#F59E0B]"></div>
              <div className="text-6xl font-bold text-[#F59E0B] mb-3 font-mono">
                {stats.certifications}
              </div>
              <div className="text-[#9CA3AF] uppercase tracking-wide text-sm font-mono">
                Certifications
              </div>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <div className="p-6 bg-[#1F2937]/30 border border-[#38BDF8]/20">
          <div className="flex items-start gap-3">
            <span className="text-[#38BDF8] font-mono mt-1">!</span>
            <div>
              <p className="text-sm text-[#9CA3AF] font-mono">
                <span className="text-[#38BDF8]">NOTE:</span> Add your resume PDF file as{" "}
                <code className="px-2 py-1 bg-[#000]/40 text-[#10B981] border border-[#1F2937]">
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
