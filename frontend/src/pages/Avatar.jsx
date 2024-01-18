import { Link } from "react-router-dom";
import RPM from "../components/RPM";
import "./Avatar.scss";
import Logo from "../assets/loreal_logo.svg";

function Avatar() {
  return (
    <div className="page-avatar">
      <Link to="/" className="logo">
        <img src={Logo} alt="Logo Loreal" className="logo" />
      </Link>
      <p className="intro-text">Commencez à créer votre avatar</p>
      <RPM />
      <p className="image-text">L'image de votre avatar va apparaître ici</p>
      <p className="image-text">
        Pour la télécharger faites un clic droit dessus
        <br /> "Enregister l'image sous..."{" "}
      </p>
    </div>
  );
}
export default Avatar;
