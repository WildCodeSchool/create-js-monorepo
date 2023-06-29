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
      });
    },
  });

  return (
    <div>
      <Header />
      <h1 className={styles.title2}>Rechercher un téléphone</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.select}>
          <select
            className={styles.select1}
            name="brand"
            onChange={formik.handleChange}
            value={formik.values.brand}
            type="select"
          >
            <option value="">Sélectionnez une marque</option>
            <option value="Samsung">Samsung</option>
            <option value="Apple">Apple</option>
            <option value="Huawei">Huawei</option>
            <option value="Xiaomi">Xiaomi</option>
          </select>
          <button className={styles.validate} type="submit">
            Valider
          </button>
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
