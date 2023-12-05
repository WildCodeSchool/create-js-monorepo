import React from "react";

import "../style/Submit.css";

function Submit() {
  return (
    <div className="submit">
      <h2>Have you discover a new pokemon species?</h2>
      <form className="form">
        Submit your datas here!
        <label>
          <p className="label-text">Name </p>
          <input type="text" required />
        </label>
        <label>
          <p className="label-text"> Description </p>
          <textarea required />
        </label>
        <label>
          <p className="label-text"> Image Url </p>
          <input type="url" required />
        </label>
        <p className="label-text"> Types </p>
        <select className="select-submit" name="select">
          <option value="">Choose the type</option>

          <option>Grass</option>
          <option>Fire</option>
          <option>Water</option>
          <option>Bug</option>
          <option>Normal</option>
          <option>Flying</option>
          <option>Poison</option>
          <option>Electric</option>
          <option>Ground</option>
          <option>Psychic</option>
          <option>Fighting</option>
          <option>Rock</option>
          <option>Ghost</option>
          <option>Ice</option>
          <option>Dragon</option>
          <option>Ghost</option>
          <option>Ice</option>
          <option>Dragon</option>
        </select>
      </form>
    </div>
  );
}

export default Submit;

/**
 * Name
 * Descirption
 * image
 * type_id
 */
