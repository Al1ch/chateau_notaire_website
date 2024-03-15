import React from "react";
import styles from "./OurStorySection.module.scss";
import ScintillantLogo from "@/assets/vectors/scintillantCenter.svg";
import Image from "next/image";
import tamponImage from "@/assets/images/tampon.webp";
import balanceImage from "@/assets/images/plume.png";
import libraryImage from "@/assets/images/library.jpg";
import AboutValueSection from "../AboutValuesSection/AboutValueSection";
import AboutValues from "../AboutValues/AboutValues";

const OurStorySection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Notre Histoire</h2>
          <ScintillantLogo />
        </div>
        <p className={styles.description}>
          {`    Le droit évolue, tout comme les attentes des clients à l'égard du cabinet qu'ils choisissent pour les représenter. Conscient de la perception souvent répandue selon laquelle les services juridiques sont coûteux et exclusifs, Law rules continue de suivre une voie très différente.`}
        </p>
        <div className={styles.listImages}>
          <div className={styles.card}>
            <Image
              src={libraryImage}
              alt="our story 1"
              width={350}
              height={250}
            />
            <AboutValues
              title="Notre Vision"
              description="Notre vision est de rendre le monde meilleur en offrant des solutions innovantes et durables pour les entreprises et les particuliers."
            />
          </div>
          <div className={styles.card}>
            <Image
              src={tamponImage}
              alt="our story 2"
              width={350}
              height={250}
            />
            <AboutValues
              title="Notre Mission"
              description="Intégrité, professionnalisme et dévouement guident notre engagement à fournir des services juridiques de qualité, protégeant les intérêts de nos clients"
            />
          </div>
          <div className={styles.card}>
            <Image
              src={balanceImage}
              alt="our story 3"
              width={350}
              height={250}
            />
            <AboutValues
              title="Notre Engagement"
              description="Immuabilité, Confiance, Intégrité et Confidentialité, définissent notre engagement envers nos clients et notre responsabilité en tant que notaires"
            />
          </div>
        </div>
      </div>
      {/* <AboutValueSection /> */}
    </div>
  );
};

export default OurStorySection;
