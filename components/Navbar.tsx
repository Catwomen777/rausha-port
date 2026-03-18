"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "@/components/Navbar.module.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    // Close the mobile menu after selecting a page.
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={handleLinkClick}>
          Rausha<span className={styles.brandAccent}>.dev</span>
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={isMenuOpen}
          aria-controls="portfolio-navigation"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className={styles.menuIcon} aria-hidden="true" />
        </button>

        <nav
          id="portfolio-navigation"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
          aria-label="Portfolio pages"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
