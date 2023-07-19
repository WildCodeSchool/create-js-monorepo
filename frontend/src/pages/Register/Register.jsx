import { useFormik } from "formik";
import { ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import APIService from "../../services/APIService";
import "react-toastify/dist/ReactToastify.css";
import notifySuccess, {
  notifyError,
} from "../../services/ToastNotificationService";
import s from "./Register.module.css";
import notehub from "../../assets/notehub.png";
import validationSchemas from "../../services/validationSchema";

export default function Register() {
  const navigate = useNavigate();
  const registerSchema = validationSchemas.validationSchemaRegister;

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    registerSchema,

    onSubmit: () => {
      const { confirmPassword, ...formData } = formik.values;
      APIService.post(`/register`, formData)
        .then(() => {
          navigate("/");
          notifySuccess("Compte crée");
        })

        .catch((error) => {
          if (error.response?.status === 500) {
            notifyError("L'inscription a échoué");
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
            {formik.errors.email && (
              <div className={s.error}>{formik.errors.email}</div>
            )}
            <input
              type="password"
              name="password"
              id="password"
              required="required"
              placeholder="mot de passe"
              className={s.input}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && (
              <div className={s.error}>{formik.errors.password}</div>
            )}
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required="required"
              placeholder="confirmation du mot de passe"
              className={s.input}
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            {formik.errors.confirmPassword && (
              <div className={s.error}>{formik.errors.confirmPassword}</div>
            )}
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
            {formik.errors.lastname && (
              <div className={s.error}>{formik.errors.lastname}</div>
            )}
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
            {formik.errors.name && (
              <div className={s.error}>{formik.errors.name}</div>
            )}
          </div>
          <button type="submit" className={s.button}>
            Connexion
          </button>
        </form>
      </div>
      <ToastContainer limit={1} />
    </div>
  );
}
