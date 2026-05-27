import { Metadata } from 'next';
import { personalInfo, about, socialLinks, stats, projects, siteConfig } from '@/data/portfolio';

/**
 * Centralized metadata utility for generating SEO metadata
 * using dynamic data from portfolio.ts
 */

export const SITE_URL = siteConfig.siteUrl;

/**
 * Generate base metadata for the site
 */
export function generateBaseMetadata(): Metadata {
  return {
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: `Professional portfolio of ${personalInfo.name} - ${personalInfo.title} specializing in CI/CD, GitOps, Kubernetes (EKS), AWS, Terraform, and infrastructure automation.`,
    keywords: [
      'DevOps',
      'Cloud Infrastructure Engineer',
      'AWS',
      'Terraform',
      'Kubernetes',
      'EKS',
      'Docker',
      'CI/CD',
      'GitOps',
      'Argo CD',
      'Helm',
      'Kustomize',
      'GitHub Actions',
      'Jenkins',
      'Infrastructure as Code',
      'ELK Stack',
      'Prometheus',
      'Grafana',
      'VMware vSphere',
      'Linux',
      'Windows Server',
      'Commvault',
      'Ansible',
      'Python',
      'Shell Scripting',
      'N8n'
    ],
    authors: [{ name: personalInfo.name }],
    creator: personalInfo.name,
    publisher: personalInfo.name,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: '/',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/favicon.ico',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: SITE_URL,
      title: `${personalInfo.name} | ${personalInfo.title}`,
      description: `Professional portfolio showcasing ${personalInfo.title} projects and expertise.`,
      siteName: `${personalInfo.name} Portfolio`,
      images: [
        {
          url: siteConfig.profileImage,
          width: 1200,
          height: 630,
          alt: `${personalInfo.name} - ${personalInfo.title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${personalInfo.name} | ${personalInfo.title}`,
      description: `Professional portfolio showcasing ${personalInfo.title} projects and expertise.`,
      images: [siteConfig.profileImage],
      creator: socialLinks.twitter ? '@digambarrajaram' : undefined,
      site: socialLinks.twitter ? SITE_URL : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/**
 * Generate metadata for a specific page
 */
export function generatePageMetadata(options: {
  title: string;
  description: string;
}): Metadata {
  return {
    title: `${options.title} | ${personalInfo.name}`,
    description: options.description,
    openGraph: {
      title: `${options.title} | ${personalInfo.name}`,
      description: options.description,
    },
  };
}

/**
 * Generate about page metadata
 */
export function generateAboutMetadata(): Metadata {
  return generatePageMetadata({
    title: 'About',
    description: `Learn more about ${personalInfo.name}, ${personalInfo.title}. ${about.headline}`,
  });
}

/**
 * Generate projects page metadata
 */
export function generateProjectsMetadata(): Metadata {
  const projectCount = projects.length;
  return generatePageMetadata({
    title: 'Projects',
    description: `Explore ${projectCount} DevOps and Cloud Infrastructure projects by ${personalInfo.name}, featuring AWS, Kubernetes (EKS), GitOps pipelines, CI/CD automation, and observability platforms.`,
  });
}

/**
 * Generate resume page metadata
 */
export function generateResumeMetadata(): Metadata {
  return generatePageMetadata({
    title: 'Resume',
    description: `Download the resume of ${personalInfo.name} - ${personalInfo.title}. Experience with AWS, Terraform, Kubernetes, Argo CD, Helm, CI/CD automation, and VMware infrastructure.`,
  });
}

/**
 * Generate contact page metadata
 */
export function generateContactMetadata(): Metadata {
  return generatePageMetadata({
    title: 'Contact',
    description: `Get in touch with ${personalInfo.name} for ${personalInfo.title} opportunities, collaborations, or inquiries.`,
  });
}

/**
 * Export personal info for use in components
 */
export { personalInfo, about, socialLinks, stats, siteConfig };