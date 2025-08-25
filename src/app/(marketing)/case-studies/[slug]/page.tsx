import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug } from "@/data/case-studies";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  
  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} | EMBRION Case Study`,
    description: `See how ${caseStudy.client} achieved ${caseStudy.results[0]?.toLowerCase() || 'remarkable results'} with EMBRION's healthcare technology solutions.`,
    keywords: [
      caseStudy.title.toLowerCase(),
      caseStudy.client.toLowerCase(),
      caseStudy.industry.toLowerCase(),
      "healthcare case study",
      "EMBRION success story",
      "healthcare technology ROI"
    ],
    openGraph: {
      title: `${caseStudy.title} | EMBRION Case Study`,
      description: `See how ${caseStudy.client} achieved remarkable results with EMBRION's healthcare technology solutions.`,
      type: "article",
      images: [
        {
          url: `/case-studies/${caseStudy.slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${caseStudy.title} - EMBRION Case Study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.title} | EMBRION Case Study`,
      description: `See how ${caseStudy.client} achieved remarkable results with EMBRION's healthcare technology solutions.`,
    },
    alternates: {
      canonical: `/case-studies/${caseStudy.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
      {/* Back Navigation */}
      <div className="mb-8">
        <Link href="/case-studies">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Button>
        </Link>
      </div>

      {/* Case Study Header */}
      <div className="mb-16">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              {caseStudy.featured && (
                <Badge variant="default" className="gap-1">
                  <TrendingUp className="h-3 w-3" />
                  Featured Case Study
                </Badge>
              )}
              <Badge variant="outline">{caseStudy.industry}</Badge>
            </div>
            <h1 className="text-4xl font-semibold mb-4">{caseStudy.title}</h1>
            <div className="flex items-center gap-4 text-lg text-muted-foreground">
              <span className="font-medium">{caseStudy.client}</span>
              <span>•</span>
              <span>{caseStudy.industry}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Overview */}
      {caseStudy.metrics && caseStudy.metrics.length > 0 && (
        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {caseStudy.metrics.map((metric, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-sm font-medium text-foreground mb-1">{metric.label}</div>
                  <div className="text-xs text-muted-foreground">{metric.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Case Study Content */}
      <div className="grid gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Challenge Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-red-600 font-bold">!</span>
                </div>
                The Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {caseStudy.challenge}
              </p>
            </CardContent>
          </Card>

          {/* Solution Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">💡</span>
                </div>
                Our Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {caseStudy.solution}
              </p>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                Results & Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{result}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Case Study Details */}
          <Card>
            <CardHeader>
              <CardTitle>Case Study Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <span className="text-sm font-medium text-muted-foreground">Client:</span>
                <p className="font-medium">{caseStudy.client}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Industry:</span>
                <p className="font-medium">{caseStudy.industry}</p>
              </div>
              {caseStudy.featured && (
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Status:</span>
                  <p className="text-green-600 font-medium">Featured Case Study</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* CTA Card */}
          <Card>
            <CardHeader>
              <CardTitle>Ready to Get Started?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Want to achieve similar results for your organization?
              </p>
              <div className="space-y-3">
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Schedule a Consultation</Button>
                </Link>
                <Link href="/services" className="w-full">
                  <Button variant="outline" className="w-full">Explore Our Services</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Related Case Studies */}
          <Card>
            <CardHeader>
              <CardTitle>More Success Stories</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Discover how other healthcare organizations are transforming with EMBRION
              </p>
              <Link href="/case-studies">
                <Button variant="ghost" className="w-full justify-between">
                  View All Case Studies
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <section className="mt-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss how EMBRION&apos;s solutions can help your healthcare organization 
            achieve similar results and deliver measurable impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Your Transformation
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
