import { Product } from '@/types/content';

export const products: Product[] = [
  {
    id: 'medsync',
    name: 'MedSync',
    slug: 'medsync',
    tagline: 'Comprehensive medication synchronization and management platform',
    description: 'MedSync is a comprehensive medication synchronization and management platform designed specifically for healthcare providers. It streamlines medication processes, improves patient safety, and enhances clinical workflow efficiency.',
    features: [
      'Medication synchronization',
      'Patient safety features',
      'Healthcare provider integration',
      'Real-time medication tracking',
      'Automated refill management',
      'Compliance monitoring'
    ],
    benefits: [
      'Reduce medication errors by 85%',
      'Improve patient adherence rates',
      'Streamline pharmacy workflows',
      'Enhance patient communication',
      'Ensure regulatory compliance',
      'Reduce administrative burden'
    ],
    screenshots: [
      '/products/medsync/dashboard.png',
      '/products/medsync/patient-view.png',
      '/products/medsync/medication-list.png'
    ],
    demoUrl: 'https://demo.medsync.embrion.ai',
    pricing: 'Contact Sales',
    featured: true
  },
  {
    id: 'stewardai',
    name: 'StewardAI',
    slug: 'stewardai',
    tagline: 'AI-powered healthcare decision support and patient care optimization',
    description: 'StewardAI leverages artificial intelligence to provide healthcare professionals with intelligent decision support, predictive analytics, and patient care optimization tools. It transforms complex medical data into actionable insights.',
    features: [
      'AI decision support',
      'Patient care optimization',
      'Predictive analytics',
      'Clinical decision algorithms',
      'Real-time monitoring',
      'Evidence-based recommendations'
    ],
    benefits: [
      'Improve diagnostic accuracy by 40%',
      'Reduce treatment planning time by 60%',
      'Enhance patient outcomes',
      'Optimize resource allocation',
      'Support evidence-based medicine',
      'Enable personalized care plans'
    ],
    screenshots: [
      '/products/stewardai/ai-dashboard.png',
      '/products/stewardai/patient-analysis.png',
      '/products/stewardai/decision-support.png'
    ],
    demoUrl: 'https://demo.stewardai.embrion.ai',
    pricing: 'Enterprise',
    featured: true
  }
];

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}
