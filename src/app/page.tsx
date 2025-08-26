import Script from "next/script";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Shield, Zap, Globe, Code, BarChart3, Share2, PenTool, Building2 } from "lucide-react";
import { getFeaturedServices } from "@/data/services";
import { getFeaturedProducts } from "@/data/products";
import { SafeImage } from "@/components/ui/safe-image";

export const metadata = {
  title: "Embrion Technologies - Transforming Healthcare & Business Through Technology",
  description: "At Embrion Technologies, we design and implement innovative, user-centric digital solutions that solve real-world problems, empower businesses, and advance healthcare systems.",
  keywords: "Embrion Technologies, healthcare technology, digital solutions, MedSync, StewardAI, Nigeria.",
  openGraph: {
    title: "Embrion Technologies - Transforming Healthcare & Business Through Technology",
    description: "Innovative digital solutions for healthcare and business. Parent company of MedSync and StewardAI.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Embrion Technologies - Transforming Healthcare & Business Through Technology",
    description: "Innovative digital solutions for healthcare and business. Parent company of MedSync and StewardAI.",
  },
};

// Icon mapping for services
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'globe': Globe,
  'code': Code,
  'bar-chart-3': BarChart3,
  'share-2': Share2,
  'pen-tool': PenTool,
  'building-2': Building2,
  'zap': Zap
};



export default function Home() {
  const featuredServices = getFeaturedServices();
  const featuredProducts = getFeaturedProducts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Embrion Technologies",
    "alternateName": "Embrion",
    "description": "Nigerian technology company dedicated to creating high-quality digital products, platforms, and tools that enhance productivity, efficiency, and user engagement.",
    "url": "https://embriontechnologies.com",
    "logo": "https://embriontechnologies.com/logo.png",
    "sameAs": [
      "https://twitter.com/embriontech",
      "https://linkedin.com/company/embriontech"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "embriontechnologies@gmail.com",
      "telephone": "+234 815 257 2020"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "EE IKWUE STREET, NAF VALLEY ESTATE, ASOKORO",
      "addressLocality": "Abuja",
      "addressCountry": "NG"
    },
    "foundingDate": "2024",
    "legalName": "Embrion Technologies"
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Enhanced Hero Section */}
      <section className="relative py-10 lg:py-18 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        </div>

        {/* Trust Badge */}
        <div className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-full px-3 sm:px-4 py-2 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground max-w-[90vw] sm:max-w-none">
            <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
            <span className="whitespace-nowrap">Trusted by Hospitals, Clinics, Pharmacies & Businesses</span>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-6 sm:pt-6">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
          Transforming Healthcare & Business
              <span className="text-primary block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Through Technology
              </span>
            </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            At <strong>Embrion Technologies</strong>, we design and implement{" "}
            <span className="text-foreground font-semibold">innovative, user-centric digital solutions</span>{" "}
            that solve real-world problems, empower businesses, and advance healthcare systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/services">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Trusted by leading healthcare institutions</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>Featured in TechCrunch, BuzzFeed, Medium</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span>35% improvement in medication adherence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Digital & Healthcare Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From <strong>custom software</strong> to <strong>AI-powered healthcare platforms</strong>, 
              we provide end-to-end solutions designed to deliver measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => {
              const IconComponent = service.icon ? iconMap[service.icon] || Globe : Globe;
              return (
                <div
                  key={service.slug}
                  className="group bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium group-hover:gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Innovative Solutions, Built for Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our flagship products are redefining healthcare technology across Africa and beyond.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {featuredProducts.map((product, index) => (
              <div
                key={product.slug}
                className={`group ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-muted/30 rounded-2xl p-8 border border-border/50">
                  {/* Product Thumbnail */}
                  {product.thumbnail && (
                    <div className="mb-6 overflow-hidden rounded-xl">
                      <Link href={`/products/${product.slug}`}>
                        <SafeImage
                          src={product.thumbnail}
                          alt={`${product.name} thumbnail`}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        />
                      </Link>
                    </div>
                  )}
                  
                  <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {product.description}
                  </p>
                  
                  {/* Product Features */}
                  <div className="space-y-3 mb-8">
                    {product.features?.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href={`/products/${product.slug}`}>
                      <Button className="w-full sm:w-auto">
                        View Demo
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full sm:w-auto">
                        Contact Sales
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let&apos;s build innovative solutions together. Our team is ready to help you scale through 
            digital transformation, technical support, and strategic guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
            <Button 
                size="lg" 
                variant="outline" 
                className="relative overflow-hidden bg-transparent hover:bg-white/10 text-white font-semibold text-lg px-10 py-6 rounded-xl border-2 border-white/50 hover:border-white/80 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center gap-3">
                 
                  Start Your Project
                  
                </span>
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button 
                size="lg" 
                variant="outline" 
                className="relative overflow-hidden bg-transparent hover:bg-white/10 text-white font-semibold text-lg px-10 py-6 rounded-xl border-2 border-white/50 hover:border-white/80 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center gap-3">
                 
                  View Case Studies
                  
                </span>
              </Button>
            </Link>
          </div>
    </div>
      </section>
    </>
  );
}
