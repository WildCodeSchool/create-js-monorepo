import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import APIService from "../../services/APIService";
import notifySuccess, {
  notifyError,
} from "../../services/ToastNotificationService";
import s from "./EditNote.module.css";

export default function EditNote({ setOpenModal, selectedNote, fetchNotes }) {
  const navigate = useNavigate();

  if (!setOpenModal) return null;
  const [note, setNote] = useState({
    title: "",
    content: "",
    user_id: null,
    color_id: null,
    types_id: null,
    category_id: null,
  });

  useEffect(() => {
    APIService.get(`/notes/${selectedNote}`)
      .then((response) => {
        setNote(response.data);
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

  const handleEdit = async (e) => {
    e.preventDefault();
    if (selectedNote !== "") {
      try {
        const res = await APIService.put(`/notes/${selectedNote}`, note);

        if (res) {
          fetchNotes();
          notifySuccess("La note a été modifiée");
        } else {
          throw new Error();
        }
      } catch (err) {
        if (err.request?.status === 500) {
          notifyError(`${err.request.status} : La requete a échouée.`);
        }
      }
    }
  };

  const handleChange = async (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className={s.overlay}>
      <form action="note" className={s.container}>
        <div className={s.closebutton}>
          <button type="button" onClick={handleClose} className={s.close}>
            X
          </button>
        </div>
        <input
          type="text"
          name="title"
          className={s.input}
          defaultValue={note.title}
          onChange={handleChange}
          id="title"
        />
        <textarea
          type="text"
          name="content"
          rows="18"
          className={s.textarea}
          defaultValue={note.content}
          onChange={handleChange}
          required="required"
          id="content"
        />
        <div className={s.buttonContainer}>
          <button type="button" className={s.button} onClick={handleEdit}>
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}

EditNote.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  selectedNote: PropTypes.number.isRequired,
  setOpenModal: PropTypes.string.isRequired,
};
