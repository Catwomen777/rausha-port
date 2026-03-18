import ProjectCard from "@/components/ProjectCard";
import styles from "@/components/Portfolio.module.css";
import { projects } from "@/lib/projects-data";

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Featured Work</span>
          <h2 className={styles.sectionTitle}>Projects that reflect where I&apos;m heading.</h2>
          <p className={styles.sectionText}>
            Each project helps me sharpen modern web development skills while
            building a portfolio for junior engineering and AI-focused roles.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
