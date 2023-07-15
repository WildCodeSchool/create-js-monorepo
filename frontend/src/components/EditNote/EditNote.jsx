import { ToastContainer } from "react-toastify";
import PropTypes from "prop-types";
import { useState } from "react";
import APIService from "../../services/APIService";
import notifySuccess, {
  notifyError,
} from "../../services/ToastNotificationService";
import s from "./EditNote.module.css";
import { PencilSquare } from "react-bootstrap-icons";

export default function EditNote({ selectedNote, fetchNotes }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    user_id: null,
    color_id: null,
    types_id: null,
    category_id: null,
  });

  const handleEdit = async (e) => {
    e.preventDefault();
    if (selectedNote !== "") {
      console.log(selectedNote);
      try {
        const res = await APIService.put(`/notes/${selectedNote}`, note);

        if (res) {
          notifySuccess("La note a été modifiée");
          fetchNotes();
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

  return (
    <div>
      <form action="note" className={s.container}>
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
          className={s.textarea}
          defaultValue={note.content}
          onChange={handleChange}
          required="required"
          id="content"
        />
      </form>
      <button type="button" className={s.button} onClick={handleEdit}>
        <PencilSquare className={s.button} />
      </button>
      <ToastContainer limit={1} />
    </div>
  );
}

EditNote.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  selectedNote: PropTypes.number.isRequired,
};
