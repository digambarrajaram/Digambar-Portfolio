import Image from 'next/image';
import { personalInfo, about, technologies } from '@/data/portfolio';

export default function Home() {
  return (
    <div className="relative">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 grid-pattern-large pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Terminal Window Style */}
        <section className="py-20 sm:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1">
              {/* Terminal Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="status-dot online"></span>
                  <span className="mono-label">AVAILABLE FOR WORK</span>
                </div>
                <div className="font-mono text-sm text-[#38BDF8]">
                  <span className="text-[#6B7280]">~$ </span>whoami
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#E5E7EB] mb-4 leading-[1.1] tracking-tight">
                {personalInfo.name}
              </h1>
              
              <div className="mb-6">
                <div className="font-mono text-sm sm:text-base text-[#38BDF8]">
                  <span className="text-[#6B7280]">~$ </span>
                  <span className="text-[#10B981]">echo</span> <span className="text-[#9CA3AF]">$ROLE</span>
                </div>
                <div className="font-mono text-base sm:text-lg text-[#E5E7EB] ml-4 mt-1">
                  &gt; {personalInfo.role}
                </div>
              </div>

              <div className="mb-10 p-5 bg-[#000]/40 border border-[#1F2937] rounded-lg font-mono text-sm text-[#9CA3AF] leading-relaxed max-w-2xl">
                <div className="text-[#6B7280] mb-2">{"//"} Mission Statement</div>
                {personalInfo.tagline} {personalInfo.description}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/projects"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-mono text-sm font-medium text-[#0B0F14] bg-[#38BDF8] hover:bg-[#0EA5E9] transition-all duration-200 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-[#0B0F14]">$</span> view-projects
                  </span>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 font-mono text-sm font-medium text-[#E5E7EB] bg-transparent border-2 border-[#38BDF8] hover:bg-[#38BDF8]/10 transition-all duration-200"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#38BDF8]">&gt;</span> contact.sh
                  </span>
                </a>
              </div>
            </div>

            {/* Right: Profile Image - Terminal Window */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[300px]">
                {/* Terminal Window */}
                <div className="relative terminal-card terminal-dots rounded-lg overflow-hidden">
                  {/* Terminal Title Bar */}
                  <div className="h-8 bg-[#1F2937]/60 border-b border-[#374151] flex items-center px-4">
                    <span className="font-mono text-xs text-[#6B7280] ml-12">~/profile.img</span>
                  </div>
                  
                  {/* Image */}
                  <div className="p-4 bg-[#111827]">
                    <div className="relative">
                      <Image
                        src={personalInfo.image}
                        alt={`${personalInfo.name} - ${personalInfo.role}`}
                        width={300}
                        height={400}
                        priority
                        className="w-full h-auto rounded border border-[#1F2937]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Code Block Style */}
        <section className="py-20 border-t border-[#1F2937]">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="mono-label">README.md</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#E5E7EB] mb-10">
              # About
            </h2>
            <div className="space-y-6 text-[#9CA3AF] text-lg leading-relaxed">
              {about.intro.map((paragraph, index) => (
                <p key={index} className="pl-4 border-l-2 border-[#38BDF8]/30">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Core Technologies - Bento Grid */}
        <section className="py-20 border-t border-[#1F2937]">
          <div className="mb-12">
            <span className="mono-label">STACK.JSON</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#E5E7EB] mt-2 mb-3">
              Tech Stack
            </h2>
            <p className="text-[#9CA3AF] font-mono text-sm">
              <span className="text-[#6B7280]">{"//"}</span> Tools & technologies I work with daily
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 bg-[#111827] border border-[#1F2937] hover:border-[#38BDF8] transition-all duration-300"
              >
                {/* Corner Brackets */}
                <div className="absolute top-2 left-2 text-[#38BDF8]/30 group-hover:text-[#38BDF8] transition-colors font-mono text-xs">
                  ╔
                </div>
                <div className="absolute top-2 right-2 text-[#38BDF8]/30 group-hover:text-[#38BDF8] transition-colors font-mono text-xs">
                  ╗
                </div>
                <div className="absolute bottom-2 left-2 text-[#38BDF8]/30 group-hover:text-[#38BDF8] transition-colors font-mono text-xs">
                  ╚
                </div>
                <div className="absolute bottom-2 right-2 text-[#38BDF8]/30 group-hover:text-[#38BDF8] transition-colors font-mono text-xs">
                  ╝
                </div>

                <div className="font-mono text-xs text-[#6B7280] mb-2">
                  {"<category>"}
                </div>
                <h3 className="font-bold text-[#E5E7EB] mb-3 text-lg">
                  {item.category}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {item.skills}
                </p>
                <div className="font-mono text-xs text-[#6B7280] mt-2">
                  {"</category>"}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
