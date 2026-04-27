import Link from "next/link";
import styles from "@/components/Portfolio.module.css";
import { projects } from "@/src/data/projects";

type Project = (typeof projects)[number];

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const isExternalProject = project.href.startsWith("http");
  const projectLinkLabel = `View ${project.title}`;
  const LinkComponent = isExternalProject ? "a" : Link;

  return (
    <article
      className={`${styles.card} ${project.featured ? styles.featuredCard : ""}`}
    >
      <div className={styles.cardMedia}>
        <LinkComponent
          href={project.href}
          className={styles.cardMediaLink}
          aria-label={projectLinkLabel}
          {...(isExternalProject ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          <span className={styles.projectIcon}>{project.icon}</span>
        </LinkComponent>
        <div className={styles.cardOverlay} />
        {project.featured ? (
          <span className={styles.featuredBadge}>Featured Project</span>
        ) : null}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <LinkComponent
            href={project.href}
            className={styles.cardTitleLink}
            {...(isExternalProject ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            <h2 className={styles.cardTitle}>{project.title}</h2>
          </LinkComponent>
          <span className={styles.badge}>{project.status}</span>
        </div>

        <p className={styles.cardDescription}>{project.description}</p>

        <span className={styles.cardLabel}>Tech Stack</span>
        <div className={styles.stack}>
          {project.techStack.map((tech) => (
            <span key={tech} className={styles.stackItem}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.cardActions}>
        <LinkComponent
          className={`${styles.button} ${styles.primaryButton}`}
          href={project.href}
          {...(isExternalProject ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          View Project
        </LinkComponent>
      </div>
    </article>
  );
}
