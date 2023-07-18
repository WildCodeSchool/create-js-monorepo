import * as Yup from "yup";

const validationSchema = Yup.object().shape({
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
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,
      "Le mot de passe doit contenir au moins 7 caractères, dont une minuscule, une majuscule et un chiffre"
    )
    .required("Requis"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Les mots de passe ne correspondent pas")
    .required("Requis"),
});

export default validationSchema;
