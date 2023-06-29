import React, { useState } from "react";
import styles from "./Home.module.css";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
import PhoneCard from "../../components/user/PhoneCard";
// import APISERVICES

export default function Home() {
  const [phones, setPhones] = useState([]);

  return (
    <div>
      <Header />
      <h1 className={styles.title1}>BIENVENUE</h1>
      <h1 className={styles.title2}>Rechercher un téléphone</h1>
      <div className={styles.select}>
        <select>
          <option placeholder="Sélectionner une marque">
            Sélectionner une marque
          </option>
          <option value={setPhones}>Samsung</option>
          <option value={setPhones}>Apple</option>
          <option value={setPhones}>Huawei</option>
          <option value={setPhones}>Xiaomi</option>
        </select>
        <button type="submit">Valider</button>
      </div>
      {phones.map((phone) => (
        <PhoneCard key={phone.id} phone={phone} />
      ))}
      <div className={styles.body} />
      <Footer />
    </div>
  );
}
