import { Wheel } from "react-custom-roulette";
import React, { useState } from "react";

function Routourne() {
  const data = [
    { option: "0" },
    { option: "1" },
    { option: "2" },
    { option: "3" },
    { option: "4" },
    { option: "5" },
    { option: "6" },
    { option: "7" },
    { option: "8" },
    { option: "9" },
    { option: "10" },
    { option: "11" },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
        backgroundColors={["#3e3e3e", "#df3428"]}
        textColors={["#ffffff"]}
        outerBorderWidth={10}
        innerBorderWidth={30}
        radiusLineWidth={3}
        radiusLineColor={["#c6a226"]}
        innerRadius={30}
        perpendicularText={1}
        textDistance={75}
      />
      <button onClick={handleSpinClick} type="button">
        SPIN
      </button>
    </>
  );
}

export default Routourne;
