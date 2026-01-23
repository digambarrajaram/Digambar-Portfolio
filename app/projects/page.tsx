import type { Metadata } from "next";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects | Digambar Rajaram",
  description: "Explore DevOps and Cloud Engineering projects by Digambar Rajaram, featuring AWS infrastructure, CI/CD pipelines, and containerization solutions.",
};

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#E5E7EB] mb-4">
          Projects
        </h1>
        <p className="text-xl text-[#9CA3AF]">
          DevOps and Cloud Engineering solutions I&apos;ve built
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111827] border border-[#1F2937] rounded-lg p-8 hover:border-[#38BDF8]/50 transition-all duration-200"
          >
            <h2 className="text-2xl font-bold text-[#E5E7EB] mb-6">
              {project.title}
            </h2>

            <div className="space-y-6">
              {/* Problem Statement */}
              <div>
                <h3 className="text-sm font-semibold text-[#38BDF8] uppercase tracking-wide mb-2">
                  Problem
                </h3>
                <p className="text-[#9CA3AF]">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-sm font-semibold text-[#38BDF8] uppercase tracking-wide mb-2">
                  Solution
                </h3>
                <p className="text-[#9CA3AF]">
                  {project.solution}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-semibold text-[#38BDF8] uppercase tracking-wide mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-[#1F2937] text-[#E5E7EB] text-sm rounded-md border border-[#374151]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture */}
              <div>
                <h3 className="text-sm font-semibold text-[#38BDF8] uppercase tracking-wide mb-2">
                  Architecture Focus
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
