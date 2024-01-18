import "./myAccount.scss";
import { Link } from "react-router-dom";

function MyAccount() {
  return (
    <section className="myAccount">
      <header className="myAccount__header">
        <img
          className="myAccount__header__img"
          src="src/assets/images/banner.png"
          alt="our navbar"
        />
      </header>
      <div className="myAccount__mainContainer">
        <aside className="myAccount__sideBar">
          <ul className="myAccount__sideBar__list">
            <h1> Bonjour John Couscous </h1>
            <h2> DETAILS DU COMPTE CLIENT </h2>
            <li className="myAccount__sideBar__list__element">Mon compte</li>
            <li className="myAccount__sideBar__list__element">
              Historique de commande
            </li>
            <li className="myAccount__sideBar__list__element">
              Carnet d'adresses
            </li>
            <li className="myAccount__sideBar__list__element">
              Liste de favoris
            </li>
            <Link to="/wheel" className="myAccount__sideBar__list__element">
              Ma box
            </Link>
            <li className="myAccount__sideBar__list__element disconnect">
              Déconnection
            </li>
          </ul>
        </aside>
        <main className="myAccount__main">
          <h3 className="myAccount__title">Option de compte & inscription</h3>
          <article className="myAccount__main__article">
            <h4 className="myAccount">MON COMPTE</h4>
            <div className="button__countainer">
              <button className="myAccount__button" type="submit">
                MODIFIER LES INFORMATIONS
              </button>
              <button className="myAccount__button" type="submit">
                CHANGER LE MOT DE PASSE
              </button>
            </div>
            <h4 className="myAccount__subClassTitle">Nom</h4>
            <p className="myAccount__subClassCountent">John Couscous</p>
            <h4 className="myAccount__subClassTitle">Adresse mail</h4>
            <p className="myAccount__subClassCountent">
              JohnCoucous@parfum.com
            </p>
            <h2 className="myAccount__linkAccount">LIER COMPTE</h2>
            <div className="myAccount__FB">
              <div className="myAccount__FbCountainer">
                <img
                  className="myAccount__fbLogo"
                  src="../src/assets/images/logo-facebook.png"
                  alt="facebook logo"
                />
                <h4 className="myAccount__subClassTitle">Facebook</h4>
              </div>
              <button className="myAccount__linkAccount__Button" type="submit">
                CONNEXION
              </button>
            </div>
          </article>
        </main>
      </div>
    </section>
  );
}

export default MyAccount;
