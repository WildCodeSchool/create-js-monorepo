import PropTypes from "prop-types";
import React, { useState } from "react";

import Quantity from "./Quantity";
import "./itemCard.scss";

function ItemCard({
  id,
  brand,
  name,
  price,
  quantity,
  src,
  setTotalPrice,
  quantityChange,
  removeItem,
}) {
  const [itemPrice, setItemPrice] = useState(price);

  const handleClick = () => {
    removeItem(id);
  };

  return (
    <article className="item">
      <img src={src} alt={`${name} de ${brand}`} className="item__image" />
      <div className="item__group">
        <h3 className="item__group__name">{name}</h3>
        <div className="item__group__links">
          <button className="item__group__links__button" type="button">
            Modifier
          </button>
          <button className="item__group__links__button" type="button">
            Ajouter aux favoris
          </button>
          <button
            className="item__group__links__button"
            type="button"
            onClick={handleClick}
          >
            Supprimer
          </button>
        </div>
      </div>
      <div className="item__group">
        <Quantity
          id={id}
          price={itemPrice}
          quantity={quantity}
          basePrice={price}
          setPrice={setItemPrice}
          setTotalPrice={setTotalPrice}
          quantityChange={quantityChange}
        />
        <hgroup className="item__group__stock">
          <h3>EN STOCK</h3>
          <p>2 jours ouvrés</p>
        </hgroup>
      </div>
      <p className="item__price">Prix : {itemPrice} €</p>
    </article>
  );
}

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  setTotalPrice: PropTypes.func.isRequired,
  quantityChange: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default ItemCard;
