import type { Product } from "@/types/content";

export const products: Product[] = [
  {
    id: "medsync",
    name: "MedSync",
    slug: "medsync",
    tagline: "Comprehensive medication synchronization and management platform",
    description: "MedSync is a comprehensive medication synchronization and management platform designed specifically for healthcare providers. It streamlines medication processes, improves patient safety, and enhances clinical workflow efficiency.",
    features: [
      "Medication synchronization",
      "Patient safety features",
      "Healthcare provider integration",
      "Real-time medication tracking",
      "Automated refill management",
      "Compliance monitoring"
    ],
    benefits: [
      "Reduce medication errors by 85%",
      "Improve patient adherence rates",
      "Streamline pharmacy workflows",
      "Enhance patient communication",
      "Ensure regulatory compliance",
      "Reduce administrative burden"
    ],
    thumbnail: "/products/medsync/thumbnail.jpg",
    screenshots: [
      "/products/medsync/dashboard.png",
      "/products/medsync/patient-view.png",
      "/products/medsync/medication-list.png"
    ],
    demoUrl: "https://demo.medsync.embriontechnologies.com",
    pricing: "Contact Sales",
    featured: true
  },
  {
    id: "stewardai",
    name: "StewardAI",
    slug: "stewardai",
    tagline: "AI-powered healthcare decision support and patient care optimization",
    description: "StewardAI leverages artificial intelligence to provide healthcare professionals with intelligent decision support, predictive analytics, and patient care optimization tools. It transforms complex medical data into actionable insights.",
    features: [
      "AI decision support",
      "Patient care optimization",
      "Predictive analytics",
      "Clinical decision algorithms",
      "Real-time monitoring",
      "Evidence-based recommendations"
    ],
    benefits: [
      "Improve diagnostic accuracy by 40%",
      "Reduce treatment planning time by 60%",
      "Enhance patient outcomes",
      "Optimize resource allocation",
      "Support evidence-based medicine",
      "Enable personalized care plans"
    ],
    thumbnail: "/products/stewardai/thumbnail.jpg",
    screenshots: [
      "/products/stewardai/ai-dashboard.png",
      "/products/stewardai/patient-view.png",
      "/products/stewardai/medication-list.png"
    ],
    demoUrl: "https://demo.stewardai.embriontechnologies.com",
    pricing: "Enterprise",
    featured: true
  },
  {
    id: "interpocket",
    name: "Interpocket",
    slug: "interpocket",
    tagline: "Connect your pockets virtually with everyone",
    description: "Interpocket is an innovative peer-to-peer wallet solution that enables virtual connections between users' financial pockets. Built with security and scalability in mind, it provides a seamless way for users to manage and share financial resources.",
    features: [
      "Secure peer-to-peer transactions",
      "Virtual pocket connections",
      "Real-time transaction tracking",
      "Cross-platform compatibility",
      "Advanced security protocols"
    ],
    benefits: [
      "Eliminate physical cash handling",
      "Instant money transfers",
      "Secure financial connections",
      "User-friendly interface",
      "Scalable architecture"
    ],
    thumbnail: "/products/interpocket/thumbnail.png",
    screenshots: ["/images/products/interpocket-1.jpg", "/images/products/interpocket-2.jpg"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.interpocket.v1&hl=en&pli=1",
    pricing: "Contact Sales",
    featured: false
  },
  {
    id: "nigeria-diaspora-initiative",
    name: "Nigeria Diaspora Initiative",
    slug: "nigeria-diaspora-initiative",
    tagline: "Showcasing the efforts and activities of Nigerians in the diaspora",
    description: "A comprehensive platform designed to highlight and connect the Nigerian diaspora community, showcasing their contributions, activities, and initiatives across the globe. Built with modern web technologies for global accessibility.",
    features: [
      "Community showcase platform",
      "Global diaspora connections",
      "Activity and initiative tracking",
      "Responsive web design",
      "Content management system"
    ],
    benefits: [
      "Connect Nigerians worldwide",
      "Showcase diaspora contributions",
      "Build global community",
      "Easy content management",
      "Mobile-first experience"
    ],
    thumbnail: "/products/nigeria-diaspora-initiative/thumbnail.jpg",
    screenshots: ["/images/products/ndi-1.jpg", "/images/products/ndi-2.jpg"],
    demoUrl: "https://ndi-pi.vercel.app/",
    pricing: "Contact Sales",
    featured: false
  },
  {
    id: "numsa",
    name: "NUMSA",
    slug: "numsa",
    tagline: "Official website of Nile University Medical Students' Association",
    description: "A professional website for the Nile University Medical Students' Association, providing comprehensive information about the organization, events, and resources for medical students. Features clean design and easy navigation.",
    features: [
      "Professional association website",
      "Event management system",
      "Student resource center",
      "Responsive design",
      "Easy content updates"
    ],
    benefits: [
      "Professional online presence",
      "Easy information access",
      "Student engagement",
      "Modern web standards",
      "Maintenance-friendly"
    ],
    thumbnail: "/products/numsa/thumbnail.jpg",
    screenshots: ["/images/products/numsa-1.jpg", "/images/products/numsa-2.jpg"],
    demoUrl: "https://numsa.netlify.app/",
    pricing: "Contact Sales",
    featured: true
  },
  {
    id: "powerstack",
    name: "Powerstack",
    slug: "powerstack",
    tagline: "Power utility companion—Buy your electricity on Powerstack",
    description: "Powerstack is a utility companion application that simplifies the process of purchasing electricity, providing users with a convenient platform for managing their power needs with secure transactions and real-time tracking.",
    features: [
      "Electricity purchase platform",
      "Secure payment processing",
      "Real-time utility tracking",
      "User account management",
      "Transaction history"
    ],
    benefits: [
      "Simplified electricity purchases",
      "Secure transactions",
      "Real-time monitoring",
      "User-friendly interface",
      "Reliable utility management"
    ],
    thumbnail: "/products/powerstack/thumbnail.jpg",
    screenshots: ["/images/products/powerstack-1.jpg", "/images/products/powerstack-2.jpg"],
    demoUrl: "https://powerstack-theta.vercel.app/",
    pricing: "Contact Sales",
    featured: true
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getAllProducts(): Product[] {
  return products;
}
