// Technologies (flat array for Home page)
export const technologies = [
  "AWS", "Terraform", "Kubernetes", "GitHub Actions", "Docker", "Ansible", "Python", "Prometheus", "Grafana","Jenkins", "Shell scripting", "VMware vSphere","OpenAI", "Semgrep", "S3 Vector Storage", "Amazon Bedrock", "SageMaker", "Langfuse", "Vercel","Next.js", "FastAPI", "Gradio"
];
/**
 * PORTFOLIO — SINGLE SOURCE OF TRUTH
 * Author: Digambar Rajaram
 */

export const personalInfo = {
  name: "Digambar Rajaram",
  title: "Infrastructure & DevOps Engineer",
  location: "India",
  phone: "+91-7353570952",
  email: "digambarrajaram2@gmail.com",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/digambar-rajaram-8371b51a5/",
  github: "https://github.com/digambarrajaram",
};

export const about = {
  headline: "Designing Secure, Reliable, and Production-Grade Cloud Platforms",
  intro: [
    "Infrastructure & DevOps Engineer with 2+ years of enterprise experience supporting large-scale, regulated government platforms.",
    "Strong background in VMware vSphere, Linux, Windows Server, and datacenter operations, combined with hands-on cloud-native DevOps practices on AWS.",
    "I bring a production-first mindset focusing on reliability, security, observability, and automation."
  ],
};

// Refined Skill Sections
export const skills = {
  cloudInfrastructure: [
    "AWS (EC2, S3, IAM, Lambda, API Gateway, CloudFront, App Runner,Route 53, RDS, ElastiCache, ALB, Auto Scaling Groups, CloudFormation, VPC)",
    "Terraform (Infrastructure as Code)",
    "VMware vSphere & Datacenter Operations",
    "VPC Networking & Security Groups"
  ],
  devOpsAutomation: [
    "GitHub Actions",
    "Jenkins",
    "Docker & Containerization",
    "Kubernetes (EKS)",
    "Ansible",
    "Python & Shell Scripting"
  ],
  observabilitySecurity: [
    "Amazon CloudWatch",
    "Prometheus & Grafana",
    "OS Hardening (CIS-aligned)",
    "Patch Management & VAPT Remediation"
  ]
};

export const experience = [
  {
    company: "Protean eGov Technologies Ltd (formerly NSDL eGov Infrastructure Ltd)",
    location: "Mumbai, Maharashtra, India",
    role: "Assistant Manager – Infrastructure & DevOps",
    duration: "Mar 2023 – Jun 2025",
    domain: "National Pension System (NPS) – Government Financial Platform",
    responsibilities: [
      "Owned day-to-day infrastructure operations for a mission-critical government financial platform",
      "Managed VMware vSphere environments supporting production and non-production workloads",
      "Administered Windows Server lifecycle: provisioning, patching, monitoring, and decommissioning",
      "Handled Linux-based systems for application and support workloads",
      "Led and coordinated infrastructure operations activities across a multi-member team",
      "Performed capacity planning for compute, storage, and virtualization layers",
      "Executed OS hardening activities aligned with internal security baselines",
      "Planned and executed patch management cycles with minimal service impact",
      "Coordinated VAPT activities with security teams and tracked remediation",
      "Managed infrastructure licensing and compliance documentation",
      "Participated in incident response, root-cause analysis, and change management",
      "Worked closely with application, security, and audit teams to maintain SLA and compliance",
    ],
    achievements: [
      "Promoted to Assistant Manager in Sep 2023 based on operational ownership",
      "Recognized for reliability and incident ownership",
    ],
  },
];

export const projects = [
  {
    title: "AI-Driven DevOps Incident Management on AWS",
    category: "DevOps / SRE",
    description: "Production-style incident simulation platform to evaluate AWS DevOps Agent using real infrastructure, CI/CD events, and deterministic failures.",
    technologies: ["AWS DevOps Agents","AWS", "Terraform", "GitHub Actions", "AWS Lambda", "CloudWatch"],
  },
  {
    title: "Production-Grade AWS Multi-AZ Web Stack",
    category: "Cloud Infrastructure",
    description: "Designed and deployed a resilient three-tier web stack on AWS with ALB, ASG, and RDS across multiple Availability Zones for high availability.",
    technologies: ["AWS", "Terraform", "ALB", "EC2", "RDS", "ElastiCache", "CloudWatch"],
  },
  {
    title: "Scalable & Secure AWS EKS Infrastructure Automation",
    category: "Kubernetes / IaC",
    description: "Terraform-driven provisioning of a production-ready AWS EKS cluster with secure networking, IAM, and managed node groups.",
    technologies: ["AWS", "EKS", "Terraform", "Kubernetes", "IAM"],
  },
  {
    title: "Cybersecurity Analyzer",
    category: "DevSecOps",
    description: "Cloud-native static code analysis platform using Semgrep and MCP orchestration, designed for multi-cloud deployments.",
    technologies: ["Python", "Semgrep", "Terraform", "AWS"],
  },
  {
    title: "AI Digital Twin Platform (Cloud-Native)",
    category: "Cloud-Native / AI",
    description: "Developed a serverless AI Digital Twin platform with automated AWS infrastructure provisioning and event-driven backend.",
    technologies: ["AWS", "Terraform", "FastAPI", "Next.js", "GitHub Actions"],
  },
  {
    title: "IdeaGen Pro – AI SaaS",
    category: "AI SaaS",
    description: "Built a subscription-based AI SaaS with real-time streaming and secure authentication.",
    technologies: ["Next.js", "FastAPI", "TypeScript", "OpenAI", "Clerk"],
  },
  {
    title: "MediNotes Pro – AI Healthcare SaaS",
    category: "Healthcare / AI",
    description: "Containerized AI assistant for transforming consultation notes into summaries.",
    technologies: ["Next.js", "FastAPI", "Docker", "OpenAI", "Clerk"],
  }
];

export const certifications = [
  {
    name: "Cloud & DevOps Upskilling Program",
    provider: "Learnbay (External Online)",
    duration: "Feb 2025 – Dec 2025",
  },
  {
    name: "Java Full Stack Development",
    provider: "TalentSprint (Company-sponsored Bootcamp)",
    duration: "Mar 2023 – Jun 2023",
  },
  {
    name: "Java Full Stack Development",
    provider: "Q-J Spiders",
    duration: "Aug 2022 – Feb 2023",
  },
  {
    name: "AI Engineer – MLOps Track",
    provider: "Udemy",
  },
  {
    name: "PromptOps – AI-Powered DevOps",
    provider: "Udemy",
  },
  {
    name: "Complete VMware vSphere ESXi & vCenter Administration",
    provider: "Udemy",
  }
];

export const stats = {
  experienceYears: 2.4,
  projects: 7,
  certifications: 6,
};