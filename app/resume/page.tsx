import type { Metadata } from "next";
import { about, skills, stats } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Resume | Digambar Rajaram",
  description:
    "Download the resume of Digambar Rajaram - DevOps & Cloud Engineer. Experience with AWS, Terraform, Kubernetes, and CI/CD automation.",
};

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
              Download Resume
            </h2>

            <p className="text-slate-400 mb-8">
              Complete resume in PDF format
            </p>

            <a
              href="/Resume.pdf"
              download
              className="inline-flex items-center px-8 py-4 text-sm font-semibold
                text-white rounded-xl
                bg-gradient-to-r from-emerald-500 to-emerald-600
                hover:from-emerald-400 hover:to-emerald-600
                shadow-lg shadow-emerald-500/30 transition-all"
            >
              Download PDF
            </a>
          </div>
        </section>

        {/* ================= SUMMARY ================= */}
        <section className="max-w-4xl mx-auto">
          <SectionHeader label="Overview" title="Professional Summary" />
          <div className="rounded-2xl border border-slate-700/50
            bg-slate-800/50 backdrop-blur-xl p-8">
            <p className="text-lg leading-relaxed text-slate-300">
              {about.headline}
            </p>
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
