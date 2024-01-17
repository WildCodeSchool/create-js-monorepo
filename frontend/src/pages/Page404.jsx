import React from "react";
import { Link } from "react-router-dom";
import "./Page404.scss";

function Page404() {
  return (
    <div className="wrap-404">
      <div className="label">Erreur</div>
      <div className="numbers">
        <div className="number">
          <div className="four" />
        </div>
        <div className="number">
          <div className="zero">
            <span> </span>
          </div>
        </div>
        <div className="number">
          <div className="four last" />
        </div>
      </div>
      <div className="text">
        <p>On dirait que tu t'es perdu, tu as oublié ton avatar ...</p>
        <Link to="/">
          <button type="button">Allez hop fais demi-tour </button>
        </Link>
      </div>
      <div className="sleep-walker">
        <div className="man">
          <div className="head" />
          <div className="torso">
            <div className="arm-a" />
            <div className="arm-b" />
          </div>
          <div className="legs">
            <div className="leg-a" />
            <div className="leg-b" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page404;
