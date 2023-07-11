import { useEffect, useState } from "react";
import APIService from "../../services/APIService";
import "react-toastify/dist/ReactToastify.css";
import { notifyError } from "../../services/ToastNotificationService";
import s from "./NotesPage.module.css";
import ListNotes from "../../components/ListNotes/ListNotes";

export default function NotesPage() {
  const [listNotes, setListNotes] = useState(null);

  useEffect(() => {
    APIService.get(`/notes`)
      .then((response) => setListNotes(response.data))
      .catch((err) => {
        if (err.request.status === 401) {
          notifyError("La requête a échoué");
        }
      });
  }, []);

  return (
    <div className={s.notespage}>
      <ul className={s.notecontainer}>
        {listNotes &&
          listNotes.map((notes) => <ListNotes key={notes.id} notes={notes} />)}
      </ul>
    </div>
  );
}
