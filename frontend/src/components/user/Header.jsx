import styles from "./Header.module.css";
import Arrow from "../../assets/Arrow.svg";
import logo from "../../assets/logo.svg";
import interrupteur from "../../assets/interrupteur.svg";

export default function Header() {
  return (
    <div className={styles.header}>
      {/* <div className={styles.headercontainer}> */}
      <img src={Arrow} alt="arrow" />
      <img src={logo} alt="logo" />
      <img src={interrupteur} alt="logout" />
      {/* </div> */}
    </div>
  );
}
