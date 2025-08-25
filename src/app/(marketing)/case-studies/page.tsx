"use client";

import { caseStudies } from "@/data/case-studies";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, TrendingUp, Search, ChartLine } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";

export default function CaseStudies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [industryFilter, setIndustryFilter] = useState("all");

  // Get unique industries for filtering
  const industries = useMemo(() => {
    const uniqueIndustries = [...new Set(caseStudies.map(cs => cs.industry))];
    return uniqueIndustries;
  }, []);

  // Filter case studies based on search and industry
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(caseStudy => {
      const matchesSearch = caseStudy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           caseStudy.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           caseStudy.industry.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesIndustry = industryFilter === "all" || caseStudy.industry === industryFilter;
      
      return matchesSearch && matchesIndustry;
    });
  }, [searchTerm, industryFilter]);

  // Featured case studies (always show first)
  const featuredCaseStudies = caseStudies.filter(cs => cs.featured);

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">

      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
          <ChartLine className="h-4 w-4" />
          Our Case Studies
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Healthcare Technology Success Stories
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Real results from healthcare organizations using EMBRION&apos;s innovative solutions. 
          See how MedSync and StewardAI are transforming patient care and operational efficiency.
        </p>
      </div>

      {/* Featured Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Featured Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Our most impactful implementations that demonstrate the power of healthcare technology
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {featuredCaseStudies.map((caseStudy) => (
              <Card key={caseStudy.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{caseStudy.title}</CardTitle>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="default" className="gap-1">
                          <TrendingUp className="h-3 w-3" />
                          Featured
                        </Badge>
                        <Badge variant="outline">{caseStudy.industry}</Badge>
                      </div>
                      <CardDescription className="text-base">
                        <strong>{caseStudy.client}</strong>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Challenge:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Solution:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {caseStudy.solution}
                    </p>
                  </div>
                  
                  {/* Key Metrics */}
                  {caseStudy.metrics && caseStudy.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t">
                      {caseStudy.metrics.slice(0, 4).map((metric, index) => (
                        <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="text-lg font-semibold text-primary">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <Link href={`/case-studies/${caseStudy.slug}`}>
                    <Button className="w-full group/btn">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search case studies by title, client, or industry..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={industryFilter} onValueChange={setIndustryFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">All Case Studies</h2>
          <p className="text-lg text-muted-foreground">
            {filteredCaseStudies.length} case study{filteredCaseStudies.length !== 1 ? 's' : ''} found
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {filteredCaseStudies.map((caseStudy) => (
            <Card key={caseStudy.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 line-clamp-2">{caseStudy.title}</CardTitle>
                    <div className="flex items-center gap-2 mb-3">
                      {caseStudy.featured && (
                        <Badge variant="default" className="gap-1">
                          <TrendingUp className="h-3 w-3" />
                          Featured
                        </Badge>
                      )}
                      <Badge variant="outline">{caseStudy.industry}</Badge>
                    </div>
                    <CardDescription className="text-base">
                      <strong>{caseStudy.client}</strong>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Challenge:</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {caseStudy.challenge}
                  </p>
                </div>
                
                {/* Quick Results Preview */}
                {caseStudy.results && caseStudy.results.length > 0 && (
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2 text-foreground">Key Results:</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="line-clamp-2">{result}</span>
                        </li>
                      ))}
                      {caseStudy.results.length > 2 && (
                        <li className="text-xs text-muted-foreground">
                          +{caseStudy.results.length - 2} more results
                        </li>
                      )}
                    </ul>
                  </div>
                )}
                
                <Link href={`/case-studies/${caseStudy.slug}`}>
                  <Button variant="outline" className="w-full group/btn">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No case studies found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or industry filter
            </p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="mt-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss how EMBRION&apos;s solutions can transform your healthcare organization 
            and deliver measurable results like these case studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Your Transformation
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
