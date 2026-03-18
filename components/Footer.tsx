import Link from "next/link";
import styles from "@/components/Footer.module.css";

// Keep this static to avoid any server/client time-based mismatch.
const copyrightYear = "2025";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/Catwomen777", label: "GitHub" },
  {
    href: "https://linkedin.com/in/rausha-willis-cat777",
    label: "LinkedIn",
  },
  { href: "mailto:raushawillis336@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            {/* Brand block stays simple so it is easy to edit later. */}
            <Link href="/" className={styles.brand}>
              Rausha<span className={styles.brandAccent}>.dev</span>
            </Link>
            <p className={styles.subtitle}>Innovative Software Developer</p>
            <div className={styles.linksWrap}>
              <div className={styles.linkGroup}>
                <h2 className={styles.groupTitle}>Navigation</h2>
                <ul className={styles.list}>
                  {pageLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.linkGroup}>
                <h2 className={styles.groupTitle}>Connect</h2>
                <ul className={styles.list}>
                  {socialLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={styles.link}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {copyrightYear} Rausha.dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
