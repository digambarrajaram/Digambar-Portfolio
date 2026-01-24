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
          <span className="text-sm font-semibold text-[#388BFD] tracking-wide uppercase">Portfolio</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#E6EDF3] mt-4 mb-3">
            Featured Projects
          </h1>
          <p className="text-xl text-[#9198A1] max-w-2xl">
            DevOps and Cloud Engineering solutions I&apos;ve architected and deployed
          </p>
          <div className="w-20 h-1.5 bg-[#388BFD] rounded-full mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-card elevated-card p-8 rounded-2xl border border-[#21262D] hover:border-[#30363D] transition-all duration-200"
            >
              {/* Project Number Badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#388BFD] font-bold text-white mb-6">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Project Title */}
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-6">
                {project.title}
              </h2>

              <div className="space-y-6">
                {/* Description, Highlights, Architecture, Tech Stack */}
                {project.description && (
                  <div>
                    <span className="text-sm font-semibold text-[#388BFD] uppercase tracking-wider">Description</span>
                    <p className="text-[#9198A1] leading-relaxed">{project.description}</p>
                  </div>
                )}
                {project.highlights && (
                  <div>
                    <span className="text-sm font-semibold text-[#388BFD] uppercase tracking-wider">Highlights</span>
                    <ul className="list-disc ml-6 text-[#9198A1]">
                      {project.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.architecture && (
                  <div>
                    <span className="text-sm font-semibold text-[#388BFD] uppercase tracking-wider">Architecture</span>
                    <ul className="list-disc ml-6 text-[#9198A1]">
                      {project.architecture.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <span className="text-sm font-semibold text-[#388BFD] uppercase tracking-wider">Tech Stack</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block px-3 py-1 text-xs font-medium bg-[#21262D] text-[#388BFD] rounded-full border border-[#30363D]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                          {project.description && (
                            <div>
                              <span className="text-sm font-semibold text-[#388BFD] uppercase tracking-wider">Description</span>
                              <p className="text-[#9198A1] leading-relaxed">{project.description}</p>
                            </div>
                          )}
                          {project.highlights && (
                            <div>
                              <span className="text-sm font-semibold text-[#388BFD] uppercase tracking-wider">Highlights</span>
                              <ul className="list-disc ml-6 text-[#9198A1]">
                                {project.highlights.map((h, i) => (
                                  <li key={i}>{h}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {project.architecture && (
                            <div>
                              <span className="text-sm font-semibold text-[#388BFD] uppercase tracking-wider">Architecture</span>
                              <ul className="list-disc ml-6 text-[#9198A1]">
                                {project.architecture.map((a, i) => (
                                  <li key={i}>{a}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <div>
                            <span className="text-sm font-semibold text-[#388BFD] uppercase tracking-wider">Tech Stack</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="inline-block px-3 py-1 text-xs font-medium bg-[#21262D] text-[#388BFD] rounded-full border border-[#30363D]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                        </div>
                      </div>
                    ))}
        </div>
      </div>
    </div>
  );
}
