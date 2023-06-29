import PropTypes from "prop-types";
import styles from "./PhoneCard.module.css";

export default function PhoneCard({ phone }) {
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <h2>{phone.Brand}</h2>
      </div>
    </div>
  );
}

PhoneCard.propTypes = {
  phone: PropTypes.shape({
    Brand: PropTypes.string.isRequired,
    Model: PropTypes.string.isRequired,
    RAM: PropTypes.number.isRequired,
    Storage: PropTypes.number.isRequired,
    Total_value: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
