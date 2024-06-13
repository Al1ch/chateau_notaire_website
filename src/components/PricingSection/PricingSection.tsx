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
          {`La rémunération du notaire est déterminée selon qu’il s’agit d’actes tarifés ou non tarifés. `}
        </p>
        <p className={styles.legalDescription}>
          Les actes soumis au tarif règlementé : ce sont les actes pour lesquels
          le notaire perçoit des émoluments (Article L. 444-1, alinéa 3 du Code
          de Commerce, Crée par la Loi n° 2015-990 du 6 août 2015 Annexe 4-9, 4°
          du Code de Commerce, Crée par Décret n° 2016-230 du 26 février 2016)
        </p>
        <p className={styles.legalDescription}>
          Les actes non soumis au tarif règlementé : ils donnent lieu à la
          perception d’honoraires librement convenus entre l’Office et le
          client. (Article R444-16 du code de commerce créé par l’article 2 du
          décret du 28 février 2016).
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
