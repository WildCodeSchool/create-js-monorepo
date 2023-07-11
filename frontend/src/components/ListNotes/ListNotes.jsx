import PropTypes from "prop-types";
import s from "./ListNotes.module.css";

export default function ListNotes({ notes }) {
  return (
    <li className={s.container}>
      <h3>{notes.title}</h3>
      <p>{notes.content}</p>
      <p>{notes.color}</p>
    </li>
  );
}

ListNotes.propTypes = {
  notes: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};
