import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginInput from "../../components/loginInput/LoginInput";
import "./Login.css";

const user = {
  email: "",
  password: "",
};

function LogIn() {
  const [credentials, setCredentials] = useState(user);
  const navigate = useNavigate();

  const handleCredentials = (event) => {
    setCredentials((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRequest = async (e) => {
    e.preventDefault();
    try {
      const valid = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        credentials
      );
      if (valid) {
        const validation = document.querySelector(".validation");
        validation.style.display = "block";
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      const errorconnexion = document.querySelector(".errorconnexion");
      errorconnexion.style.display = "block";
      setCredentials(user);
    }
  };

  return (
    <>
      <div className="contain-validation-errorconnexion">
        <p style={{ display: "none" }} className="validation">
          Vos informations de connexion sont correctes, vous allez être
          redirigé.
        </p>
        <p style={{ display: "none" }} className="errorconnexion">
          Vos informations de connexion sont incorrectes.
        </p>
      </div>
      <div className="contain-form-login">
        <h2>Connectez-vous pour voter</h2>
        <div className="form-container">
          <form onSubmit={handleRequest} className="form-login">
            <div className="contain-input">
              <LoginInput
                type="email"
                name="email"
                required
                onChange={handleCredentials}
                value={credentials.email}
                placeholder="Votre email"
              />
            </div>
            <div className="contain-input">
              <LoginInput
                type="password"
                name="password"
                required
                onChange={handleCredentials}
                value={credentials.password}
                placeholder="Votre mot de passe"
              />
            </div>
            <div className="contain-submit-login">
              <button type="submit" className="button-submit">
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
