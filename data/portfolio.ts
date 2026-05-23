// Technologies (flat array for Home page)

export const technologies = [
  "AWS",
  "Terraform",
  "Kubernetes",
  "Docker",
  "GitHub Actions",
  "Jenkins",
  "Ansible",
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
    "Building Reliable Infrastructure at Scale — Enterprise VMware Platforms and Cloud-Native DevOps on AWS",

  intro: [
    "DevOps & Cloud Infrastructure Engineer with 2+ years of enterprise production experience managing large-scale infrastructure for mission-critical government financial platforms. Skilled in AWS, VMware vSphere, CI/CD automation, containerization, and Infrastructure as Code.",

    "Hands-on experience operating VMware vSphere environments supporting 1500+ virtual machines across 100+ ESXi hosts, ensuring high availability, disaster recovery readiness, and performance optimization.",

    "Focused on modern DevOps practices including Docker, Kubernetes, CI/CD automation, and AWS cloud deployments, with a strong emphasis on reliability, observability, security, and production-ready infrastructure."
  ],

  // Supporting content for AboutSummary component
  expertise: [
    "AWS cloud infrastructure",
    "VMware vSphere datacenter operations",
    "modern DevOps practices including CI/CD automation, containerization, and infrastructure as code"
  ],

  approach: [
    "security-first mindset",
    "OS hardening and access controls to observability and monitoring",
    "ensuring systems remain stable, auditable, and resilient under real-world load"
  ]
};

export const skills = {

  cloudDevOps: [
    "AWS (EC2, S3, IAM, VPC, Lambda, API Gateway, EKS, CloudWatch, ALB/NLB)",
    "Terraform (Infrastructure as Code)",
    "Docker & Containerization",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "Ansible"
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
    role: "Assistant Manager – Infrastructure & DevOps",
    duration: "Mar 2023 – Jun 2025",
    domain: "National Pension System (NPS) – Government Financial Platform",

    responsibilities: [

      "Managed large-scale VMware vSphere infrastructure supporting 1500+ virtual machines across production and disaster recovery environments.",

      "Maintained clustered virtualization environment consisting of 100+ ESXi hosts ensuring high availability using HA, DRS, and vMotion migrations.",

      "Performed ESXi lifecycle management including firmware validation, upgrades, and patch management while minimizing service disruption.",

      "Administered Windows Server and Linux systems including provisioning, patching, and security hardening aligned with enterprise standards.",

      "Managed enterprise backup environment exceeding 10+ PB using Commvault ensuring reliable backup, restore validation, and compliance readiness.",

      "Automated disaster recovery failover processes using Ansible scripts and validated RPO/RTO objectives during DR drills.",

      "Optimized infrastructure performance using VMware vRealize Operations analytics including CPU Ready metrics, memory contention analysis, and storage latency monitoring.",

      "Led day-to-day operations of a 6-member infrastructure team ensuring SLA adherence and operational stability.",

      "Acted as escalation point for critical incidents performing root cause analysis and implementing preventive improvements.",

      "Participated in change management and CAB processes ensuring safe infrastructure changes across production environments."
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
    "Built a production-style ELK Stack on AWS EC2 using Terraform (IaC end-to-end) with Docker Compose. Engineered multi-source Logstash pipelines with Grok filters to parse Nginx, application, and syslog data into Elasticsearch 8.x. Designed Kibana dashboards for real-time infrastructure health and error rate tracking. Implemented ElastAlert2 anomaly detection rules with Slack/email alerting achieving sub-5-minute MTTD. Hardened the cluster with X-Pack TLS, RBAC, and ILM policies for security and storage management.",
  technologies: ["Elasticsearch", "Logstash", "Kibana", "Filebeat", "ElastAlert2", "AWS EC2", "Terraform", "Docker Compose", "Grok"]
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
    name: "Cloud & DevOps Upskilling Program",
    provider: "Learnbay",
  },
  {
    name: "AI Engineer – MLOps Track",
    provider: "Udemy"
  },
  {
    name: "VMware vSphere ESXi & vCenter Administration",
    provider: "Udemy"
  },
  {
    name: "Java Full Stack Development",
    provider: "TalentSprint / Q-J Spiders"
  }
];

export const stats = {
  experienceYears: 2.4,
  projects: 7,
  certifications: 4,
  // Key achievements
  vmsManaged: "1500+",
  esxiHosts: "100+",
  backupStorage: "10+ PB",
  uptime: "99.9%"
};

export const projectsPage = {
  tagline: "Selected projects demonstrating real-world DevOps, Cloud, and automation expertise"
};