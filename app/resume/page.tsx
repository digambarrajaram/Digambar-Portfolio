import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Digambar Rajaram",
  description: "Download the resume of Digambar Rajaram - DevOps & Cloud Engineer. Experience with AWS, Terraform, Kubernetes, and CI/CD automation.",
};

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
        Resume
      </h1>

      {/* Download Section */}
      <section className="mb-12 p-8 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg text-center">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-600"
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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Download Resume
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Download my resume in PDF format
        </p>
        <button
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          onClick={() => alert('PDF download placeholder - Add your resume PDF to /public folder')}
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
        </button>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
          File: digambar_rajaram_resume.pdf
        </p>
      </section>

      {/* Resume Overview */}
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Summary
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          DevOps and Cloud Engineer with extensive experience in designing, implementing, 
          and maintaining scalable cloud infrastructure. Proven track record of automating 
          deployment processes, reducing costs, and improving system reliability. Skilled 
          in AWS, Terraform, Docker, Kubernetes, and CI/CD pipelines.
        </p>
      </section>

      {/* Skills Overview */}
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
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
              className="flex items-center p-3 border border-gray-200 dark:border-gray-800 rounded-lg"
            >
              <svg
                className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Experience Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              5+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Years Experience
            </div>
          </div>
          <div className="text-center p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              50+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Projects Completed
            </div>
          </div>
          <div className="text-center p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              3
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Cloud Certifications
            </div>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <div className="mt-12 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Note:</strong> To enable PDF download, add your resume PDF file to the{" "}
          <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900 rounded">
            /public
          </code>{" "}
          folder and update the download link.
        </p>
      </div>
    </div>
  );
}
