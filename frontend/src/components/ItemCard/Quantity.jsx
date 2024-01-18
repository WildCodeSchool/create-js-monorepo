import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./quantity.scss";

function Quantity({ id, quantity, basePrice, setPrice, quantityChange }) {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [buttonDownEnabled, setButtonDownEnabled] = useState(itemQuantity > 1);

  const quantityDown = () => {
    setItemQuantity(itemQuantity - 1);
    quantityChange(id, itemQuantity - 1);
  };

  const quantityUp = () => {
    if (itemQuantity === 1) {
      setButtonDownEnabled(true);
    }
    setItemQuantity(itemQuantity + 1);
    quantityChange(id, itemQuantity + 1);
  };

  useEffect(() => {
    const newPrice = (basePrice * itemQuantity).toFixed(2);
    setPrice(newPrice);
    if (itemQuantity === 1) {
      setButtonDownEnabled(false);
    }
  }, [itemQuantity]);

  return (
    <div className="item__quantity">
      <p className="item__quantity__label">Quantité</p>
      <div className="item__quantity__switch">
        <button
          type="button"
          className={
            buttonDownEnabled
              ? "item__quantity__switch__button"
              : "item__quantity__switch__button disabled"
          }
          disabled={!buttonDownEnabled}
          onClick={quantityDown}
        >
          -
        </button>
        {itemQuantity}
        <button
          type="button"
          className="item__quantity__switch__button"
          onClick={quantityUp}
        >
          +
        </button>
      </div>
    </div>
  );
}

Quantity.propTypes = {
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  basePrice: PropTypes.number.isRequired,
  setPrice: PropTypes.func.isRequired,
  quantityChange: PropTypes.func.isRequired,
};

export default Quantity;
