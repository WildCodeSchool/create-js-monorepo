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
        <h1>ma branche TNIG</h1>
        <aside className="myAccount__sideBar">
          <ul className="myAccount__sideBar__list">
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
          <h1 className="myAccount__title">Option de compte & inscription</h1>
          <article className="myAccount__main__article">
            <h2 className="myAccount">MON COMPTE</h2>
            <div className="button__countainer">
              <button className="myAccount__button" type="submit">
                bt1
              </button>
              <button className="myAccount__button" type="submit">
                bt2
              </button>
            </div>
            <h4>nom</h4>
            <p>John Couscous</p>
            <h4>Adresse mail</h4>
            <p>JohnCoucous@parfum.com</p>
          </article>
        </main>
      </div>
    </section>
  );
}

export default MyAccount;
