import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import styles from "@/components/Portfolio.module.css";

export default function SkillsPage() {
  return (
    <main className={styles.page}>
      {/* Shared navbar keeps page navigation consistent across the portfolio. */}
      <Navbar />
      <Skills />
    </main>
  );
}
