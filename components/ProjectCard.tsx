import Image from "next/image";
import Link from "next/link";
import styles from "@/components/Portfolio.module.css";
import type { Project } from "@/lib/projects-data";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const isPlaceholderLink = (value: string) => value === "#";

  return (
    <article
      className={`${styles.card} ${project.featured ? styles.featuredCard : ""}`}
    >
      <div className={styles.cardMedia}>
        {project.caseStudyUrl ? (
          <Link href={project.caseStudyUrl} className={styles.cardMediaLink}>
            <Image
              src={project.imageUrl}
              alt={project.imageAlt}
              fill
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1120px) 50vw, 33vw"
              className={styles.cardImage}
            />
          </Link>
        ) : (
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            fill
            unoptimized
            sizes="(max-width: 640px) 100vw, (max-width: 1120px) 50vw, 33vw"
            className={styles.cardImage}
          />
        )}
        <div className={styles.cardOverlay} />
        {project.featured ? (
          <span className={styles.featuredBadge}>Featured Project</span>
        ) : null}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          {project.caseStudyUrl ? (
            <Link href={project.caseStudyUrl} className={styles.cardTitleLink}>
              <h2 className={styles.cardTitle}>{project.title}</h2>
            </Link>
          ) : (
            <h2 className={styles.cardTitle}>{project.title}</h2>
          )}
          <span className={styles.badge}>{project.status}</span>
        </div>

        <p className={styles.cardDescription}>{project.description}</p>

        <span className={styles.cardLabel}>Key Features</span>
        <ul className={styles.featureList}>
          {project.features.map((feature) => (
            <li key={feature} className={styles.featureItem}>
              {feature}
            </li>
          ))}
        </ul>

        <span className={styles.cardLabel}>Tech Stack</span>
        <div className={styles.stack}>
          {project.stack.map((tech) => (
            <span key={tech} className={styles.stackItem}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.tagRow}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.cardActions}>
        {project.caseStudyUrl ? (
          <Link
            className={`${styles.button} ${styles.secondaryButton}`}
            href={project.caseStudyUrl}
          >
            View Case Study
          </Link>
        ) : null}
        {!isPlaceholderLink(project.githubUrl) ? (
          <a
            className={`${styles.button} ${styles.secondaryButton}`}
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        ) : null}
        {!isPlaceholderLink(project.liveDemoUrl) ? (
          <a
            className={`${styles.button} ${styles.primaryButton}`}
            href={project.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
