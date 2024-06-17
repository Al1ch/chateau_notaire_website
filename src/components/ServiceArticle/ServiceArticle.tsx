import React from "react";
import styles from "./ServiceArticle.module.scss";

type Props = {
  title: string;
  description: string;
};

const ServiceArticle = ({ title, description }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title} </h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ServiceArticle;
