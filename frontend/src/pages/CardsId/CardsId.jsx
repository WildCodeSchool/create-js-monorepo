import React from "react";
import DisplayCardId from "../../components/DisplayCardID/DisplayCardId";
import "../CardsAll/CardsAll.css";

function CardsId() {
  return (
    <div className="ContainerCardsAll">
      <DisplayCardId basePath="/candidats/:id" />
    </div>
  );
}

export default CardsId;
