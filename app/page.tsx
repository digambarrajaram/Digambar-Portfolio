import Image from 'next/image';
import { personalInfo, about, technologies } from '@/data/portfolio';

export default function Home() {
  return (
    <div className="relative">
      {/* Background Gradient */}
      <div className="fixed inset-0 gradient-bg pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-20 sm:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1">
              {/* Status Badge */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full">
                  <span className="w-2 h-2 bg-[#38BDF8] rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium text-[#E5E7EB]">Available for Work</span>
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1] tracking-tight text-[#E6EDF3]">
                {personalInfo.name}
              </h1>
              
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#E5E7EB] mb-6">
                {personalInfo.title}
              </h2>

              <p className="text-lg text-[#9CA3AF] leading-relaxed max-w-2xl mb-10">
                {about.headline}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/projects"
                  className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-[#388BFD] hover:bg-[#539BFF] rounded-lg transition-colors duration-200"
                >
                  View Projects
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-[#E6EDF3] bg-[#161B22] hover:bg-[#1C2128] border border-[#30363D] rounded-lg transition-colors duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[300px]">
                <div className="bg-[#161B22] p-2 border border-[#21262D] rounded-2xl">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src="/Digambar_Photo.png"
                      alt={`${personalInfo.name} - ${personalInfo.title}`}
                      width={300}
                      height={400}
                      priority
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="max-w-4xl">
            <div className="mb-3">
              <span className="text-sm font-semibold text-[#38BDF8] tracking-wide uppercase">About Me</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#E5E7EB] mb-6">
              {about.headline}
            </h2>
            <div className="space-y-6 text-[#9CA3AF] text-lg leading-relaxed">
              {about.intro.map((paragraph, index) => (
                <p key={index} className="glass-card p-6 rounded-xl border border-[#38BDF8]/20">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>


        {/* Core Technologies */}
        <section className="py-20">
          <div className="mb-12">
            <span className="text-sm font-semibold text-[#38BDF8] tracking-wide uppercase">Core Stack</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#E5E7EB] mt-2 mb-3">
              Technologies I Work With
            </h2>
            <p className="text-[#9CA3AF] text-lg">
              Tools and platforms I use to build reliable cloud infrastructure
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block px-4 py-2 text-sm font-medium bg-[#161B22] text-[#388BFD] rounded-full border border-[#30363D]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
