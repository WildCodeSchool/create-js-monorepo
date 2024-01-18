import "./WheelOfbeauty.scss";
import myJson from "./wheel.json";
import test from "./df_loreal_export_customer.json";

function WheelOfbeauty() {
  return (
    <>
      <h1 className="wheel">hi hi wheel of beauty page</h1>
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
    </>
  );
}

export default WheelOfbeauty;
