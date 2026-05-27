// Technologies (flat array for Home page)

export const technologies = [
  "AWS",
  "Terraform",
  "Kubernetes",
  "Docker",
  "GitHub Actions",
  "Jenkins",
  "Ansible",
  "Argo CD",
  "Helm",
  "ELK Stack",
  "Prometheus",
  "Grafana",
  "Python",
  "Shell Scripting",
  "VMware vSphere",
  "Linux",
  "Windows Server",
  "Commvault",
  "N8N"
];

/**
 * PORTFOLIO — SINGLE SOURCE OF TRUTH
 * Author: Digambar Rajaram
 */

export const personalInfo = {
  name: "Digambar Rajaram",
  title: "DevOps & Cloud Infrastructure Engineer",
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
    "Building Reliable Infrastructure at Scale — CI/CD, GitOps, Kubernetes & Cloud-Native DevOps on AWS",

  intro: [
    "DevOps & Cloud Infrastructure Engineer with 2+ years of production experience at Protean eGov Technologies, building CI/CD pipelines, managing AWS cloud infrastructure, and operating Kubernetes (EKS) workloads at scale for government-grade platforms (NPS, PAN, eSign) serving 300M+ users.",

    "Provisioned and maintained production EKS clusters via Terraform, managed GitOps deployments with Argo CD and Helm Charts, enforced Kubernetes RBAC and network policies, and ran a unified observability stack (Prometheus, Grafana, kube-state-metrics, ELK) across both EKS and VMware environments.",

    "Maintained 99.9%+ uptime across 1500+ VMs on a large-scale VMware vSphere environment (100+ ESXi hosts), driving performance optimization, zero-downtime upgrades, and infrastructure reliability at enterprise scale.",

    "Led disaster recovery and backup operations for a 10+ PB Commvault environment, automating DR failover with Ansible and reducing recovery time by 60% while consistently meeting RPO/RTO targets.",

    "Promoted to Assistant Manager within 6 months, leading a 6-member infrastructure team, handling P1/P2 incidents, and enforcing ITIL-driven change management to reduce production risks and improve system stability."
  ],

  expertise: [
    "CI/CD pipelines, GitOps (Argo CD, Helm, Kustomize), and IaC (Terraform, Ansible, GitHub Actions)",
    "Kubernetes (EKS) — RBAC, Network Policies, PVCs, EBS CSI, IRSA/OIDC, AWS Load Balancer Controller",
    "AWS cloud infrastructure, VMware vSphere datacenter operations & enterprise backup (Commvault 10+ PB)"
  ],

  approach: [
    "security-first mindset — from OS hardening and RBAC to X-Pack TLS, Sealed Secrets, and least-privilege IAM",
    "end-to-end ownership across infrastructure, automation, and monitoring",
    "building systems that are stable, auditable, and resilient under real-world load"
  ]
};

export const skills = {

  cloudDevOps: [
    "AWS (EC2, S3, IAM, VPC, Lambda, API Gateway, EKS, CloudWatch, ALB/NLB, Route 53, CloudFront, ECR, KMS)",
    "Terraform (modules, remote state, S3 + DynamoDB locking)",
    "Docker (multi-stage builds) & Containerization",
    "Kubernetes (EKS)",
    "Argo CD (GitOps)",
    "Helm Charts & Kustomize",
    "Jenkins",
    "GitHub Actions",
    "Ansible",
    "Agile/Scrum SDLC",
    "Cloud service models (IaaS, PaaS, SaaS)",
    "Workflow automation with N8N"
  ],

  kubernetesAndSecurity: [
    "RBAC (Roles, ClusterRoles, RoleBindings)",
    "Pod Security Admission",
    "Network Policies (VPC CNI)",
    "PersistentVolumeClaims & StorageClasses",
    "EBS CSI Driver",
    "IRSA / OIDC",
    "AWS Load Balancer Controller",
    "Sealed Secrets",
    "IMDSv2 & KMS"
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
    "Prometheus & kube-state-metrics",
    "Grafana",
    "Amazon CloudWatch",
    "Python",
    "Shell Scripting"
  ],

  networking: [
    "TCP/IP, DNS, DHCP",
    "AWS VPC, Security Groups, NACLs",
    "CNI (VPC CNI)",
    "Kubernetes Network Policies"
  ]
};

export const experience = [
  {
    company: "Protean eGov Technologies Ltd (formerly NSDL eGov Infrastructure Ltd)",
    location: "Mumbai, Maharashtra, India",
    role: "Assistant Manager – DevOps & Cloud Infrastructure Engineer",
    duration: "Mar 2023 – Jun 2025",
    domain: "India's largest government platforms (NPS, PAN, TIN, CRA, eSign) — 300M+ users",

    responsibilities: [
      "Built and maintained Jenkins CI/CD pipelines for AWS EKS and VMware on-prem deployments with separate environment workflows, automated build triggers, test stages, Slack notifications, and rollback triggers; integrated Argo CD for GitOps-driven Kubernetes sync and deployed environment-specific configurations via Kustomize overlays",

      "Designed end-to-end EKS deployment pipeline: GitHub webhook → Maven build → Docker multi-stage image → ECR push → Helm chart deploy → Argo CD sync, with automated rollback and environment-specific Helm value overrides",

      "Authored Terraform IaC modules for AWS (EC2, VPC, ALB, IAM, EKS node groups) and VMware vSphere; managed remote state with S3 + DynamoDB locking ensuring safe concurrent deployments across teams",

      "Provisioned 2 production EKS clusters (20–40 worker nodes) via Terraform; enforced Kubernetes RBAC (Roles, ClusterRoles, RoleBindings) for least-privilege access control and implemented Pod Security Admission policies to restrict privileged workloads across namespaces",

      "Managed Kubernetes persistent storage for stateful workloads using PersistentVolumeClaims, StorageClasses, and the EBS CSI Driver — handling dynamic provisioning, volume binding, and lifecycle management across dev and production environments",

      "Configured Kubernetes Network Policies (VPC CNI) to enforce pod-to-pod traffic segmentation between namespaces; managed AWS Load Balancer Controller for production ingress routing alongside IRSA/OIDC for pod-level IAM",

      "Managed Kubernetes secrets using Sealed Secrets for GitOps-safe secret storage; containerised microservices (eSign, eKYC) via Docker multi-stage builds deployed via Helm Charts with namespace isolation and resource limits",

      "Deployed Kubernetes-native observability stack: Prometheus with kube-state-metrics and metrics-server for cluster and workload metrics, Grafana dashboards for pod/node/namespace visibility, and ELK Stack for centralised log aggregation — covering both EKS and VMware environments",

      "Configured ElastAlert2 detection rules (SSH brute force, CPU spikes, error rate thresholds) achieving sub-5-minute MTTD; vROps alerting for VMware resource contention reduced unplanned downtime by ~40%",

      "Maintained 99.9%+ uptime across 1500+ VMs for NPS, PAN, TIN, CRA, and eSign platforms serving 60M+ NPS subscribers and 300M+ PAN cardholders; executed zero-downtime ESXi upgrades across 100+ hosts with Python/Shell pre/post-validation scripts",

      "Automated VM provisioning via Ansible achieving 100% monthly patch compliance, eliminating configuration drift across 1500+ Windows Server (2016/2019/2022) and Linux VMs",

      "Led daily operations of a 6-member infrastructure team; served as escalation point for P1/P2 incidents and conducted structured Root Cause Analysis (RCA) for all major events",

      "Participated in CAB meetings and enforced ITIL-aligned change management processes, reducing change-related incidents by standardizing pre-change checklists",

      "Built an internal infrastructure asset management platform using Spring Boot, MySQL, and ReactJS to replace manual spreadsheet tracking of 1500+ hardware/software assets, reducing audit preparation time by ~50%"
    ],

    achievements: [
      "Promoted to Assistant Manager within 6 months based on operational ownership and leadership.",
      "Designed and owned end-to-end GitOps-based EKS deployment pipeline adopted across production environments.",
      "Reduced DR drill time by 60% through Ansible-driven disaster recovery automation."
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
    title: "AWS EKS Production Architecture",
    category: "Kubernetes / GitOps",
    description:
      "Built a full GitOps-ready EKS architecture: multi-AZ VPC, ALB, Auto Scaling Groups, managed node groups, IRSA/OIDC, EBS CSI for persistent storage, Kubernetes RBAC and Network Policies, Argo CD sync, and Kustomize overlays for environment promotion.",
    technologies: ["AWS", "EKS", "Terraform", "Kubernetes", "Helm", "Argo CD", "Kustomize", "IRSA"]
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
      "Built a simulated DevOps incident response platform on AWS using Terraform infrastructure to evaluate automated incident analysis using CloudWatch metrics, logs, and CI/CD deployment telemetry. Validated via failure injection testing with GitHub Actions OIDC auth.",
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
    title: "Infrastructure Inventory Management Platform",
    category: "Internal Automation Tool",
    description:
      "Developed internal infrastructure asset management platform using Spring Boot, MySQL, and ReactJS to track hardware and software inventory improving audit readiness and compliance tracking. Reduced audit preparation time by ~50%.",
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
    completedDate: "May 2026"
  },
  {
    name: "AI Engineer MLOps Track – Deploy GenAI & Agentic AI at Scale",
    provider: "Udemy"
  },
  {
    name: "PromptOps – AI-Powered DevOps",
    provider: "Udemy"
  },
  {
    name: "Complete VMware vSphere ESXi and vCenter Administration",
    provider: "Udemy"
  },
  {
    name: "Java Full Stack Development",
    provider: "TalentSprint / Q-J Spiders"
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    provider: "CNCF",
    status: "Pursuing"
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
  uptime: "99.9%",
  usersServed: "300M+"
};

export const projectsPage = {
  tagline: "Selected projects demonstrating real-world DevOps, Cloud, Kubernetes, and automation expertise"
};