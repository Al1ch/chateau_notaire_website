import React from "react";
import styles from "./ValueSection.module.scss";
import ScintillantLogo from "@/assets/vectors/scintillant.svg";
import Image from "next/image";
import office from "@/assets/images/office.jpg";
import ValueCard from "@/components/ValueCard/ValueCard";
import JugeSvg from "@/assets/vectors/juge.svg";
import EpeeSvg from "@/assets/vectors/epee.svg";
import CoeurSvg from "@/assets/vectors/coeur.svg";
import CadenaSvg from "@/assets/vectors/cadenas.svg";

const ValueSection = () => {
  return (
    <div className={styles.wrapper}>
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
          >{`L’étude est à taille humaine, ce qui nous permet de privilégier la personne et ses attentes`}</p>
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
            description="Au cœur de notre pratique notariale, nous honorons chaque individu avec considération et équité"
            logo={CoeurSvg}
          />
          <ValueCard
            title="Disponibilité"
            description="L’office mettra tout en œuvre pour vous accompagner et s’adapter à vos situations professionnelles et personnelles."
            logo={EpeeSvg}
          />
          <ValueCard
            title="Confidentialité "
            description="Nous garantissons la confidentialité absolue de vos informations, assurant ainsi la sécurité et la confiance dans nos services notariaux.
            "
            logo={CadenaSvg}
          />
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
