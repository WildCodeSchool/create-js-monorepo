import PropTypes from "prop-types";
import { useState } from "react";
import s from "./ListNotes.module.css";
import EditNote from "../EditNote/EditNote";

import DeleteNote from "../DeleteNote/DeleteNote";

export default function ListNotes({ note, fetchNotes }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <li className={s.container}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <p>{note.color}</p>
      {/* return (
     <form action="note" method="GET" className={s.container}>
  //     <input
  //       type="text"
  //       name="title"
  //       className={s.input}
  //       value={note.title}
  //       id="title"
  //     />
  //     <textarea
  //       type="text"
  //       name="content"
  //       className={s.textarea}
  //       value={note.content}
  //       required="required"
  //       id="content"
  //     />
  //     <div> */}
      <button type="button" onClick={() => setOpenModal(true)}>
        Modifier
      </button>

      {openModal && (
        <EditNote
          setOpenModal={setOpenModal}
          className={s.modalcontainer}
          selectedNote={note.id}
          fetchNotes={fetchNotes}
        />
      )}
      {/* </div> */}
      <DeleteNote
        selectedNote={note.id}
        fetchNotes={fetchNotes}
        className={s.delete}
      />
      {/* </form> */}
    </li>
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
