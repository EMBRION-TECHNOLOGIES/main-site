import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | EMBRION Services`,
    description: service.description,
    keywords: [
      service.title.toLowerCase(),
      service.category,
      "healthcare services",
      "EMBRION services",
      "healthcare technology"
    ],
    openGraph: {
      title: `${service.title} | EMBRION Services`,
      description: service.description,
      type: "website",
      images: [
        {
          url: `/services/${service.slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.title} - EMBRION Services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | EMBRION Services`,
      description: service.description,
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
      {/* Back Navigation */}
      <div className="mb-8">
        <Link href="/services">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Button>
        </Link>
      </div>

      {/* Service Header */}
      <div className="mb-16">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              {service.featured && (
                <Badge variant="default" className="gap-1">
                  Featured Service
                </Badge>
              )}
              <Badge variant="outline">{service.category}</Badge>
            </div>
            <h1 className="text-4xl font-semibold mb-4">{service.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Service Content */}
      <div className="grid gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Summary Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Service Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {service.summary}
              </p>
            </CardContent>
          </Card>

          {/* Features Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Service Details */}
          <Card>
            <CardHeader>
              <CardTitle>Service Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <span className="text-sm font-medium text-muted-foreground">Category:</span>
                <p className="font-medium">{service.category}</p>
              </div>
              {service.featured && (
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Status:</span>
                  <p className="text-green-600 font-medium">Featured Service</p>
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
                Interested in this service for your organization?
              </p>
              <div className="space-y-3">
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Schedule a Consultation</Button>
                </Link>
                <Link href="/services" className="w-full">
                  <Button variant="outline" className="w-full">View All Services</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <section className="mt-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Transform Your Healthcare Technology?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss how EMBRION&apos;s services can help your organization 
            achieve better patient outcomes and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Your Transformation
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
