import type { Metadata } from "next";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects | Digambar Rajaram",
  description: "Explore DevOps and Cloud Engineering projects by Digambar Rajaram, featuring AWS infrastructure, CI/CD pipelines, and containerization solutions.",
};

export default function Projects() {
  return (
    <div className="relative">
      {/* Background Grid */}
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {/* Page Header */}
        <div className="mb-16">
          <div className="font-mono text-sm text-[#6B7280] mb-2">
            ~/projects <span className="text-[#38BDF8]">--list</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#E5E7EB] mb-3">
            Projects
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl">
            DevOps and Cloud Engineering solutions I&apos;ve architected and deployed
          </p>
          <div className="w-20 h-1 bg-[#38BDF8] mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#111827] border border-[#1F2937] hover:border-[#38BDF8] transition-all duration-300"
            >
              {/* Project Number */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#0B0F14] border-2 border-[#38BDF8] flex items-center justify-center font-mono font-bold text-[#38BDF8]">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="p-8 pt-10">
                {/* Project Title */}
                <h2 className="text-2xl font-bold text-[#E5E7EB] mb-6 flex items-center gap-3">
                  <span className="text-[#38BDF8] font-mono">&gt;</span>
                  {project.title}
                </h2>

                <div className="space-y-6">
                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-[#EF4444] uppercase tracking-wider">
                        [ PROBLEM ]
                      </span>
                    </div>
                    <p className="text-[#9CA3AF] leading-relaxed pl-4 border-l-2 border-[#EF4444]/30">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-[#10B981] uppercase tracking-wider">
                        [ SOLUTION ]
                      </span>
                    </div>
                    <p className="text-[#9CA3AF] leading-relaxed pl-4 border-l-2 border-[#10B981]/30">
                      {project.solution}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <div className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider mb-3">
                      <span className="text-[#6B7280]">$</span> tech_stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-[#1F2937] border border-[#374151] text-[#E5E7EB] text-sm font-mono hover:border-[#38BDF8] hover:text-[#38BDF8] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Architecture */}
                  <div className="pt-4 border-t border-[#1F2937]">
                    <div className="font-mono text-xs text-[#F59E0B] uppercase tracking-wider mb-2">
                      <span className="text-[#6B7280]">{"//"}</span> Architecture
                    </div>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Corner Indicator */}
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#38BDF8]/30 group-hover:border-[#38BDF8] transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-16 p-8 bg-[#111827]/50 border border-[#1F2937]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-[#38BDF8] font-mono mb-2">
                {projects.length}
              </div>
              <div className="text-sm text-[#9CA3AF] font-mono">PROJECTS DEPLOYED</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#10B981] font-mono mb-2">
                100%
              </div>
              <div className="text-sm text-[#9CA3AF] font-mono">UPTIME ACHIEVED</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#F59E0B] font-mono mb-2">
                ∞
              </div>
              <div className="text-sm text-[#9CA3AF] font-mono">ITERATIONS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
