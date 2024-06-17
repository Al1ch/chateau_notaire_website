import React from "react";
import styles from "./StepCard.module.scss";

type Props = {
  numberStep: string;
  title: string;
  description: string;
};

const StepCard = ({ numberStep, title, description }: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.numberStep}>{numberStep}</span>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {/* <div className={styles.step}>
          <div className={styles.stepContent}>
            <p className={styles.stepText}>→ Avis préliminaire su le dossier</p>
          </div>
          <div className={styles.stepContent}>
            <p className={styles.stepText}>→ Avis préliminaire su le dossier</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default StepCard;
