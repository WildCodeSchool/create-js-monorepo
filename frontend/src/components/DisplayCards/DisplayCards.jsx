import React from "react";
import { useLoaderData } from "react-router-dom";
import CardItem from "../CardItem/CardItem";
import "./displayCards.css";

function DisplayCards({ basePath }) {
  const items = useLoaderData();

  return (
    <div className="DisplayCards">
      {items.map((item) => (
        <CardItem key={item.id} data={item} basePath={basePath} />
      ))}
    </div>
  );
}

export default DisplayCards;
