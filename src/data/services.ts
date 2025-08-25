import { Service } from '@/types/content';

export const services: Service[] = [
  {
    id: 'seo',
    title: 'Website Creation & SEO',
    slug: 'seo',
    summary: 'Fast, SEO-optimized websites that convert visitors into customers.',
    description: 'We build high-performance websites that not only look great but also rank well in search engines. Our SEO-first approach ensures your site is discoverable and drives qualified traffic to your business.',
    features: [
      'SEO-optimized website design',
      'Performance optimization',
      'Mobile-first responsive design',
      'Conversion-focused UX',
      'Search engine optimization',
      'Analytics and tracking setup'
    ],
    icon: 'globe',
    category: 'marketing',
    featured: true
  },
  {
    id: 'brand-visibility',
    title: 'Social Media & Brand Visibility',
    slug: 'brand-visibility',
    summary: 'Strategic social media management and brand building.',
    description: 'Build a strong, recognizable brand presence across all social media platforms. We create engaging content strategies that increase your brand visibility and connect with your target audience.',
    features: [
      'Social media strategy development',
      'Content creation and curation',
      'Community management',
      'Brand identity design',
      'Influencer partnerships',
      'Performance analytics and reporting'
    ],
    icon: 'share-2',
    category: 'marketing',
    featured: true
  },
  {
    id: 'data-strategy',
    title: 'Data Analysis & Business Strategy',
    slug: 'data-strategy',
    summary: 'Data-driven insights to inform business decisions.',
    description: 'Transform your business data into actionable insights. Our data analysis services help you understand your market, optimize operations, and make informed strategic decisions.',
    features: [
      'Business intelligence and analytics',
      'Market research and analysis',
      'Performance metrics tracking',
      'Strategic planning and consulting',
      'Data visualization and reporting',
      'Predictive analytics and forecasting'
    ],
    icon: 'bar-chart-3',
    category: 'consulting',
    featured: false
  },
  {
    id: 'software-development',
    title: 'Software Development & Digital Solutions',
    slug: 'software-development',
    summary: 'Custom software solutions for healthcare organizations.',
    description: 'We develop reliable, secure software solutions specifically designed for healthcare organizations. From patient management systems to clinical decision support tools, we build technology that healthcare professionals can trust.',
    features: [
      'Custom healthcare software development',
      'HIPAA-compliant solutions',
      'Integration with existing systems',
      'User experience design',
      'Quality assurance and testing',
      'Ongoing support and maintenance'
    ],
    icon: 'code',
    category: 'development',
    featured: true
  },
  {
    id: 'content',
    title: 'Copywriting & Content Creation',
    slug: 'content',
    summary: 'Compelling content that engages and converts.',
    description: 'Create content that resonates with your audience and drives results. Our copywriting and content creation services help you communicate your value proposition clearly and persuasively.',
    features: [
      'Website copywriting',
      'Blog post creation',
      'Marketing materials',
      'Case study development',
      'Email marketing content',
      'Content strategy planning'
    ],
    icon: 'pen-tool',
    category: 'marketing',
    featured: false
  },
  {
    id: 'consulting-branding',
    title: 'Business Consulting & Product Branding',
    slug: 'consulting-branding',
    summary: 'Strategic guidance for business growth and brand development.',
    description: 'Get expert guidance on business strategy, product development, and brand positioning. We help healthcare technology companies navigate growth challenges and establish strong market presence.',
    features: [
      'Business strategy consulting',
      'Product development guidance',
      'Brand positioning and strategy',
      'Market entry planning',
      'Competitive analysis',
      'Growth strategy development'
    ],
    icon: 'target',
    category: 'consulting',
    featured: false
  }
];

// Helper functions
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter(service => service.featured);
}

export function getServicesByCategory(category: Service['category']): Service[] {
  return services.filter(service => service.category === category);
}
