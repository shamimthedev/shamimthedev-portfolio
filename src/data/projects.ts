import Amyra from "@/assets/projects/amyra.webp";
import PlugNPlay from "@/assets/projects/plugnplay.webp";
import Kosi from "@/assets/projects/kosi.webp";

export const projects = [
  {
    title: "amyra.com.bd — Live Client Project",
    description:
      "Production-ready business website built for a real client. I owned the complete frontend lifecycle including design, development, CMS integration, deployment, and ongoing maintenance.",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Sanity CMS",
    ],
    highlights: [
      "Designed and developed the full frontend from scratch",
      "Integrated Sanity CMS for dynamic content and product management",
      "Deployed and currently maintaining the live production website",
      "Ensured responsive design, accessibility, and cross-device compatibility",
    ],
    live: "https://amyra.com.bd",
    image: Amyra,
    featured: true,
    category: "Client Work",
  },
  {
    title: "PlugNPlay — Premium Tech Gadget E-Commerce",
    description:
      "A full-featured e-commerce platform showcasing advanced frontend architecture, state management, and a complete checkout experience tailored for the Bangladesh market.",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Zustand",
    ],
    highlights: [
      "Advanced product filtering by category, price, brand, and rating",
      "Cart management with Zustand and local storage persistence",
      "Complete checkout flow with COD, bKash, Nagad, and Card payments",
      "Flash sales, countdown timers, hero carousel, and curated sections",
    ],
    live: "https://plugnplay-lime.vercel.app",
    image: PlugNPlay,
    featured: true,
    category: "Featured Project",
  },
  {
    title: "Kosi — Premium Furniture & Home Decor Store",
    description:
      "A premium e-commerce storefront focused on polished UI, smooth animations, and performance optimization using modern Next.js features.",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Framer Motion",
    ],
    highlights: [
      "Dedicated shop page with dynamic filtering and grid/list view modes",
      "High-end user experience with smooth animations and hover effects",
      "Optimized performance using Next.js image optimization and routing",
      "Clean, accessible, and fully responsive design",
    ],
    live: "https://kosii.vercel.app",
    image: Kosi,
    featured: true,
    category: "Featured Project",
  },
];
