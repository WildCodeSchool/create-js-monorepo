import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./CreateNote.module.css";
import APIService from "../../services/APIService";
import { notifyError } from "../../services/ToastNotificationService";
import AddCategory from "../AddCategory/AddCategory";

export default function CreateNoteModal({ handleChange }) {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    APIService.get(`/categories`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => {
        if (err.request?.status === 403) {
          notifyError("Accès non autorisé");
          navigate("/login");
        } else if (err.request?.status === 500) {
          notifyError("La requête a échoué");
        }
      });
  }, []);

  return (
    <div className={s.modalContainer}>
      <AddCategory />
      <label htmlFor="category">Note associée à un libellé</label>
      {categories.map((category) => (
        <div key={category.id} className={s.radio}>
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
