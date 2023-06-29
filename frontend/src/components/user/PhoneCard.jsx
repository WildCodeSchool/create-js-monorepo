import PropTypes from "prop-types";
import styles from "./PhoneCard.module.css";
import Mobile from "../../assets/mobile.svg";

export default function PhoneCard({ phone }) {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={Mobile} alt="Xiaomi" />
        </div>
        <div className={styles.info}>
          <h3>{phone.Brand}</h3>
          <h3>{phone.Model}</h3>
          <h3>{phone.RAM}GO</h3>
          <h3>{phone.Storage}GO</h3>
          <h3>{phone.Status}</h3>
          <h3>{phone.Total_value}euros</h3>
        </div>
      </div>
      <br />
    </div>
  );
}

PhoneCard.propTypes = {
  phone: PropTypes.shape({
    Brand: PropTypes.string.isRequired,
    Model: PropTypes.string.isRequired,
    RAM: PropTypes.number.isRequired,
    Storage: PropTypes.number.isRequired,
    Status: PropTypes.number.isRequired,
    Total_value: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
