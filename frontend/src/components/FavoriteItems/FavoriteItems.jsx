import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./favoriteItems.scss";

function FavoriteItems() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      brand: "Marque 1",
      name: "Produit 1",
      price: 44.99,
      quantity: 2,
      src: "./src/assets/images/item1.jpg",
    },
    {
      id: 2,
      brand: "Marque 2",
      name: "Produit 2",
      price: 79.99,
      quantity: 1,
      src: "./src/assets/images/item2.jpg",
    },
    {
      id: 3,
      brand: "Marque 3",
      name: "Produit 3",
      price: 39.99,
      quantity: 1,
      src: "./src/assets/images/item3.jpg",
    },
  ]);

  const quantityChange = (id, quantity) => {
    const item = favorites.find((e) => e.id === id);
    item.quantity = quantity;
    const updatedList = favorites.map((e) => (e.id === id ? item : e));
    setFavorites(updatedList);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    favorites.forEach((e) => {
      total += e.price * e.quantity;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [favorites]);

  return (
    <>
      <h1 className="title">Vos articles favoris :</h1>
      <section className="favorites">
        <ul className="favorites__list">
          {favorites.map((e) => (
            <li className="favorites__list__item">
              <ItemCard
                key={e.id}
                id={e.id}
                brand={e.brand}
                name={e.name}
                price={e.price}
                quantity={e.quantity}
                src={e.src}
                setTotalPrice={setTotalPrice}
                quantityChange={quantityChange}
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
    </>
  );
}

export default FavoriteItems;
