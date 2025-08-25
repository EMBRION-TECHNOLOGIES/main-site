import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "EMBRION's privacy policy - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            EMBRION (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Fill out contact forms</li>
            <li>Request information about our services</li>
            <li>Subscribe to our newsletter</li>
            <li>Apply for employment</li>
            <li>Engage with our customer support</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This information may include your name, email address, phone number, company name, and any other information 
            you choose to provide.
          </p>

          <h3 className="text-xl font-semibold mb-3">2.2 Automatically Collected Information</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When you visit our website, we automatically collect certain information about your device, including:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent</li>
            <li>Referring website</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Provide and maintain our services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
            <li>Protect against fraud and abuse</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
            except in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>With your explicit consent</li>
            <li>To comply with legal requirements</li>
            <li>To protect our rights and safety</li>
            <li>In connection with a business transfer or merger</li>
            <li>With trusted service providers who assist in our operations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
            the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Withdraw consent for marketing communications</li>
            <li>Request data portability</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            To exercise these rights, please contact us using the information provided below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking Technologies</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We use cookies and similar tracking technologies to enhance your experience on our website. For detailed 
            information about our use of cookies, please see our{" "}
            <Link href="/cookies" className="text-primary hover:underline">
              Cookie Policy
            </Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices 
            or content of these websites. We encourage you to review their privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Children&apos;s Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our services are not intended for children under 13 years of age. We do not knowingly collect personal 
            information from children under 13. If you believe we have collected such information, please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. International Data Transfers</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your information may be transferred to and processed in countries other than your own. We ensure that 
            such transfers comply with applicable data protection laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Changes to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
            new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-muted-foreground">
              <strong>Email:</strong> privacy@embrion.com<br />
              <strong>Address:</strong> EMBRION, [Your Address]<br />
              <strong>Phone:</strong> [Your Phone Number]
            </p>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/terms">
            <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
              Terms of Service
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
