import React from "react";
import styles from "./StepSection.module.scss";
import ScintillantLogo from "@/assets/vectors/scintillant.svg";
import StepCard from "@/components/StepCard/StepCard";

const StepSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Les Étapes</h1>
        <ScintillantLogo className={styles.logo} />
      </div>
      <div className={styles.stepsContainer}>
        <StepCard
          title="Premier rendez-vous"
          numberStep="1"
          description="Nous nous rencontrons et échangeaons simplement"
        />
        <StepCard
          title="Etude preleminaire"
          numberStep="2"
          description="J'étudie le dossier et vous recontacter"
        />
        <StepCard
          title="Lancement procédure"
          numberStep="3"
          description="On attaque les démarche ensemble pour le dossier"
        />
      </div>
    </div>
  );
};

export default StepSection;
