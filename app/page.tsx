import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const contactLinks = [
  { href: "mailto:hello@example.com", label: "Email" },
  { href: "https://github.com", label: "GitHub" },
  { href: "https://linkedin.com", label: "LinkedIn" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Rausha Portfolio
          </Link>

          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-4 text-sm sm:gap-6 sm:text-base">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-4 py-20 sm:px-6 lg:px-8">
        <section className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">
            Frontend Developer
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Building clean, fast, and user-focused web experiences.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            I design and ship modern web apps with React, Next.js, and TailwindCSS.
            Explore my projects and reach out if you would like to collaborate.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-slate-400 hover:text-white"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Rausha Portfolio</p>
          <ul className="flex items-center gap-4">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition hover:text-white"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
