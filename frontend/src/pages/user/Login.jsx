import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
// import * as yup from "yup";
import { toast } from "react-toastify";
import APIService from "../../services/APIService";
import { useUserContext } from "../../contexts/UserContext";
import styles from "./Login.module.css";
import logo from "../../assets/logo.svg";

function Login() {
  const { login } = useUserContext();
  const navigate = useNavigate();

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
    <div className={styles["login-container"]}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <form className={styles["form-container"]} onSubmit={formik.handleSubmit}>
        <div className="form-email">
          <label htmlFor="email" className={styles["label-text"]}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className={styles["input-change"]}
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
        </div>
        <div className={styles["form-Password"]}>
          <label htmlFor="password" className={styles["label-text"]}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className={styles["input-password"]}
          />
          {formik.touched.password && formik.errors.password && (
            <div>{formik.errors.password}</div>
          )}
        </div>
        <button type="submit" className={styles["login-button"]}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
