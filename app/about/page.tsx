import type { Metadata } from "next";
import { about, experience, skills, certifications } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About | Digambar Rajaram",
  description: "Learn more about Digambar Rajaram's professional background, experience, and expertise in DevOps and Cloud Engineering.",
};

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#E5E7EB] mb-12">
        About Me
      </h1>

      {/* Introduction */}
      <section className="mb-16">
        <div className="space-y-4 text-[#9CA3AF] text-lg leading-relaxed">
          {about.intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#E5E7EB] mb-8">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="border-l-2 border-[#38BDF8] pl-6 pb-8">
              <h3 className="text-xl font-semibold text-[#E5E7EB] mb-1">
                {job.title}
              </h3>
              <p className="text-[#9CA3AF] mb-4 text-sm">
                {job.company} • {job.period}
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#9CA3AF]">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#E5E7EB] mb-8">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index} className="bg-[#111827] border border-[#1F2937] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#E5E7EB] mb-4">
                {category}
              </h3>
              <ul className="space-y-2 text-[#9CA3AF]">
                {skillList.map((skill, idx) => (
                  <li key={idx}>• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-3xl font-bold text-[#E5E7EB] mb-8">
          Certifications
        </h2>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="p-6 bg-[#111827] border border-[#1F2937] rounded-lg hover:border-[#38BDF8]/50 transition-colors"
            >
              <p className="font-semibold text-[#E5E7EB] mb-1">
                {cert.name}
              </p>
              <p className="text-sm text-[#9CA3AF]">{cert.issuer} • {cert.year}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
