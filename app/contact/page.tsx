import type { Metadata } from "next";
import { personalInfo, socialLinks } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact | Digambar Rajaram",
  description: "Get in touch with Digambar Rajaram for DevOps and Cloud Engineering opportunities, collaborations, or inquiries.",
};

export default function Contact() {
  return (
    <div className="relative">
      {/* Background Grid */}
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-50" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {/* Page Header */}
        <div className="mb-16">
          <div className="font-mono text-sm text-[#6B7280] mb-2">
            ~/contact <span className="text-[#38BDF8]">--open-channels</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#E5E7EB] mb-3">
            Get in Touch
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl">
            I&apos;m always open to discussing new opportunities, collaborations, or interesting DevOps challenges.
          </p>
          <div className="w-20 h-1 bg-[#38BDF8] mt-6"></div>
        </div>

        {/* Contact Methods - Terminal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {/* Email */}
          <div className="group relative bg-[#111827] border-2 border-[#1F2937] hover:border-[#38BDF8] transition-all duration-300">
            <div className="absolute top-3 left-3 font-mono text-xs text-[#6B7280]">
              [primary]
            </div>
            <div className="p-8 pt-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#38BDF8]/10 border-2 border-[#38BDF8] flex items-center justify-center mr-5">
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
                  <h2 className="text-xl font-bold text-[#E5E7EB] mb-1 font-mono">
                    EMAIL
                  </h2>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-[#38BDF8] hover:text-[#0EA5E9] transition-colors font-mono text-sm"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <p className="text-sm text-[#9CA3AF] border-l-2 border-[#38BDF8]/30 pl-4">
                <span className="text-[#6B7280]">{"//"}</span> Best for professional inquiries and project discussions
              </p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="group relative bg-[#111827] border-2 border-[#1F2937] hover:border-[#0EA5E9] transition-all duration-300">
            <div className="absolute top-3 left-3 font-mono text-xs text-[#6B7280]">
              [professional]
            </div>
            <div className="p-8 pt-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#0EA5E9]/10 border-2 border-[#0EA5E9] flex items-center justify-center mr-5">
                  <svg
                    className="w-8 h-8 text-[#0EA5E9]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#E5E7EB] mb-1 font-mono">
                    LINKEDIN
                  </h2>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0EA5E9] hover:text-[#38BDF8] transition-colors font-mono text-sm"
                  >
                    View Profile →
                  </a>
                </div>
              </div>
              <p className="text-sm text-[#9CA3AF] border-l-2 border-[#0EA5E9]/30 pl-4">
                <span className="text-[#6B7280]">{"//"}</span> Connect with me professionally
              </p>
            </div>
          </div>

          {/* GitHub */}
          <div className="group relative bg-[#111827] border-2 border-[#1F2937] hover:border-[#10B981] transition-all duration-300">
            <div className="absolute top-3 left-3 font-mono text-xs text-[#6B7280]">
              [code]
            </div>
            <div className="p-8 pt-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#10B981]/10 border-2 border-[#10B981] flex items-center justify-center mr-5">
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
                  <h2 className="text-xl font-bold text-[#E5E7EB] mb-1 font-mono">
                    GITHUB
                  </h2>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#10B981] hover:text-[#38BDF8] transition-colors font-mono text-sm"
                  >
                    View Repos →
                  </a>
                </div>
              </div>
              <p className="text-sm text-[#9CA3AF] border-l-2 border-[#10B981]/30 pl-4">
                <span className="text-[#6B7280]">{"//"}</span> Check out my open source projects
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="group relative bg-[#111827] border-2 border-[#1F2937] hover:border-[#F59E0B] transition-all duration-300">
            <div className="absolute top-3 left-3 font-mono text-xs text-[#6B7280]">
              [location]
            </div>
            <div className="p-8 pt-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#F59E0B]/10 border-2 border-[#F59E0B] flex items-center justify-center mr-5">
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
                  <h2 className="text-xl font-bold text-[#E5E7EB] mb-1 font-mono">
                    LOCATION
                  </h2>
                  <p className="text-[#F59E0B] font-mono text-sm">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#9CA3AF] border-l-2 border-[#F59E0B]/30 pl-4">
                <span className="text-[#6B7280]">{"//"}</span> Open to remote opportunities worldwide
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section - Terminal Window */}
        <div className="relative bg-[#000]/60 border-2 border-[#38BDF8]">
          {/* Terminal Header */}
          <div className="h-8 bg-[#1F2937] border-b border-[#38BDF8] flex items-center px-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
              <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
            </div>
            <span className="font-mono text-xs text-[#9CA3AF] ml-4">collaborate.sh</span>
          </div>

          <div className="p-12 text-center">
            <div className="font-mono text-sm text-[#10B981] mb-6">
              <span className="text-[#6B7280]">~$</span> echo $MESSAGE
            </div>
            <h2 className="text-4xl font-bold text-[#E5E7EB] mb-4">
              Let&apos;s Build Something Great
            </h2>
            <p className="text-[#9CA3AF] mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Whether you have a project in mind, need DevOps expertise, or just want to connect, 
              I&apos;d love to hear from you. Send me an email and I&apos;ll get back to you ASAP.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center px-10 py-4 font-mono text-sm font-medium text-[#0B0F14] bg-[#38BDF8] hover:bg-[#0EA5E9] transition-all duration-200"
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
              $ send-email --to={personalInfo.email}
            </a>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 p-6 bg-[#1F2937]/30 border border-[#38BDF8]/20">
          <div className="flex items-start gap-3">
            <span className="text-[#38BDF8] font-mono mt-1">!</span>
            <p className="text-sm text-[#9CA3AF] font-mono">
              <span className="text-[#38BDF8]">CONFIG:</span> Update contact info in{" "}
              <code className="px-2 py-1 bg-[#000]/40 text-[#10B981] border border-[#1F2937]">
                data/portfolio.ts
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
