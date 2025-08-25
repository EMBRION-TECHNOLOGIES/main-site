import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Technology Case Studies",
  description: "Real success stories from healthcare organizations using EMBRION's technology solutions. See measurable results from MedSync and StewardAI implementations.",
  keywords: [
    "healthcare case studies",
    "MedSync success stories",
    "StewardAI results",
    "healthcare technology ROI",
    "digital health transformation",
    "healthcare consulting results"
  ],
  openGraph: {
    title: "Healthcare Technology Case Studies | EMBRION",
    description: "Real success stories from healthcare organizations using EMBRION's technology solutions.",
    type: "website",
    images: [
      {
        url: "/case-studies-og.jpg",
        width: 1200,
        height: 630,
        alt: "EMBRION Healthcare Technology Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Technology Case Studies | EMBRION",
    description: "Real success stories from healthcare organizations using EMBRION's technology solutions.",
  },
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
