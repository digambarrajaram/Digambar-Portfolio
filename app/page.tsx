import Image from 'next/image';
import { personalInfo, about, technologies } from '@/data/portfolio';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section - Left/Right Layout */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-4">
              <span className="text-sm font-mono text-[#38BDF8] tracking-wide">
                {personalInfo.role.toUpperCase()}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E5E7EB] mb-6 leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-lg sm:text-xl text-[#9CA3AF] mb-8 leading-relaxed max-w-xl">
              {personalInfo.tagline} {personalInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg text-[#0B0F14] bg-[#38BDF8] hover:bg-[#0EA5E9] transition-all duration-200 shadow-lg shadow-[#38BDF8]/20"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg text-[#E5E7EB] bg-[#111827] hover:bg-[#1F2937] border border-[#1F2937] transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] lg:max-w-[360px]">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/8 via-transparent to-[#0EA5E9]/5 rounded-3xl blur-2xl scale-105"></div>
              
              {/* Image container */}
              <div className="relative">
                <Image
                  src={personalInfo.image}
                  alt={`${personalInfo.name} - ${personalInfo.role}`}
                  width={360}
                  height={360}
                  priority
                  className="w-full h-auto rounded-2xl shadow-2xl shadow-black/40"
                  style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 border-t border-[#1F2937]">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] mb-8">
            About Me
          </h2>
          <div className="space-y-4 text-[#9CA3AF] text-lg leading-relaxed">
            {about.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-16 border-t border-[#1F2937]">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] mb-12">
          Core Technologies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-[#111827] border border-[#1F2937] rounded-lg hover:border-[#38BDF8]/50 transition-all duration-200"
            >
              <h3 className="font-semibold text-[#E5E7EB] mb-2 text-lg">
                {item.category}
              </h3>
              <p className="text-[#9CA3AF] text-sm">
                {item.skills}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
