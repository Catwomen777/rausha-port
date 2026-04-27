export const projects = [
  {
    title: "Zion Flowers — AI-Driven Flower Marketplace & SaaS",
    slug: "zion-flowers",
    description:
      "An AI-powered flower marketplace and SaaS platform that helps customers generate custom floral arrangements from mood prompts, occasions, and inspiration images. Built for real florist operations with scalable marketplace architecture, streamlined ordering, and an owner dashboard designed to support growth.",
    techStack: [
      "Next.js App Router",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Stripe",
      "Docker",
    ],
    status: "Featured Project",
    featured: true,
    href: "/projects/zion-flowers",
    icon: "ZF",
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "A personal portfolio designed to present projects, technical growth, and professional goals in a polished developer-focused format.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Live",
    featured: false,
    href: "https://raushadev.com",
    icon: "PW",
  },
  {
    title: "Vybrr Dating App",
    slug: "vybrr-dating-app",
    description:
      "A dating app concept focused on profile discovery, matching flows, and a realistic mobile-first product experience.",
    techStack: ["React", "TypeScript", "Responsive UI"],
    status: "Concept",
    featured: false,
    href: "https://your-demo-link.com/vybrr-dating-app",
    icon: "VA",
  },
] as const;
