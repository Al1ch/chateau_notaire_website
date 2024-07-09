import React from "react";
import styles from "./AboutValuesSection.module.scss";
import AboutValues from "@/components/AboutValues/AboutValues";

const AboutValueSection = () => {
  return (
    <div className={styles.container}>
      <AboutValues
        title="Notre vision"
        description="Nous souhaitons répondre aux besoins des clients et les protéger juridiquement dans leurs projets personnels et professionnels."
      />
      <AboutValues
        title="Notre mission"
        description="Nous assurons la sécurité juridique des contrats et un suivi personnalité pour tout type de dossier."
      />
      <AboutValues
        title="Notre engagement"
        description="Intégrité, écoute et confidentialité définissent notre engagement envers nos clients et notre responsabilité en notre qualité de notaire."
      />
    </div>
  );
};

export default AboutValueSection;
