import React from "react";
import styles from "./AboutValues.module.scss";

type Props = {
  title: string;
  description: string;
};

const AboutValues = ({ title, description }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default AboutValues;
