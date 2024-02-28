import React from "react";
import styles from "./FindUs.module.scss";

const FindUs = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Nous Rencontrer</h2>
      <div className={styles.infoContainer}>
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46223.53321145887!2d1.4167236234408607!3d43.60714905225746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1991371cf99eb3%3A0x1d693c043e612d3e!2sMe%20Paul-Emmanuel%20CHATEAU%20-%20NOTAIRE!5e0!3m2!1sfr!2sfr!4v1709083958840!5m2!1sfr!2sfr"
          width="500"
          height="300"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>{" "}
        <div className={styles.infoContent}>
          <h3 className={styles.titleInfo}>Contact</h3>
          <div className={styles.infoWrapper}>
            <div className={styles.adressContainer}>
              <h4 className={styles.descriptionInfo}>
                Mr Paul-Emmanuel CHATEAU - NOTAIRE
              </h4>
              <p className={styles.info}>
                5 Rue du Général Jean Compans <br /> 31500 Toulouse
              </p>
            </div>
            <div className={styles.listContact}>
              <p className={styles.contactEmail}>
                {" "}
                <span className={styles.contactName}>Mr CHATEAU : </span>{" "}
                paul.chateau@hotmail.com
              </p>
              <p className={styles.info}>Tél : 05 61 83 23 87</p>
            </div>

            <div className={styles.horaireContainer}>
              <h4 className={styles.descriptionInfo}>
                Horaires d'ouverture :{" "}
              </h4>
              <p className={styles.info}>
                Lundi - Vendredi : 9h - 12h / 14h - 18h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;