import { useEffect, useState } from "react";
import "./Voucher.scss";

export default function Voucher() {
  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/products`, {
      withCredentials: true,
    })
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  console.info(products);
  return (
    <div className="voucher-ctn">
      <h1>Félicitation</h1>
      <img src={products[0].object} alt="" />
      <p>
        Vous avez gagné un bon de réduction sur l'article:
        <b>{products[0].name}</b> à utiliser lors de votre prochain achat sur le
        site <b>Kérastase paris</b>.
      </p>
      <h2>Code Promo:</h2>
      <p>
        <b>{products[0].vouncher}</b>
      </p>
    </div>
  );
}
