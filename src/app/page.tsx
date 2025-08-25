import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFeaturedServices } from "@/data/services";
import { getFeaturedProducts } from "@/data/products";
import { CheckCircle2, ArrowRight, Star, Globe, Code, TrendingUp, Users, Zap } from "lucide-react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "EMBRION - High-Reliability Digital Health Systems",
  description: "EMBRION is the parent of MedSync and StewardAI—building innovative healthcare technology solutions that healthcare professionals can trust.",
  keywords: [
    "healthcare technology",
    "digital health systems",
    "MedSync",
    "StewardAI",
    "healthcare innovation",
    "healthcare software",
    "AI healthcare",
    "medication management"
  ],
  openGraph: {
    title: "EMBRION - High-Reliability Digital Health Systems",
    description: "Building innovative healthcare technology solutions that healthcare professionals can trust.",
    type: "website",
    images: [
      {
        url: "/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "EMBRION - High-Reliability Digital Health Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EMBRION - High-Reliability Digital Health Systems",
    description: "Building innovative healthcare technology solutions that healthcare professionals can trust.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const featuredServices = getFeaturedServices();
  const featuredProducts = getFeaturedProducts();

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EMBRION",
    "description": "Building high-reliability digital health systems that healthcare professionals can trust.",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/logo.png`,
    "sameAs": [
      "https://twitter.com/embrion_ai",
      "https://linkedin.com/company/embrion"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "/contact"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Healthcare Technology Services",
      "itemListElement": featuredServices.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    },
    "makesOffer": featuredProducts.map(product => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "SoftwareApplication",
        "name": product.name,
        "description": product.description,
        "applicationCategory": "HealthcareApplication"
      }
    }))
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Enhanced Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm border rounded-full text-sm font-medium text-muted-foreground mb-8 animate-fade-in">
              <TrendingUp className="h-4 w-4 text-primary" />
              Trusted by Healthcare Professionals
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
              Building High‑Reliability
              <span className="text-primary block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Digital Health Systems
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              EMBRION is the parent of MedSync and StewardAI—creating innovative
              healthcare technology solutions that healthcare professionals can trust.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in-up delay-300">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>FDA Approved</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>99.9% Uptime</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
              <Link href="/services">
                <Button size="lg" className="text-lg px-8 py-6 group hover:scale-105 transition-transform duration-200">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 group hover:scale-105 transition-transform duration-200 border-2">
                  View Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-12 pt-8 border-t border-border/50 animate-fade-in-up delay-500">
              <p className="text-sm text-muted-foreground mb-4">Trusted by leading healthcare organizations</p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground">Hospital A</span>
                </div>
                <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground">Clinic B</span>
                </div>
                <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground">Pharmacy C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Zap className="h-4 w-4" />
              Featured Services
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From digital transformation to AI-powered decision support, we provide 
              end-to-end healthcare technology solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {featuredServices.map((service, index) => (
              <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      {service.icon === 'globe' && <Globe className="h-6 w-6 text-primary" />}
                      {service.icon === 'code' && <Code className="h-6 w-6 text-primary" />}
                      {service.icon === 'share-2' && <Globe className="h-6 w-6 text-primary" />}
                    </div>
                    <Badge variant="default" className="gap-1">
                      <Star className="h-3 w-3" />
                      Featured
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex flex-col h-full">
                  <CardDescription className="mb-6 flex-1 text-base leading-relaxed">
                    {service.summary}
                  </CardDescription>

                  {/* Enhanced Features Section */}
                  <div className="space-y-4 mb-6">
                    <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="line-clamp-2">{feature}</span>
          </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-xs text-muted-foreground mt-2">
                          +{service.features.length - 3} more features
          </li>
                      )}
                    </ul>
                  </div>

                  {/* Enhanced CTA */}
                  <div className="pt-4 border-t border-border/50 flex items-center justify-between text-sm text-primary group-hover:text-primary/80 transition-colors">
                    <span className="font-medium">Learn more</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="ghost" size="lg" className="text-lg group">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium mb-4">
              <Users className="h-4 w-4" />
              Our Products
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Innovative Healthcare Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for reliability, security, and trust—our products transform 
              how healthcare is delivered.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {featuredProducts.map((product, index) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{product.name}</CardTitle>
                      <CardDescription className="text-lg text-foreground">
                        {product.tagline}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{product.pricing}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
                      <div className="grid gap-2">
                        {product.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Link href={`/products/${product.slug}`}>
                      <Button variant="outline" className="group/btn">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    {product.demoUrl && (
                      <Button variant="ghost" asChild>
                        <a href={product.demoUrl} target="_blank" rel="noopener noreferrer">
                          View Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button variant="ghost" size="lg" className="text-lg group">
                Explore All Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Transform Your Healthcare Technology?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our services and products can help your organization
            deliver better patient care and improve operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 group hover:scale-105 transition-transform duration-200">
                Get Started Today
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary group hover:scale-105 transition-transform duration-200">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
