import React from "react";
import styles from "./ValueCard.module.scss";
import { SvgComponent } from "../../../types/model";

type Props = {
  title: string;
  description: string;
  logo: SvgComponent;
};

const ValueCard = ({ title, description, logo: Logo }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerCard}>
        <Logo className={styles.logo} />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ValueCard;
