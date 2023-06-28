import styles from "./Home.module.css";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className={styles.title1}>BIENVENUE</h1>
      <h1 className={styles.title2}>Rechercher un téléphone</h1>
      <div className={styles.body} />;
      <Footer />
    </div>
  );
}
