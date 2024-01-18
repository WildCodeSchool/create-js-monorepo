import Routourne from "../../components/Routourne/Routourne";
import "./WheelOfbeauty.scss";
import myJson from "./wheel.json";

function WheelOfbeauty() {
  return (
    <>
      <h2>Look at my WheelOfBeauty gits possibility</h2>
      {myJson
        ? myJson.map((gift) => (
            <section>
              <img src={gift.src} alt="gift.alt" />
              <p>{gift.desc}</p>
            </section>
          ))
        : " loading"}
      <Routourne />
    </>
  );
}

export default WheelOfbeauty;
