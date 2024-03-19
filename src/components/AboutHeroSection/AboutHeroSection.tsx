import React from "react";
import styles from "./AboutHeroSection.module.scss";
import Image from "next/image";
import paulPic from "@/assets/images/personna.jpg";
import ScintillantLogo from "@/assets/vectors/scintillant.svg";
import InstagramLogo from "@/assets/vectors/instagram.svg";
import FacebookLogo from "@/assets/vectors/facebook.svg";
import Button from "@/components/Button/Button";
import TwiterLogo from "@/assets/vectors/twitter.svg";
import Link from "next/link";
import LinkedInLogo from "@/assets/vectors/linkedin.svg";

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
          Paul-Emmanuel Chateau, <br />
          Notaire
        </h2>
        <ScintillantLogo />
        <p className={styles.description}>
          Je vous accompagne à chaque étape de votre vie et de vos transactions,
          assurant la sécurité et la légalité dans vos affaires familiales et
          commerciales
        </p>
        <div className={styles.logoList}>
          <Link
            href={
              "https://www.instagram.com/chateau_notaires?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            }
            className={styles.socialLogo}
          >
            <InstagramLogo />
          </Link>

          {/* <FacebookLogo /> */}
          <Link href={"https://www.linkedin.com/in/paul-emmanuel-chateau/"}>
            <LinkedInLogo className={styles.socialLogo} />
          </Link>
        </div>
        <Button backgroundColor="secondary" size="lg" radius="rounded">
          Prendre rendez-vous
        </Button>
      </div>
    </div>
  );
};

export default AboutHeroSection;
