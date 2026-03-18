import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import styles from "@/components/Portfolio.module.css";

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      {/* Shared navbar keeps page navigation consistent across the portfolio. */}
      <Navbar />
      <ProjectsSection />
    </main>
  );
}
