// Content type definitions for EMBRION website

export interface Service {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  features: string[];
  icon?: string;
  category: 'marketing' | 'development' | 'consulting';
  featured?: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  features: string[];
  benefits: string[];
  thumbnail?: string;
  screenshots?: string[];
  demoUrl?: string;
  pricing?: 'Free' | 'Paid' | 'Enterprise' | 'Contact Sales';
  featured?: boolean;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics?: Array<{
    value: string;
    label: string;
    change?: string;
  }>;
  technologies: string[];
  tools: string[];
  platforms: string[];
  category: string;
  featured?: boolean;
  image?: string;
  publishedAt: string;
  client: string;
  industry: string;
  caseStudyUrl?: string;
  liveUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  tags: string[];
  featured?: boolean;
  readTime?: number; // in minutes
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  linkedin?: string;
  twitter?: string;
  featured?: boolean;
}

export interface JobPosting {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: string;
  applyEmail: string;
  featured?: boolean;
}
