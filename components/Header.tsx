import Link from 'next/link';
import { personalInfo } from '@/data/portfolio';

export default function Header() {
  return (
    <header className="border-b-2 border-[#1F2937] bg-[#0B0F14]/95 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand - Terminal Style */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#38BDF8]/10 border-2 border-[#38BDF8] flex items-center justify-center group-hover:bg-[#38BDF8]/20 transition-colors">
              <span className="font-mono font-bold text-[#38BDF8]">DR</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[#6B7280] text-sm">~$</span>
                <h1 className="text-lg font-bold text-[#E5E7EB] group-hover:text-[#38BDF8] transition-colors font-mono">
                  {personalInfo.name.split(' ')[0]}
                </h1>
              </div>
              <p className="text-xs text-[#9CA3AF] font-mono">
                [{personalInfo.role}]
              </p>
            </div>
          </Link>

          {/* Navigation - Terminal Commands */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-[#9CA3AF] hover:text-[#38BDF8] hover:bg-[#1F2937] transition-all text-sm font-mono"
            >
              <span className="text-[#6B7280]">$ </span>home
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-[#9CA3AF] hover:text-[#38BDF8] hover:bg-[#1F2937] transition-all text-sm font-mono"
            >
              <span className="text-[#6B7280]">$ </span>about
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 text-[#9CA3AF] hover:text-[#38BDF8] hover:bg-[#1F2937] transition-all text-sm font-mono"
            >
              <span className="text-[#6B7280]">$ </span>projects
            </Link>
            <Link
              href="/resume"
              className="px-4 py-2 text-[#9CA3AF] hover:text-[#38BDF8] hover:bg-[#1F2937] transition-all text-sm font-mono"
            >
              <span className="text-[#6B7280]">$ </span>resume
            </Link>
            <Link
              href="/contact"
              className="ml-2 px-5 py-2 bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#0B0F14] text-sm font-mono font-medium transition-colors"
            >
              <span>&gt; </span>contact
            </Link>
          </nav>

          {/* Mobile Menu Button - Terminal Style */}
          <button
            className="md:hidden p-2 border border-[#1F2937] text-[#9CA3AF] hover:text-[#38BDF8] hover:border-[#38BDF8] transition-colors"
            aria-label="Menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Status Bar - Bottom Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent"></div>
    </header>
  );
}
