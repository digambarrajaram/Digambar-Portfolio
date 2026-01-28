'use client';

import { experience, skills, certifications } from '@/data/portfolio';

export default function AboutDetails() {
  return (
    <div className="space-y-24">

      {/* ================= EXPERIENCE ================= */}
<section className="">
  <SectionHeader label="Career Path" title="Professional Experience" />

  <div className="relative space-y-12">
    {/* Vertical timeline line */}
    <div className="absolute left-5 top-0 bottom-0 w-px bg-emerald-500/30 hidden sm:block" />

    {experience.map((exp, index) => (
      <div key={index} className="relative pl-0 sm:pl-16">
        {/* Timeline dot */}
        <div className="hidden sm:flex absolute left-0 top-6 h-10 w-10 items-center justify-center rounded-xl
          bg-emerald-500/20 border border-emerald-500/40">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>

        {/* Card */}
        <div className="relative rounded-2xl border border-slate-700/50
          bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80
          backdrop-blur-xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-50">
                {exp.role}
              </h3>
              <p className="text-emerald-400 font-medium">
                {exp.company}
              </p>
              <p className="text-slate-400 text-sm">
                {exp.location}
              </p>
            </div>

            <div className="lg:text-right">
              <span className="inline-block px-4 py-1 text-sm font-medium
                rounded-full bg-slate-700/40 text-slate-300">
                {exp.duration}
              </span>
            </div>
          </div>

          {/* Responsibilities */}
          {exp.responsibilities?.length > 0 && (
            <div className="mt-6 pt-5 border-t border-slate-700/40">
              <p className="text-emerald-400 font-medium">
                {exp.domain}
              </p>
              <h4 className="text-sm uppercase tracking-wide text-slate-400 mb-3 font-semibold">
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start text-slate-300 leading-relaxed">
                    {/* mt-[6px] for the star ensures it aligns with the middle of the first word */}
                    <span className="text-emerald-500 mr-3 mt-[6px] shrink-0 select-none text-[10px] leading-none">
                      ★
                    </span>
                    <span className="flex-1 text-sm sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Achievements */}
          {exp.achievements?.length > 0 && (
            <div className="mt-6 pt-5 border-t border-slate-700/40">
              <h4 className="text-sm uppercase tracking-wide text-emerald-400 mb-3 font-semibold">
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start text-slate-300 leading-relaxed">
                    {/* mt-[6px] for the star ensures it aligns with the middle of the first word */}
                    <span className="text-emerald-500 mr-3 mt-[6px] shrink-0 select-none text-[10px] leading-none">
                      ★
                    </span>
                    <span className="flex-1 text-sm sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</section>

      {/* ================= SKILLS ================= */}
      <section className="">
        <SectionHeader label="Expertise" title="Technical Skills" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="rounded-2xl border border-slate-700/50
                bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80
                backdrop-blur-xl p-6"
            >
              <h3 className="text-xl font-bold text-slate-50 mb-6 capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <ul className="space-y-3">
                {skillList.map((skill, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <span className="text-emerald-400 mr-3">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section>
        <SectionHeader label="Achievements" title="Certifications" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-700/60
                bg-slate-800/50 backdrop-blur-xl p-6"
            >
              <h3 className="text-lg font-semibold text-slate-50">{cert.name}</h3>
              <p className="text-emerald-400 text-sm font-medium">{cert.provider}</p>
              <p className="text-slate-400 text-sm">{cert.duration}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

/* ===== helpers ===== */

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="text-center mb-12">
      <span className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest uppercase
        rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
        {label}
      </span>
      <h2 className="text-4xl font-extrabold text-slate-50 sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}


