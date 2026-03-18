import About from "@/components/About";
import Navbar from "@/components/Navbar";
import styles from "@/components/Portfolio.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* Shared navbar keeps page navigation consistent across the portfolio. */}
      <Navbar />
      <About />
    </main>
  );
}
