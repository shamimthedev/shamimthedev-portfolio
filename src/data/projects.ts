import Amyra from "@/assets/projects/amyra.png";
import PlugNPlay from "@/assets/projects/plugnplay.png";
import Kosi from "@/assets/projects/kosi.png";

export const projects = [
  {
    title: "amyra.com.bd — Live Client Project",
    tech: ["Next.js 15", "TypeScript", "Sanity CMS"],
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
    tech: ["Next.js 15", "TypeScript", "Zustand"],
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
    tech: ["Next.js 15", "TypeScript", "Framer Motion"],
    highlights: [
      "Dedicated shop page with dynamic filtering and grid/list view modes",
      "High-end user experience with smooth animations and hover effects",
      "Optimized performance using Next.js image optimization and routing",
      "Clean, accessible, and fully responsive design",
    ],
    live: "https://kosii.vercel.app",
    git: "https://github.com/shamimthedev/kosi-furniture-store",
    image: Kosi,
    featured: true,
    category: "Featured Project",
  },
];