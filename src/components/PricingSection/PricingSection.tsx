import React from "react";
import styles from "./PricingSection.module.scss";
import { domains } from "@/data/pricing";
import PricingCard from "@/components/PricingCard/PricingCard";

const PricingSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}> The Perfect Plan for your Needs</h1>
        <p className={styles.description}>
          {`          Simplifiez vos démarches juridiques avec nos solutions notariales
    abordables. Découvrez nos tarifs transparents et contactez-nous dès
    aujourd'hui pour bénéficier d'une assistance professionnelle`}
        </p>
      </div>
      <div className={styles.cardList}>
        {domains.map((domain) => (
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
