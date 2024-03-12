import React from "react";
import styles from "./FrequentQuestion.module.scss";
import Scintillant from "@/assets/vectors/scintillantCenter.svg";

const FrequentQuestion = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <Scintillant />
        </div>
        <div className={styles.questionsList}>
          <div className={styles.question}>
            <h3 className={styles.questionTitle}>What is the Notary's role?</h3>
            <p className={styles.description}>
              The notary is a public officer who receives a mandate from the
              State to authenticate the contracts to which the parties wish to
              confer
            </p>
          </div>
          <div className={styles.question}>
            <h3 className={styles.questionTitle}>What is the Notary's role?</h3>
            <p className={styles.description}>
              The notary is a public officer who receives a mandate from the
              State to authenticate the contracts to which the parties wish to
              confer
            </p>
          </div>
          <div className={styles.question}>
            <h3 className={styles.questionTitle}>What is the Notary's role?</h3>
            <p className={styles.description}>
              The notary is a public officer who receives a mandate from the
              State to authenticate the contracts to which the parties wish to
              confer
            </p>
          </div>
          <div className={styles.question}>
            <h3 className={styles.questionTitle}>What is the Notary's role?</h3>
            <p className={styles.description}>
              The notary is a public officer who receives a mandate from the
              State to authenticate the contracts to which the parties wish to
              confer
            </p>
          </div>
          <div className={styles.question}>
            <h3 className={styles.questionTitle}>What is the Notary's role?</h3>
            <p className={styles.description}>
              The notary is a public officer who receives a mandate from the
              State to authenticate the contracts to which the parties wish to
              confer
            </p>
          </div>
          <div className={styles.question}>
            <h3 className={styles.questionTitle}>What is the Notary's role?</h3>
            <p className={styles.description}>
              The notary is a public officer who receives a mandate from the
              State to authenticate the contracts to which the parties wish to
              confer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestion;
