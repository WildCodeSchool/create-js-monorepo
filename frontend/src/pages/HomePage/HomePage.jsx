import "./HomePage.scss";

function HomePage() {
  return (
    <body>
      <img className="nav" src="src/assets/barnav loreal.png" alt="" />
      <div className="HomePage__button">
        <button className="HomePage__button__button" type="button">
          Mon compte
        </button>
      </div>
      <img className="card1" name="card1" src="src/assets/card1.png" alt="" />
      <img
        className="incontournables"
        name="incontournables"
        src="src/assets/incontournables.png"
        alt=""
      />
      <ul className="boxButton">
        <li>
          <button className="button" type="button">
            ajouter a la box
          </button>
        </li>
        <li>
          <button className="button" type="button">
            ajouter a la box
          </button>
        </li>
        <li>
          <button className="button" type="button">
            ajouter a la box
          </button>
        </li>
        <li>
          <button className="button" type="button">
            ajouter a la box
          </button>
        </li>
      </ul>
    </body>
  );
}
export default HomePage;
