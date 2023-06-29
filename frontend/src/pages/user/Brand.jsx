import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./Brand.module.css";
import AppleLogo from "../../assets/Apple Logo.svg";
import HuaweiLogo from "../../assets/Huawei Logo.svg";
import XiaomiLogo from "../../assets/Xiaomi Logo.svg";
import SamsungLogo from "../../assets/Samsung Logo.svg";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

export default function Brand() {
  const validationSchema = Yup.object({
    brand: Yup.string().required("*"),
    model: Yup.string().required("*"),
  });

  const formik = useFormik({
    initialValues: {
      brand: "",
      model: "",
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
        <h1> Sélectionnez la marque </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.rowcontainer}>
            <div className={styles.brandcontainer}>
              <img src={AppleLogo} alt="apple logo" />
              <label>
                <input
                  type="radio"
                  name="brand"
                  value="Apple"
                  display="none"
                  checked={formik.values.brand === "Apple"}
                  onChange={formik.handleChange}
                />
                Apple
              </label>
            </div>
            <div className={styles.brandcontainer}>
              <img src={HuaweiLogo} alt="huawei logo" />
              <label>
                <input
                  type="radio"
                  name="brand"
                  value="Huawei"
                  checked={formik.values.brand === "Huawei"}
                  onChange={formik.handleChange}
                />
                Huawei
              </label>
            </div>
          </div>
          <div className={styles.rowcontainer}>
            <div className={styles.brandcontainer}>
              <img src={XiaomiLogo} alt="xiaomi logo" />
              <label>
                <input
                  type="radio"
                  name="brand"
                  value="Xiaomi"
                  checked={formik.values.brand === "Xiaomi"}
                  onChange={formik.handleChange}
                />
                Xiaomi
              </label>
            </div>
            <div className={styles.brandcontainer}>
              <img src={SamsungLogo} alt="samsung logo" />
              <label>
                <input
                  type="radio"
                  name="brand"
                  value="Samsung"
                  checked={formik.values.brand === "Samsung"}
                  onChange={formik.handleChange}
                />
                Samsung
              </label>
            </div>
          </div>
          <h1 className={styles.modeltext}> Sélectionnez le modèle </h1>
          <select
            name="model"
            onChange={formik.handleChange}
            value={formik.values.model}
            type="select"
          >
            <option value=""> Faites votre choix </option>
            <option value="iPhone12"> iPhone 12 </option>
            <option value="iPhone11 Pro"> iPhone 11 Pro </option>
            <option value="iPhoneXR"> iPhone XR </option>
            <option value="iPhone13"> iPhone 13 </option>
          </select>{" "}
          <br />
          <button type="submit">Suivant</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
