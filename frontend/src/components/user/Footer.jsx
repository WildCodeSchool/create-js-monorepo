import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import registered from "../../assets/registered.svg";
import plus from "../../assets/plus.svg";
import question from "../../assets/question.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <img src={registered} alt="arrow" />
      <NavLink to="/brand">
        <img src={plus} alt="logo" />
      </NavLink>
      <img src={question} alt="question" />
    </div>
  );
}
