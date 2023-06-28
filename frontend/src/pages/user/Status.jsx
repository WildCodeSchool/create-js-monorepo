import styles from "./Status.module.css";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

export default function Status() {
  return (
    <div>
      <Header />
      <div className={styles.body} />;
      <Footer />
    </div>
  );
}
