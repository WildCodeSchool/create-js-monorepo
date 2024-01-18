import { Link } from "react-router-dom";
import "./Scene.scss";
import Logo from "../assets/loreal_logo.svg";

function Scene() {
  return (
    <div className="page_avatarImage">
      <Link to="/" className="logo">
        <img src={Logo} alt="Logo Loreal" className="logo" />
      </Link>
    </div>
  );
}
export default Scene;
