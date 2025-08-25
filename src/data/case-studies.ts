import { CaseStudy } from '@/types/content';

export const caseStudies: CaseStudy[] = [
  {
    id: 'medsync-pharmacy-implementation',
    title: 'MedSync Implementation at Regional Health System',
    slug: 'medsync-pharmacy-implementation',
    client: 'Regional Health System',
    industry: 'Healthcare System',
    challenge: 'A regional health system with 15 pharmacies was struggling with medication synchronization, leading to 23% medication errors, poor patient adherence, and inefficient pharmacy workflows. Patients were frequently missing doses due to inconsistent refill schedules.',
    solution: 'Implemented MedSync across all 15 pharmacy locations with custom integration to their existing EHR system. Provided comprehensive staff training and established medication synchronization protocols. Created automated refill management and patient communication systems.',
    results: [
      'Reduced medication errors by 87% within 6 months',
      'Improved patient adherence rates from 68% to 94%',
      'Streamlined pharmacy workflows, reducing refill processing time by 65%',
      'Enhanced patient satisfaction scores from 6.2 to 9.1/10',
      'Generated $2.3M in annual cost savings through reduced readmissions'
    ],
    metrics: [
      {
        label: 'Medication Errors',
        value: '87% Reduction',
        change: 'From 23% to 3%'
      },
      {
        label: 'Patient Adherence',
        value: '94% Rate',
        change: '+26% improvement'
      },
      {
        label: 'Processing Time',
        value: '65% Faster',
        change: 'From 45 to 16 minutes'
      },
      {
        label: 'Cost Savings',
        value: '$2.3M Annual',
        change: 'Through reduced readmissions'
      }
    ],
    featured: true
  },
  {
    id: 'stewardai-diagnostic-accuracy',
    title: 'StewardAI Improves Diagnostic Accuracy at Teaching Hospital',
    slug: 'stewardai-diagnostic-accuracy',
    client: 'University Teaching Hospital',
    industry: 'Academic Medical Center',
    challenge: 'A major teaching hospital was experiencing diagnostic delays and accuracy issues, particularly in emergency departments. Physicians were struggling with complex cases, leading to longer patient stays and increased healthcare costs.',
    solution: 'Deployed StewardAI across emergency departments and radiology units. Integrated AI decision support with existing clinical workflows. Provided specialized training for medical staff on AI-assisted diagnosis and treatment planning.',
    results: [
      'Improved diagnostic accuracy by 42% in emergency cases',
      'Reduced diagnostic time by 58% for complex cases',
      'Decreased average patient length of stay by 2.3 days',
      'Enhanced physician confidence scores by 31%',
      'Generated $1.8M in annual cost savings'
    ],
    metrics: [
      {
        label: 'Diagnostic Accuracy',
        value: '42% Improvement',
        change: 'From 78% to 94%'
      },
      {
        label: 'Diagnostic Time',
        value: '58% Faster',
        change: 'From 4.2 to 1.8 hours'
      },
      {
        label: 'Patient Stay',
        value: '2.3 Days Shorter',
        change: 'From 6.1 to 3.8 days'
      },
      {
        label: 'Cost Savings',
        value: '$1.8M Annual',
        change: 'Through efficiency gains'
      }
    ],
    featured: true
  },
  {
    id: 'healthcare-consulting-transformation',
    title: 'Digital Transformation Strategy for Rural Healthcare Network',
    slug: 'healthcare-consulting-transformation',
    client: 'Rural Healthcare Network',
    industry: 'Rural Healthcare',
    challenge: 'A network of 8 rural hospitals and 12 clinics was struggling with outdated technology, poor patient engagement, and inefficient operations. They needed a comprehensive digital transformation strategy to improve care quality and operational efficiency.',
    solution: 'Conducted comprehensive technology assessment and developed a 3-year digital transformation roadmap. Implemented phased technology upgrades, staff training programs, and new patient engagement platforms. Established performance monitoring and continuous improvement processes.',
    results: [
      'Modernized technology infrastructure across all facilities',
      'Improved patient engagement by 73% through digital platforms',
      'Reduced operational costs by 28% through process optimization',
      'Enhanced care coordination between facilities by 89%',
      'Increased patient satisfaction scores from 5.8 to 8.7/10'
    ],
    metrics: [
      {
        label: 'Patient Engagement',
        value: '73% Improvement',
        change: 'Through digital platforms'
      },
      {
        label: 'Operational Costs',
        value: '28% Reduction',
        change: 'Through optimization'
      },
      {
        label: 'Care Coordination',
        value: '89% Enhancement',
        change: 'Between facilities'
      },
      {
        label: 'Patient Satisfaction',
        value: '8.7/10 Score',
        change: '+2.9 point improvement'
      }
    ],
    featured: false
  },
  {
    id: 'seo-website-success',
    title: 'SEO-Optimized Website Drives 340% Increase in Healthcare Leads',
    slug: 'seo-website-success',
    client: 'Specialty Medical Practice',
    industry: 'Specialty Medicine',
    challenge: 'A growing specialty medical practice was struggling with low online visibility and poor lead generation. Their existing website was outdated, not mobile-friendly, and lacked proper SEO optimization, resulting in minimal organic traffic.',
    solution: 'Designed and developed a modern, SEO-optimized website with healthcare-specific content strategy. Implemented local SEO optimization, mobile-first design, and content marketing strategy. Created patient education resources and online appointment booking system.',
    results: [
      'Increased organic website traffic by 340% in 8 months',
      'Improved search rankings for 45+ healthcare keywords',
      'Generated 156% more qualified leads through website',
      'Enhanced mobile user experience with 98% mobile optimization score',
      'Reduced patient acquisition costs by 42%'
    ],
    metrics: [
      {
        label: 'Organic Traffic',
        value: '340% Increase',
        change: 'In 8 months'
      },
      {
        label: 'Search Rankings',
        value: '45+ Keywords',
        change: 'Top 3 positions'
      },
      {
        label: 'Lead Generation',
        value: '156% More Leads',
        change: 'Through website'
      },
      {
        label: 'Mobile Score',
        value: '98% Optimization',
        change: 'Lighthouse score'
      }
    ],
    featured: false
  }
];

// Helper functions
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(caseStudy => caseStudy.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter(caseStudy => caseStudy.featured);
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  return caseStudies.filter(caseStudy => caseStudy.industry === industry);
}
