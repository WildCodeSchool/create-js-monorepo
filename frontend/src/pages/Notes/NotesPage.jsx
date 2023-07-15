import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import APIService from "../../services/APIService";
import "react-toastify/dist/ReactToastify.css";
import { notifyError } from "../../services/ToastNotificationService";
import s from "./NotesPage.module.css";
import ListNotes from "../../components/ListNotes/ListNotes";
import CreateNote from "../../components/CreateNote/CreateNote";
import notehub from "../../assets/notehub.png";

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
  // Afin d'assurer l'actualisation des pages après les différentes requêtes, on fait une const de la requête get qu'on encadre avec un useEffect et on la passe en props aux autres composants
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <img src={notehub} alt="logo" className={s.notehub} />
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
                // passage de la requête get en props
                fetchNotes={fetchNotes}
                // permet de stocker l'identifiant de la note
                selectedNote={selectedNote}
                setSelectedNote={setSelectedNote}
              />
            ))}
        </ul>
        <ToastContainer limit={1} />
      </div>
    </>
  );
}
