import type { Metadata } from "next";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects | Digambar Rajaram",
  description: "Explore DevOps and Cloud Engineering projects by Digambar Rajaram, featuring AWS infrastructure, CI/CD pipelines, and containerization solutions.",
};

export default function Projects() {
  return (
    <div className="relative">
      {/* Background Gradient */}
      <div className="fixed inset-0 gradient-bg pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {/* Page Header */}
        <div className="mb-16">
          <span className="text-sm font-semibold text-[#38BDF8] tracking-wide uppercase">Portfolio</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-gradient mt-4 mb-3">
            Featured Projects
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl">
            DevOps and Cloud Engineering solutions I&apos;ve architected and deployed
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] rounded-full mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-card elevated-card p-8 rounded-2xl border border-[#1F2937] hover:border-[#38BDF8]/50 transition-all duration-300"
            >
              {/* Project Number Badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] font-bold text-white mb-6 glow-sm">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Project Title */}
              <h2 className="text-2xl font-bold text-[#E5E7EB] mb-6">
                {project.title}
              </h2>

              <div className="space-y-6">
                {/* Problem */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-[#EF4444] rounded-full"></div>
                    <span className="text-sm font-semibold text-[#EF4444] uppercase tracking-wider">
                      Challenge
                    </span>
                  </div>
                  <p className="text-[#9CA3AF] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-[#38BDF8] rounded-full"></div>
                    <span className="text-sm font-semibold text-[#38BDF8] uppercase tracking-wider">
                      Solution
                    </span>
                  </div>
                  <p className="text-[#9CA3AF] leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4 text-[#38BDF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-sm font-semibold text-[#38BDF8] uppercase tracking-wider">
                      Tech Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 glass-card rounded-lg text-[#E5E7EB] text-sm border border-[#38BDF8]/20 hover:border-[#38BDF8]/50 hover:text-[#38BDF8] transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architecture */}
                <div className="pt-4 border-t border-[#1F2937]">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wider">
                      Architecture
                    </span>
                  </div>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    {project.architecture}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 frosted-glass p-8 rounded-2xl border border-[#38BDF8]/20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold text-gradient mb-2">
                {projects.length}
              </div>
              <div className="text-sm text-[#9CA3AF] font-semibold uppercase tracking-wider">Projects Deployed</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-gradient mb-2">
                100%
              </div>
              <div className="text-sm text-[#9CA3AF] font-semibold uppercase tracking-wider">Uptime Achieved</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-gradient mb-2">
                ∞
              </div>
              <div className="text-sm text-[#9CA3AF] font-semibold uppercase tracking-wider">Continuous Improvement</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
