import type { Metadata } from "next";
import { personalInfo, socialLinks } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact | Digambar Rajaram",
  description: "Get in touch with Digambar Rajaram for DevOps and Cloud Engineering opportunities, collaborations, or inquiries.",
};

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#E5E7EB] mb-4">
        Get in Touch
      </h1>
      <p className="text-xl text-[#9CA3AF] mb-16">
        I&apos;m always open to discussing new opportunities, collaborations, or interesting projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Email */}
        <div className="p-8 bg-[#111827] border border-[#1F2937] rounded-lg hover:border-[#38BDF8]/50 transition-all duration-200">
          <div className="flex items-center mb-4">
            <div className="w-14 h-14 bg-[#1F2937] rounded-full flex items-center justify-center mr-4">
              <svg
                className="w-7 h-7 text-[#38BDF8]"
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
              <h2 className="text-lg font-semibold text-[#E5E7EB]">
                Email
              </h2>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-[#38BDF8] hover:text-[#0EA5E9] transition-colors"
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
        <div className="p-8 bg-[#111827] border border-[#1F2937] rounded-lg hover:border-[#38BDF8]/50 transition-all duration-200">
          <div className="flex items-center mb-4">
            <div className="w-14 h-14 bg-[#1F2937] rounded-full flex items-center justify-center mr-4">
              <svg
                className="w-7 h-7 text-[#38BDF8]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#E5E7EB]">
                LinkedIn
              </h2>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#38BDF8] hover:text-[#0EA5E9] transition-colors text-sm"
              >
                View Profile
              </a>
            </div>
          </div>
          <p className="text-sm text-[#9CA3AF]">
            Connect with me professionally
          </p>
        </div>

        {/* GitHub */}
        <div className="p-8 bg-[#111827] border border-[#1F2937] rounded-lg hover:border-[#38BDF8]/50 transition-all duration-200">
          <div className="flex items-center mb-4">
            <div className="w-14 h-14 bg-[#1F2937] rounded-full flex items-center justify-center mr-4">
              <svg
                className="w-7 h-7 text-[#38BDF8]"
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
              <h2 className="text-lg font-semibold text-[#E5E7EB]">
                GitHub
              </h2>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#38BDF8] hover:text-[#0EA5E9] transition-colors text-sm"
              >
                View Repositories
              </a>
            </div>
          </div>
          <p className="text-sm text-[#9CA3AF]">
            Check out my open source projects
          </p>
        </div>

        {/* Location */}
        <div className="p-8 bg-[#111827] border border-[#1F2937] rounded-lg hover:border-[#38BDF8]/50 transition-all duration-200">
          <div className="flex items-center mb-4">
            <div className="w-14 h-14 bg-[#1F2937] rounded-full flex items-center justify-center mr-4">
              <svg
                className="w-7 h-7 text-[#38BDF8]"
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
              <h2 className="text-lg font-semibold text-[#E5E7EB]">
                Location
              </h2>
              <p className="text-[#9CA3AF]">
                {personalInfo.location}
              </p>
            </div>
          </div>
          <p className="text-sm text-[#9CA3AF]">
            Open to remote opportunities
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold text-[#E5E7EB] mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-[#9CA3AF] mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
          Whether you have a project in mind, need DevOps expertise, or just want to connect, 
          I&apos;d love to hear from you. Send me an email and I&apos;ll get back to you as soon as possible.
        </p>
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center px-8 py-3.5 text-base font-medium rounded-lg text-[#0B0F14] bg-[#38BDF8] hover:bg-[#0EA5E9] transition-all duration-200 shadow-lg shadow-[#38BDF8]/20"
        >
          <svg
            className="w-5 h-5 mr-2"
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
          Send Email
        </a>
      </div>

      {/* Update Instructions */}
      <div className="mt-12 p-6 bg-[#111827] border border-[#38BDF8]/30 rounded-lg">
        <p className="text-sm text-[#9CA3AF]">
          <strong className="text-[#38BDF8]">Tip:</strong> Update your contact information in{" "}
          <code className="px-2 py-1 bg-[#1F2937] text-[#38BDF8] rounded font-mono text-xs">
            data/portfolio.ts
          </code>
        </p>
      </div>
    </div>
  );
}
