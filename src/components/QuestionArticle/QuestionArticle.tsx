import React from "react";
import styles from "./QuesitonArticle.module.scss";

type Props = {
  title: string;
  description: string;
};

const QuestionArticle = ({ title, description }: Props) => {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionTitle}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default QuestionArticle;
