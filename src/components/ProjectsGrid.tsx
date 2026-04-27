import ProjectCard from "@/src/components/ProjectCard";
import styles from "@/components/Portfolio.module.css";
import { projects } from "@/src/data/projects";

export default function ProjectsGrid() {
  return (
    <div className={styles.projectsGrid}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
