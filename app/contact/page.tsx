import type { Metadata } from "next";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { generateContactMetadata } from "@/lib/metadata";
import { ContactCard, EmailIcon, LocationIcon, LinkedInIcon, GitHubIcon } from "@/components/ContactCard";

export const metadata: Metadata = generateContactMetadata();

export default function Contact() {
  return (
    <section className="pt-3 pb-20">
      <div className="site-container space-y-14">

        {/* ================= HEADER ================= */}
        <div className="text-center">
          <span className="inline-block mb-6 px-4 py-1 text-xs font-bold tracking-widest uppercase
            rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            Let's Connect
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-50 mb-6">
            Get in Touch
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-400">
            I'm always open to discussing new opportunities, collaborations,
            or interesting DevOps challenges.
          </p>
        </div>

        {/* ================= CONTACT CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Email */}
          <ContactCard
            title="Email"
            description="Best for professional inquiries"
            value={personalInfo.email}
            href={`mailto:${personalInfo.email}`}
            icon={<EmailIcon />}
            showCopy
          />

          {/* LinkedIn */}
          <ContactCard
            title="LinkedIn"
            description="Connect with me professionally"
            value="View Profile"
            href={socialLinks.linkedin}
            icon={<LinkedInIcon />}
            external
          />

          {/* GitHub */}
          <ContactCard
            title="GitHub"
            description="Explore my open-source work"
            value="View Repositories"
            href={socialLinks.github}
            icon={<GitHubIcon />}
            external
          />

          {/* Location */}
          <ContactCard
            title="Location"
            description="Open to remote opportunities"
            value={personalInfo.location}
            icon={<LocationIcon />}
          />
        </div>

        {/* ================= CTA ================= */}
        <div className="rounded-3xl border border-slate-700/50
          bg-slate-800/50 backdrop-blur-xl p-14 text-center">

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-6">
            Let's Build Something Great
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-slate-400 mb-12">
            Whether you have a project in mind or just want to connect,
            I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center px-10 py-4
                text-base font-semibold text-white rounded-xl
                bg-gradient-to-r from-emerald-500 to-emerald-600
                hover:from-emerald-400 hover:to-emerald-600
                shadow-lg shadow-emerald-500/30 transition-all"
            >
              Send an Email
            </a>

            <a
              href="/resume"
              className="inline-flex items-center justify-center px-10 py-4
                text-base font-semibold text-emerald-300 rounded-xl
                border border-emerald-500/30 hover:bg-emerald-500/10 transition-all"
            >
              View Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
