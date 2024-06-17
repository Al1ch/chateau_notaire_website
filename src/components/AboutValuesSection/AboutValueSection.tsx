import React from "react";
import styles from "./AboutValuesSection.module.scss";
import AboutValues from "@/components/AboutValues/AboutValues";

const AboutValueSection = () => {
  return (
    <div className={styles.container}>
      <AboutValues
        title="Notre Vision"
        description="Notre vision est de rendre le monde meilleur en offrant des solutions innovantes et durables pour les entreprises et les particuliers."
      />
      <AboutValues
        title="Notre Mission"
        description="Nous voulons offrir une expertise
        et une défense juridique intelligibles, transparentes, et construites autour des réalités de nos clients."
      />
      <AboutValues
        title="Notre Devoir"
        description="Votre satisfaction est notre priorité. Nous nous engageons à vous offrir un service de qualité, personnalisé et adapté à vos besoins."
      />
    </div>
  );
};

export default AboutValueSection;
