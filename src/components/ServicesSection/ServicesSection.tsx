import React from "react";
import styles from "./ServicesSection.module.scss";

const ServicesSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}> Nos Services </h1>
        <p className={styles.descriptionServices}>
          We are a group of civil litigation/trial attorneys who focus on <br />
          providing a justice based on the issues relating to insurance defense,
          insurance <br /> coverage, bad faith, insurance fraud and <br />
          criminal litigation.
        </p>
      </div>
    </div>
  );
};

export default ServicesSection;
