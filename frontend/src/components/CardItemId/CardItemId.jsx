import React from "react";
import "./cardItemId.css";

function CardItemId({ data }) {
  return (
    <div className="displayId">
      <div className="CardItem_card">
        <img
          className="CardItem_img photo_1"
          src={data.photo}
          alt="photo_avant"
        />
      </div>
      <div className="CardItem CardItemId">
        <div className="CardItem_card">
          <img className="CardItem_img2" src={data.photo2} alt="photo_apres" />
          <div className="CardItem_textB">
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
      </div>
    </div>
  );
}

export default CardItemId;
