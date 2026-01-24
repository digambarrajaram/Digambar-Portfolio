/**
 * PORTFOLIO CONTENT - Single Source of Truth
 * 
 * Edit this file to update your entire portfolio website.
 * After making changes:
 * 1. git add data/portfolio.ts
 * 2. git commit -m "Update portfolio content"
 * 3. git push
 * 4. Vercel auto-deploys with your changes
 */

export const personalInfo = {
  name: "Digambar Rajaram",
  role: "DevOps & Cloud Engineer",
  tagline: "Building scalable, reliable infrastructure with modern DevOps practices.",
  description: "Specializing in cloud automation, containerization, and enterprise-grade CI/CD pipelines.",
  email: "digambar@example.com", // UPDATE THIS
  location: "Remote / Available Worldwide",
  image: "/Digambar_Photo.png",
  resumeFile: "/resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/digambarrajaram",
  linkedin: "https://linkedin.com/in/yourprofile", // UPDATE THIS
};

export const about = {
  intro: [
    "I'm a DevOps and Cloud Engineer with a passion for building scalable, reliable infrastructure that powers modern applications. My journey in technology has been driven by a commitment to automation, efficiency, and continuous improvement. With extensive experience in cloud platforms, infrastructure as code, and CI/CD pipelines, I help organizations transform their development and deployment processes. I believe in implementing best practices that enable teams to deliver value faster while maintaining high standards of quality and security."
  ],
  summary: "DevOps and Cloud Engineer with extensive experience in designing, implementing, and maintaining scalable cloud infrastructure. Proven track record of automating deployment processes, reducing costs, and improving system reliability. Skilled in AWS, Terraform, Docker, Kubernetes, and CI/CD pipelines.",
};

export const experience = [
  {
    title: "DevOps Engineer",
    company: "Company Name", // UPDATE THIS
    period: "2022 - Present",
    responsibilities: [
      "Designed and implemented multi-region AWS infrastructure using Terraform",
      "Built automated CI/CD pipelines reducing deployment time by 60%",
      "Managed Kubernetes clusters for containerized applications",
      "Implemented monitoring and alerting solutions using Prometheus and Grafana",
    ],
  },
  {
    title: "Cloud Infrastructure Specialist",
    company: "Previous Company", // UPDATE THIS
    period: "2020 - 2022",
    responsibilities: [
      "Migrated on-premise applications to AWS cloud infrastructure",
      "Automated infrastructure provisioning using CloudFormation and Terraform",
      "Implemented security best practices and compliance standards",
      "Reduced infrastructure costs by 30% through optimization",
    ],
  },
];

export const skills = {
  "Cloud Platforms": ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform"],
  "Infrastructure as Code": ["Terraform", "AWS CloudFormation", "Ansible"],
  "Containerization & Orchestration": ["Docker", "Kubernetes", "Amazon ECS/EKS"],
  "CI/CD Tools": ["GitHub Actions", "Jenkins", "GitLab CI"],
  "Scripting": ["Bash", "Python", "PowerShell"],
  "Monitoring": ["Prometheus", "Grafana", "CloudWatch"],
  "Version Control": ["Git", "GitHub"],
  "Linux System Administration": ["Ubuntu", "CentOS", "RHEL"],
};

export const coreSkills = [
  "AWS (EC2, S3, RDS, Lambda, EKS)",
  "Infrastructure as Code (Terraform, CloudFormation)",
  "Containerization (Docker, Kubernetes)",
  "CI/CD (GitHub Actions, Jenkins, GitLab CI)",
  "Scripting (Bash, Python, PowerShell)",
  "Monitoring (Prometheus, Grafana, CloudWatch)",
  "Version Control (Git, GitHub)",
  "Linux System Administration",
];

export const technologies = [
  { category: "Cloud Platforms", skills: "AWS, Azure, Google Cloud" },
  { category: "Infrastructure as Code", skills: "Terraform, CloudFormation" },
  { category: "Containerization", skills: "Docker, Kubernetes, ECS" },
  { category: "CI/CD", skills: "GitHub Actions, Jenkins, GitLab CI" },
  { category: "Scripting", skills: "Bash, Python, PowerShell" },
  { category: "Monitoring", skills: "Prometheus, Grafana, CloudWatch" },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    year: "2023", // UPDATE THIS
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    year: "2023", // UPDATE THIS
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    year: "2022", // UPDATE THIS
  },
];

export const projects = [
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


export const stats = {
  yearsExperience: "5+",
  projectsCompleted: "50+",
  certifications: "3",
};

export const metadata = {
  siteTitle: "Digambar Rajaram | DevOps & Cloud Engineer",
  siteDescription: "DevOps & Cloud Engineer specializing in AWS, Terraform, Kubernetes, and CI/CD automation. Building scalable infrastructure solutions.",
  siteUrl: "https://your-domain.com", // UPDATE AFTER DEPLOYMENT
  author: "Digambar Rajaram",
};
