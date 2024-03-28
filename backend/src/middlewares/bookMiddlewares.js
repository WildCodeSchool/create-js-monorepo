const Joi = require("joi");

const checkIfAdmin = (req, res, next) => {
  const currentUser = "admin";

  if (currentUser !== "admin") {
    res.status(400).send("Accès non autorisé");
  } else {
    next();
  }
};

const minLength = 2;
const maxLength = 200;
const maxDateNumber = 4;

const validateBookInformations = (req, res, next) => {
  const bookSchema = Joi.object({
    title: Joi.string()
      .min(minLength)
      .required()
      .messages({
        "string-min": `Le titre doit avoir minimum ${minLength} caractères`,
        "string.empty": "Le titre est requis",
        "any.required": "Le titre est requis",
      }),
    author: Joi.string()
      .min(minLength)
      .required()
      .messages({
        "string.min": `L'auteur doit avoir minimum ${minLength} caractères`,
        "any.required": "Le nom de l'auteur est requis",
        "string.empty": "Le nom de l'auteur est requis",
      }),
    summary: Joi.string()
      .min(minLength)
      .max(maxLength)
      .required()
      .messages({
        "string.min": `Le résumé doit avoir minimum ${minLength} caractères`,
        "any.required": "Le résumé est requis",
        "string.empty": "Le résumé est requis",
      }),
    parutionYear: Joi.number()
      .max(maxDateNumber)
      .required()
      .messages({
        "string.min": `L'année de parution doit avoir minimum ${maxDateNumber} caractères`,
        "any.required": "L'année de parution est requise",
        "string.empty": "L'année de parution est requise",
      }),
  });
  const { error } = bookSchema.validate(req.body);

  if (error) {
    console.error(error.details[0].message);
    res.status(400).json({
      msg: error.details[0].message,
    });
  } else {
    next();
  }
};

module.exports = { checkIfAdmin, validateBookInformations };
