import Link from "next/link";
import styles from "@/components/Portfolio.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} ${styles.heroLayout}`}>
        <div className={styles.heroCopy}>
          <span className={styles.heroLabel}>AI Software Developer Portfolio</span>
          <h1 className={styles.heroTitle}>
            Rausha
            <span className={styles.heroRole}>Innovative Software Developer</span>
          </h1>
          <p className={styles.heroText}>
            I&apos;mI’m an innovative app developer and creative technologist 
            building digital experiences that blend art, modern web development, 
            and AI-driven ideas. My work focuses on creating original products that
            feel visually bold, technically strong, and built to solve real-world problems.
          </p>
          <div className={styles.heroActions}>
            <Link
              href="/projects"
              className={`${styles.button} ${styles.primaryButton}`}
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className={`${styles.button} ${styles.secondaryButton}`}
            >
              Contact Me
            </Link>
          </div>
        </div>

        <aside className={styles.heroPanel}>
          <h2 className={styles.heroPanelTitle}>Current Focus</h2>
          <ul className={styles.heroPanelList}>
            <li className={styles.heroPanelItem}>
              <span className={styles.heroPanelStrong}>Frontend</span>
              Building polished interfaces with React, Next.js, and TypeScript.
            </li>
            <li className={styles.heroPanelItem}>
              <span className={styles.heroPanelStrong}>Backend</span>
              Creating APIs and learning how products work end to end.
            </li>
            <li className={styles.heroPanelItem}>
              <span className={styles.heroPanelStrong}>AI + Product</span>
              Exploring AI-powered apps and creative tools for useful experiences.
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
