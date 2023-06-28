import styles from "./RAM.module.css";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

export default function RAM() {
  return (
    <div>
      <Header />
      <div className={styles.body} />;
      <Footer />
    </div>
  );
}
