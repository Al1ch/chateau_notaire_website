import React from "react";
import styles from "./OurStorySection.module.scss";
import ScintillantLogo from "@/assets/vectors/scintillantCenter.svg";
import Image from "next/image";
import marteauImage from "@/assets/images/marteau.jpg";
import balanceImage from "@/assets/images/balanceWomen.jpg";
import libraryImage from "@/assets/images/library.jpg";
import AboutValueSection from "../AboutValuesSection/AboutValueSection";

const OurStorySection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Notre Histoire</h2>
          <ScintillantLogo />
        </div>
        <p className={styles.description}>
          {`        The law evolves, as do client's expectations of the firm they choose to
        represent them. Recognizing the often held perception of legal services
        being expensive and exclusive, Law rules continues to tread a very
        different track.`}
        </p>
        <div className={styles.listImages}>
          <Image
            src={marteauImage}
            alt="our story 1"
            width={350}
            height={250}
          />
          <Image
            src={balanceImage}
            alt="our story 2"
            width={350}
            height={250}
          />
          <Image
            src={libraryImage}
            alt="our story 3"
            width={350}
            height={250}
          />
        </div>
      </div>
      <AboutValueSection />
    </div>
  );
};

export default OurStorySection;
