import styles from "@/components/Portfolio.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>About</span>
          <h2 className={styles.sectionTitle}>Building a strong foundation in software development.</h2>
        </div>

        <div className={styles.aboutCard}>
          <p>
            I&apos;m a Software developer transitioning into tech and actively building
            projects that help me grow across both frontend and backend
            development. My goal is to create software that feels useful,
            thoughtful, and well structured.
          </p>
          <p>
            I&apos;m especially interested in AI-powered applications, modern web
            development, and creative digital products. This portfolio is a place
            to document that progress and show the kind of work I want to keep
            building as I apply for software engineer and AI-focused roles.
          </p>
        </div>
      </div>
    </section>
  );
}
