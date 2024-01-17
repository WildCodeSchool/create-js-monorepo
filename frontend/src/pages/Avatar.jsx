import RPM from "../components/RPM";
import "./Avatar.scss";
import Logo from "../assets/loreal_logo.svg";

function Avatar() {
  return (
    <div className="page-avatar">
      <img src={Logo} alt="Logo Loreal" className="logo" />
      <p className="intro-text">Commencez à créer votre avatar</p>
      <RPM />
    </div>
  );
}
export default Avatar;
