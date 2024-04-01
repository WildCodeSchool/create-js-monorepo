/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";
import PropTypes from "prop-types";

export default function Book({ book, refreshPage }) {
  const deleteBook = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/books/${book.id}`)
      .then(() => refreshPage())
      .catch((error) => console.error(error));
  };

  return (
    <article>
      <h3>{book.title}</h3>
      <p>{book.summary}</p>
      <button type="button" onClick={deleteBook}>
        Supprimer le livre de la liste
      </button>
    </article>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }).isRequired,
  refreshPage: PropTypes.func.isRequired,
};
