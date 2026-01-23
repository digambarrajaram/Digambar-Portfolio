import type { Metadata } from "next";
import { personalInfo, socialLinks } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact | Digambar Rajaram",
  description: "Get in touch with Digambar Rajaram for DevOps and Cloud Engineering opportunities, collaborations, or inquiries.",
};

export default function Contact() {
  return (
    <div className="relative">
      {/* Background Gradient */}
      <div className="fixed inset-0 gradient-bg pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {/* Page Header */}
        <div className="mb-16">
          <span className="text-sm font-semibold text-[#38BDF8] tracking-wide uppercase">Let&apos;s Connect</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-gradient mt-4 mb-3">
            Get in Touch
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl">
            I&apos;m always open to discussing new opportunities, collaborations, or interesting DevOps challenges.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] rounded-full mt-6"></div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {/* Email */}
          <div className="group glass-card elevated-card p-8 rounded-2xl border border-[#1F2937] hover:border-[#38BDF8]/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#38BDF8]/20 to-[#0EA5E9]/10 border border-[#38BDF8]/30 flex items-center justify-center mr-5 glow-sm">
                <svg
                  className="w-8 h-8 text-[#38BDF8]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#E5E7EB] mb-1">
                  Email
                </h2>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[#38BDF8] hover:text-[#0EA5E9] transition-colors text-sm"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <p className="text-sm text-[#9CA3AF]">
              Best for professional inquiries and project discussions
            </p>
          </div>

          {/* LinkedIn */}
          <div className="group glass-card elevated-card p-8 rounded-2xl border border-[#1F2937] hover:border-[#0EA5E9]/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0EA5E9]/20 to-[#38BDF8]/10 border border-[#0EA5E9]/30 flex items-center justify-center mr-5 glow-sm">
                <svg
                  className="w-8 h-8 text-[#0EA5E9]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#E5E7EB] mb-1">
                  LinkedIn
                </h2>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0EA5E9] hover:text-[#38BDF8] transition-colors text-sm inline-flex items-center gap-1"
                >
                  View Profile
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <p className="text-sm text-[#9CA3AF]">
              Connect with me professionally
            </p>
          </div>

          {/* GitHub */}
          <div className="group glass-card elevated-card p-8 rounded-2xl border border-[#1F2937] hover:border-[#10B981]/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#10B981]/20 to-[#059669]/10 border border-[#10B981]/30 flex items-center justify-center mr-5 glow-sm">
                <svg
                  className="w-8 h-8 text-[#10B981]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#E5E7EB] mb-1">
                  GitHub
                </h2>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#10B981] hover:text-[#38BDF8] transition-colors text-sm inline-flex items-center gap-1"
                >
                  View Repos
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <p className="text-sm text-[#9CA3AF]">
              Check out my open source projects
            </p>
          </div>

          {/* Location */}
          <div className="group glass-card elevated-card p-8 rounded-2xl border border-[#1F2937] hover:border-[#F59E0B]/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#F59E0B]/20 to-[#D97706]/10 border border-[#F59E0B]/30 flex items-center justify-center mr-5 glow-sm">
                <svg
                  className="w-8 h-8 text-[#F59E0B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#E5E7EB] mb-1">
                  Location
                </h2>
                <p className="text-[#F59E0B] text-sm font-medium">
                  {personalInfo.location}
                </p>
              </div>
            </div>
            <p className="text-sm text-[#9CA3AF]">
              Open to remote opportunities worldwide
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="frosted-glass p-12 rounded-2xl border border-[#38BDF8]/30 text-center mb-12">
          <h2 className="text-4xl font-bold text-[#E5E7EB] mb-4">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-[#9CA3AF] mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you have a project in mind, need DevOps expertise, or just want to connect, 
            I&apos;d love to hear from you. Send me an email and I&apos;ll get back to you ASAP.
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center px-10 py-4 text-sm font-semibold text-[#0B0F14] bg-[#38BDF8] hover:bg-[#0EA5E9] rounded-lg transition-all duration-300 glow-md hover:glow-lg"
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Send an Email
          </a>
        </div>

        {/* Info Note */}
        <div className="glass-card p-6 rounded-xl border border-[#38BDF8]/20">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#38BDF8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-[#38BDF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-[#9CA3AF]">
              <span className="text-[#38BDF8] font-semibold">Configuration:</span> Update contact info in{" "}
              <code className="px-2 py-1 glass-card text-[#10B981] border border-[#38BDF8]/20 rounded">
                data/portfolio.ts
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
