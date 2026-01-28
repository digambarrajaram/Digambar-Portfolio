import Link from 'next/link';
import { personalInfo, socialLinks } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        {/* ================= TOP ================= */}
        <div className="grid grid-cols-1 gap-10 sm:gap-14 md:grid-cols-3 lg:gap-16 xl:gap-20 items-center justify-items-center">          
          {/* ---------- Brand ---------- */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
      
              <div className="min-w-0 text-centert">
                <h3 className="text-sm font-bold text-slate-200 leading-tight">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-slate-400">
                  {personalInfo.title}
                </p>
              </div>
            </div>

            <p className="mx-auto max-w-[280px] text-sm text-slate-500 leading-relaxed">
              Building scalable, secure cloud infrastructure with modern
              DevOps and automation practices.
            </p>
          </div>

          {/* ---------- Navigation ---------- */}
          <div className="text-center md:text-center">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Navigation
            </h4>

            <ul className="space-y-3 inline-block md:block text-center">
              {[
                { label: 'About', href: '/about' },
                { label: 'Projects', href: '/projects' },
                { label: 'Resume', href: '/resume' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      text-sm text-slate-400
                      hover:text-emerald-400
                      focus:text-emerald-400
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-emerald-400
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-slate-950
                      transition-colors
                      duration-200
                      inline-block
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Social ---------- */}
          <div className="text-center md:text-center">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Connect
            </h4>

            <div className="flex justify-center md:justify-start gap-4">
              <SocialIcon
                href={socialLinks.github}
                label="GitHub"
                icon={<GitHubIcon />}
              />
              <SocialIcon
                href={socialLinks.linkedin}
                label="LinkedIn"
                icon={<LinkedInIcon />}
              />
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div
          className="
            mt-10 pt-6 border-t border-slate-800
            sm:mt-14 sm:pt-8
            flex flex-col gap-3
            sm:flex-row sm:items-center sm:justify-between
            text-center sm:text-left
            text-xs text-slate-500
          "
        >
          <span>© {year} {personalInfo.name}</span>
          <span>Crafted with precision.</span>
        </div>
      </div>
    </footer>
  );
}

/* ================= SOCIAL ICON BUTTON ================= */

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        w-12 h-12
        rounded-xl
        flex items-center justify-center
        border border-slate-700
        bg-slate-900/60
        text-slate-300
        hover:text-emerald-400
        hover:border-emerald-500/40
        hover:bg-emerald-500/10
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-emerald-400
        focus-visible:ring-offset-2
        focus-visible:ring-offset-slate-950
        transition-all
        duration-200
      "
    >
      {icon}
    </Link>
  );
}

/* ================= ICONS ================= */

function GitHubIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017
        c0 4.425 2.865 8.18 6.839 9.504
        .5.092.682-.217.682-.483
        0-.237-.008-.868-.013-1.703
        -2.782.605-3.369-1.343-3.369-1.343
        -.454-1.158-1.11-1.466-1.11-1.466
        -.908-.62.069-.608.069-.608
        1.003.07 1.531 1.032 1.531 1.032
        .892 1.53 2.341 1.088 2.91.832
        .092-.647.35-1.088.636-1.338
        -2.22-.253-4.555-1.113-4.555-4.951
        0-1.093.39-1.988 1.029-2.688
        -.103-.253-.446-1.272.098-2.65
        0 0 .84-.27 2.75 1.026
        A9.564 9.564 0 0112 6.844
        c.85.004 1.705.115 2.504.337
        1.909-1.296 2.747-1.027 2.747-1.027
        .546 1.379.202 2.398.1 2.651
        .64.7 1.028 1.595 1.028 2.688
        0 3.848-2.339 4.695-4.566 4.943
        .359.309.678.92.678 1.855
        0 1.338-.012 2.419-.012 2.747
        0 .268.18.58.688.482
        A10.019 10.019 0 0022 12.017
        C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569
      c0-1.328-.027-3.037-1.852-3.037
      -1.853 0-2.136 1.445-2.136 2.939
      v5.667H9.351V9h3.414v1.561h.046
      c.477-.9 1.637-1.85 3.37-1.85
      3.601 0 4.267 2.37 4.267 5.455
      v6.286zM5.337 7.433
      c-1.144 0-2.063-.926-2.063-2.065
      0-1.138.92-2.063 2.063-2.063
      1.14 0 2.064.925 2.064 2.063
      0 1.139-.925 2.065-2.064 2.065z
      M7.119 20.452H3.555V9h3.564v11.452z" />
    </svg>
  );
}