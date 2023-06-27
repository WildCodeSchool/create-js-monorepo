import styles from "./Home.module.css";
import Component from "../components/Component";

export default function Home() {
  return (
    <header className="App-header">
      <Component />
      <h1 className={styles.test}>Test module CSS</h1>
    </header>
  );
}
