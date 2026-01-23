import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Digambar Rajaram",
  description: "Download the resume of Digambar Rajaram - DevOps & Cloud Engineer. Experience with AWS, Terraform, Kubernetes, and CI/CD automation.",
};

export default function Resume() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#E5E7EB] mb-12">
        Resume
      </h1>

      {/* Download Section */}
      <section className="mb-16 p-12 border-2 border-dashed border-[#1F2937] rounded-lg text-center bg-[#111827]/30">
        <svg
          className="w-20 h-20 mx-auto mb-6 text-[#38BDF8]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
        <h2 className="text-2xl font-bold text-[#E5E7EB] mb-3">
          Download Resume
        </h2>
        <p className="text-[#9CA3AF] mb-8">
          Download my resume in PDF format
        </p>
        <a
          href="/resume.pdf"
          download="digambar_rajaram_resume.pdf"
          className="inline-flex items-center px-8 py-3.5 text-base font-medium rounded-lg text-[#0B0F14] bg-[#38BDF8] hover:bg-[#0EA5E9] transition-all duration-200 shadow-lg shadow-[#38BDF8]/20"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download PDF
        </a>
        <p className="text-sm text-[#6B7280] mt-6">
          File: digambar_rajaram_resume.pdf
        </p>
      </section>

      {/* Resume Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#E5E7EB] mb-6">
          Summary
        </h2>
        <p className="text-[#9CA3AF] text-lg leading-relaxed">
          DevOps and Cloud Engineer with extensive experience in designing, implementing, 
          and maintaining scalable cloud infrastructure. Proven track record of automating 
          deployment processes, reducing costs, and improving system reliability. Skilled 
          in AWS, Terraform, Docker, Kubernetes, and CI/CD pipelines.
        </p>
      </section>

      {/* Skills Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#E5E7EB] mb-8">
          Core Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "AWS (EC2, S3, RDS, Lambda, EKS)",
            "Infrastructure as Code (Terraform, CloudFormation)",
            "Containerization (Docker, Kubernetes)",
            "CI/CD (GitHub Actions, Jenkins, GitLab CI)",
            "Scripting (Bash, Python, PowerShell)",
            "Monitoring (Prometheus, Grafana, CloudWatch)",
            "Version Control (Git, GitHub)",
            "Linux System Administration",
          ].map((skill, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-[#111827] border border-[#1F2937] rounded-lg"
            >
              <svg
                className="w-5 h-5 text-[#38BDF8] mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-[#E5E7EB]">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section>
        <h2 className="text-3xl font-bold text-[#E5E7EB] mb-8">
          Experience Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-8 bg-[#111827] border border-[#1F2937] rounded-lg">
            <div className="text-5xl font-bold text-[#38BDF8] mb-2">
              5+
            </div>
            <div className="text-[#9CA3AF]">
              Years Experience
            </div>
          </div>
          <div className="text-center p-8 bg-[#111827] border border-[#1F2937] rounded-lg">
            <div className="text-5xl font-bold text-[#38BDF8] mb-2">
              50+
            </div>
            <div className="text-[#9CA3AF]">
              Projects Completed
            </div>
          </div>
          <div className="text-center p-8 bg-[#111827] border border-[#1F2937] rounded-lg">
            <div className="text-5xl font-bold text-[#38BDF8] mb-2">
              3
            </div>
            <div className="text-[#9CA3AF]">
              Cloud Certifications
            </div>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <div className="mt-16 p-6 bg-[#111827] border border-[#38BDF8]/30 rounded-lg">
        <p className="text-sm text-[#9CA3AF]">
          <strong className="text-[#38BDF8]">Note:</strong> Add your resume PDF file as{" "}
          <code className="px-2 py-1 bg-[#1F2937] text-[#38BDF8] rounded font-mono text-xs">
            /public/resume.pdf
          </code>{" "}
          to enable the download link.
        </p>
      </div>
    </div>
  );
}
