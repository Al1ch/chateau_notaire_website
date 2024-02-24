import React from "react";
import styles from "./ValueCard.module.scss";
import { SvgComponent } from "../../../types/model";
import CoeurLogo from "@/assets/vectors/coeur.svg";

type Props = {
  title: string;
  description: string;
  //   logo: SvgComponent;
};

const ValueCard = ({ title, description }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerCard}>
        <CoeurLogo />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ValueCard;
