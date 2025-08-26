import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "EMBRION's cookie policy - Learn how we use cookies and tracking technologies on our website.",
};

export default function CookiePolicy() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Cookie Policy</h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            Cookies are small text files that are placed on your device when you visit a website. They are widely 
            used to make websites work more efficiently and to provide information to website owners. Cookies can 
            be &ldquo;persistent&rdquo; or &ldquo;session&rdquo; cookies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            EMBRION uses cookies for several purposes, including:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>To provide you with a better user experience</li>
            <li>To analyze how our website is used</li>
            <li>To remember your preferences and settings</li>
            <li>To provide personalized content and advertisements</li>
            <li>To ensure the security of our website</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-semibold mb-3">3.1 Essential Cookies</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            These cookies are necessary for the website to function and cannot be switched off in our systems. 
            They are usually only set in response to actions made by you which amount to a request for services, 
            such as setting your privacy preferences, logging in, or filling in forms.
          </p>

          <h3 className="text-xl font-semibold mb-3">3.2 Performance Cookies</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            These cookies allow us to count visits and traffic sources so we can measure and improve the performance 
            of our site. They help us to know which pages are the most and least popular and see how visitors move 
            around the site.
          </p>

          <h3 className="text-xl font-semibold mb-3">3.3 Functional Cookies</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            These cookies enable the website to provide enhanced functionality and personalization. They may be 
            set by us or by third-party providers whose services we have added to our pages.
          </p>

          <h3 className="text-xl font-semibold mb-3">3.4 Targeting Cookies</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            These cookies may be set through our site by our advertising partners. They may be used by those 
            companies to build a profile of your interests and show you relevant adverts on other sites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Specific Cookies We Use</h2>
          
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Essential Cookies</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="font-medium">Cookie Name</span>
                <span className="font-medium">Purpose</span>
                <span className="font-medium">Duration</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-mono text-xs">session_id</span>
                <span>Maintains your session</span>
                <span>Session</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-mono text-xs">csrf_token</span>
                <span>Security protection</span>
                <span>Session</span>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-3">Analytics Cookies</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="font-medium">Cookie Name</span>
                <span className="font-medium">Purpose</span>
                <span className="font-medium">Duration</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-mono text-xs">_ga</span>
                <span>Google Analytics tracking</span>
                <span>2 years</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-mono text-xs">_gid</span>
                <span>Google Analytics session</span>
                <span>24 hours</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Third-Party Cookies</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Some cookies are placed by third-party services that appear on our pages. We use the following 
            third-party services:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li><strong>Google Analytics:</strong> To analyze website usage and performance</li>
            <li><strong>Google Fonts:</strong> To load custom fonts for better typography</li>
            <li><strong>Social Media:</strong> For social media integration and sharing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Managing Your Cookie Preferences</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You can control and/or delete cookies as you wish. You can delete all cookies that are already on 
            your computer and you can set most browsers to prevent them from being placed.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">6.1 Browser Settings</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most web browsers allow you to manage cookies through their settings preferences. To learn more about 
            how to manage cookies, visit:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">6.2 Cookie Consent</h3>
          <p className="text-muted-foreground leading-relaxed">
            When you first visit our website, you will see a cookie consent banner. You can accept all cookies, 
            reject non-essential cookies, or customize your preferences. You can change these settings at any time 
            by clicking the &ldquo;Cookie Settings&rdquo; link in our footer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Impact of Disabling Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you choose to disable cookies, some features of our website may not function properly. This may 
            affect your user experience and the functionality of certain services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Updates to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
            operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
            new Cookie Policy on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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
          <Link href="/terms">
            <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
              Terms of Service
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
