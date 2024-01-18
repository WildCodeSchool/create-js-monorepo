import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import LoginInput from "../../components/loginInput/LoginInput";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const user = {
  email: "",
  password: "",
};

const showToastMessage = () => {
  toast.success(
    "Your connection information is correct, you will be redirected !",
    {
      position: toast.POSITION.TOP_RIGHT,
    }
  );
};

const showToastErrorMessage = () => {
  toast.error("Your login information is not correct !", {
    position: toast.POSITION.TOP_RIGHT,
  });
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
      showToastMessage();
      if (valid) {
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      showToastErrorMessage(error);
      setCredentials(user);
    }
  };

  return (
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
      <ToastContainer />
    </div>
  );
}

export default LogIn;
