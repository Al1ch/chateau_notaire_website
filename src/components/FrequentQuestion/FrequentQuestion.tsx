import React from "react";
import styles from "./FrequentQuestion.module.scss";
import Scintillant from "@/assets/vectors/scintillantCenter.svg";
import { questions } from "@/data/question";
import QuestionArticle from "../QuestionArticle/QuestionArticle";

const FrequentQuestion = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Question Fréquentes</h2>
          <Scintillant />
        </div>
        <div className={styles.questionsList}>
          {questions.map((question, index) => (
            <QuestionArticle
              key={index}
              title={question.title}
              description={question.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestion;
