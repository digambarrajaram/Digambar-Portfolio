import Link from 'next/link';
import { personalInfo } from '@/data/portfolio';

export default function Header() {
  return (
    <header className="border-b border-[#1F2937] bg-[#0B0F14]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link href="/" className="flex items-center group">
            <div>
              <h1 className="text-xl font-bold text-[#E5E7EB] group-hover:text-[#38BDF8] transition-colors">
                {personalInfo.name}
              </h1>
              <p className="text-sm text-[#9CA3AF] font-mono">
                {personalInfo.role}
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#9CA3AF] hover:text-[#38BDF8] transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#9CA3AF] hover:text-[#38BDF8] transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-[#9CA3AF] hover:text-[#38BDF8] transition-colors text-sm font-medium"
            >
              Projects
            </Link>
            <Link
              href="/resume"
              className="text-[#9CA3AF] hover:text-[#38BDF8] transition-colors text-sm font-medium"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#0B0F14] rounded-lg text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#9CA3AF] hover:text-[#38BDF8]"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
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
