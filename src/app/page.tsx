import styles from "./page.module.scss";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ValueSection from "@/components/ValueSection/ValueSection";
import FindUs from "@/components/FindUs/FindUs";
import NotaireRoleSection from "@/components/NotaireRoleSection/NotaireRoleSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paul-Emmanuel Chateau - Notaire | Expertise Notariale",
  description:
    "Maitrisant l'art de la légalité avec expertise, notre cabinet de notaire offre des services juridiques fiables et personnalisés. Protégez votre patrimoine, gérez vos successions et transactions immobilières en toute confiance avec nos notaires expérimentés. Contactez-nous dès aujourd'hui pour des conseils juridiques solides et des solutions sur mesure",
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
