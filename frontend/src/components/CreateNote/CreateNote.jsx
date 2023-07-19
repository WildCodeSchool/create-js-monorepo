import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import APIService from "../../services/APIService";
import notifySuccess, {
  notifyError,
} from "../../services/ToastNotificationService";
import s from "./CreateNote.module.css";

export default function CreateNote({ fetchNotes }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    user_id: null,
    color_id: null,
    types_id: null,
    categories_id: null,
  });
  const resetForm = () => {
    setNote({
      title: "",
      content: "",
      user_id: null,
      color_id: null,
      types_id: null,
      categories_id: null,
    });
  };
  const [isDeployed, setIsDeployed] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [categories, setCategories] = useState(false);
  const handleClick = () => {
    setOpenModal(true);
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await APIService.post(`notes`, note);
      if (res) {
        notifySuccess("Votre note a été créee");
        setIsDeployed(false);
        resetForm();
        fetchNotes();
      } else throw new Error();
    } catch (err) {
      if (err.request?.status === 500) {
        notifyError("La requete a échouée.");
      }
    }
  };

  const handleExpanded = () => {
    setIsDeployed(true);
  };
  const handleClose = () => {
    setIsDeployed(false);
  };
  const handleChange = async (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form action="addNote" onSubmit={handleSubmit} className={s.form}>
      {isDeployed && (
        <input
          type="text"
          placeholder="Titre"
          name="title"
          className={s.input}
          value={note.title}
          onChange={handleChange}
          required="required"
          id="title"
        />
      )}
      <textarea
        type="text"
        placeholder="Créer une note..."
        name="content"
        className={s.textarea}
        value={note.content}
        onClick={handleExpanded}
        onChange={handleChange}
        rows={isDeployed ? 15 : 1}
        required="required"
        id="content"
      />

      <div className={s.openclose}>
        <button
          type="submit"
          className={s.button}
          style={{ display: isDeployed ? "block" : "none" }}
        >
          Enregistrer
        </button>

        <div className={s.modalContainer}>
          <button
            type="button"
            className={s.button}
            style={{ display: isDeployed ? "block" : "none" }}
            onClick={handleClick}
          >
            Ajouter un libellé
          </button>

          {openModal && (
            <div className={s.container}>
              <label htmlFor="category">Note associée à un libellé</label>
              {/* <input
                type="text"
                placeholder="Saisissez le nom du libellé"
                name="category"
                className={s.input}
                value={note.categories_id}
                onChange={handleChange}
                id="category"
              /> */}
              {categories.map((category) => (
                <div key={category.id}>
                  <input
                    type="checkbox"
                    id="category"
                    name="category"
                    onClick={handleExpanded}
                    value={category.list}
                    onChange={handleChange}
                  />
                  <label htmlFor="category">{category.list}</label>
                </div>
              ))}
            </div>
          )}

          <button
            type="button"
            className={s.button}
            onClick={handleClose}
            style={{ display: isDeployed ? "block" : "none" }}
          >
            Fermer
          </button>
        </div>
      </div>
    </form>
  );
}

CreateNote.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
};
