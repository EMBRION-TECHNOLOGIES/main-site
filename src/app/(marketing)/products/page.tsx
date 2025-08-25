import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CheckCircle2, ExternalLink, ArrowRight, Zap, Users, TrendingUp, Shield, Rocket } from "lucide-react";
import { SafeImage } from "@/components/ui/safe-image";



export default function Products() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
      {/* Enhanced Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium mb-6">
          <Rocket className="h-4 w-4" />
          Our Products
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Innovative Solutions, Built for Impact
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Our flagship products are redefining healthcare technology across Africa and beyond, 
          delivering measurable results for healthcare organizations and businesses.
        </p>

        {/* Product Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{products.length}</div>
            <div className="text-sm text-muted-foreground">Products Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>

      {/* Enhanced Products Grid */}
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <Card
            key={product.id}
            className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up p-0"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Product Thumbnail */}
            {product.thumbnail && (
              <div className="relative overflow-hidden rounded-t-lg">
                <Link href={`/products/${product.slug}`}>
                  <SafeImage
                    src={product.thumbnail}
                    alt={`${product.name} thumbnail`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </Link>
              </div>
            )}
            
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-lg text-foreground leading-relaxed">
                    {product.tagline}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="ml-2 group-hover:border-primary transition-colors">
                  {product.pricing}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-base">
                {product.description}
              </p>

              {/* Enhanced Features Section */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    Key Features
                  </h4>
                  <div className="grid gap-2">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Benefits Section */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Key Benefits
                  </h4>
                  <div className="grid gap-2">
                    {product.benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex gap-3 pt-4 pb-4">
                <Link href={`/products/${product.slug}`}>
                  <Button variant="outline" className="group/btn flex-1 pb-3">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                {product.demoUrl && (
                  <Button variant="ghost" asChild className="group/btn pb-3">
                    <a href={product.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      View Demo
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enhanced CTA Section */}
      <section className="mt-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Transform Your Healthcare Technology?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Let&apos;s discuss how our innovative products can help your organization
            achieve better patient outcomes and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6 group hover:scale-105 transition-transform duration-200">
                Schedule a Demo
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

      {/* Product Benefits Section */}
      <section className="mt-20 py-16 bg-muted/30 rounded-3xl">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-6">
              Why Choose EMBRION Products?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our products are built with healthcare professionals in mind, ensuring
              reliability, security, and ease of use.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">HIPAA Compliant</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built with healthcare-grade security and privacy standards to protect
                sensitive patient information.
              </p>
            </div>

            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">User-Friendly</h3>
              <p className="text-muted-foreground leading-relaxed">
                Intuitive interfaces designed for healthcare professionals, reducing
                training time and improving adoption.
              </p>
            </div>

            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scalable Solutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Grow with your organization. Our products scale from small clinics
                to large healthcare systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
