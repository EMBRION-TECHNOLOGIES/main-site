import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { CookieConsent } from "@/components/cookie-consent";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "EMBRION - High-Reliability Digital Health Systems",
    template: "%s | EMBRION",
  },
  description: "EMBRION is the parent of MedSync and StewardAI—building high‑reliability digital health systems that healthcare professionals can trust.",
  keywords: [
    "healthcare technology",
    "digital health systems",
    "MedSync",
    "StewardAI",
    "healthcare software",
    "medication management",
    "AI healthcare",
    "healthcare innovation",
    "healthcare consulting",
    "healthcare development"
  ],
  authors: [{ name: "EMBRION Team" }],
  creator: "EMBRION",
  publisher: "EMBRION",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "EMBRION",
    title: "EMBRION - High-Reliability Digital Health Systems",
    description: "Building innovative healthcare technology solutions that healthcare professionals can trust.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EMBRION - High-Reliability Digital Health Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EMBRION - High-Reliability Digital Health Systems",
    description: "Building innovative healthcare technology solutions that healthcare professionals can trust.",
    images: ["/og-image.jpg"],
    creator: "@embrion_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/web-app-manifest-512x512.png" type="image/png" sizes="512x512" />
        <link rel="icon" href="/web-app-manifest-192x192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/favicon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#031273" />
        <meta name="msapplication-TileColor" content="#031273" />
        <meta name="msapplication-TileImage" content="/web-app-manifest-192x192.png" />
      </head>
      <body
        className={`${josefinSans.variable} antialiased min-h-dvh`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
