import type { Metadata } from "next";
import { personalInfo, socialLinks } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact | Digambar Rajaram",
  description:
    "Get in touch with Digambar Rajaram for DevOps and Cloud Engineering opportunities, collaborations, or inquiries.",
};

export default function Contact() {
  return (
    <section className="pt-3 pb-20">
      <div className="site-container space-y-14">

        {/* ================= HEADER ================= */}
        <div className="text-center">
          <span className="inline-block mb-6 px-4 py-1 text-xs font-bold tracking-widest uppercase
            rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            Let’s Connect
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-50 mb-6">
            Get in Touch
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-400">
            I’m always open to discussing new opportunities, collaborations,
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
            Let’s Build Something Great
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-slate-400 mb-12">
            Whether you have a project in mind or just want to connect,
            I’d love to hear from you.
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

/* ================= CONTACT CARD ================= */

function ContactCard({
  title,
  description,
  value,
  href,
  icon,
  external,
}: {
  title: string;
  description: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-700/50
      bg-slate-800/50 backdrop-blur-xl p-8">

      <div className="flex items-start gap-5">
        <div className="w-14 h-14 rounded-xl bg-emerald-500/10
          border border-emerald-500/20 flex items-center justify-center">
          {icon}
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-100 mb-1">
            {title}
          </h3>

          {href ? (
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-emerald-400 hover:text-emerald-300 text-sm font-medium"
            >
              {value}
            </a>
          ) : (
            <p className="text-emerald-400 text-sm font-medium">
              {value}
            </p>
          )}

          <p className="text-sm text-slate-400 mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ================= ICONS (FIXED) ================= */

function EmailIcon() {
  return (
    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM7.119 20.452H3.555V9h3.564v11.452z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
