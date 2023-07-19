import s from "./CreateNote.module.css";

export default function CreateNoteModal({ note }) {
  return (
    <div className={s.container}>
      <label htmlFor="category">Note associée à un libellé</label>
      <input
        type="text"
        placeholder="Saisissez le nom du libellé"
        name="category"
        className={s.input}
        value={note.categories_id}
        // onChange={handleChange}
        id="category"
      />
    </div>
  );
}
