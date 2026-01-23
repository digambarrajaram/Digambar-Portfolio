import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Digambar Rajaram",
  description: "Explore DevOps and Cloud Engineering projects by Digambar Rajaram, featuring AWS infrastructure, CI/CD pipelines, and containerization solutions.",
};

export default function Projects() {
  const projects = [
    {
      title: "AWS Multi-AZ Infrastructure with Terraform",
      problem: "Design a highly available, fault-tolerant infrastructure for a production application with automatic failover capabilities.",
      solution: "Implemented multi-AZ architecture using Terraform across 3 availability zones with load balancing, auto-scaling, and automated disaster recovery.",
      techStack: ["AWS", "Terraform", "VPC", "EC2", "RDS", "Route53", "CloudWatch"],
      architecture: "Multi-tier architecture with separate subnets for web, application, and database layers. Implemented NAT gateways, bastion hosts, and security groups following AWS best practices.",
    },
    {
      title: "GitHub Actions CI/CD Pipeline",
      problem: "Automate build, test, and deployment process for a microservices application with zero-downtime deployments.",
      solution: "Created comprehensive GitHub Actions workflows with automated testing, security scanning, Docker image building, and progressive deployment to production.",
      techStack: ["GitHub Actions", "Docker", "Kubernetes", "AWS EKS", "Helm", "SonarQube"],
      architecture: "Multi-stage pipeline with parallel test execution, automated rollback on failure, and blue-green deployment strategy for production releases.",
    },
    {
      title: "Dockerized Application Deployment",
      problem: "Containerize and orchestrate a monolithic application for improved scalability and resource utilization.",
      solution: "Migrated application to containerized architecture with Docker, implemented Kubernetes orchestration, and established automated scaling policies.",
      techStack: ["Docker", "Kubernetes", "Helm", "Prometheus", "Grafana", "ELK Stack"],
      architecture: "Microservices-based deployment with service mesh for inter-service communication, centralized logging, and real-time monitoring dashboards.",
    },
    {
      title: "Infrastructure Monitoring & Alerting System",
      problem: "Establish comprehensive monitoring solution to proactively detect and respond to infrastructure issues.",
      solution: "Deployed Prometheus and Grafana stack with custom dashboards, alert rules, and integration with PagerDuty for incident management.",
      techStack: ["Prometheus", "Grafana", "AlertManager", "PagerDuty", "Node Exporter"],
      architecture: "Distributed monitoring architecture with metric collection, aggregation, visualization, and multi-channel alerting (Slack, Email, SMS).",
    },
    {
      title: "Automated Backup & Disaster Recovery",
      problem: "Implement automated backup strategy with defined RPO/RTO for critical databases and application data.",
      solution: "Created automated backup pipelines using AWS services with cross-region replication, point-in-time recovery, and regular restore testing.",
      techStack: ["AWS Backup", "S3", "Lambda", "CloudWatch Events", "SNS", "DynamoDB"],
      architecture: "Scheduled backup automation with lifecycle policies, encryption at rest, cross-region replication, and automated compliance reporting.",
    },
    {
      title: "Kubernetes Cluster Setup & Management",
      problem: "Deploy production-ready Kubernetes cluster with security hardening, networking, and persistent storage.",
      solution: "Provisioned EKS cluster with node groups, implemented RBAC, network policies, ingress controllers, and integrated with AWS services.",
      techStack: ["AWS EKS", "kubectl", "Helm", "Calico", "AWS ALB Ingress", "EBS CSI"],
      architecture: "Production-grade cluster with multiple node groups, pod security policies, encrypted secrets management, and automated certificate rotation.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          DevOps and Cloud Engineering solutions I've built
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h2>

            <div className="space-y-4">
              {/* Problem Statement */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                  Problem
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                  Solution
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {project.solution}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                  Architecture Focus
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {project.architecture}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
