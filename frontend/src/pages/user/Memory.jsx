import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./Memory.module.css";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
import RAM from "../../assets/RAM.svg";

export default function Memory() {
  const validationSchema = Yup.object({
    memory: Yup.number().integer().required("*"),
  });

  const formik = useFormik({
    initialValues: {
      memory: "",
    },
    validationSchema,

    onSubmit: () => {
      // récupérer brand et model dans un state pour pouvoir les afficher en fin de parcours
    },
  });
  return (
    <div>
      <Header />
      <div className={styles.body}>
        <div className={styles.descriptioncontainer}>
          <img src={RAM} alt="memory" />
          <h2> Choisissez la mémoire RAM </h2>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.rowcontainer}>
            <div className={styles.checkbox}>
              <label>
                <input
                  type="radio"
                  name="memory"
                  value="1"
                  checked={formik.values.memory === "1"}
                  onChange={formik.handleChange}
                />
                1 go
              </label>
            </div>
            <div className={styles.checkbox}>
              <label>
                <input
                  type="radio"
                  name="memory"
                  value="2"
                  checked={formik.values.memory === "2"}
                  onChange={formik.handleChange}
                />
                2 gos
              </label>
            </div>
          </div>
          <div className={styles.rowcontainer}>
            <div className={styles.checkbox}>
              <label>
                <input
                  type="radio"
                  name="memory"
                  value="3"
                  checked={formik.values.memory === "3"}
                  onChange={formik.handleChange}
                />
                3 gos
              </label>
            </div>
            <div className={styles.checkbox}>
              <label>
                <input
                  type="radio"
                  name="memory"
                  value="4"
                  checked={formik.values.memory === "4"}
                  onChange={formik.handleChange}
                />
                4 gos
              </label>
            </div>
          </div>
          <div className={styles.rowcontainer}>
            <div className={styles.checkbox}>
              <label>
                <input
                  type="radio"
                  name="memory"
                  value="6"
                  checked={formik.values.memory === "6"}
                  onChange={formik.handleChange}
                />
                6 gos
              </label>
            </div>
            <div className={styles.checkbox}>
              <label>
                <input
                  type="radio"
                  name="memory"
                  value="8"
                  checked={formik.values.memory === "8"}
                  onChange={formik.handleChange}
                />
                8 gos
              </label>
            </div>
          </div>
          <div className={styles.rowcontainer}>
            <div className={styles.checkbox}>
              <label>
                <input
                  type="radio"
                  name="memory"
                  value="12"
                  checked={formik.values.memory === "12"}
                  onChange={formik.handleChange}
                />
                12 gos
              </label>
            </div>
            <div className={styles.checkbox}>
              <label>
                <input
                  type="radio"
                  name="memory"
                  value="16"
                  checked={formik.values.memory === "16"}
                  onChange={formik.handleChange}
                />
                16 gos
              </label>
            </div>
          </div>
          <div className={styles.buttoncontainer}>
            <button type="submit">Suivant</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
