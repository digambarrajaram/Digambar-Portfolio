import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Digambar Rajaram",
  description: "Learn more about Digambar Rajaram's professional background, experience, and expertise in DevOps and Cloud Engineering.",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
        About Me
      </h1>

      {/* Introduction */}
      <section className="mb-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I'm a DevOps and Cloud Engineer with a passion for building scalable, 
            reliable infrastructure that powers modern applications. My journey in 
            technology has been driven by a commitment to automation, efficiency, 
            and continuous improvement.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            With extensive experience in cloud platforms, infrastructure as code, 
            and CI/CD pipelines, I help organizations transform their development 
            and deployment processes. I believe in implementing best practices that 
            enable teams to deliver value faster while maintaining high standards 
            of quality and security.
          </p>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {/* Experience Item */}
          <div className="border-l-4 border-gray-900 dark:border-white pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              DevOps Engineer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Company Name • 2022 - Present
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Designed and implemented multi-region AWS infrastructure using Terraform</li>
              <li>Built automated CI/CD pipelines reducing deployment time by 60%</li>
              <li>Managed Kubernetes clusters for containerized applications</li>
              <li>Implemented monitoring and alerting solutions using Prometheus and Grafana</li>
            </ul>
          </div>

          <div className="border-l-4 border-gray-900 dark:border-white pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              Cloud Infrastructure Specialist
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Previous Company • 2020 - 2022
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Migrated on-premise applications to AWS cloud infrastructure</li>
              <li>Automated infrastructure provisioning using CloudFormation and Terraform</li>
              <li>Implemented security best practices and compliance standards</li>
              <li>Reduced infrastructure costs by 30% through optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Cloud Platforms
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Amazon Web Services (AWS)</li>
              <li>• Microsoft Azure</li>
              <li>• Google Cloud Platform</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Infrastructure as Code
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Terraform</li>
              <li>• AWS CloudFormation</li>
              <li>• Ansible</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Containerization & Orchestration
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Docker</li>
              <li>• Kubernetes</li>
              <li>• Amazon ECS/EKS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              CI/CD Tools
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• GitHub Actions</li>
              <li>• Jenkins</li>
              <li>• GitLab CI</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Certifications
        </h2>
        <div className="space-y-3">
          <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
            <p className="font-semibold text-gray-900 dark:text-white">
              AWS Certified Solutions Architect - Associate
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Amazon Web Services</p>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
            <p className="font-semibold text-gray-900 dark:text-white">
              Certified Kubernetes Administrator (CKA)
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Cloud Native Computing Foundation</p>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
            <p className="font-semibold text-gray-900 dark:text-white">
              HashiCorp Certified: Terraform Associate
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">HashiCorp</p>
          </div>
        </div>
      </section>
    </div>
  );
}
