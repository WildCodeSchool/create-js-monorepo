// import { useContext } from "react";
import { Link } from "react-router-dom";
// import UserContext from "../services/UserContext";

export default function Navbar() {
  // const { user } = useContext(UserContext);

  // const isConnected = user.id && user.id !== "null";

  // console.info("isConnected", isConnected);

  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/books">Livres</Link>
      <Link to="/create">Créer une fiche </Link>
      <Link to="/register">Créer un compte</Link>
      {/* <Link to="/login">Se connecter</Link> */}
    </nav>
  );
}
