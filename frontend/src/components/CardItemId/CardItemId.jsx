import React from "react";

function CardItemId({ data }) {
  return (
    <div className="CardItem CardItemId">
      <div className="CardItem_card">
        <img className="CardItem_img" src={data.photo} alt="photo_avant" />
      </div>
      <div className="CardItem_card">
        <img className="CardItem_img" src={data.photo2} alt="photo_apres" />
      </div>

      <div className="CardItem_text">
        <h2 className="CardItem_h2">{data.id}</h2>
        <h2 className="CardItem_h2">{data.nom}</h2>
        <h2 className="CardItem_h2">{data.prenom}</h2>
        <h2 className="CardItem_h2">{data.age}</h2>
        <h2 className="CardItem_h2">{data.mail}</h2>
        <h2 className="CardItem_h2">{data.region}</h2>
        <h2 className="CardItem_h2">{data.adresse_salon}</h2>
        <h2 className="CardItem_h2">{data.votant}</h2>
      </div>
    </div>
  );
}

export default CardItemId;
