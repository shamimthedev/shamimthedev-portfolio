import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Md. Shamim Hossain — Full-Stack Developer",
    template: "%s | Md. Shamim Hossain",
  },
  description:
    "Full-Stack Developer specializing in Next.js, TypeScript, and Supabase. Building production platforms with payment integrations, EdTech systems, and e-commerce solutions for Bangladesh businesses.",
  keywords: [
    "Md. Shamim Hossain",
    "ShamimTheDev",
    "Full-Stack Developer",
    "Next.js Developer",
    "TypeScript",
    "React",
    "Supabase",
    "bKash Payment Gateway",
    "EdTech Platform",
    "E-commerce Development",
    "Bangladesh Web Developer",
    "Payment Integration",
    "Tailwind CSS",
  ],
  authors: [{ name: "Md. Shamim Hossain" }],
  creator: "Md. Shamim Hossain",
  publisher: "Md. Shamim Hossain",
  metadataBase: new URL("https://shamimthedev.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shamimthedev.vercel.app",
    siteName: "Shamim Hossain — Full-Stack Developer",
    title: "Md. Shamim Hossain — Full-Stack Developer",
    description:
      "Full-Stack Developer building production platforms with payment integrations. EdTech systems serving 200+ students and e-commerce solutions with bKash gateway.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Md. Shamim Hossain — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Shamim Hossain — Full-Stack Developer",
    description:
      "Full-Stack Developer building production platforms with Next.js, TypeScript & Supabase. Payment integrations, EdTech, and e-commerce solutions.",
    images: ["/og-image.jpg"],
    creator: "@shamimthedev",
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
    google: "google8a122e0b0ebd53f3",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Md. Shamim Hossain",
    alternateName: "Shamim Hossain",
    jobTitle: "Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in building production platforms with payment integrations, EdTech systems, and e-commerce solutions using Next.js, TypeScript, and Supabase.",
    url: "https://shamimthedev.vercel.app",
    image: "https://shamimthedev.vercel.app/profile-image.png",
    sameAs: [
      "https://linkedin.com/in/shamimthedev",
      "https://github.com/shamimthedev",
      "https://facebook.com/shamimthedev",
    ],
    knowsAbout: [
      "Full-Stack Development",
      "Next.js",
      "TypeScript",
      "React",
      "Supabase",
      "PostgreSQL",
      "Payment Gateway Integration",
      "bKash Payment Gateway",
      "EdTech Platform Development",
      "E-commerce Development",
      "REST APIs",
      "Sanity CMS",
      "Telegram Bot API",
    ],
    nationality: "Bangladesh",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
      addressRegion: "Dhaka Division",
      addressLocality: "Dhaka",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${calistoga.variable} bg-gray-900 text-white antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}