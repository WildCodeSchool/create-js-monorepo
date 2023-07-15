import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import APIService from "../../services/APIService";
import "react-toastify/dist/ReactToastify.css";
import { notifyError } from "../../services/ToastNotificationService";
import s from "./NotesPage.module.css";
import ListNotes from "../../components/ListNotes/ListNotes";
import CreateNote from "../../components/CreateNote/CreateNote";

export default function NotesPage() {
  const [listNotes, setListNotes] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);

  const fetchNotes = async () => {
    try {
      const response = await APIService.get("/notes");
      setListNotes(response.data);
    } catch (err) {
      if (err.request?.status === 500) {
        notifyError("La requete a échouée.");
      }
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className={s.notespage}>
      <div className={s.createnote}>
        <CreateNote fetchNotes={fetchNotes} />
      </div>
      <ul className={s.notecontainer}>
        {listNotes &&
          listNotes.map((note) => (
            <ListNotes
              key={note.id}
              note={note}
              fetchNotes={fetchNotes}
              selectedNote={selectedNote}
              setSelectedNote={setSelectedNote}
            />
          ))}
      </ul>
      <ToastContainer limit={1} />
    </div>
  );
}
