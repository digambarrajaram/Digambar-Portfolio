import Link from 'next/link';
import { personalInfo } from '@/data/portfolio';

export default function Header() {
  return (
    <header className="frosted-glass border-b border-[#1F2937] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] flex items-center justify-center group-hover:glow-sm transition-all duration-300">
              <span className="font-bold text-white">DR</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#E5E7EB] group-hover:text-[#38BDF8] transition-colors">
                {personalInfo.name.split(' ')[0]}
              </h1>
              <p className="text-xs text-[#9CA3AF]">
                {personalInfo.role}
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-[#9CA3AF] hover:text-[#38BDF8] rounded-lg hover:bg-[#1F2937]/50 transition-all text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-[#9CA3AF] hover:text-[#38BDF8] rounded-lg hover:bg-[#1F2937]/50 transition-all text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 text-[#9CA3AF] hover:text-[#38BDF8] rounded-lg hover:bg-[#1F2937]/50 transition-all text-sm font-medium"
            >
              Projects
            </Link>
            <Link
              href="/resume"
              className="px-4 py-2 text-[#9CA3AF] hover:text-[#38BDF8] rounded-lg hover:bg-[#1F2937]/50 transition-all text-sm font-medium"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="ml-2 px-5 py-2 bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#0B0F14] text-sm font-semibold rounded-lg transition-all duration-300 glow-sm"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg glass-card border border-[#1F2937] text-[#9CA3AF] hover:text-[#38BDF8] hover:border-[#38BDF8] transition-colors"
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
    </header>
  );
}
