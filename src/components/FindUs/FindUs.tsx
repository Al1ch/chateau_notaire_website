import React from "react";
import styles from "./FindUs.module.scss";

const FindUs = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Nous Recontrer</h2>
      <div className={styles.infoContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46223.53321145887!2d1.4167236234408607!3d43.60714905225746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1991371cf99eb3%3A0x1d693c043e612d3e!2sMe%20Paul-Emmanuel%20CHATEAU%20-%20NOTAIRE!5e0!3m2!1sfr!2sfr!4v1709083958840!5m2!1sfr!2sfr"
          width="400"
          height="300"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>{" "}
        <div className={styles.addressContainer}>
          <h3 className={styles.titleInfo}>Adresse</h3>
          <p className={styles.descriptionInfo}>
            1 Rue de la République, 31000 Toulouse
          </p>
          <h3 className={styles.titleInfo}>Téléphone</h3>
          <p className={styles.descriptionInfo}>05 61 21 21 21</p>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
