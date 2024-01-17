import Granim from "granim";
import "./Granim.scss";

function initGranim() {
  return new Granim({
    element: "#canvas",
    direction: "radial",
    isPausedWhenNotInView: true,
    states: {
      "default-state": {
        gradients: [
          ["#3d3d3d", "#F4F1D6"],
          ["#020202", "#F4F1D6"],
          ["#3d3d3d", "#4f4f4f"],
          ["#3d3d3d", "#F4F1D6"],
          ["#020202", "#F4F1D6"],
          ["#faf8ec", "#3d3d3d"],
        ],
        transitionSpeed: 6000,
      },
    },
  });
}

initGranim();

export default Granim;
