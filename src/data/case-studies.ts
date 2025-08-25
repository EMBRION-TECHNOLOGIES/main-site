import type { CaseStudy } from "@/types/content";

export const caseStudies: CaseStudy[] = [
  {
    id: "healthcare-digital-transformation",
    slug: "healthcare-digital-transformation",
    title: "Regional Hospital Network Digital Transformation",
    summary: "Complete digital transformation of a 15-hospital network using MedSync and StewardAI",
    description: "A major regional healthcare network was struggling with outdated systems, poor patient engagement, and inefficient operations. They needed a comprehensive digital transformation strategy to improve care quality and operational efficiency.",
    challenge: "The network faced fragmented technology systems, poor patient engagement, and inefficient workflows that were impacting care quality and increasing operational costs.",
    solution: "Implemented a phased digital transformation using MedSync for medication management and StewardAI for clinical decision support. Provided comprehensive staff training and established new digital workflows.",
    results: [
      "Modernized technology infrastructure across all 15 facilities",
      "Improved patient engagement by 73% through digital platforms",
      "Reduced operational costs by 28% through process optimization",
      "Enhanced care coordination between facilities by 89%",
      "Increased patient satisfaction scores from 5.8 to 8.7/10"
    ],
    metrics: [
      { value: "73%", label: "Patient Engagement Increase", change: "+73%" },
      { value: "28%", label: "Cost Reduction", change: "-28%" },
      { value: "89%", label: "Care Coordination Improvement", change: "+89%" },
      { value: "8.7/10", label: "Patient Satisfaction", change: "+2.9 points" }
    ],
    technologies: ["MedSync", "StewardAI", "Next.js", "React", "Node.js"],
    tools: ["AWS", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    platforms: ["Web", "Mobile", "Tablet"],
    category: "healthcare",
    featured: true,
    image: "/images/case-studies/healthcare-transformation.jpg",
    publishedAt: "2024-12-01",
    client: "Regional Healthcare Network",
    industry: "Healthcare System",
    caseStudyUrl: "/case-studies/healthcare-digital-transformation",
    liveUrl: "/products/medsync"
  },
  {
    id: "interpocket-mvp",
    slug: "interpocket-mvp",
    title: "Interpocket: Peer-to-Peer Wallet MVP Development",
    summary: "Rapid MVP development for Interpocket fintech startup in 3 months",
    description: "Interpocket needed to quickly develop and launch a secure peer-to-peer wallet platform to meet investor deadlines and start user acquisition. They required a scalable, secure solution that could handle virtual financial connections and real-time transactions.",
    challenge: "Tight 3-month deadline to develop a secure, scalable peer-to-peer wallet platform with complex compliance requirements and real-time transaction capabilities.",
    solution: "Built Interpocket using React Native for mobile apps and a robust Node.js backend. Implemented security best practices and compliance features from day one, creating a seamless virtual pocket connection experience.",
    results: [
      "Successfully launched Interpocket MVP within 3-month deadline",
      "Achieved 10,000+ users in first quarter",
      "Processed $2M+ in transactions in first 6 months",
      "Maintained 99.9% uptime during launch period",
      "Received positive investor feedback and secured funding",
      "Successfully launched on Google Play Store"
    ],
    metrics: [
      { value: "3 months", label: "MVP Development Time", change: "On schedule" },
      { value: "10,000+", label: "Users in Q1", change: "Exceeded target" },
      { value: "$2M+", label: "Transaction Volume", change: "+$2M" },
      { value: "99.9%", label: "Uptime", change: "Above SLA" }
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS"],
    tools: ["Docker", "Jest", "Cypress", "GitHub Actions", "Sentry"],
    platforms: ["iOS", "Android", "Web"],
    category: "fintech",
    featured: true,
    image: "/images/case-studies/fintech-mvp.jpg",
    publishedAt: "2024-11-15",
    client: "Interpocket Payment Solutions Limited",
    industry: "Financial Technology",
    caseStudyUrl: "/case-studies/interpocket-mvp",
    liveUrl: "/products/interpocket"
  },
  {
    id: "numsa-website-redesign",
    slug: "numsa-website-redesign",
    title: "NUMSA: Medical Students Association Website Redesign",
    summary: "Complete website redesign for NUMSA improving student engagement and information access",
    description: "The Nile University Medical Students Association (NUMSA) was struggling with poor online presence, difficult student navigation, and outdated content management. They needed a modern, user-friendly website that could improve student engagement and showcase their activities and initiatives.",
    challenge: "Outdated website design, poor mobile experience, difficult content management, and low student engagement leading to missed opportunities and poor user experience for medical students.",
    solution: "Designed and developed a modern, responsive website for NUMSA using Next.js and Tailwind CSS. Implemented a user-friendly CMS and created an intuitive information architecture focused on medical student needs, including event management and resource sharing.",
    results: [
      "Increased online inquiries by 200% in first 6 months",
      "Improved mobile user experience with 98% mobile optimization score",
      "Enhanced content management efficiency by 75%",
      "Increased student engagement by 85% through better navigation",
      "Reduced support requests by 60% through improved information architecture",
      "Successfully launched on Netlify with excellent performance"
    ],
    metrics: [
      { value: "200%", label: "Inquiry Increase", change: "+200%" },
      { value: "98%", label: "Mobile Optimization", change: "Excellent" },
      { value: "75%", label: "Content Management Efficiency", change: "+75%" },
      { value: "60%", label: "Support Request Reduction", change: "-60%" }
    ],
    technologies: ["Next.js", "Tailwind CSS", "React", "Strapi CMS", "PostgreSQL"],
    tools: ["Figma", "GitHub", "Vercel", "Google Analytics", "Hotjar"],
    platforms: ["Web", "Mobile"],
    category: "education",
    featured: false,
    image: "/images/case-studies/university-redesign.jpg",
    publishedAt: "2024-10-20",
    client: "Nile University Medical Students Association (NUMSA)",
    industry: "Education",
    caseStudyUrl: "/case-studies/numsa-website-redesign",
    liveUrl: "/products/numsa"
  },
  {
    id: "nigeria-diaspora-initiative",
    slug: "nigeria-diaspora-initiative",
    title: "Nigeria Diaspora Initiative: Community Platform Development",
    summary: "Comprehensive diaspora community platform connecting Nigerians worldwide",
    description: "The Nigeria Diaspora Initiative needed a modern, accessible platform to showcase the efforts and activities of Nigerians in the diaspora. They required a solution that could connect Nigerians worldwide, showcase diaspora contributions, and build a global community.",
    challenge: "Creating a platform that could effectively represent and connect the diverse Nigerian diaspora community while providing an engaging user experience and easy content management for global accessibility.",
    solution: "Developed a modern web platform using Next.js and Tailwind CSS, featuring dynamic content management, community engagement tools, and responsive design for global accessibility. Implemented a user-friendly CMS for easy content updates.",
    results: [
      "Successfully launched diaspora community platform",
      "Connected Nigerians across multiple continents",
      "Enhanced content management efficiency by 80%",
      "Improved mobile user experience with 95% optimization score",
      "Increased community engagement by 150%",
      "Successfully deployed on Vercel with global CDN"
    ],
    metrics: [
      { value: "80%", label: "Content Management Efficiency", change: "+80%" },
      { value: "95%", label: "Mobile Optimization", change: "Excellent" },
      { value: "150%", label: "Community Engagement", change: "+150%" },
      { value: "Global", label: "Geographic Reach", change: "Worldwide" }
    ],
    technologies: ["Next.js", "Tailwind CSS", "React", "Vercel", "TypeScript"],
    tools: ["Figma", "GitHub", "Vercel", "Google Analytics", "Responsive Design"],
    platforms: ["Web", "Mobile"],
    category: "community",
    featured: false,
    image: "/images/case-studies/ndi-platform.jpg",
    publishedAt: "2024-09-15",
    client: "Nigeria Diaspora Initiative",
    industry: "Community & Social Impact",
    caseStudyUrl: "/case-studies/nigeria-diaspora-initiative",
    liveUrl: "/products/nigeria-diaspora-initiative"
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(caseStudy => caseStudy.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter(caseStudy => caseStudy.featured);
}

export function getCaseStudiesByCategory(category: string): CaseStudy[] {
  return caseStudies.filter(caseStudy => caseStudy.category === category);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}
