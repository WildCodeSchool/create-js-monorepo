import React from "react";
import { Link } from "react-router-dom";
import "./carditem.css";

function CardItem({ data }) {
  return (
    <div className="CardItem">
      <Link className="CardItem_card" to={`${data.id}`}>
        <img
          className="CardItem_img"
          src={data.photo}
          alt="photographie"
          style={{ cursor: "pointer" }}
        />
      </Link>
      <div className="CardItem_text">
        <h2 className="CardItem_h2">candidate numéro {data.id}</h2>
        <h2 className="CardItem_h2">{data.name}</h2>
        <h2 className="CardItem_h2">{data.prenom}</h2>
        <h2 className="CardItem_h2">{data.age}</h2>
      </div>
    </div>
  );
}
export default CardItem;
