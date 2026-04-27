import ProjectCard from "@/components/ProjectCard";
import styles from "@/components/Portfolio.module.css";
import { projects } from "@/lib/projects-data";

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Featured Work</span>
          <h2 className={styles.sectionTitle}>Product-focused builds with AI at the center.</h2>
          <p className={styles.sectionText}>
            Zion Flowers leads the collection as a featured SaaS concept built
            around AI-assisted commerce, marketplace operations, and polished
            full-stack execution.
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
