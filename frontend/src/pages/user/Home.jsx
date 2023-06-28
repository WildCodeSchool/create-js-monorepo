import styles from "./Home.module.css";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.body} />;
      <Footer />
    </div>
  );
}
