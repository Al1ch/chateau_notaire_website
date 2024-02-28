import React from "react";
import styles from "./page.module.scss";
import AboutHeroSection from "@/components/AboutHeroSection/AboutHeroSection";
import OurStorySection from "@/components/OurStorySection/OurStorySection";
import Footer from "@/components/Footer/Footer";
import AboutValueSection from "@/components/AboutValuesSection/AboutValueSection";
import FindUs from "@/components/FindUs/FindUs";

export default function About() {
  return (
    <main className={styles.main}>
      <AboutHeroSection />
      <OurStorySection />
      <AboutValueSection />
      <FindUs />
    </main>
  );
}
