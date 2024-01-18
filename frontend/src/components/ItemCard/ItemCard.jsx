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
}) {
  const [itemPrice, setItemPrice] = useState(price);

  return (
    <article className="item">
      <img src={src} alt={`${name} de ${brand}`} className="item__image" />
      <h3 className="item__name">{name}</h3>
      <Quantity
        id={id}
        price={itemPrice}
        quantity={quantity}
        basePrice={price}
        setPrice={setItemPrice}
        setTotalPrice={setTotalPrice}
        quantityChange={quantityChange}
      />
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
};

export default ItemCard;
