import PropTypes from "prop-types";
import { useState } from "react";
import s from "./ListNotes.module.css";
import EditNote from "../EditNote/EditNote";

export default function ListNotes({ note, fetchNotes }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <li className={s.container}>
        <div className={s.note}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <p>{note.color}</p>
        </div>
        <button
          type="button"
          onClick={() => setOpenModal(true)}
          className={s.button}
        >
          Modifier
        </button>

        {openModal && (
          <EditNote
            setOpenModal={setOpenModal}
            // className={s.modalcontainer}
            selectedNote={note.id}
            fetchNotes={fetchNotes}
          />
        )}
      </li>
    </div>
  );
}

ListNotes.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    color: PropTypes.string,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
