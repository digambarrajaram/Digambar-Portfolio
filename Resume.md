DIGAMBAR RAJARAM
DevOps & Cloud Infrastructure Engineer
+91-7353570952 | digambarrajaram2@gmail.com | LinkedIn : https://www.linkedin.com/in/digambar-rajaram-8371b51a5 | GitHub : https://github.com/digambarrajaram | Portfolio : https://digambarrajaram.cloud/
PROFESSIONAL SUMMARY
From managing 1500+ VMs across VMware on-prem to deploying containerised microservices on AWS EKS, I bring 2+ years of production DevOps and infrastructure experience at Protean eGov Technologies, supporting India's largest government platforms: NPS, PAN, TIN, CRA, and eSign. I have built and operated CI/CD pipelines with Jenkins and Terraform, containerised workloads on EKS, and a unified observability stack (Prometheus, Grafana, ELK) across hybrid environments. Currently completing the Advanced Cloud Computing & DevOps certification from Learnbay (Microsoft) and actively seeking DevOps / Cloud Engineer roles.
TECHNICAL SKILLS
CI/CD & Automation	Jenkins, GitHub Actions, Ansible, Terraform (IaC), Python, Shell Scripting
Containers & K8s	Docker, Kubernetes (EKS), Helm, IRSA/OIDC, AWS Load Balancer Controller
AWS Cloud	EC2, S3, IAM, VPC, EKS, ALB/NLB, CloudWatch, Lambda, API Gateway, Route 53, CloudFront
Observability	Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana, Filebeat, ElastAlert2), CloudWatch
Infrastructure	VMware vSphere, ESXi, vCenter, HA/DRS, vMotion, vROps, Commvault (10+ PB DR)
Networking	TCP/IP, IPv4/IPv6, DNS, DHCP, OSI Model; AWS VPC, Security Groups, NACLs, Route Tables
Dev & Tooling	Java Spring Boot, ReactJS, MySQL; GitHub, Agile/Scrum, ITIL Change Management
PROFESSIONAL EXPERIENCE
Assistant Manager – DevOps & Infrastructure | Protean eGov Technologies Ltd, Mumbai | Mar 2023 – Jun 2025
CI/CD & DevOps Automation
•	Built and maintained Jenkins CI/CD pipelines for application deployments across VMware on-prem and AWS, automating build triggers, test stages, and environment-specific workflows with separate pipelines per environment. Reduced deployment errors and release cycle time.
•	Authored Terraform IaC to provision and manage infrastructure on VMware vSphere (vSphere provider) and AWS, covering EC2, VPC, ALB, Security Groups, IAM, and EKS node groups for version-controlled, repeatable environment builds.
•	Automated VM provisioning and OS hardening via Ansible playbooks, enforcing configuration baselines as code, achieving 100% monthly patch compliance, and eliminating configuration drift across 1500+ production and DR VMs.
•	Designed Ansible-based DR automation playbooks for VMware failover, cutting drill execution time by 60% and consistently meeting RPO/RTO SLAs across quarterly audits.
•	Wrote Python and Shell scripts to automate VM inventory reporting, log rotation, patch validation, and Jenkins health checks, reducing manual effort by ~40% per weekly ops cycle.
AWS Cloud & Containers (EKS)
•	Contributed to the deployment and management of containerised eSign and eKYC API services on AWS EKS as part of a cross-functional infrastructure team. Personally responsible for Terraform provisioning of 2 EKS clusters (20–40 EC2 worker nodes), managed node group configuration, IRSA/OIDC for pod-level IAM, and AWS Load Balancer Controller setup for production ingress routing.
•	Containerised microservices using Docker (multi-stage builds) and managed Kubernetes workloads via Helm charts, handling rollbacks and environment-specific value overrides. On-prem workloads ran natively on VMware VMs as OS services.
•	Built Jenkins pipelines for EKS deployments: GitHub webhook → Maven build → Docker image → ECR push → Helm deploy, with rollback triggers and Slack notifications.
•	Provisioned multi-AZ AWS networking using Terraform, including VPC, ALB, NAT Gateways, IAM least-privilege policies, S3 + DynamoDB remote state locking, IMDSv2, and KMS encryption.
Observability & Monitoring
•	Deployed a unified observability stack spanning both environments: Prometheus + Grafana for VMware metrics, Amazon CloudWatch for AWS, and ELK Stack (Elasticsearch, Logstash, Kibana, Filebeat) for centralised log aggregation.
•	Configured ElastAlert2 detection rules for SSH brute force, CPU spikes, and high error rates, with Slack/email alerting achieving sub-5-minute MTTD.
•	Built proactive vROps monitoring with alerting thresholds for CPU Ready, memory contention, and storage latency. Incident response runbooks reduced unplanned downtime by ~40%.
•	Administered 10+ PB enterprise backup using Commvault, serving as the DR backbone for NPS and PAN platforms used by millions of Indian citizens.
Infrastructure Reliability & Leadership
•	Maintained 99.9%+ uptime across 1500+ VMs supporting NPS, PAN, TIN, CRA, and eSign — platforms serving 60M+ NPS subscribers and 300M+ PAN cardholders annually.
•	Executed zero-downtime ESXi lifecycle upgrades across 100+ hosts by scripting pre/post-validation checks in Python/Shell and coordinating rolling maintenance windows via CAB. Zero production incidents across all upgrade cycles.
•	Promoted to Assistant Manager (Sep 2023) within 6 months of joining. Led a 6-member team, served as escalation point for P1/P2 incidents, and drove structured RCA for all major events.
•	Built an internal asset management platform (Spring Boot + MySQL + ReactJS) replacing spreadsheet-based tracking of 1500+ assets, reducing audit preparation time by ~50%.
DEVOPS & CLOUD PROJECTS
ELK Stack – Centralized Log Aggregation & Observability Platform (AWS + Terraform)
•	Provisioned a production-style ELK Stack on AWS EC2 using Terraform (IaC end-to-end) with Docker Compose for Elasticsearch, Logstash, Kibana, and Filebeat.
•	Built multi-source Logstash ingestion pipelines with Grok filters to parse and enrich Nginx access logs, application logs, and OS syslog before indexing into Elasticsearch 8.x.
•	Designed Kibana dashboards for real-time infrastructure health, Nginx request analytics, and error-rate tracking across services.
•	Implemented ElastAlert2 detection rules for anomaly detection (high error rate, SSH brute force, CPU spikes) with Slack/email alerting — achieving sub-5-minute MTTD.
•	Hardened the cluster with X-Pack TLS, RBAC, and Index Lifecycle Management (ILM) policies to enforce security and manage storage costs at scale.
AI-Driven DevOps Incident Management Platform (AWS)
•	Built production-style AWS infrastructure using Terraform (IaC) with a simulated DevOps Agent workflow evaluating CloudWatch logs/metrics; correlated CI/CD deployment history for automated incident assessment with GitHub Actions (OIDC auth).
•	Performed failure injection testing to validate incident detection and response behaviour across AWS services.
AWS Networking, Auto Scaling & EKS Production Architecture
•	Provisioned multi-AZ VPC architecture using Terraform with ALB, Auto Scaling Groups, and NAT Gateways for high availability.
•	Configured remote backend using S3 + DynamoDB state locking; enforced IMDSv2, KMS encryption, and least-privilege IAM practices.
•	Provisioned EKS cluster with managed node groups using Terraform; implemented IRSA with OIDC for pod-level IAM access control and AWS Load Balancer Controller for production-grade ingress routing.
Enterprise DevOps CI/CD Pipeline – Jenkins, Maven, Docker & Ansible
•	Designed and implemented enterprise-grade CI/CD pipeline for Java web application.
•	Integrated GitHub → Jenkins pipeline automation for build triggers.
•	Configured Maven build lifecycle (compile, test, package WAR).
•	Built optimized Docker images using multi-stage builds.
•	Automated deployment using Ansible playbooks.
TRAINING & UPSKILLING
•	Advanced Cloud Computing & DevOps Certification from Learnbay, in collaboration with Microsoft (Completed May 2026)
•	AI Engineer MLOps Track – Deploy GenAI & Agentic AI at Scale (Udemy)
•	VMware vSphere ESXi & vCenter Administration (Udemy)
•	Java Full Stack Development – TalentSprint / Q-J Spiders
EDUCATION
Bachelor of Engineering (BE) - Computer Science and Engineering
VSM’s S.R. Kothiwale Institute of Technology, Nipani, Belagavi | Sep 2018 – Jul 2022

