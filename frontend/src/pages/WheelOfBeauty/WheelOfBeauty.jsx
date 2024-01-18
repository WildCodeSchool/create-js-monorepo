import Routourne from "../../components/Routourne/Routourne";
import "./WheelOfbeauty.scss";
import myJson from "./wheel.json";
import test from "./df_loreal_export_customer.json";

function WheelOfbeauty() {
  return (
    <>
      <h2>Look at my WheelOfBeauty gits possibility</h2>
      {myJson
        ? test.map((gift) => (
            <section>
              {/*      <img src={gift.vente_ID} alt="gift.alt" /> */}
              <p>{gift.Brand}</p>
              <p>{gift.Description}</p>
            </section>
          ))
        : " loading"}
      <Routourne />
    </>
  );
}

export default WheelOfbeauty;
