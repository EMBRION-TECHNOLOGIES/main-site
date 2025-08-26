import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Eye, Lightbulb, Users, TrendingUp, Shield, Zap, Globe, Code, BarChart3 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Embrion Technologies - Our Mission & Vision",
  description: "Embrion Technologies is a Nigerian technology company dedicated to creating high-quality digital products, platforms, and tools that enhance productivity, efficiency, and user engagement.",
  keywords: "Embrion Technologies, about us, mission, vision, objectives, Nigeria",
};

export default function AboutPage() {
  const objectives = [
    {
      title: "Innovation First",
      description: "Design and deploy bespoke digital products that address both local and global challenges.",
      icon: Lightbulb,
      color: "text-yellow-600"
    },
    {
      title: "Solution-Driven",
      description: "Leverage technology, research, and creativity to meet the evolving needs of clients' businesses.",
      icon: Target,
      color: "text-blue-600"
    },
    {
      title: "Excellence in Development",
      description: "Build, develop, and maintain high-quality software applications, mobile apps, and platforms.",
      icon: Code,
      color: "text-green-600"
    },
    {
      title: "Culture of Improvement",
      description: "Promote innovation, continuous improvement, and scalable solutions tailored to diverse industries.",
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      title: "Research-Based",
      description: "Conduct market research and feasibility studies that inform impactful product deployment.",
      icon: BarChart3,
      color: "text-orange-600"
    },
    {
      title: "Agile Problem-Solving",
      description: "Apply design thinking, agile methodologies, and data-driven decision-making across all projects.",
      icon: Zap,
      color: "text-red-600"
    },
    {
      title: "Partner Support",
      description: "Empower clients to scale through digital marketing, product promotion, technical support, and user education.",
      icon: Users,
      color: "text-indigo-600"
    }
  ];

  const stats = [
    { label: "Years of Experience", value: "2+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Happy Clients", value: "15+" },
    { label: "Team Members", value: "8+" }
  ];

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Embrion Technologies
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We are a Nigerian technology company dedicated to creating{" "}
          <span className="text-foreground font-semibold">high-quality digital products, platforms, and tools</span>{" "}
          that enhance productivity, efficiency, and user engagement.
        </p>
      </div>

      {/* Company Overview */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Embrion Technologies is a Nigerian technology company dedicated to creating{" "}
            <strong>high-quality digital products, platforms, and tools</strong> that enhance productivity, 
            efficiency, and user engagement. We are the parent company of{" "}
            <strong>MedSync</strong> and <strong>StewardAI</strong>, two flagship products redefining 
            healthcare technology across Africa.
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Founded in 2024, we have quickly established ourselves as a trusted partner for healthcare 
            organizations and businesses seeking innovative digital solutions. Our team combines deep 
            technical expertise with a deep understanding of local market needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
        <div className="bg-muted/30 rounded-2xl p-8 border border-border/50">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To identify, analyze, and solve real-world problems through the design and implementation of{" "}
              <strong>innovative, scalable, and human-centered solutions.</strong>
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Eye className="h-6 w-6 text-primary" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be Africa&apos;s leading provider of digital health and business solutions, trusted globally for{" "}
              <strong>reliability, creativity, and impact.</strong>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core Objectives */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Objectives</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are guided by seven fundamental principles that drive everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((objective, index) => {
            const IconComponent = objective.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className={`h-6 w-6 ${objective.color}`} />
                  </div>
                  <CardTitle className="text-lg">{objective.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {objective.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-muted/30 rounded-2xl p-8 border border-border/50 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Embrion Technologies?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine local expertise with global best practices to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Trusted & Reliable</h3>
            <p className="text-muted-foreground">
              Registered company with proven track record in healthcare technology.
            </p>
          </div>

          <div className="text-center">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
            <p className="text-muted-foreground">
              Deep understanding of African markets and healthcare challenges.
            </p>
          </div>

          <div className="text-center">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
            <p className="text-muted-foreground">
              Cutting-edge technology solutions that drive real business impact.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss how we can help transform your business through innovative technology solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="text-lg px-8 py-6">
              Start a Conversation
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Explore Our Services
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
