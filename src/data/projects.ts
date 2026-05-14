import Biddaloy from "@/assets/projects/biddaloy.webp";
import Amyra from "@/assets/projects/amyra.webp";

export const projects = [
  {
    title: "biddaloy.com.bd — EdTech Platform for Kids",
    tech: ["Next.js 15", "TypeScript", "Sanity CMS", "Supabase", "bKash PGW"],
    highlights: [
      "Built a full EdTech ecosystem — public site, payment gateway, and admin dashboard",
      "Messenger Conversion System: Facebook leads land on a dedicated enrollment page with source tracking",
      "5 payment methods: bKash (automated PGW), Nagad, Rocket, Probashi bKash, and PhonePe",
      "Real-time Telegram alerts on every payment; 200+ active students across BD & India",
    ],
    live: "https://biddaloy.com.bd",
    image: Biddaloy,
    featured: true,
    category: "Client Work",
  },
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
];