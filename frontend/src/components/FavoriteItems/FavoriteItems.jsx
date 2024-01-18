/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from "react";
import db from "../../db";
import ItemCard from "../ItemCard/ItemCard";
import "./favoriteItems.scss";

function FavoriteItems() {
  const [totalPrice, setTotalPrice] = useState(0);
  const getItems = () => {
    const rand = Math.floor(Math.random() * 50);
    const randClientId = db[rand].new_customerID;
    const items = db.filter((e) => e.new_customerID === randClientId);
    items.forEach((e, index) => {
      e.id = index;
      e.quantity = Math.floor(Math.random() * 4) + 1;
    });
    return items.slice(0, 4);
  };
  // const { favorites } = useGlobalContext();
  const [displayFavorites, setDisplayFavorites] = useState(getItems());

  const quantityChange = (id, quantity) => {
    const item = displayFavorites.find((e) => e.id === id);
    item.quantity = quantity;
    const updatedList = displayFavorites.map((e) => (e.id === id ? item : e));
    setDisplayFavorites(updatedList);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    displayFavorites.forEach((e) => {
      total += e.Price * e.quantity;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [displayFavorites]);

  const removeItem = (id) => {
    const updatedList = displayFavorites.filter((e) => e.id !== id);
    setDisplayFavorites(updatedList);
  };

  return (
    <div className="container">
      <h1 className="title">Vos articles favoris :</h1>
      <section className="favorites">
        <ul className="favorites__list">
          {displayFavorites.map((e) => (
            <li className="favorites__list__item">
              <ItemCard
                key={e.id}
                id={e.id}
                brand={e.Brand}
                name={e.Item_Purchased_x}
                price={e.Price}
                quantity={e.quantity}
                src={e.links}
                setTotalPrice={setTotalPrice}
                quantityChange={quantityChange}
                removeItem={removeItem}
              />
            </li>
          ))}
        </ul>
        <section className="favorites__checkout">
          <h2 className="favorites__checkout__title">
            Abonnez vous et recevez ces produits chaque mois
          </h2>
          <p>
            Sous-total :
            <b>
              <del>{totalPrice.toFixed(2)} €</del>
              {(totalPrice - (totalPrice * 20) / 100).toFixed(2)} €
            </b>
          </p>
          <p>
            Economisez <b>{((totalPrice * 20) / 100).toFixed(2)} €</b> sur vos
            produits favoris
          </p>
        </section>
      </section>
    </div>
  );
}

export default FavoriteItems;
