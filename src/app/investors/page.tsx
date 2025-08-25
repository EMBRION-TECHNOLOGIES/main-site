import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investors",
  description: "Investment opportunities in EMBRION - building the future of healthcare technology.",
};

export default function Investors() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
      <h1 className="text-3xl md:text-4xl font-semibold">Investors</h1>
      <p className="mt-2 text-muted-foreground">
        Join us in revolutionizing healthcare technology through innovation and trust.
      </p>
      <div className="mt-8 max-w-4xl">
        <div className="grid gap-8 md:grid-cols-2">
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
            <h2 className="text-2xl font-semibold mb-4">Why EMBRION?</h2>
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
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Request Investor Deck</h2>
          <p className="text-muted-foreground mb-6">
            Get detailed information about our business model, financial projections, and growth strategy.
          </p>
          <Link href="/contact?topic=Investors">
            <Button size="lg">Request Investor Deck</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
