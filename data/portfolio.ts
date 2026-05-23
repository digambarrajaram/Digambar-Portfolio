// Technologies (flat array for Home page)

export const technologies = [
  "AWS",
  "Terraform",
  "Kubernetes",
  "Docker",
  "GitHub Actions",
  "Jenkins",
  "Ansible",
  "ELK Stack",
  "N8N",
  "Python",
  "Shell Scripting",
  "Prometheus",
  "Grafana",
  "VMware vSphere",
  "Linux",
  "Windows Server",
  "Commvault"
];

/**
 * PORTFOLIO — SINGLE SOURCE OF TRUTH
 * Author: Digambar Rajaram
 */

export const personalInfo = {
  name: "Digambar Rajaram",
  title: "DevOps & Infrastructure Engineer",
  location: "India",
  phone: "+91-7353570952",
  email: "digambarrajaram2@gmail.com",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/digambar-rajaram-8371b51a5/",
  github: "https://github.com/digambarrajaram",
  twitter: "https://twitter.com/digambarrajaram",
};

export const siteConfig = {
  siteUrl: "https://digambarrajaram.cloud",
  profileImage: "/Digambar_Photo.png",
};

export const about = {
  headline:
    "Building Reliable Infrastructure at Scale — Enterprise VMware & Cloud-Native DevOps on AWS",

  intro: [
    "DevOps & Infrastructure Engineer with 2+ years of enterprise production experience at Protean eGov Technologies, supporting India's largest government platforms including NPS, PAN, TIN, CRA, and eSign — processing millions of transactions daily.",

    "Operated VMware vSphere environments across 1500+ VMs and 100+ ESXi hosts with 99.9%+ uptime, leading disaster recovery automation, performance optimization, and a 6-member infrastructure team.",

    "Building cloud-native expertise across AWS, Terraform, Kubernetes, CI/CD, and observability — with hands-on projects in ELK Stack, AI-driven incident management, and production-grade AWS networking."
  ],

  expertise: [
    "AWS cloud infrastructure & IaC (Terraform, Helm, GitHub Actions)",
    "VMware vSphere datacenter operations & enterprise backup (Commvault 10+ PB)",
    "CI/CD automation, containerization, and observability (ELK, Prometheus, Grafana)"
  ],

  approach: [
    "security-first mindset — from OS hardening and RBAC to X-Pack TLS and least-privilege IAM",
    "end-to-end ownership across infrastructure, automation, and monitoring",
    "building systems that are stable, auditable, and resilient under real-world load"
  ]
};

export const skills = {

  cloudDevOps: [
    "AWS (EC2, S3, IAM, VPC, Lambda, API Gateway, EKS, CloudWatch, ALB/NLB,Route 53, Cloud Front)",
    "Terraform (Infrastructure as Code)",
    "Docker & Containerization",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "Ansible",
    "Agile/Scrum SDLC",
    "cloud service models (IaaS, PaaS, SaaS)",
    "workflow automation with N8N"
  ],

  infrastructureVirtualization: [
    "VMware vSphere",
    "ESXi & vCenter",
    "High Availability (HA)",
    "Distributed Resource Scheduler (DRS)",
    "vMotion",
    "vRealize Operations (vROps)",
    "Capacity Planning & Performance Optimization"
  ],

  operatingSystems: [
    "Linux (Ubuntu, Amazon Linux, RedHat)",
    "Windows Server 2016/2019/2022",
    "OS Hardening",
    "Patch Management"
  ],

  backupDisasterRecovery: [
    "Commvault Enterprise Backup",
    "Disaster Recovery Automation",
    "RPO/RTO Validation",
    "Backup Infrastructure Management"
  ],

  monitoringAutomation: [
    "ELK Stack (Elasticsearch, Logstash, Kibana, Filebeat, ElastAlert2)",
    "Amazon CloudWatch",
    "Prometheus",
    "Grafana",
    "Python",
    "Shell Scripting"
  ]
};

export const experience = [
  {
    company: "Protean eGov Technologies Ltd (formerly NSDL eGov Infrastructure Ltd)",
    location: "Mumbai, Maharashtra, India",
    role: "Assistant Manager – DevOps & Infrastructure Engineer",
    duration: "Mar 2023 – Jun 2025",
    domain: "India’s largest government platforms (NPS, PAN, TIN, CRA, eSign)",

    responsibilities: [

      "Maintained 99.9%+ uptime across 1500+ VMs spanning production and DR environments on a clustered VMware vSphere architecture (100+ ESXi hosts), directly supporting mission-critical government financial services",

      "Reduced unplanned downtime by ~40% through proactive performance monitoring using vROps analytics — tracking CPU Ready, memory contention, and storage latency across the entire fleet",

      "Executed zero-downtime ESXi lifecycle upgrades and firmware validation cycles across 100+ hosts, coordinating with CAB and maintaining patch compliance with no production impact",

      "Managed provisioning, monthly patch cycles (100% compliance), and security hardening for 1500+ Windows Server (2016/2019/2022) and Linux VMs supporting enterprise workloads",

      "Administered 10+ PB enterprise backup environment using Commvault — the backbone of disaster recovery for one of India's largest government fintech platforms",

      "Automated Disaster Recovery failover using Ansible, reducing manual DR drill time by 60% and achieving consistent RPO/RTO targets during quarterly audits",

      "Led daily operations of a 6-member infrastructure team; served as escalation point for P1/P2 incidents and conducted structured Root Cause Analysis (RCA) for all major events",

      "Participated in CAB meetings and enforced ITIL-aligned change management processes, reducing change-related incidents by standardizing pre-change checklists",

      "Built an internal infrastructure asset management platform using Spring Boot, MySQL, and ReactJS to replace manual spreadsheet tracking of 1500+ hardware/software assets",

      "Reduced audit preparation time by ~50% — platform provided real-time inventory visibility that was previously unavailable during compliance reviews"
    ],

    achievements: [
      "Promoted to Assistant Manager in Sep 2023 based on operational ownership and leadership.",
      "Improved infrastructure reliability through proactive monitoring and capacity planning.",
      "Contributed to automation initiatives reducing manual infrastructure operations."
    ]
  }
];

export const projects = [
{
  title: "ELK Stack – Centralized Log Aggregation & Observability Platform",
  category: "Observability & Monitoring",
  description:
    "Production-style ELK Stack on AWS EC2 using Terraform and Docker Compose. Built Logstash Grok pipelines for Nginx, app, and syslog ingestion. Created Kibana dashboards for real-time health monitoring and implemented ElastAlert2 anomaly detection with Slack alerting — sub-5-min MTTD. Hardened with X-Pack TLS, RBAC, and ILM policies.",
  technologies: ["Elasticsearch", "Logstash", "Kibana", "Filebeat", "ElastAlert2", "AWS EC2", "Terraform", "Docker Compose"]
},
  {
    title: "Enterprise DevOps CI/CD Pipeline",
    category: "DevOps Automation",
    description:
      "Designed and implemented an enterprise CI/CD pipeline for a Java web application integrating GitHub, Jenkins, Docker, and Ansible to automate build, test, containerization, and deployment processes.",
    technologies: ["Jenkins", "Docker", "Ansible", "AWS EC2", "Maven", "GitHub"]
  },

  {
    title: "AI-Driven DevOps Incident Management Platform",
    category: "DevOps / SRE",
    description:
      "Built a simulated DevOps incident response platform on AWS using Terraform infrastructure to evaluate automated incident analysis using CloudWatch metrics, logs, and CI/CD deployment telemetry.",
    technologies: ["AWS", "Terraform", "CloudWatch", "GitHub Actions"]
  },

  {
    title: "Multi-AZ AWS Networking & Auto Scaling Architecture",
    category: "Cloud Infrastructure",
    description:
      "Designed a highly available AWS infrastructure using Terraform with multi-AZ VPC networking, Application Load Balancers, NAT Gateways, and Auto Scaling Groups.",
    technologies: ["AWS", "Terraform", "ALB", "Auto Scaling", "VPC"]
  },

  {
    title: "Amazon EKS Production Automation",
    category: "Kubernetes",
    description:
      "Provisioned production-ready Kubernetes infrastructure using Terraform with managed EKS node groups, IRSA based IAM access control, and AWS Load Balancer Controller integration.",
    technologies: ["AWS", "EKS", "Terraform", "Kubernetes"]
  },

  {
    title: "Infrastructure Inventory Management Platform",
    category: "Internal Automation Tool",
    description:
      "Developed internal infrastructure asset management platform using Spring Boot, MySQL, and ReactJS to track hardware and software inventory improving audit readiness and compliance tracking.",
    technologies: ["Spring Boot", "ReactJS", "MySQL"]
  },

  {
    title: "IdeaGen Pro – AI SaaS",
    category: "Personal Project",
    description:
      "AI SaaS platform generating startup ideas using modern web architecture with real-time streaming responses and secure authentication.",
    technologies: ["Next.js", "FastAPI", "OpenAI"]
  },

  {
    title: "MediNotes Pro – AI Healthcare SaaS",
    category: "Personal Project",
    description:
      "Containerized AI assistant for transforming doctor consultation notes into structured summaries.",
    technologies: ["Next.js", "FastAPI", "Docker"]
  }

];

export const certifications = [
  {
    name: "Advanced Cloud Computing & DevOps Certification from Learnbay, in collaboration with Microsoft",
    provider: "Learnbay",
  },
  {
    name: "AI Engineer MLOps Track-Deploy Gen AI & Agentic AI at Scale",
    provider: "Udemy"
  },
  {
    name: "PromptOps  AI-Powered DevOps",
    provider: "Udemy"
  },
  {
    name: "Complete VMWare vSphere ESXi and vCenter Administration",
    provider: "Udemy"
  },
  {
    name: "Java Full Stack Development",
    provider: "TalentSprint / Q-J Spiders"
  }
];

export const stats = {
  experienceYears: 2.4,
  projects: 8,
  certifications: 5,
  // Key achievements
  vmsManaged: "1500+",
  esxiHosts: "100+",
  backupStorage: "10+ PB",
  uptime: "99.9%"
};

export const projectsPage = {
  tagline: "Selected projects demonstrating real-world DevOps, Cloud, and automation expertise"
};