import styles from "@/components/Portfolio.module.css";

const contactLinks = [
  {
    label: "Email",
    value: "raushawillis336@gmail.com",
    href: "mailto:raushawillis336@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Catwomen777",
    href: "https://github.com/Catwomen777",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rausha-willis-cat777",
    href: "https://linkedin.com/in/rausha-willis-cat777",
  },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Contact</span>
          <h2 className={styles.sectionTitle}>Let&apos;s connect.</h2>
          <p className={styles.sectionText}>
            I&apos;m open to junior software engineering opportunities,
            collaborations, and conversations around AI-focused products.
          </p>
        </div>

        <div className={styles.contactCard}>
          <p className={styles.sectionText}>
            If you&apos;re hiring, building something interesting, or want to talk
            about modern web development and creative technology, feel free to
            reach out.
          </p>

          <ul className={styles.contactList}>
            {contactLinks.map((item) => (
              <li key={item.label}>
                <span className={styles.contactItemLabel}>{item.label}</span>
                <a
                  className={styles.contactLink}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
