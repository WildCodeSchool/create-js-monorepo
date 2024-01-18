import "./HomePage.scss";

function HomePage() {
  return (
    <>
      <button className="HomePage__button" type="button">
        Mon compte
      </button>
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
    </>
  );
}
export default HomePage;
