import PropTypes from "prop-types";

import s from "./ListNotes.module.css";

// import DeleteNote from "../DeleteNote/DeleteNote";

export default function ListNotes({ note, fetchNotes }) {
  //  return (
  //    <li className={s.container}>
  //     //   <h3>{note.title}</h3>
  // //     //   <p>{note.content}</p>
  // //     //   <p>{note.color}</p>
  // //     //   <DeleteNote
  // //     //     selectedNote={note.id}
  // //     //     fetchNotes={fetchNotes}
  // //     //     className={s.delete}
  // //     //   />
  // //     // </li>

  return (
    <form action="note" method="GET" className={s.container}>
      <input
        type="text"
        name="title"
        className={s.input}
        value={note.title}
        id="title"
      />
      <textarea
        type="text"
        name="content"
        className={s.textarea}
        value={note.content}
        required="required"
        id="content"
      />

      {/* <DeleteNote
        selectedNote={note.id}
        fetchNotes={fetchNotes}
        className={s.delete}
      /> */}
    </form>
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
