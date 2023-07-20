import { useState } from "react";
import s from "./AddCategory.module.css";
import APIService from "../../services/APIService";
import notifySuccess, {
  notifyError,
} from "../../services/ToastNotificationService";

export default function AddCategory() {
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
      } else throw new Error();
    } catch (err) {
      if (err.request?.status === 500) {
        notifyError("La requete a échouée.");
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
    <form action="addCategory" onSubmit={handleSubmit} className={s.form}>
      <input
        type="text"
        placeholder="Saisissez le nom du libellé"
        name="category"
        className={s.input}
        value={category.id}
        onChange={handleChange}
        id="category"
      />
    </form>
  );
}
