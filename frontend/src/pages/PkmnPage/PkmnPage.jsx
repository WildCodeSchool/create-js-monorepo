import React from "react";
import { useLoaderData } from "react-router-dom";

import CardDesc from "../../components/CardDesc/CardDesc";

function PkmnPage() {
  const pokemon = useLoaderData();
  return (
    <div className="card-page">
      <CardDesc pokemon={pokemon} />
    </div>
  );
}

export default PkmnPage;
