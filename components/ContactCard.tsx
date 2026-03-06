"use client";

import { useState } from "react";

interface ContactCardProps {
  title: string;
  description: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
  external?: boolean;
  showCopy?: boolean;
}

export function ContactCard({
  title,
  description,
  value,
  href,
  icon,
  external,
  showCopy,
}: ContactCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-700/50
      bg-slate-800/50 backdrop-blur-xl p-8">

      <div className="flex items-start gap-5">
        <div className="w-14 h-14 rounded-xl bg-emerald-500/10
          border border-emerald-500/20 flex items-center justify-center shrink-0">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold text-slate-100 mb-1">
            {title}
          </h3>

          {href ? (
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center gap-2 group"
            >
              <span className="truncate">{value}</span>
            </a>
          ) : (
            <p className="text-emerald-400 text-sm font-medium">
              {value}
            </p>
          )}

          {showCopy && (
            <button
              onClick={handleCopy}
              className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium
                rounded-lg border border-slate-600/50 bg-slate-700/30 text-slate-300
                hover:bg-slate-700/50 hover:border-slate-500/50 transition-all"
            >
              {copied ? (
                <>
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy
                </>
              )}
            </button>
          )}

          <p className="text-sm text-slate-400 mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ================= ICONS ================= */

export function EmailIcon() {
  return (
    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export function LocationIcon() {
  return (
    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM7.119 20.452H3.555V9h3.564v11.452z" />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
