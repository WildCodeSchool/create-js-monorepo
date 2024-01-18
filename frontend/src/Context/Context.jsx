import { createContext, useState, useMemo, useContext } from "react";
import PropTypes from "prop-types";

export const giftsContext = createContext();

export function WheelProvider({ children }) {
  const [wheelGifts, setWheelGifts] = useState();

  const favorites = [
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
  ];
  const wheelMemo = useMemo(
    () => ({
      wheelGifts,
      setWheelGifts,
      favorites,
    }),
    [wheelGifts, setWheelGifts, favorites]
  );

  return (
    <giftsContext.Provider value={wheelMemo}>{children}</giftsContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(giftsContext);
  return context;
}

WheelProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
