import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Digambar Rajaram",
  description: "Learn more about Digambar Rajaram's professional background, experience, and expertise in DevOps and Cloud Engineering.",
};

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#E5E7EB] mb-12">
        About Me
      </h1>

      {/* Introduction */}
      <section className="mb-16">
        <div className="space-y-4 text-[#9CA3AF] text-lg leading-relaxed">
          <p>
            I&apos;m a DevOps and Cloud Engineer with a passion for building scalable, 
            reliable infrastructure that powers modern applications. My journey in 
            technology has been driven by a commitment to automation, efficiency, 
            and continuous improvement.
          </p>
          <p>
            With extensive experience in cloud platforms, infrastructure as code, 
            and CI/CD pipelines, I help organizations transform their development 
            and deployment processes. I believe in implementing best practices that 
            enable teams to deliver value faster while maintaining high standards 
            of quality and security.
          </p>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#E5E7EB] mb-8">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {/* Experience Item */}
          <div className="border-l-2 border-[#38BDF8] pl-6 pb-8">
            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-1">
              DevOps Engineer
            </h3>
            <p className="text-[#9CA3AF] mb-4 text-sm">
              Company Name • 2022 - Present
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#9CA3AF]">\n              <li>Designed and implemented multi-region AWS infrastructure using Terraform</li>
              <li>Built automated CI/CD pipelines reducing deployment time by 60%</li>
              <li>Managed Kubernetes clusters for containerized applications</li>
              <li>Implemented monitoring and alerting solutions using Prometheus and Grafana</li>
            </ul>
          </div>

          <div className="border-l-2 border-[#38BDF8] pl-6 pb-8">
            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-1">
              Cloud Infrastructure Specialist
            </h3>
            <p className="text-[#9CA3AF] mb-4 text-sm">
              Previous Company • 2020 - 2022
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#9CA3AF]">
              <li>Migrated on-premise applications to AWS cloud infrastructure</li>
              <li>Automated infrastructure provisioning using CloudFormation and Terraform</li>
              <li>Implemented security best practices and compliance standards</li>
              <li>Reduced infrastructure costs by 30% through optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#E5E7EB] mb-8">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#E5E7EB] mb-4">
              Cloud Platforms
            </h3>
            <ul className="space-y-2 text-[#9CA3AF]">
              <li>• Amazon Web Services (AWS)</li>
              <li>• Microsoft Azure</li>
              <li>• Google Cloud Platform</li>
            </ul>
          </div>
          <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#E5E7EB] mb-4">
              Infrastructure as Code
            </h3>
            <ul className="space-y-2 text-[#9CA3AF]">
              <li>• Terraform</li>
              <li>• AWS CloudFormation</li>
              <li>• Ansible</li>
            </ul>
          </div>
          <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#E5E7EB] mb-4">
              Containerization & Orchestration
            </h3>
            <ul className="space-y-2 text-[#9CA3AF]">
              <li>• Docker</li>
              <li>• Kubernetes</li>
              <li>• Amazon ECS/EKS</li>
            </ul>
          </div>
          <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#E5E7EB] mb-4">
              CI/CD Tools
            </h3>
            <ul className="space-y-2 text-[#9CA3AF]">
              <li>• GitHub Actions</li>
              <li>• Jenkins</li>
              <li>• GitLab CI</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-3xl font-bold text-[#E5E7EB] mb-8">
          Certifications
        </h2>
        <div className="space-y-4">
          <div className="p-6 bg-[#111827] border border-[#1F2937] rounded-lg hover:border-[#38BDF8]/50 transition-colors">
            <p className="font-semibold text-[#E5E7EB] mb-1">
              AWS Certified Solutions Architect - Associate
            </p>
            <p className="text-sm text-[#9CA3AF]">Amazon Web Services</p>
          </div>
          <div className="p-6 bg-[#111827] border border-[#1F2937] rounded-lg hover:border-[#38BDF8]/50 transition-colors">
            <p className="font-semibold text-[#E5E7EB] mb-1">
              Certified Kubernetes Administrator (CKA)
            </p>
            <p className="text-sm text-[#9CA3AF]">Cloud Native Computing Foundation</p>
          </div>
          <div className="p-6 bg-[#111827] border border-[#1F2937] rounded-lg hover:border-[#38BDF8]/50 transition-colors">
            <p className="font-semibold text-[#E5E7EB] mb-1">
              HashiCorp Certified: Terraform Associate
            </p>
            <p className="text-sm text-[#9CA3AF]">HashiCorp</p>
          </div>
        </div>
      </section>
    </div>
  );
}
