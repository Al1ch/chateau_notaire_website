import React from "react";
import styles from "./ContactUs.module.scss";
import Scintillant from "@/assets/vectors/scintillant.svg";
import Button from "../Button/Button";
import Phone from "@/assets/vectors/phone.svg";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>
            Our Professional Expert Law Team Is Always Ready To Serve You
          </h2>
          <Scintillant />
        </div>
        <p className={styles.description}>
          We’re always available for new cases big or small. Send us an email
          and we’ll get in touch shortly, or phone between 8:00 am and 7:00 pm
          Monday to Saturday.
        </p>
        <Button size="lg" radius="rounded" backgroundColor="secondary">
          Contactez Nous
        </Button>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.squareBorder}>
          <h4 className={styles.titleContact}>Get A free Consultation</h4>
          <p className={styles.description}>
            you can get a free consultation and case evaluation from us via the
            following contact number{" "}
          </p>
          <div className={styles.contactSection}>
            <div className={styles.squarePhone}>
              <Phone className={styles.logo} />
            </div>
            <div className={styles.contactInfo}>
              <p className={styles.contactUs}>Contact Us On :</p>
              <p className={styles.contactNumber}>07 83 38 95 95</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
