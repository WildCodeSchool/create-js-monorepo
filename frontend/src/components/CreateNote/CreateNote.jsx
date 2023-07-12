import { useState } from "react";
import APIService from "../../services/APIService";
import notifySuccess, {
  notifyError,
} from "../../services/ToastNotificationService";
import s from "./CreateNote.module.css";

export default function CreateNote() {
  const [note, setNote] = useState({
    title: "",
    content: "",
    user_id: null,
    color_id: null,
    types_id: null,
    category_id: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await APIService.post(`notes`, note);
      if (res) {
        notifySuccess("Votre note a été créee");
      } else throw new Error();
    } catch (err) {
      notifyError("La note n'a pas pu être ajoutée");
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
      <form action="addNote" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          name="title"
          value={note.title}
          onChange={handleChange}
          required="required"
          id="title"
        />
        <textarea
          type="text"
          placeholder="Créer une note..."
          name="content"
          value={note.content}
          onChange={handleChange}
          required="required"
          id="content"
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
