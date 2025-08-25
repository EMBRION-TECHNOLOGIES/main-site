import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Embrion Technologies - Let's Build Solutions Together",
  description: "Get in touch with Embrion Technologies. We're here to help with your digital transformation and healthcare technology needs.",
};

export default function Contact() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Let&apos;s Build Solutions Together
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Ready to transform your business through innovative technology? Let&apos;s discuss how we can help 
          you scale through digital transformation, technical support, and strategic guidance.
        </p>
      </div>
      <ContactForm />
    </main>
  );
}
