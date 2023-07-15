import { MdDelete as Delete } from "react-icons/md";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import s from "./DeleteNote.module.css";
import APIService from "../../services/APIService";
import notifySuccess, {
  notifyError,
} from "../../services/ToastNotificationService";

export default function DeleteNote({ selectedNote, fetchNotes }) {
  const handleDelete = async () => {
    if (selectedNote !== "") {
      // verifie qu'une note a bien été sélectionnée
      try {
        const res = await APIService.delete(`/notes/${selectedNote}`);
        if (res) {
          notifySuccess("La note a été supprimée");
          fetchNotes();
        } else {
          throw new Error();
        }
      } catch (error) {
        if (error.request?.status === 500) {
          notifyError("La requête a échouée.");
        }
      }
    }
  };
  return (
    <div>
      <button type="button" className={s.button} onClick={handleDelete}>
        <Delete className={s.button} />
      </button>
      <ToastContainer limit={1} />
    </div>
  );
}

DeleteNote.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  selectedNote: PropTypes.number.isRequired,
};
