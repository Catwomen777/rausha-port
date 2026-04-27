export type Project = {
  title: string;
  description: string;
  features: string[];
  stack: string[];
  tags: string[];
  caseStudyUrl?: string;
  githubUrl: string;
  liveDemoUrl: string;
  status: string;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Zion Flowers — AI-Driven Flower Marketplace & SaaS",
    description:
      "An AI-powered flower marketplace and SaaS platform that helps customers generate custom floral arrangements from mood prompts, occasions, and inspiration images. Built for real florist operations with scalable marketplace architecture, streamlined ordering, and an owner dashboard designed to support growth.",
    features: [
      "AI-generated flower arrangements from text and image input",
      "Multi-shop florist marketplace with branded storefronts",
      "Dynamic catalog, inventory, and fulfillment management",
      "Smart checkout with delivery, tax, and scheduling workflows",
      "Inspiration uploads transformed into AI-generated floral variations",
      "Clean operations dashboard for shop owners",
    ],
    stack: [
      "Next.js App Router",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Stripe",
      "Docker",
    ],
    tags: ["AI", "SaaS", "Marketplace", "Full Stack"],
    caseStudyUrl: "/projects/zion-flowers",
    githubUrl: "https://github.com/yourusername/zion-flowers",
    liveDemoUrl: "https://zion-flowers-demo.vercel.app",
    status: "Featured Project",
    imageUrl: "/images/zion-flowers-preview.jpg",
    imageAlt: "Preview artwork for the Zion Flowers AI marketplace platform.",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio designed to present projects, technical growth, and professional goals in a polished developer-focused format.",
    features: [
      "Responsive portfolio pages across home, projects, about, and contact",
      "Modular React component structure for content sections",
      "Modern visual design tuned for developer branding",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    tags: ["Portfolio", "Frontend", "Brand"],
    githubUrl: "https://github.com/Catwomen777/rausha-port/portfolio-website",
    liveDemoUrl: "https://raushadev.com",
    status: "Live",
    imageUrl: "/images/zion-flowers-preview.jpg",
    imageAlt: "Abstract portfolio project placeholder artwork.",
  },
  {
    title: "Vybrr Dating App",
    description:
      "A dating app concept focused on profile discovery, matching flows, and a realistic mobile-first product experience.",
    features: [
      "Profile discovery and swipe-based browsing concepts",
      "Mobile-first interaction patterns for matching flows",
      "Product-style UI system for consumer app exploration",
    ],
    stack: ["React", "TypeScript", "Responsive UI"],
    tags: ["Consumer App", "Concept", "Mobile First"],
    githubUrl: "https://github.com/yourusername/vybrr-dating-app",
    liveDemoUrl: "https://your-demo-link.com/vybrr-dating-app",
    status: "Concept",
    imageUrl: "/images/zion-flowers-preview.jpg",
    imageAlt: "Abstract concept preview for the Vybrr dating app.",
  },
];
