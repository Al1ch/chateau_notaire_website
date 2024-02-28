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
        title="Notre Vision"
        description="Notre vision est de rendre le monde meilleur en offrant des solutions innovantes et durables pour les entreprises et les particuliers."
      />
      <AboutValues
        title="Notre Vision"
        description="Notre vision est de rendre le monde meilleur en offrant des solutions innovantes et durables pour les entreprises et les particuliers."
      />
    </div>
  );
};

export default AboutValueSection;
