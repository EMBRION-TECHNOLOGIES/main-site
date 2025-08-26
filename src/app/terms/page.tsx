import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "EMBRION's terms of service - Learn about the terms and conditions for using our services.",
};

export default function TermsOfService() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing and using EMBRION&apos;s website and services, you accept and agree to be bound by the terms and 
            provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            EMBRION provides healthcare technology solutions including:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Software development and consulting services</li>
            <li>Digital health solutions</li>
            <li>Healthcare technology consulting</li>
            <li>Product development and implementation</li>
            <li>Technical support and maintenance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Use License</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on 
            EMBRION&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, 
            not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or &ldquo;mirror&rdquo; the materials on any other server</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Disclaimer</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The materials on EMBRION&apos;s website are provided on an &apos;as is&apos; basis. EMBRION makes no warranties, 
            expressed or implied, and hereby disclaims and negates all other warranties including without limitation, 
            implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
            of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Limitations</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In no event shall EMBRION or its suppliers be liable for any damages (including, without limitation, 
            damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
            to use the materials on EMBRION&apos;s website, even if EMBRION or a EMBRION authorized representative has 
            been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Accuracy of Materials</h2>
          <p className="text-muted-foreground leading-relaxed">
            The materials appearing on EMBRION&apos;s website could include technical, typographical, or photographic 
            errors. EMBRION does not warrant that any of the materials on its website are accurate, complete, or 
            current. EMBRION may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Links</h2>
          <p className="text-muted-foreground leading-relaxed">
            EMBRION has not reviewed all of the sites linked to its website and is not responsible for the contents 
            of any such linked site. The inclusion of any link does not imply endorsement by EMBRION of the site. 
            Use of any such linked website is at the user&apos;s own risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Modifications</h2>
          <p className="text-muted-foreground leading-relaxed">
            EMBRION may revise these terms of service for its website at any time without notice. By using this 
            website you are agreeing to be bound by the then current version of these Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws and you irrevocably 
            submit to the exclusive jurisdiction of the courts in that state or location.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Service and its original content, features, and functionality are and will remain the exclusive 
            property of EMBRION and its licensors. The Service is protected by copyright, trademark, and other 
            laws. Our trademarks and trade dress may not be used in connection with any product or service without 
            our prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. User Conduct</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You agree not to use the Service to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon the rights of others</li>
            <li>Transmit harmful, offensive, or inappropriate content</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with the proper functioning of the Service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may terminate or suspend your access immediately, without prior notice or liability, for any reason 
            whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use 
            the Service will cease immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-muted-foreground">
              <strong>Email:</strong> embriontechnologies@gmail.com<br />
              <strong>Address:</strong> EE IKWUE STREET, NAF VALLEY ESTATE, ASOKORO, Abuja, Nigeria<br />
              <strong>Phone:</strong> +234 815 257 2020<br />
              <strong>WhatsApp:</strong> +234 901 366 1942<br />
              <strong>Alternative:</strong> +243 805 156 6743
            </p>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/privacy">
            <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
              Privacy Policy
            </button>
          </Link>
          <Link href="/cookies">
            <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
              Cookie Policy
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
