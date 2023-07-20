import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import APIService from "../../services/APIService";
import notifySuccess, {
  notifyError,
} from "../../services/ToastNotificationService";
import s from "./CreateNote.module.css";
import CreateNoteModal from "./CreateNoteModal";

export default function CreateNote({ fetchNotes }) {
  const navigate = useNavigate();
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
  const handleClick = () => {
    setOpenModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await APIService.post(`notes`, note);
      if (res) {
        notifySuccess("Votre note a été créee");
        setIsDeployed(false);
        resetForm();
        fetchNotes();
        setOpenModal(false);
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
    <div>
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

          <button
            type="button"
            className={s.button}
            style={{ display: isDeployed ? "block" : "none" }}
            onClick={handleClick}
          >
            Ajouter un libellé
          </button>

          <button
            type="button"
            className={s.button}
            onClick={handleClose}
            style={{ display: isDeployed ? "block" : "none" }}
          >
            Fermer
          </button>
        </div>
      </form>
      <div className={s.libelleContainer}>
        {openModal && (
          <CreateNoteModal
            handleChange={handleChange}
            fetchNotes={fetchNotes}
          />
        )}
      </div>
    </div>
  );
}

CreateNote.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
};
