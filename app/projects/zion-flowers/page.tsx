import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { projects } from "@/lib/projects-data";

const heroBadges = [
  "AI SaaS",
  "Marketplace",
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "Stripe",
  "Clerk",
];

const keyFeatures = [
  {
    title: "AI arrangement creator",
    description:
      "Customers can describe a feeling, occasion, or floral vision and receive arrangement concepts that feel tailored instead of generic.",
  },
  {
    title: "Mood and occasion recommendations",
    description:
      "The experience adapts to weddings, birthdays, sympathy, celebrations, and seasonal moments with more context-aware product guidance.",
  },
  {
    title: "Inspiration image upload",
    description:
      "Users can upload reference imagery and receive three AI-generated arrangement directions based on the original visual tone.",
  },
  {
    title: "Flower selection before generation",
    description:
      "Customers can narrow the creative output by selecting favorite stems, palettes, and styles before AI recommendations are produced.",
  },
  {
    title: "Multi-shop florist storefronts",
    description:
      "Each florist can manage a branded storefront while participating in a broader marketplace that supports discovery and conversion.",
  },
  {
    title: "Product and inventory management",
    description:
      "Florists can manage pricing, seasonal products, availability, and fulfillment constraints from a clean operations dashboard.",
  },
  {
    title: "Checkout and delivery workflows",
    description:
      "The commerce flow supports delivery, tax, tipping, and scheduling so the platform feels ready for real transactions instead of demo-only browsing.",
  },
  {
    title: "Shop owner dashboard",
    description:
      "Store owners get a SaaS-style control panel for catalog updates, order management, storefront settings, and business visibility.",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["Next.js App Router", "React", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Python"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Prisma", "SQLAlchemy where applicable"],
  },
  {
    category: "Auth",
    items: ["Clerk"],
  },
  {
    category: "Payments",
    items: ["Stripe"],
  },
  {
    category: "DevOps",
    items: ["Docker", "GitHub", "Vercel/Railway-ready deployment"],
  },
];

const architectureLayers = [
  {
    title: "Public marketing pages",
    description:
      "Landing, value proposition, florist acquisition, and product education pages built to convert visitors into shoppers or shop owners.",
  },
  {
    title: "Shop and customer marketplace",
    description:
      "Discovery pages for storefronts, collections, seasonal products, and arrangement browsing with a customer-first purchase flow.",
  },
  {
    title: "AI arrangement flow",
    description:
      "Prompt input, flower selection, image upload, and recommendation generation designed as a guided experience instead of a generic form.",
  },
  {
    title: "Florist dashboard and admin",
    description:
      "Internal tools for managing products, orders, scheduling, storefront settings, and onboarding future florist partners.",
  },
  {
    title: "Backend API layer",
    description:
      "FastAPI services handle orchestration across product data, AI workflows, auth-aware actions, checkout logic, and operational endpoints.",
  },
  {
    title: "Database, payment, and auth services",
    description:
      "PostgreSQL stores the core business model while Clerk and Stripe support identity, account separation, and transactional flows.",
  },
];

const challenges = [
  "Choosing an AI-first product direction instead of building a basic flower shop experience.",
  "Structuring the product so florist onboarding can scale beyond a single-store demo.",
  "Separating customer marketplace journeys from shop owner dashboard workflows without creating product confusion.",
  "Planning checkout, delivery scheduling, taxes, tips, and marketplace logic in a way that could grow into a real SaaS system.",
  "Building with portfolio and demo readiness in mind so the product communicates execution quality quickly to recruiters and founders.",
];

const zionFlowersProject = projects.find(
  (project) => project.caseStudyUrl === "/projects/zion-flowers",
);

const liveDemoUrl = zionFlowersProject?.liveDemoUrl ?? "#";
const githubUrl = zionFlowersProject?.githubUrl ?? "#";
const imageUrl = zionFlowersProject?.imageUrl ?? "/images/zion-flowers-preview.jpg";
const imageAlt =
  zionFlowersProject?.imageAlt ??
  "Preview artwork for the Zion Flowers AI marketplace platform.";

export const metadata: Metadata = {
  title: "Zion Flowers Case Study | Rausha Portfolio",
  description:
    "Case study for Zion Flowers, an AI-driven flower marketplace and SaaS platform built with Next.js, FastAPI, PostgreSQL, Clerk, and Stripe.",
};

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-3xl">
      <span className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{copy}</p>
    </div>
  );
}

export default function ZionFlowersCaseStudyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-slate-100">
      <Navbar />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_24%),radial-gradient(circle_at_bottom,rgba(244,114,182,0.12),transparent_24%)]" />

      <section className="px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_30px_80px_rgba(2,6,23,0.35)] backdrop-blur xl:p-10">
            <Link
              href="/projects"
              className="inline-flex items-center text-sm font-medium text-emerald-200 transition hover:text-white"
            >
              Back to Projects
            </Link>

            <div className="mt-6 flex flex-wrap gap-3">
              {heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Zion Flowers — AI-Driven Flower Marketplace &amp; SaaS
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              A full-stack AI-powered flower platform that helps customers
              generate custom arrangements by mood, occasion, season, or
              inspiration image while giving florists a SaaS dashboard to manage
              products, orders, and storefronts.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
              >
                Live Demo
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/40 hover:bg-white/10"
              >
                GitHub Repo
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-3 shadow-[0_25px_70px_rgba(2,6,23,0.3)] backdrop-blur">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-300/10 via-transparent to-sky-400/10" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={1600}
                height={900}
                unoptimized
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-8 backdrop-blur">
            <SectionHeading
              eyebrow="Problem"
              title="Flower shopping is still too generic for emotional purchases."
              copy="Traditional flower shopping feels limited, generic, and disconnected from a customer’s actual mood, event, or visual inspiration. On the business side, florists also need better digital tools to manage products, storefronts, and online orders without juggling disconnected systems."
            />
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-8 backdrop-blur">
            <SectionHeading
              eyebrow="Solution"
              title="An AI-assisted marketplace with florist-ready SaaS infrastructure."
              copy="Zion Flowers combines AI-generated arrangement recommendations with a multi-shop florist marketplace. Customers can describe what they want, choose flowers, upload inspiration images, and receive personalized arrangement ideas while florists manage the business through a structured SaaS dashboard."
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Key Features"
            title="A product concept designed to feel like a startup, not a demo."
            copy="The platform combines AI-assisted arrangement generation with practical commerce and marketplace tooling so the user experience and business architecture support each other."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {keyFeatures.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-white/[0.05]"
              >
                <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-emerald-300/20 to-cyan-400/20 ring-1 ring-white/10" />
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Tech Stack"
            title="A full-stack foundation built for product depth and deployment readiness."
            copy="The stack balances frontend polish, backend structure, operational clarity, and marketplace growth potential."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {techStack.map((group) => (
              <article
                key={group.category}
                className="rounded-[1.75rem] border border-white/10 bg-slate-950/65 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{group.category}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Architecture"
            title="Clear product layers keep the experience scalable."
            copy="Zion Flowers is structured as a multi-surface platform so customer acquisition, marketplace discovery, AI flows, and florist operations can evolve without collapsing into one overloaded interface."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {architectureLayers.map((layer) => (
              <article
                key={layer.title}
                className="rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6"
              >
                <h3 className="text-xl font-semibold text-white">{layer.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {layer.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-8">
            <SectionHeading
              eyebrow="My Role"
              title="I approached Zion Flowers as a product, not just a feature set."
              copy="I designed and built Zion Flowers as a full-stack AI SaaS concept, focusing on product architecture, frontend UX, backend API structure, database planning, and AI-driven user flows. I treated it like a startup-ready platform where customer delight and business operations need to work together from the start."
            />
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-8">
            <SectionHeading
              eyebrow="Challenges & Decisions"
              title="Key tradeoffs shaped the product direction."
              copy="The hardest decisions were less about code and more about defining the right product boundaries early so the concept could scale beyond a single demo flow."
            />

            <ul className="mt-8 space-y-4">
              {challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-7 text-slate-300"
                >
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-300/20 bg-gradient-to-br from-emerald-300/10 via-slate-950/80 to-sky-400/10 p-8 shadow-[0_25px_80px_rgba(2,6,23,0.28)]">
          <SectionHeading
            eyebrow="Outcome"
            title="A case study that signals startup-level thinking."
            copy="Zion Flowers demonstrates my ability to build beyond a basic CRUD app by combining full-stack development, AI product strategy, SaaS architecture, and user-centered design. It shows how I think about product systems, not just isolated screens or endpoints."
          />
        </div>
      </section>

      <section className="px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 text-center shadow-[0_25px_70px_rgba(2,6,23,0.28)] backdrop-blur">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">
            Interested in seeing the build?
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Explore the product concept in more detail.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Zion Flowers is designed to communicate product strategy, full-stack
            execution, and AI-native thinking in a format that works for both
            recruiters and startup founders.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              View Live Demo
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/40 hover:bg-white/10"
            >
              View Code
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
