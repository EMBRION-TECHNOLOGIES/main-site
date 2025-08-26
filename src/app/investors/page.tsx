import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investors & Recognition - Embrion Technologies",
  description: "Investment opportunities in Embrion Technologies - building the future of digital technology across Africa.",
};

export default function Investors() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Investors & Recognition
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We are proud to have our work recognized by leading Nigerian and international platforms. 
          Embrion is actively building partnerships to expand our digital solutions across Nigeria and Africa.
        </p>
      </div>

      {/* Recognition Section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-6">Featured In</h2>
        <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
          <div className="text-lg font-medium">TechCabal</div>
          <div className="text-lg font-medium">Disrupt Africa</div>
          <div className="text-lg font-medium">Ventures Africa</div>
          <div className="text-lg font-medium">Nairametrics</div>
          <div className="text-lg font-medium">BusinessDay</div>
          <div className="text-lg font-medium">Pulse Nigeria</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Investment Highlights</h2>
            <ul className="space-y-3 list-disc pl-6 text-muted-foreground">
              <li>Proven track record across multiple digital sectors</li>
              <li>Partnerships with leading Nigerian businesses and institutions</li>
              <li>Expansion roadmap across West Africa (12–24 months)</li>
              <li>Request investor deck and financial projections</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Embrion Technologies?</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Nigerian Digital Market Opportunity</h3>
                <p className="text-sm text-muted-foreground">
                  Nigeria&apos;s digital economy is rapidly expanding with growing demand for technology solutions across all sectors.
                </p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Local Market Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Deep understanding of Nigerian business challenges, regulatory environment, and cultural nuances that drive adoption.
                </p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Strategic Local Partnerships</h3>
                <p className="text-sm text-muted-foreground">
                  Established relationships with Nigerian businesses, regulatory bodies, and technology partners across the ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nigerian Market Context */}
        <div className="mb-16 p-6 bg-muted/30 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Nigerian Market Context</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">200M+</div>
              <div className="text-sm text-muted-foreground">Population with growing digital needs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$8.5B</div>
              <div className="text-sm text-muted-foreground">Digital economy value (2023)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">18%</div>
              <div className="text-sm text-muted-foreground">Annual digital market growth</div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Service Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Digital Solutions</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Custom software development</li>
                <li>• Web and mobile applications</li>
                <li>• E-commerce platforms</li>
                <li>• Digital transformation consulting</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Industry Solutions</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Healthcare technology platforms</li>
                <li>• Financial services solutions</li>
                <li>• Educational technology</li>
                <li>• Government digital services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Local Partnerships */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Strategic Local Partnerships</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Business & Institutions</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Leading Nigerian corporations</li>
                <li>• Healthcare institutions and clinics</li>
                <li>• Financial institutions and fintech</li>
                <li>• Educational institutions</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Technology & Regulatory</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• National Information Technology Development Agency (NITDA)</li>
                <li>• Nigerian Communications Commission (NCC)</li>
                <li>• Local tech incubators and accelerators</li>
                <li>• Nigerian fintech and payment providers</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Partner With Us</h2>
          <p className="text-muted-foreground mb-6">
            Get detailed information about our business model, financial projections, and growth strategy in the Nigerian market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?topic=Investors">
              <Button size="lg">Request Investor Deck</Button>
            </Link>
            <Link href="/contact?topic=Partnerships">
              <Button size="lg" variant="outline">Strategic Partnerships</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
