import styles from "./page.module.scss";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ValueSection from "@/components/ValueSection/ValueSection";
import StepSection from "@/components/StepSection/StepSection";
import FindUs from "@/components/FindUs/FindUs";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <ServicesSection />
      <StepSection />
      <ValueSection />
      <FindUs />
    </main>
  );
}
