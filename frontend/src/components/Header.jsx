import React from "react";
import Background from "../assets/backgroundLoreal.jpg";
import "./header.css";

function Header() {
  return (
    <div className="backgroundMenu">
      <img className="backgroundimg" src={Background} alt="" />
    </div>
  );
}

export default Header;
