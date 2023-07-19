import * as Yup from "yup";

const validationSchemaRegister = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Trop court!")
    .max(50, "Trop long!")
    .required("Requis"),

  lastname: Yup.string()
    .min(2, "Trop court!")
    .max(50, "Trop long!")
    .required("Requis"),

  email: Yup.string().email("Email invalide").required("Requis"),

  password: Yup.string()
    .min(7, "Le mot de passe doit comporter 7 caractères minimum")
    .required("Requis"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Les mots de passe ne correspondent pas")
    .required("Requis"),
});

const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().email("Email invalide").required("Requis"),

  password: Yup.string()
    .min(7, "Le mot de passe doit comporter 7 caractères minimum")
    .required("Requis"),
});
const validationSchemas = {
  validationSchemaRegister,
  validationSchemaLogin,
};

export default validationSchemas;
