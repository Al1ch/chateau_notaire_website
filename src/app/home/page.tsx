import styles from "./page.module.scss";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
    </main>
  );
}