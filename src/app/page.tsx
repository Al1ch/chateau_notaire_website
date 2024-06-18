import styles from "./page.module.scss";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ValueSection from "@/components/ValueSection/ValueSection";
import FindUs from "@/components/FindUs/FindUs";
import NotaireRoleSection from "@/components/NotaireRoleSection/NotaireRoleSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paul-Emmanuel Chateau - Notaire | Expertise Notariale",
  description: "Étude de Maître Paul-Emmanuel CHATEAU, notaire à Toulouse ",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <ServicesSection />
      <NotaireRoleSection />
      <ValueSection />
      <FindUs />
    </main>
  );
}
