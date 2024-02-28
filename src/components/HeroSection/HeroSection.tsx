import React from "react";
import Image from "next/image";
import styles from "./HeroSection.module.scss";
import Button from "@/components/Button/Button";
import paulPic from "@/assets/images/personna.jpg";
import ScintillantLogo from "@/assets/vectors/scintillant.svg";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.leftHeroContainer}>
        <div className={styles.heroInfo}>
          <h1 className={styles.title}>Avocats et Partenaires</h1>
          <ScintillantLogo className={styles.logo} />

          <p className={styles.description}>
            Comprendre vos objectifs, votre métier, pour fournir une défense et
            un conseil juridique adaptés, clairs et humains
          </p>
        </div>
        <span className={styles.buttonTest}>
          <Button backgroundColor="transparent" size="lg" radius="rounded">
            Prendez rendez-vous
          </Button>
        </span>
      </div>
      <div className={styles.heroImageContainer}>
        <Image
          src={paulPic}
          className={styles.heroImage}
          alt="hero image"
          width={400}
          height={250}
        />
        <div className={styles.maskShadow}></div>
      </div>
    </div>
  );
};

export default HeroSection;
