import "./myAccount.scss";

function MyAccount() {
  return (
    <section className="myAccount">
      <header className="myAccount__header">
        <img
          className="myAccount__header__img"
          src="src/assets/images/barnavLoreal.png"
          alt="our navbar"
        />
      </header>
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
          <li className="myAccount__sideBar__list__element">Ma box</li>
          <li className="myAccount__sideBar__list__element disconnect">
            Déconnection
          </li>
        </ul>
      </aside>
      <h1 className="myAccount__title">Hello account page</h1>
    </section>
  );
}

export default MyAccount;
