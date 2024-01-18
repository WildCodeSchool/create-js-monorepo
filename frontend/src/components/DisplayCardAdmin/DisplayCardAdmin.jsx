import React from "react";
import { useLoaderData } from "react-router-dom";
import CardItemAdmin from "../CardItemAdmin/CardItemAdmin";
import "../DisplayCards/displayCards.css";

function DisplayCardAdmin({ basePath }) {
  const items = useLoaderData();

  return (
    <div className="DisplayCards">
      {items.map((item) => (
        <CardItemAdmin key={item.id} data={item} basePath={basePath} />
      ))}
    </div>
  );
}

export default DisplayCardAdmin;
