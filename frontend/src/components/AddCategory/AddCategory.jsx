import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./AddCategory.module.css";
import APIService from "../../services/APIService";
import notifySuccess, {
  notifyError,
} from "../../services/ToastNotificationService";

export default function AddCategory({ fetchCategories, setOpenModal }) {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpenModal(false);
  };
  const [category, setCategory] = useState({
    list: "",
    user_id: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await APIService.post(`categories`, category);
      if (res) {
        notifySuccess("Votre catégorie a été créée");
        fetchCategories();
      } else throw new Error();
    } catch (err) {
      if (err.request?.status === 403) {
        notifyError("Accès non autorisé");
        navigate("/login");
      } else if (err.request?.status === 500) {
        notifyError("La requete a échoué");
      }
    }
  };
  const handleChange = async (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form action="addCategory" onSubmit={handleSubmit}>
      <div className={s.form}>
        <label htmlFor="category" className={s.title}>
          Ajouter un libellé
        </label>
        <input
          type="text"
          placeholder="libellé"
          name="list"
          className={s.input}
          value={category.list}
          onChange={handleChange}
          id="category"
        />
        <button type="submit" onClick={handleClose} className={s.button}>
          Ajouter
        </button>
      </div>
    </form>
  );
}
AddCategory.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  setOpenModal: PropTypes.string.isRequired,
};
