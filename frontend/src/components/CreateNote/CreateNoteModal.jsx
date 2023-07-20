import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import s from "./CreateNote.module.css";
import APIService from "../../services/APIService";
import { notifyError } from "../../services/ToastNotificationService";

export default function CreateNoteModal({ handleChange }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    APIService.get(`/categories`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        if (error.response?.status === 500) {
          notifyError("La requête a échoué");
        }
      });
  }, []);

  return (
    <div className={s.modalContainer}>
      <label htmlFor="category">Note associée à un libellé</label>
      <input
        type="text"
        placeholder="Saisissez le nom du libellé"
        name="category"
        className={s.input}
        value={category.id}
        onChange={handleChange}
        id="category"
      />
      {categories.map((category) => (
        <div key={category.id}>
          <input
            type="radio"
            id="categories_id"
            name="categories_id"
            value={category.id}
            onChange={handleChange}
          />
          <label htmlFor="category" className={s.label}>
            {category.list}
          </label>
        </div>
      ))}
    </div>
  );
}

CreateNoteModal.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
