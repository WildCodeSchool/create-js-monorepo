import React from "react";
import DisplayCards from "../../components/DisplayCards/DisplayCards";
import "./CardsAll.css";

function CardsAll() {
  return (
    <div className="ContainerCardsAll">
      <DisplayCards basePath="/candidats" />
    </div>
  );
}

export default CardsAll;
