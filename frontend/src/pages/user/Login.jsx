import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
// import * as yup from "yup";
import { toast } from "react-toastify";
import APIService from "../../services/APIService";
import { useUserContext } from "../../contexts/UserContext";

function Login() {
  const { login } = useUserContext();
  const navigate = useNavigate();

  // const validationSchema = yup.object({
  //   email: yup
  //     .string("Entrez votre adresse mail")
  //     .email("Entrez une adresse mail valide")
  //     .required("Une adresse mail est requise"),
  //   password: yup
  //     .string("Entrez votre mot de passe")
  //     .min(8, "Le mot de passe doit être de 8 caractères minimum")
  //     .max(30, "Le mot de passe ne doit pas dépasser 30 caractères")
  //     .required("Le mot de passe est requis"),
  // });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        await APIService.post("/api/login", values);
        login(values);
        navigate("/home");
      } catch (err) {
        console.error("Login error:", err);
        toast.error("An error occurred during login.");
      }
    },
  });

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password && (
            <div>{formik.errors.password}</div>
          )}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
