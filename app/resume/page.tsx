import type { Metadata } from "next";
import { skills, stats } from "@/data/portfolio";
import { generateResumeMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateResumeMetadata();

export default function Resume() {
  return (
    <section className="pt-5 pb-20">
      <div className="site-container space-y-14">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <span className="inline-block mb-6 px-4 py-1 text-xs font-bold tracking-widest uppercase
            rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            Career Overview
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-50 mb-6">
            Resume
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            <span className="font-bold text-white">
            A concise overview of my professional experience, skills, and impact
             </span>{' '}
          </p>
        </div>

        {/* ================= DOWNLOAD ================= */}
        <section className="text-center">
          <div className="max-w-3xl mx-auto rounded-3xl border border-slate-700/50
            bg-slate-800/50 backdrop-blur-xl p-12">

            <div className="inline-flex items-center justify-center w-20 h-20 mb-6
              rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-slate-100 mb-3">
              My Resume
            </h2>

            <p className="text-slate-400 mb-8">
              View or download my complete resume
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold
                  text-white rounded-xl
                  bg-gradient-to-r from-emerald-500 to-emerald-600
                  hover:from-emerald-400 hover:to-emerald-600
                  shadow-lg shadow-emerald-500/30 transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Resume
              </a>

              <a
                href="/Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold
                  text-emerald-300 rounded-xl border border-emerald-500/30
                  hover:bg-emerald-500/10 transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </section>
        {/* ================= SKILLS ================= */}
        <section>
          <SectionHeader label="Expertise" title="Core Competencies" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.values(skills).flat().map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-xl
                  border border-slate-700/40 bg-slate-800/40"
              >
                <span className="text-emerald-400">✓</span>
                <span className="text-slate-200">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= METRICS ================= */}
        <section>
          <SectionHeader label="Impact" title="Experience Metrics" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Metric label="Years Experience" value={stats.experienceYears} />
            <Metric label="Projects Delivered" value={stats.projects} />
            <Metric label="Certifications" value={stats.certifications} />
          </div>
        </section>

      </div>
    </section>
  );
}

/* ================= HELPERS ================= */

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="text-center mb-10">
      <span className="inline-block mb-3 px-4 py-1 text-xs font-bold tracking-widest uppercase
        rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">
        {title}
      </h2>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-slate-700/50
      bg-slate-800/50 backdrop-blur-xl p-8 text-center">
      <div className="text-5xl font-bold text-slate-100 mb-2">
        {value}
      </div>
      <div className="text-sm uppercase tracking-wide text-slate-400 font-semibold">
        {label}
      </div>
    </div>
  );
}
