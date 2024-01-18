import React from "react";
import { useLoaderData } from "react-router-dom";
import CardItemId from "../CardItemId/CardItemId";

function DisplayCardId({ basePath }) {
  const items = useLoaderData();

  return (
    <div className="DisplayCardId">
      {items.map((item) => (
        <CardItemId key={item.id} data={item} basePath={basePath} />
      ))}
    </div>
  );
}

export default DisplayCardId;
