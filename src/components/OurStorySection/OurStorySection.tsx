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
        <div className={styles.description}>
          <p className={styles.textDetail}>
            {`   Étude fondée par Maître Paul-Emmanuel CHATEAU suite à son arrêté de nomination par le Garde des Sceaux le 25 avril 2023 publié au Journal Officiel le 4 mai 2023.`}
          </p>
          <br />

          <p className={styles.textDetail}>
            Originaire de Toulouse, il s’est rapidement intéressé au Droit par
            sa rigueur et par l’influence de sa famille, composée de
            professionnels <br></br> du droit.
          </p>
          <br />

          <p className={styles.textDetail}>
            Titulaire du Diplôme de Notaire à la faculté de Droit de Toulouse,
            il a su développer à travers ses différentes expériences au sein
            d’études toulousaines une compétence pluridisciplinaire en droit
            immobilier, droit des entreprises, droit de la Famille et gestion de
            patrimoine.
          </p>
          <br />
          <p className={styles.textDetail}>
            L’exercice de son activité l’a amené à se former à la médiation au
            sein de la faculté de Toulouse
          </p>
          <br />

          <p className={styles.textDetail}>
            Doté d’une bonne capacité d’écoute et d’analyse, il met ses
            compétences au service de ses clients pour la recherche permanente
            de solutions optimales.
          </p>
          <br />
          <p className={styles.textDetail}>
            Il anime des formations auprès de professionnels pour les
            accompagner et les aider dans leur domaine.
          </p>
        </div>
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
