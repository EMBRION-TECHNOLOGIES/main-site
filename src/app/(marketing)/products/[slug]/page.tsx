import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | EMBRION Products`,
    description: product.description,
    keywords: [
      product.name.toLowerCase(),
      "healthcare products",
      "EMBRION products",
      "healthcare technology",
      "digital health"
    ],
    openGraph: {
      title: `${product.name} | EMBRION Products`,
      description: product.description,
      type: "website",
      images: [
        {
          url: `/products/${product.slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${product.name} - EMBRION Products`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | EMBRION Products`,
      description: product.description,
    },
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
      {/* Back Navigation */}
      <div className="mb-8">
        <Link href="/products">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Button>
        </Link>
      </div>

      {/* Product Header */}
      <div className="mb-16">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              {product.featured && (
                <Badge variant="default" className="gap-1">
                  Featured Product
                </Badge>
              )}
              <Badge variant="outline">{product.pricing}</Badge>
            </div>
            <h1 className="text-4xl font-semibold mb-4">{product.name}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              {product.tagline}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* Product Content */}
      <div className="grid gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Features Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Benefits Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Key Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Product Details */}
          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <span className="text-sm font-medium text-muted-foreground">Pricing:</span>
                <p className="font-medium">{product.pricing}</p>
              </div>
              {product.featured && (
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Status:</span>
                  <p className="text-green-600 font-medium">Featured Product</p>
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
                Interested in this product for your organization?
              </p>
              <div className="space-y-3">
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Schedule a Demo</Button>
                </Link>
                {product.demoUrl && (
                  <Button variant="outline" asChild className="w-full">
                    <a href={product.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Demo
                    </a>
                  </Button>
                )}
                <Link href="/products" className="w-full">
                  <Button variant="ghost" className="w-full">View All Products</Button>
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
            Let&apos;s discuss how EMBRION&apos;s products can help your organization 
            achieve better patient outcomes and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Your Transformation
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Explore All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
