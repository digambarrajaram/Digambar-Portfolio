'use client';

import { projects } from '@/data/portfolio';

export default function ProjectsClient() {
  return (
    <section className="pt-5 pb-15">
      <div className="site-container">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <span className="inline-block mb-6 px-4 py-1 text-xs font-bold tracking-widest uppercase
            rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            Portfolio
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-50 mb-6">
            My Projects
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-400">
            <span className="font-bold text-white">
                          Selected projects demonstrating real-world DevOps, Cloud, and automation expertise
                          </span>{' '}
          </p>
        </div>

        {/* ================= PROJECT GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl border border-slate-700/50
                bg-gradient-to-br from-slate-800/70 via-slate-800/50 to-slate-900/70
                backdrop-blur-xl p-7
                shadow-[0_20px_40px_rgba(0,0,0,0.35)]
                hover:-translate-y-2 hover:shadow-[0_35px_70px_rgba(0,0,0,0.55)]
                transition-all duration-300 overflow-hidden"
            >
              {/* Glow Accent */}
              <div
                aria-hidden
                className="absolute -top-12 -right-12 h-32 w-32 rounded-full
                  bg-emerald-500/15 blur-3xl opacity-0
                  group-hover:opacity-100 transition-opacity"
              />

              {/* Category */}
              <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold rounded-full
                bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Divider */}
              <div className="h-px w-full bg-slate-700/50 mb-4" />

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-md
                      bg-slate-900/70 border border-slate-700
                      text-slate-400 group-hover:text-slate-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
