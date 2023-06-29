import { useFormik } from "formik";
import * as Yup from "yup";
import { React, useState } from "react";
import styles from "./Home.module.css";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
import PhoneCard from "../../components/user/PhoneCard";
import APIService from "../../services/APIService";

export default function Home() {
  const validationSchema = Yup.object({
    brand: Yup.string().required("*"),
  });
  const [phones, setPhones] = useState(null);
  const formik = useFormik({
    initialValues: {
      brand: "",
    },
    validationSchema,

    onSubmit: () => {
      APIService.get(`/api/phones`).then((response) => {
        setPhones(response.data);
        // selected &&
        //   console.log(
        //     selected.reduce((acc, array) => {
        //       acc.push(...array);
        //     })
        //   );
        // console.log(
        //   response.data.Brand /* .filter((phone) => phone.Brand === "Samsung") */
        // );
        // login(user);
        // navigate("/");
      });
      // récupérer brand et model dans un state pour pouvoir les afficher en fin de parcours
    },
  });

  return (
    <div>
      <Header />
      <h1 className={styles.title1}>BIENVENUE</h1>
      <h1 className={styles.title2}>Rechercher un téléphone</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.select}>
          <select
            name="brand"
            onChange={formik.handleChange}
            value={formik.values.brand}
            type="select"
          >
            <option placeholder="">Sélectionnez une marque</option>
            <option value="Samsung">Samsung</option>
            <option value="Apple">Apple</option>
            <option value="Huawe">Huawei</option>
            <option value="Xiaomi">Xiaomi</option>
          </select>
          <button type="submit">Valider</button>
        </div>
      </form>
      <ul>
        {phones &&
          phones
            .filter((phone) => phone.Brand === formik.values.brand)
            .map((phone) => (
              <li key={phone.id}>
                <PhoneCard phone={phone} />
              </li>
            ))}
      </ul>
      <div className={styles.body} />
      <Footer />
    </div>
  );
}
