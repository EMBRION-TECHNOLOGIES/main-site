import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investors & Recognition - Embrion Technologies",
  description: "Investment opportunities in Embrion Technologies - building the future of healthcare and digital technology across Africa.",
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
          We are proud to have our work recognized by global platforms and publications. 
          Embrion is actively building partnerships to expand our healthcare and digital solutions across Africa.
        </p>
      </div>

      {/* Recognition Section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-6">Featured In</h2>
        <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
          <div className="text-lg font-medium">TechCrunch</div>
          <div className="text-lg font-medium">BuzzFeed</div>
          <div className="text-lg font-medium">Medium</div>
          <div className="text-lg font-medium">The Next Web</div>
          <div className="text-lg font-medium">Awwwards</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Investment Highlights</h2>
            <ul className="space-y-3 list-disc pl-6 text-muted-foreground">
              <li>Vision & market thesis</li>
              <li>Traction highlights</li>
              <li>Roadmap (12–24 months)</li>
              <li>Request deck form</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Embrion Technologies?</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Healthcare Technology Growth</h3>
                <p className="text-sm text-muted-foreground">
                  The healthcare technology market is experiencing unprecedented growth with increasing demand for digital solutions.
                </p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Proven Track Record</h3>
                <p className="text-sm text-muted-foreground">
                  Our team has successfully delivered healthcare solutions that improve patient outcomes and operational efficiency.
                </p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Strategic Partnerships</h3>
                <p className="text-sm text-muted-foreground">
                  Established relationships with healthcare providers and technology partners across the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Partner With Us</h2>
          <p className="text-muted-foreground mb-6">
            Get detailed information about our business model, financial projections, and growth strategy.
          </p>
          <Link href="/contact?topic=Investors">
            <Button size="lg">Partner With Us</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
