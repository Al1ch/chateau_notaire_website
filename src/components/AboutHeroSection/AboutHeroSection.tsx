import React from "react";
import styles from "./AboutHeroSection.module.scss";
import Image from "next/image";
import paulPic from "@/assets/images/personna.jpg";
import ScintillantLogo from "@/assets/vectors/scintillant.svg";
import InstagramLogo from "@/assets/vectors/instagram.svg";
import FacebookLogo from "@/assets/vectors/facebook.svg";
import Button from "@/components/Button/Button";
import TwiterLogo from "@/assets/vectors/twitter.svg";

const AboutHeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.profileImageContainer}>
        <Image
          src={paulPic}
          className={styles.profileImage}
          alt="hero image"
          width={400}
          height={500}
        />
        <div className={styles.shadowContainer}></div>
      </div>

      <div className={styles.profileDescription}>
        <h2 className={styles.title}>
          I’m Peter Parker, <br />
          Expert Legal Advicer
        </h2>
        <ScintillantLogo />
        <p className={styles.description}>
          Our lawyers are regularly invited to speak at seminars and educate
          other attorneys and industry representatives about important and
        </p>
        <div className={styles.logoList}>
          <InstagramLogo />
          <FacebookLogo />
          <TwiterLogo />
        </div>
        <Button backgroundColor="secondary" size="lg" radius="rounded">
          Prendez rendez-vous
        </Button>
      </div>
    </div>
  );
};

export default AboutHeroSection;
