import React from "react";
import DisplayCardAdmin from "../../components/DisplayCardAdmin/DisplayCardAdmin";

function Admin() {
  return (
    <div className="ContainerCardsAll">
      <DisplayCardAdmin basePath="/candidats" />
    </div>
  );
}

export default Admin;
