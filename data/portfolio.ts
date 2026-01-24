// Technologies (flat array for Home page)
export const technologies = [
  "AWS", "Terraform", "Next.js", "FastAPI", "GitHub Actions", "Python", "Docker", "TypeScript", "Clerk", "OpenAI", "Kubernetes", "Ansible", "Prometheus", "Grafana", "Semgrep", "S3 Vector Storage", "Amazon Bedrock", "SageMaker", "Langfuse", "Vercel", "Gradio"
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
    "AWS (EC2, S3, IAM, Lambda, API Gateway, CloudFront, App Runner)",
    "Terraform (Infrastructure as Code)",
    "VMware vSphere & Datacenter Operations",
    "VPC Networking & Security Groups"
  ],
  devOpsAutomation: [
    "GitHub Actions (OIDC-based CI/CD)",
    "Jenkins",
    "Docker (Multi-stage builds)",
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
      "Administered Windows Server lifecycle and Linux-based systems",
      "Performed capacity planning for compute and storage layers",
      "Executed OS hardening and patch management cycles",
      "Coordinated VAPT activities and managed infrastructure licensing",
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
    category: "Core DevOps / SRE",
    description: "Production-style incident simulation platform using Terraform, Lambda, and CloudWatch telemetry to evaluate automated incident response.",
    technologies: ["AWS DevOps Agents","AWS", "Terraform", "GitHub Actions", "Lambda", "CloudWatch"],
  },
  {
    title: "Production AWS Multi-AZ Web Stack",
    category: "Cloud Architecture",
    description: "Three-tier AWS stack focusing on high availability and security, utilizing ALB, ASG, and RDS across multiple Availability Zones.",
    technologies: ["AWS", "Terraform", "ALB", "EC2", "RDS", "ElastiCache","CloudWatch"],
  },
  {
    title: "Scalable AWS EKS Infrastructure Automation",
    category: "Kubernetes",
    description: "Terraform-driven provisioning of an EKS cluster with private worker nodes and IAM roles for service accounts (IRSA).",
    technologies: ["AWS", "EKS", "Terraform", "Kubernetes", "IAM"],
  },
  {
    title: "Cybersecurity Analyzer",
    category: "DevSecOps",
    description: "Cloud-native static code analysis platform using Semgrep for automated security scanning in CI/CD pipelines.",
    technologies: ["Python", "Semgrep", "Terraform", "AWS"],
  },
  {
    title: "AI Digital Twin – Cloud-Native Platform",
    category: "Cloud-Native / AI",
    description: "End-to-end AI Digital Twin with serverless backend and automated AWS infrastructure deployment.",
    technologies: ["AWS", "Terraform", "FastAPI", "Next.js", "GitHub Actions"],
  },
  {
    title: "IdeaGen Pro – AI SaaS Platform",
    category: "Full-Stack AI SaaS",
    description: "Subscription-based AI platform featuring real-time streaming responses and secure authentication.",
    technologies: ["Next.js", "FastAPI", "TypeScript", "OpenAI", "Clerk"],
  },
  {
    title: "MediNotes Pro – AI Healthcare SaaS",
    category: "Healthcare / AI",
    description: "AI-powered assistant transforming consultation notes into professional summaries with a containerized deployment flow.",
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
  experienceYears: 2.3,
  projects: 7,
  certifications: 5,
};