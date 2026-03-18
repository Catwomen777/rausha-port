import styles from "@/components/Portfolio.module.css";
import type { Project } from "@/lib/projects-data";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>{project.title}</h2>
          <span className={styles.badge}>{project.status}</span>
        </div>

        <p className={styles.cardDescription}>{project.description}</p>

        <span className={styles.cardLabel}>Frontend Stack</span>
        <div className={styles.stack}>
          {project.frontendStack.map((tech) => (
            <span key={tech} className={styles.stackItem}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.cardActions}>
        <a
          className={`${styles.button} ${styles.secondaryButton}`}
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className={`${styles.button} ${styles.primaryButton}`}
          href={project.liveDemoUrl}
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
}
