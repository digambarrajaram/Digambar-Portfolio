export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          DevOps & Cloud Engineer specializing in scalable infrastructure and automation
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          About Me
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a passionate DevOps and Cloud Engineer with expertise in building and maintaining 
            scalable, reliable infrastructure. I specialize in AWS, Infrastructure as Code (Terraform), 
            containerization (Docker, Kubernetes), and CI/CD automation (GitHub Actions, Jenkins).
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            My focus is on implementing best practices for cloud architecture, automating deployments, 
            and ensuring high availability and performance for production systems.
          </p>
        </div>
      </section>

      {/* Skills Overview */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Core Technologies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { category: "Cloud Platforms", skills: "AWS, Azure, Google Cloud" },
            { category: "Infrastructure as Code", skills: "Terraform, CloudFormation" },
            { category: "Containerization", skills: "Docker, Kubernetes, ECS" },
            { category: "CI/CD", skills: "GitHub Actions, Jenkins, GitLab CI" },
            { category: "Scripting", skills: "Bash, Python, PowerShell" },
            { category: "Monitoring", skills: "Prometheus, Grafana, CloudWatch" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {item.category}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.skills}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
