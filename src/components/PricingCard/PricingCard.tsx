import React from "react";
import styles from "./PricingCard.module.scss";

const PricingCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>Single Plan</h3>
        <p className={styles.description}>For single person</p>
      </div>
    </div>
  );
};

export default PricingCard;
