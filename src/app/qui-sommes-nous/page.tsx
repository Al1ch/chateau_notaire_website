import React from "react";
import styles from "./page.module.scss";
import AboutHeroSection from "@/components/AboutHeroSection/AboutHeroSection";
import OurStorySection from "@/components/OurStorySection/OurStorySection";
import FindUs from "@/components/FindUs/FindUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui Sommes-Nous | Paul-Emmanuel Chateau - Notaire",
  description:
    "Paul-Emmanuel Chateau, Je vous accompagne à chaque étape de votre vie et de vos transactions, assurant la sécurité et la légalité dans vos affaires familiales et commerciales",
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
