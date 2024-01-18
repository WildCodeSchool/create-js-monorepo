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
    </div>
  );
}
export default Avatar;
