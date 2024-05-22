import React from "react";
import styles from "./PricingSection.module.scss";
import { prices } from "@/data/pricing";
import PricingCard from "@/components/PricingCard/PricingCard";

const PricingSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}> Tarifs </h1>
        <p className={styles.description}>
          {`Simplifiez vos démarches juridiques avec nos solutions notariales
    abordables. Découvrez nos tarifs transparents `}
        </p>
      </div>
      <div className={styles.cardList}>
        {prices.map((domain) => (
          <PricingCard
            key={domain.id}
            title={domain.title}
            description={domain.description}
            services={domain.services}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
