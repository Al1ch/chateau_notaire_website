import React from "react";
import styles from "./ValueSection.module.scss";
import ScintillantLogo from "@/assets/vectors/scintillant.svg";
import Image from "next/image";
import office from "@/assets/images/office.jpg";
import ValueCard from "@/components/ValueCard/ValueCard";
import ReactivitySvg from "@/assets/vectors/reactivity.svg";
import AvailabilitySvg from "@/assets/vectors/disponibility.svg";
import CadenaSvg from "@/assets/vectors/cadenas.svg";

const ValueSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.titleSection}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>Les Valeurs Qui Nous Animent</h1>
              <ScintillantLogo className={styles.logo} />
            </div>
          </div>
          <p
            className={styles.description}
          >{`L’étude est à taille humaine, ce qui nous permet de privilégier la personne et ses attentes.`}</p>
          <div className={styles.imageContainer}>
            <Image
              src={office}
              alt="Femme en équilibre"
              width={550}
              height={600}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.valueList}>
          <ValueCard
            title="Réactivité"
            description="Paul-Emmanuel CHATEAU et son équipe seront vos interlocuteurs privilégiés pour votre projet personnel."
            logo={ReactivitySvg}
          />
          <ValueCard
            title="Disponibilité"
            description="L’office mettra tout en œuvre pour vous accompagner et s’adapter à vos situations professionnelles et personnelles."
            logo={AvailabilitySvg}
          />
          <ValueCard
            title="Confidentialité "
            description="Nous garantissons la confidentialité de vos informations  et de nos échanges."
            logo={CadenaSvg}
          />
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
