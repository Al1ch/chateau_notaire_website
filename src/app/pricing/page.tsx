import styles from "./page.module.scss";
import PricingCard from "@/components/PricingCard/PricingCard";
import FrequentQuestion from "@/components/FrequentQuestion/FrequentQuestion";
import ContactUs from "@/components/ContactUs/ContactUs";
import PricingSection from "@/components/PricingSection/PricingSection";

export default function Pricing() {
  return (
    <div className={styles.container}>
      <PricingSection />
      <FrequentQuestion />
      <ContactUs />
    </div>
  );
}
