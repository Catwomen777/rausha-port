import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import styles from "@/components/Portfolio.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      {/* Sticky navigation links to each section on the page. */}
      <Navbar />

      {/* Home now stays focused on the hero section only. */}
      <Hero />
    </main>
  );
}
