"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, ArrowRight, Globe, Code, BarChart3, Share2, PenTool, Building2, Zap } from "lucide-react";
import { services } from "@/data/services";

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

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredServices = services.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { value: "all", label: "All Services" },
    { value: "development", label: "Development" },
    { value: "marketing", label: "Marketing" },
    { value: "consulting", label: "Consulting" }
  ];

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-16">

      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
          <Globe className="h-4 w-4" />
          Our Services
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Comprehensive Digital & Healthcare Solutions
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          From <strong>custom software</strong> to <strong>AI-powered healthcare platforms</strong>, 
          we provide end-to-end solutions designed to deliver measurable results for your business.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-48">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service) => {
          const IconComponent = service.icon ? iconMap[service.icon] || Globe : Globe;
          return (
            <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="capitalize">
                    {service.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.summary}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-muted-foreground mt-2">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-border/50">
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* CTA Section */}
      {filteredServices.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold mb-4">No services found</h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your search terms or category filter.
          </p>
          <Button onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}>
            Clear Filters
          </Button>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="text-center mt-16 pt-12 border-t border-border/50">
        <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          We specialize in creating tailored digital solutions for healthcare organizations and businesses. 
          Let&apos;s discuss how we can help transform your operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started
            </Button>
          </Link>
          <Link href="/case-studies">
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
