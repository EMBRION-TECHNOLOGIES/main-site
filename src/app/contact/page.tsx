import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with EMBRION. We're here to help with your healthcare technology needs.",
};

export default function Contact() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-2 text-muted-foreground">
        Ready to discuss your healthcare technology needs? Let&apos;s start a conversation.
      </p>
      <ContactForm />
    </main>
  );
}
