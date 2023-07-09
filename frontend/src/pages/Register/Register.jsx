import { useFormik } from "formik";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import APIService from "../../services/APIService";
import "react-toastify/dist/ReactToastify.css";
import notifySuccess, {
  notifyError,
} from "../../services/ToastNotificationService";
import s from "./Register.module.css";
import notehub from "../../assets/notehub.png";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },

    onSubmit: () => {
      APIService.post(`/users`, formik.values)
        .then(() => {
          notifySuccess("Compte crée");
        })

        .catch((error) => {
          if (error.response?.status === 401) {
            notifyError("Problème lors de l'inscription");
          }
        });
    },
  });

  return (
    <div className={s.register}>
      <Link to="/" className={s.backtohome}>
        Retour à l'accueil
      </Link>
      <img src={notehub} alt="logo" className={s.notehub} />

      <div className={s.registercontainer}>
        <h3>Créer un compte</h3>

        <form onSubmit={formik.handleSubmit}>
          <div className={s.identify}>
            <label htmlFor="identifiants" className={s.label}>
              Vos identifiants
            </label>
            <input
              type="text"
              name="email"
              id="email"
              required="required"
              placeholder="email"
              className={s.input}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <input
              type="text"
              name="password"
              id="password"
              required="required"
              placeholder="mot de passe"
              className={s.input}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <input
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              required="required"
              placeholder="confirmation du mot de passe"
              className={s.input}
              onChange={formik.handleChange}
              value={formik.values.confirmpassword}
            />
          </div>
          <div className={s.information}>
            <label htmlFor="identifiants" className={s.label}>
              Vos informations
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              required="required"
              placeholder="nom"
              className={s.input}
              onChange={formik.handleChange}
              value={formik.values.lastname}
            />
            <input
              type="text"
              name="firstname"
              id="firstname"
              required="required"
              placeholder="prénom"
              className={s.input}
              onChange={formik.handleChange}
              value={formik.values.firstname}
            />
          </div>
          <button type="submit" className={s.button}>
            Connexion
          </button>
        </form>
        <ToastContainer limit={1} />
      </div>
    </div>
  );
}
