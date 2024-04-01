/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import axios from "axios";

export default function CreateBook() {
  const [form, setForm] = useState({
    title: "",
    summary: "",
    userId: 1,
  });

  const handleChangeForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const submitBook = (event) => {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/books/`, form)
      .then((response) => console.info(response))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <h1>Créer une fiche de livre </h1>
      <form onSubmit={submitBook}>
        <label htmlFor="title">Titre du llivre :</label>
        <input
          type="text"
          name="title"
          onChange={handleChangeForm}
          id="title"
        />
        <label htmlFor="summary">Résumé du livre :</label>
        <textarea name="summary" onChange={handleChangeForm} id="summary" />
        <input type="submit" />
      </form>
    </>
  );
}
