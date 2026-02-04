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
    default: "Md. Shamim Hossain — Frontend Engineer",
    template: "%s | Md. Shamim Hossain",
  },
  description:
    "Frontend Engineer specializing in Next.js and TypeScript. Building fast, scalable, and user-focused web applications with strong performance, accessibility, and clean architecture.",
  keywords: [
    "Md. Shamim Hossain",
    "ShamimTheDev",
    "Frontend Engineer",
    "Next.js Developer",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Web Performance",
    "Accessibility",
    "E-commerce Frontend",
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
    siteName: "Shamim Hossain — Frontend Engineer",
    title: "Md. Shamim Hossain — Frontend Engineer",
    description:
      "Frontend Engineer building high-performance, scalable web applications using Next.js and TypeScript.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Md. Shamim Hossain — Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Shamim Hossain — Frontend Engineer",
    description:
      "Frontend Engineer specializing in Next.js, TypeScript, and modern web application development.",
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
    jobTitle: "Frontend Engineer",
    description:
      "Frontend Engineer specializing in building fast, scalable, and accessible web applications using Next.js and TypeScript.",
    url: "https://shamimthedev.vercel.app",
    image: "https://shamimthedev.vercel.app/profile-image.png",
    sameAs: [
      "https://linkedin.com/in/shamimthedev",
      "https://github.com/shamimthedev",
      "https://facebook.com/shamimthedev",
    ],
    knowsAbout: [
      "Frontend Development",
      "Next.js",
      "TypeScript",
      "React",
      "Web Performance",
      "Accessibility",
      "Semantic HTML",
      "E-commerce Frontend",
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
