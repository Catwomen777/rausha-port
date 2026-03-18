export type Project = {
  title: string;
  description: string;
  frontendStack: string[];
  githubUrl: string;
  liveDemoUrl: string;
  status: string;
};

export const projects: Project[] = [
  {
    title: "Mechanic Shop API",
    description:
      "Backend API for managing customers, mechanics, invoices, and inventory for a service-based business workflow.",
    frontendStack: ["Coming Soon"],
    githubUrl: "#",
    liveDemoUrl: "#",
    status: "Backend Complete",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio designed to present projects, technical growth, and professional goals in a polished developer-focused format.",
    frontendStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Catwomen777/rausha-port/portfolio-website",
    liveDemoUrl: "https://raushadev.com",
    status: "Live",
  },
  {
    title: "Vybrr Dating App",
    description:
      "A dating app concept focused on profile discovery, matching flows, and a realistic mobile-first product experience.",
    frontendStack: ["React", "TypeScript", "Responsive UI"],
    githubUrl: "https://github.com/yourusername/vybrr-dating-app",
    liveDemoUrl: "https://your-demo-link.com/vybrr-dating-app",
    status: "Concept",
  },
];
