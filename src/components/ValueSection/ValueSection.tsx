import React from "react";
import styles from "./ValueSection.module.scss";
import ScintillantLogo from "@/assets/vectors/scintillant.svg";
import Image from "next/image";
import womenImage from "@/assets/images/balanceFemme.jpg";
import ValueCard from "@/components/ValueCard/ValueCard";

const ValueSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.titleSection}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Les Valeurs Qui Nous anime</h1>
            <ScintillantLogo className={styles.logo} />
          </div>
        </div>
        <p
          className={styles.description}
        >{`Un litige peut être chargé d'émotions et d'incertitudes. Nos avocats s'engagent à vous apporter le soutien, l'attention et la considération que vous méritez.`}</p>
        <div className={styles.sectionContent}>
          <Image
            src={womenImage}
            alt="Femme en équilibre"
            width={400}
            height={500}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.valueList}>
        <ValueCard
          title="Respect"
          description="Our Banking and Finance team has very broad experience structuring and negotiating complex"
        />
        <ValueCard
          title="Protecting Your Business
"
          description="We are on the panel of many international and local banks, and also represent borrowers which include"
        />
        <ValueCard
          title="Relationship Based On Trust

"
          description="We punch far above our weight when it comes to Singapore’s "
        />
      </div>
    </div>
  );
};

export default ValueSection;
