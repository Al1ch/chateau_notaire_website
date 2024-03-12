import styles from "./page.module.scss";
import PricingCard from "@/components/PricingCard/PricingCard";
import FrequentQuestion from "@/components/FrequentQuestion/FrequentQuestion";

export default function Pricing() {
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}> The Perfect Plan for your Needs</h1>
        <p className={styles.description}>
          Our transparent prcing makes it easy to find a plan that wprks within
          your financial constraints
        </p>
      </div>
      {/* <div className={styles.cardList}>
        <PricingCard />
      </div> */}
      <FrequentQuestion />
    </div>
  );
}
