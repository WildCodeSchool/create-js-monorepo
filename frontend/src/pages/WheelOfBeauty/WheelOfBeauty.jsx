import "./WheelOfbeauty.scss";
import myJson from "./wheel.json";

function WheelOfbeauty() {
  return (
    <>
      <h1 className="wheel">hi hi wheel of beauty page</h1>
      <h2>Look at my WheelOfBeauty gits possibility</h2>
      {myJson
        ? myJson.map((gift) => (
            <section>
              <img src={gift.src} alt="gift.alt" />
              <p>{gift.desc}</p>
            </section>
          ))
        : " loading"}
    </>
  );
}

export default WheelOfbeauty;
