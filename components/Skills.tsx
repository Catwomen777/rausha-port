import styles from "@/components/Portfolio.module.css";
import { skillCategories } from "@/lib/skills-data";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Skills</span>
          <h2 className={styles.sectionTitle}>Tools and technologies I&apos;m using to grow.</h2>
          <p className={styles.sectionText}>
            The categories below keep the section easy to update as your stack
            changes over time.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category) => (
            <article key={category.title} className={styles.skillCard}>
              <h3 className={styles.skillTitle}>{category.title}</h3>
              <div className={styles.skillList}>
                {category.skills.map((skill) => (
                  <span key={skill} className={styles.skillItem}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
