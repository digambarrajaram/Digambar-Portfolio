import type { Metadata } from "next";
import { about, experience, skills, certifications } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About | Digambar Rajaram",
  description: "Learn more about Digambar Rajaram's professional background, experience, and expertise in DevOps and Cloud Engineering.",
};

export default function About() {
  return (
    <div className="relative">
      {/* Background Grid */}
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-50" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {/* Page Header */}
        <div className="mb-16">
          <div className="font-mono text-sm text-[#6B7280] mb-2">
            ~/about <span className="text-[#38BDF8]">--verbose</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#E5E7EB] mb-4">
            About
          </h1>
          <div className="w-20 h-1 bg-[#38BDF8]"></div>
        </div>

        {/* Introduction - Terminal Output Style */}
        <section className="mb-20">
          <div className="p-6 bg-[#000]/40 border border-[#1F2937] font-mono text-sm">
            <div className="text-[#10B981] mb-4">
              <span className="text-[#6B7280]">~$</span> cat introduction.txt
            </div>
            <div className="space-y-4 text-[#9CA3AF] leading-relaxed pl-4">
              {about.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Experience - Timeline */}
        <section className="mb-20">
          <div className="mb-10">
            <span className="mono-label">EXPERIENCE.LOG</span>
            <h2 className="text-4xl font-bold text-[#E5E7EB] mt-2">
              Work History
            </h2>
          </div>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-[#38BDF8]">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#38BDF8] rounded-full border-4 border-[#0B0F14]"></div>
                
                {/* Job Card */}
                <div className="bg-[#111827] border border-[#1F2937] p-6 hover:border-[#38BDF8] transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#E5E7EB] mb-1">
                        {job.title}
                      </h3>
                      <div className="font-mono text-sm text-[#38BDF8]">
                        {job.company}
                      </div>
                    </div>
                    <span className="px-4 py-1.5 bg-[#1F2937] border border-[#374151] text-[#9CA3AF] font-mono text-xs rounded">
                      {job.period}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    {job.responsibilities.map((item, idx) => (
                      <div key={idx} className="flex gap-3 text-[#9CA3AF]">
                        <span className="text-[#38BDF8] mt-1">&gt;</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Expertise - Grid Layout */}
        <section className="mb-20">
          <div className="mb-10">
            <span className="mono-label">SKILLS.JSON</span>
            <h2 className="text-4xl font-bold text-[#E5E7EB] mt-2">
              Technical Skills
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-[#111827] border border-[#1F2937] p-6 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#38BDF8]">{"{"}</span>
                    <h3 className="font-mono text-lg font-bold text-[#E5E7EB]">
                      {category}
                    </h3>
                    <span className="text-[#38BDF8]">{"}"}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {skillList.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[#9CA3AF]">
                        <span className="text-[#10B981] font-mono text-sm">✓</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications - Badge Style */}
        <section>
          <div className="mb-10">
            <span className="mono-label">CERTIFICATIONS.MD</span>
            <h2 className="text-4xl font-bold text-[#E5E7EB] mt-2">
              Certifications
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/10 to-[#0EA5E9]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-6 bg-[#111827] border border-[#1F2937] group-hover:border-[#38BDF8] transition-colors h-full flex flex-col">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center font-mono text-[#38BDF8] text-xl font-bold">
                      ✓
                    </div>
                  </div>
                  <h3 className="font-bold text-[#E5E7EB] mb-3 text-lg leading-snug">
                    {cert.name}
                  </h3>
                  <div className="mt-auto">
                    <p className="text-sm text-[#9CA3AF] mb-1">{cert.issuer}</p>
                    <p className="font-mono text-xs text-[#6B7280]">{cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
