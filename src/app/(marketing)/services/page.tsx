import type { Metadata } from "next";
import { services } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Globe, Share2, BarChart3, Code, PenTool, Target, ArrowRight, Zap, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Healthcare Technology Services",
  description: "From SEO websites to AI‑powered digital solutions. Comprehensive healthcare technology services including software development, consulting, and digital marketing.",
  keywords: [
    "healthcare services",
    "healthcare technology",
    "software development",
    "healthcare consulting",
    "digital marketing",
    "SEO services",
    "AI healthcare",
    "healthcare innovation"
  ],
  openGraph: {
    title: "Healthcare Technology Services | EMBRION",
    description: "From SEO websites to AI‑powered digital solutions. Comprehensive healthcare technology services that drive results.",
    type: "website",
    images: [
      {
        url: "/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "EMBRION Healthcare Technology Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Technology Services | EMBRION",
    description: "From SEO websites to AI‑powered digital solutions. Comprehensive healthcare technology services that drive results.",
  },
  alternates: {
    canonical: "/services",
  },
};

// Icon mapping for services
const iconMap = {
  globe: Globe,
  'share-2': Share2,
  'bar-chart-3': BarChart3,
  code: Code,
  'pen-tool': PenTool,
  target: Target,
};

// Category colors and icons
const categoryConfig = {
  marketing: {
    color: "bg-blue-500/10 text-blue-600 border-blue-200",
    icon: Globe,
    label: "Digital Marketing"
  },
  development: {
    color: "bg-green-500/10 text-green-600 border-green-200",
    icon: Code,
    label: "Software Development"
  },
  consulting: {
    color: "bg-purple-500/10 text-purple-600 border-purple-200",
    icon: Users,
    label: "Healthcare Consulting"
  }
};

export default function Services() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
      {/* Enhanced Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
          <Zap className="h-4 w-4" />
          Our Services
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Healthcare Technology Services
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          From SEO websites to AI‑powered digital solutions, we provide comprehensive
          healthcare technology services that drive results.
        </p>
        
        {/* Service Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{services.length}</div>
            <div className="text-sm text-muted-foreground">Services Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Service Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>

      {/* Enhanced Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Globe;
          const category = categoryConfig[service.category as keyof typeof categoryConfig];
          const CategoryIcon = category.icon;

          return (
            <Link key={service.id} href={`/services/${service.slug}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant={service.featured ? "default" : "secondary"} className="gap-1">
                        {service.featured ? (
                          <>
                            <TrendingUp className="h-3 w-3" />
                            Featured
                          </>
                        ) : (
                          <>
                            <CategoryIcon className="h-3 w-3" />
                            {category.label}
                          </>
                        )}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
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
            </Link>
          );
        })}
      </div>

      {/* Enhanced CTA Section */}
      <section className="mt-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Transform Your Healthcare Technology?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Let&apos;s discuss how our comprehensive services can help your organization 
            achieve better patient outcomes and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6 group hover:scale-105 transition-transform duration-200">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 group hover:scale-105 transition-transform duration-200">
                View Success Stories
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
