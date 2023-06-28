import styles from "./Brand.module.css";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

export default function Brand() {
  return (
    <div>
      <Header />
      <div className={styles.body} />;
      <Footer />
    </div>
  );
}
