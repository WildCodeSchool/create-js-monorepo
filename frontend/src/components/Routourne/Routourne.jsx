import { Wheel } from "react-custom-roulette";
import React, { useState } from "react";
import "./Routourne.scss";

function Routourne() {
  const data = [
    {
      option: "0",
      image: {
        uri: "./src/assets/petal.svg",
        landscape: false,
        sizeMultiplier: 2.2,
        offsetX: 20,
      },
    },
    {
      option: "0",
      image: {
        uri: "./src/assets/petal.svg",
        landscape: false,
        sizeMultiplier: 2.2,
        offsetX: 20,
      },
    },
    {
      option: "0",
      image: {
        uri: "./src/assets/petal.svg",
        landscape: false,
        sizeMultiplier: 2.2,
        offsetX: 20,
      },
    },
    {
      option: "0",
      image: {
        uri: "./src/assets/petal.svg",
        landscape: false,
        sizeMultiplier: 2.2,
        offsetX: 20,
      },
    },
    {
      option: "0",
      image: {
        uri: "./src/assets/petal.svg",
        landscape: false,
        sizeMultiplier: 2.2,
        offsetX: 20,
      },
    },
    {
      option: "0",
      image: {
        uri: "./src/assets/petal.svg",
        landscape: false,
        sizeMultiplier: 2.2,
        offsetX: 20,
      },
    },
    {
      option: "0",
      image: {
        uri: "./src/assets/petal.svg",
        landscape: false,
        sizeMultiplier: 2.2,
        offsetX: 20,
      },
    },
    {
      option: "0",
      image: {
        uri: "./src/assets/petal.svg",
        landscape: false,
        sizeMultiplier: 2.2,
        offsetX: 20,
      },
    },
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
      <div className="wheel_spin">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
          backgroundColors={["#e0313100", "#e0313100"]}
          textColors={["#ffffff"]}
          outerBorderWidth={0}
          innerBorderWidth={0}
          radiusLineWidth={0}
          radiusLineColor={["#ffd43b"]}
          innerRadius={1}
          //   perpendicularText={1}
          //   textDistance={75}
          pointerProps={{
            src: "./src/assets/marker.svg",
          }}
        />
      </div>
      <button onClick={handleSpinClick} type="button">
        Eeeeet z'est partiii !!
      </button>
      <img
        className="flower_center"
        src="./src/assets/flower_center.svg"
        alt=""
      />
    </>
  );
}

export default Routourne;
