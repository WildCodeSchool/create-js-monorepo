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
    </>
  );
}
export default HomePage;
