import React from "react";
import styles from "./page.module.scss";
import AboutHeroSection from "@/components/AboutHeroSection/AboutHeroSection";
import OurStorySection from "@/components/OurStorySection/OurStorySection";
import FindUs from "@/components/FindUs/FindUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui Sommes-Nous",
  description:
    "Maitrisant l'art de la légalité avec expertise, notre cabinet de notaire offre des services juridiques fiables et personnalisés. Protégez votre patrimoine, gérez vos successions et transactions immobilières en toute confiance avec nos notaires expérimentés. Contactez-nous dès aujourd'hui pour des conseils juridiques solides et des solutions sur mesure",
};

export default function About() {
  return (
    <main className={styles.main}>
      <AboutHeroSection />
      <OurStorySection />
      <FindUs />
    </main>
  );
}
