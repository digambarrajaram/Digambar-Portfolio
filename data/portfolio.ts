/**
 * PORTFOLIO — SINGLE SOURCE OF TRUTH
 * Author: Digambar Rajaram
 * Focus: Infrastructure, DevOps, Cloud & Platform Engineering
 * Philosophy: Production-first, security-aware, automation-driven
 */


// Personal Info
export const personalInfo = {
  name: "Digambar Rajaram",
  title: "Infrastructure & DevOps Engineer",
  location: "India",
  phone: "+91-7353570952",
  email: "digambarrajaram2@gmail.com",
};

export const socialLinks = {
  github: "https://github.com/digambarrajaram",
  linkedin: "https://www.linkedin.com/in/digambarrajaram",
};

// About Section
export const about = {
  headline: "Designing Secure, Reliable, and Production-Grade Cloud Platforms",
  intro: [
    "Infrastructure & DevOps Engineer with 2.4+ years of enterprise experience supporting large-scale, regulated government platforms.",
    "Strong background in VMware vSphere, Linux, Windows Server, and datacenter operations, combined with hands-on cloud-native DevOps practices on AWS.",
    "I bring a production-first mindset — focusing on reliability, security, observability, and automation. My work spans traditional infrastructure operations through to modern IaC-driven cloud architectures, CI/CD automation, and incident-driven platform engineering."
  ],
  branding: [
    "Production-first engineering mindset",
    "Automation over manual operations",
    "Security, compliance, and auditability by design",
    "Strong infrastructure fundamentals with modern DevOps execution",
    "Continuous learning and ownership-driven growth",
  ],
};

// Skills Section
export const skills = {
  cloudDevOps: [
    "AWS (EC2, S3, IAM, Lambda, API Gateway, CloudFront, App Runner)",
    "Terraform (Infrastructure as Code)",
    "Git & GitHub Actions (OIDC-based CI/CD)",
    "Jenkins",
  ],
  containersAutomation: [
    "Docker (multi-stage builds)",
    "Kubernetes (working knowledge)",
    "Ansible",
    "Python",
    "Shell scripting",
  ],
  monitoringObservability: [
    "Amazon CloudWatch",
    "Prometheus",
    "Grafana",
  ],
  infrastructureOS: [
    "VMware vSphere",
    "Windows Server Administration",
    "Linux (Ubuntu)",
    "Datacenter Operations",
  ],
  securityOperations: [
    "OS hardening (CIS-aligned)",
    "Patch management",
    "VAPT coordination & remediation",
    "Capacity planning",
    "License management & compliance",
  ],
  applicationPlatforms: [
    "FastAPI",
    "REST APIs",
    "Next.js",
  ],
  exploratoryTools: [
    "Codeium",
    "Brainboard",
    "K8sGPT",
    "Vercel",
    "Gradio",
    "Clerk",
    "Amazon Bedrock",
    "SageMaker",
    "Langfuse",
    "Semgrep",
    "S3 Vector Storage",
  ],
};

// Experience Section
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
    internalProjects: [
      {
        title: "Infrastructure Inventory Management System",
        description: "Designed and developed an internal inventory management tool to track hardware, software, licenses, and ownership across environments.",
        impact: [
          "Improved asset visibility and ownership tracking",
          "Reduced manual effort during audits and compliance reviews",
          "Enhanced readiness for internal and external audits",
        ],
      },
    ],
    achievements: [
      "Promoted to Assistant Manager in March 2024 based on performance and operational ownership",
      "Recognized for reliability, incident ownership, and cross-team coordination",
    ],
  },
];

// Projects Section (deduplicated, valid structure)
export const projects = [
  {
    title: "AI-Driven DevOps Incident Management on AWS",
    category: "Core DevOps / SRE",
    description: "Production-style incident simulation platform to evaluate AWS DevOps Agent using real infrastructure, CI/CD events, and deterministic failures.",
    architecture: [
      "Terraform IaC with bootstrap + application scopes",
      "GitHub Actions CI/CD with OIDC",
      "API Gateway + Lambda with CloudWatch telemetry",
      "Failure injection, rollback, and teardown workflows",
    ],
    technologies: ["AWS", "Terraform", "GitHub Actions", "Lambda", "CloudWatch"],
    links: { github: "https://github.com/digambarrajaram" },
  },
  {
    title: "Production AWS Multi-AZ Web Stack – Terraform Architecture Review",
    category: "Core DevOps / Cloud Architecture",
    description: "Deep architectural review of a production-grade, three-tier AWS stack focusing on availability, security, traffic flow, and operational risk.",
    highlights: [
      "Multi-AZ VPC with public, private-app, private-db subnets",
      "ALB → ASG (EC2) → RDS MySQL + ElastiCache Redis",
      "IMDSv2, Secrets Manager, CloudWatch logging",
      "Identified WAF, VPC endpoint, and egress-hardening gaps",
    ],
    technologies: ["AWS", "Terraform", "ALB", "EC2", "RDS", "ElastiCache"],
    links: { github: "https://github.com/digambarrajaram/AWS-Terraform-Multi-AZ-Networking-Load-Balancing-Auto-Scaling-and-Secure-Service-Integration" },
  },
  {
    title: "Scalable & Secure AWS EKS Infrastructure Automation",
    category: "Core DevOps / Kubernetes",
    description: "Terraform-driven provisioning of a production-ready AWS EKS cluster with secure networking, IAM, and managed node groups.",
    highlights: [
      "Multi-AZ VPC with private worker nodes",
      "IAM roles for service accounts (IRSA)",
      "Managed node groups and security groups",
      "Production-ready kubeconfig and outputs",
    ],
    technologies: ["AWS", "EKS", "Terraform", "Kubernetes", "IAM"],
    links: { github: "https://github.com/digambarrajaram" },
  },
  {
    title: "Infrastructure-as-Code: Flask App in Private AWS VPC",
    category: "DevOps / IaC",
    description: "Secure deployment of a Flask application inside a private AWS VPC using Terraform, CI/CD, and best-practice networking patterns.",
    technologies: ["Terraform", "AWS", "EC2", "RDS", "CI/CD"],
    links: { github: "https://github.com/digambarrajaram" },
  },
  {
    title: "Cybersecurity Analyzer",
    category: "DevSecOps",
    description: "Cloud-native static code analysis platform using Semgrep and MCP orchestration, designed for multi-cloud deployments.",
    technologies: ["Python", "Semgrep", "Terraform", "AWS", "Azure", "GCP"],
    links: { github: "https://github.com/digambarrajaram/Cybersecurity-Analyzer" },
  },
  {
    title: "AI Digital Twin – Cloud-Native Platform",
    category: "Cloud-Native / AI Platform",
    description: "End-to-end AI Digital Twin with serverless backend, persistent memory, and automated AWS infrastructure.",
    technologies: ["AWS", "Terraform", "FastAPI", "Next.js", "GitHub Actions"],
    links: { github: "https://github.com/digambarrajaram" },
  },
  {
    title: "IdeaGen Pro – AI SaaS Business Idea Generator",
    category: "Full-Stack AI SaaS",
    description: "Subscription-based AI SaaS platform that generates business ideas using streaming GenAI responses with authentication and billing.",
    highlights: [
      "Real-time SSE-based AI streaming",
      "Clerk authentication & subscription management",
      "Next.js + FastAPI full-stack architecture",
      "Production-ready SaaS deployment patterns",
    ],
    technologies: ["Next.js", "FastAPI", "TypeScript", "OpenAI", "Clerk"],
    links: { github: "https://github.com/digambarrajaram" },
  },
  {
    title: "MediNotes Pro – AI Healthcare SaaS",
    category: "AI SaaS / Healthcare",
    description: "AI-powered healthcare consultation assistant that transforms doctor's notes into professional summaries, action items, and patient-friendly communications.",
    highlights: [
      "HIPAA-aware architecture and secure authentication",
      "Streaming AI responses with structured outputs",
      "Containerized deployment with Docker",
      "Modern, responsive UI with dark mode",
    ],
    technologies: ["Next.js", "FastAPI", "Docker", "OpenAI", "Clerk"],
    links: { github: "https://github.com/digambarrajaram" },
  },
  {
    title: "PromptOps – AI-Powered DevOps Experimentation",
    category: "DevOps / AI Tooling",
    description: "Exploration of AI-assisted DevOps workflows focusing on prompt-driven automation and operational efficiency.",
    technologies: ["AI", "DevOps", "Automation"],
    links: { github: "https://github.com/digambarrajaram" },
  },
];

// Technologies (flattened for Home page)
export const technologies = [
  "AWS", "Terraform", "Next.js", "FastAPI", "GitHub Actions", "Python", "Docker", "TypeScript", "Clerk", "OpenAI", "Kubernetes", "Ansible", "Prometheus", "Grafana", "Semgrep", "S3 Vector Storage", "Amazon Bedrock", "SageMaker", "Langfuse", "Vercel", "Gradio"
];

// Core Skills (for Resume)
export const coreSkills = [
  "Cloud Infrastructure (AWS, Azure, GCP)",
  "Infrastructure as Code (Terraform)",
  "CI/CD Automation (GitHub Actions, Jenkins)",
  "Containerization (Docker, Kubernetes)",
  "Monitoring & Observability (CloudWatch, Prometheus, Grafana)",
  "Security & Compliance (CIS, VAPT, Patch Management)",
  "DevOps & SRE Practices",
  "Python & Shell Scripting",
];

// Stats (for Resume)
export const stats = {
  experienceYears: 2.4,
  projects: 10,
  certifications: 8,
};

// Certifications
export const certifications = [
  {
    name: "Cloud & DevOps Upskilling Program",
    provider: "Learnbay (Microsoft Collaboration)",
    duration: "Feb 2025 – Dec 2025",
  },
  {
    name: "Java Full Stack Development",
    provider: "TalentSprint",
    duration: "Mar 2023 – Jun 2023",
  },
  {
    name: "Java Full Stack Development",
    provider: "Q-J Spiders",
    duration: "Aug 2022 – Feb 2023",
  },
  {
    name: "AI Engineer – MLOps Track",
    specialization: "Deploy GenAI & Agentic AI at Scale",
    provider: "Udemy",
  },
  {
    name: "PromptOps – AI-Powered DevOps",
    provider: "Udemy",
  },
  {
    name: "Complete VMware vSphere ESXi & vCenter Administration",
    provider: "Udemy",
  },
];
