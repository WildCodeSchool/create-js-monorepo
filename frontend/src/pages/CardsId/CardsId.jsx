import React from "react";
import DisplayCardId from "../../components/DisplayCardID/DisplayCardId";

function CardsId() {
  return (
    <div>
      <DisplayCardId basePath="/candidats/:id" />
    </div>
  );
}

export default CardsId;
