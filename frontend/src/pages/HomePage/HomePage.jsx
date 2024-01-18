import "./HomePage.scss";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";

function HomePage() {
  return (
    <body>
      <img className="nav" src="src/assets/barnav loreal.png" alt="" />
      <Link to="/account" className="HomePage__button__button" type="button">
        Mon compte
      </Link>
      <Carousel />
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
            AJOUTER A LA BOX
          </button>
        </li>
        <li>
          <button className="button" type="button">
            AJOUTER A LA BOX
          </button>
        </li>
        <li>
          <button className="button" type="button">
            AJOUTER A LA BOX
          </button>
        </li>
        <li>
          <button className="button" type="button">
            AJOUTER A LA BOX
          </button>
        </li>
      </ul>
    </body>
  );
}
export default HomePage;
