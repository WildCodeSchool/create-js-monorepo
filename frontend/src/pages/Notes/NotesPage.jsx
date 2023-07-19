import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import APIService from "../../services/APIService";
import "react-toastify/dist/ReactToastify.css";
import { notifyError } from "../../services/ToastNotificationService";
import s from "./NotesPage.module.css";
import ListNotes from "../../components/ListNotes/ListNotes";
import CreateNote from "../../components/CreateNote/CreateNote";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import { useUserContext } from "../../components/Contexts/UserContext";

export default function NotesPage() {
  const { user, logout } = useUserContext;
  const [listNotes, setListNotes] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchNotes = async () => {
    try {
      const response = await APIService.get("/notes");
      setListNotes(response.data);
    } catch (err) {
      if (err.request?.status === 500) {
        notifyError("La requete a échoué");
      }
    }
  };
  // Afin d'assurer l'actualisation des pages après les différentes requêtes, on fait une const de la requête get qu'on encadre avec un useEffect et on la passe en props aux autres composants
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className={s.notespage}>
      <h3>
        Bienvenue, {user.user_firstname} {user.user_lastname}
      </h3>
      <button type="button" className={s.button} onClick={() => logout()}>
        Se déconnecter
      </button>

      <CategoriesList
        // passage en props de l'id category
        setSelectedCategory={setSelectedCategory}
        className={s.categories}
      />
      <div className={s.createnote}>
        <CreateNote fetchNotes={fetchNotes} />
      </div>
      <ul className={s.notecontainer}>
        {listNotes &&
          listNotes
            // filtre le tableau listNotes et retourne un nouveau tableau avec les éléments spécifiés
            .filter(
              (note) =>
                selectedCategory === null ||
                // si id note = selecteCategory la note est incluse dans le tableau filtré
                note.categories_id === selectedCategory
            )

            .map((note) => (
              <ListNotes
                key={note.id}
                note={note}
                // passage de la requête get en props
                fetchNotes={fetchNotes}
                // passage en props de l'id note
                selectedNote={selectedNote}
                setSelectedNote={setSelectedNote}
              />
            ))}
      </ul>
      <ToastContainer limit={1} />
    </div>
  );
}
