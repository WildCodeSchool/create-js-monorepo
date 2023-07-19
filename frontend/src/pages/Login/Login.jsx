import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import s from "./Login.module.css";
import APIService from "../../services/APIService";
import { useUserContext } from "../../components/Contexts/UserContext";
import validationSchemas from "../../services/validationSchema";
import { notifyError } from "../../services/ToastNotificationService";
import notehub from "../../assets/notehub.png";

export default function Login() {
  const { login } = useUserContext();
  const navigate = useNavigate();
  const loginSchema = validationSchemas.validationSchemaLogin;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,

    onSubmit: () => {
      APIService.post(`/login`, formik.values)
        .then(({ data: user }) => {
          login(user);
          navigate("/notespage");
        })

        .catch((error) => {
          if (error.response?.status === 401) {
            notifyError("Les informations d'identification sont incorrectes.");
          } else {
            notifyError(
              "Une erreur s'est produite. Veuillez réessayer plus tard."
            );
          }
        });
    },
  });

  return (
    <div className={s.login}>
      <Link to="/" className={s.backtohome}>
        Retour à l'accueil
      </Link>
      <img src={notehub} alt="logo" className={s.notehub} />
      <div className={s.logincontainer}>
        <h3>Vous connecter</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className={s.identify}>
            <label htmlFor="identifiants" className={s.label}>
              Votre identifiant
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
            <label htmlFor="identifiants" className={s.label}>
              Votre mot de passe
            </label>
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
