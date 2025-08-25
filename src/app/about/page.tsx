import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about EMBRION's mission to build high-reliability digital health systems.",
};

export default function About() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
      <h1 className="text-3xl md:text-4xl font-semibold">About EMBRION</h1>
      <p className="mt-2 text-muted-foreground">
        Building the future of healthcare technology through innovation and trust.
      </p>
      
      <div className="mt-8 max-w-4xl space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            EMBRION is dedicated to building high-reliability digital health systems that healthcare organizations can trust. 
            As the parent company of MedSync and StewardAI, we&apos;re committed to developing innovative solutions that improve 
            patient outcomes and operational efficiency.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Technology Development</h3>
              <p className="text-muted-foreground">
                We develop cutting-edge healthcare software solutions that prioritize security, reliability, and user experience.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Strategic Consulting</h3>
              <p className="text-muted-foreground">
                Our team provides expert guidance on digital transformation, helping healthcare organizations navigate the 
                complex landscape of modern technology.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <p className="text-muted-foreground leading-relaxed">
            We believe that healthcare technology should be as reliable as the medical care it supports. Every solution 
            we build undergoes rigorous testing and validation to ensure it meets the highest standards of quality and security. 
            Our team combines deep healthcare expertise with cutting-edge technology to deliver solutions that truly make a difference.
          </p>
        </section>
      </div>
    </main>
  );
}
