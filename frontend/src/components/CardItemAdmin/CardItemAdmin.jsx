import React from "react";
import "../CardItem/carditem.css";

function CardItemAdmin({ data }) {
  return (
    <div className="CardItem">
      <img
        className="CardItem_img"
        src={data.photo}
        alt="photographie"
        style={{ cursor: "pointer" }}
      />

      <div className="CardItem_text">
        <h2 className="CardItem_h2">candidate numéro {data.id}</h2>
        <h2 className="CardItem_h2">{data.name}</h2>
        <h2 className="CardItem_h2">{data.prenom}</h2>
        <h2 className="CardItem_h2">{data.age}</h2>
      </div>
    </div>
  );
}
export default CardItemAdmin;
