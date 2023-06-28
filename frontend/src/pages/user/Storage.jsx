import styles from "./Storage.module.css";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

export default function Storage() {
  return (
    <div>
      <Header />
      <div className={styles.body} />;
      <Footer />
    </div>
  );
}
