import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import styles from "@/components/Portfolio.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      {/* Sticky navigation links to each section on the page. */}
      <Navbar />

      <Hero />
      <ProjectsSection />
    </main>
  );
}
