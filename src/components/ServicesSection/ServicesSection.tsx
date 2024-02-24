import React from "react";
import styles from "./ServicesSection.module.scss";
import ScintillantLogo from "@/assets/vectors/scintillant.svg";
import ServicesCard from "../ServicesCard/ServicesCard";

const ServicesSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleSection}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>
                Explorer La Perfection <br /> Dans Notre Domaine
              </h1>
              <ScintillantLogo className={styles.logo} />
            </div>
            <p className={styles.description}>
              We are a group of civil litigation/trial attorneys who focus on
              providing a justice based on the issues relating to insurance
              defense, insurance coverage, bad faith, insurance fraud and
              criminal litigation.
            </p>
          </div>
          <div className={styles.servicesList}>
            <ServicesCard />
            <ServicesCard />
            <ServicesCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
