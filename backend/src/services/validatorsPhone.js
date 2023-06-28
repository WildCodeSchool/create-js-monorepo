const Joi = require("joi");

// Schema for register phone
const phoneSchema = Joi.object({
  firstname: Joi.string().min(3).max(30).required().messages({
    "any.required": "Le prénom est requis",
    "string.min": "Le prénom doit contenir 3 caractères minimum",
    "string.max": "Le prénom doit contenir 30 caractères maximum",
  }),
  lastname: Joi.string().min(3).max(30).required().messages({
    "any.required": "Le nom de famille est requis",
    "string.min": "Le nom de famille doit contenir 3 caractères minimum",
    "string.max": "Le nom de famille doit contenir 30 caractères maximum",
  }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "fr"] },
    })
    .max(255)
    .required()
    .messages({
      "any.required": "L'email est requis",
      "string.max": "L'email doit contenir 255 caractères maximum",
      "string.email": "L'email doit être dans un format valide",
    }),
  password: Joi.string().min(7).max(30).required().messages({
    "any.required": "Le mot de passe est requis",
    "string.min": "Le mot de passe doit contenir 7 caractères minimum",
    "string.max": "Le mot de passe doit contenir 30 caractères maximum",
  }),
  phoneNumber: Joi.number().integer().precision(10).messages({
    "number.precision": "Le numéro de téléphone doit contenir 10 chiffres",
  }),
  addressNumber: Joi.number().min(1).less(10000).messages({
    "number.min": "Le numéro d'addresse doit contenir 1 caractères minimum",
    "number.less": "Le numéro d'addresse doit contenir 1000 caractères maximum",
  }),
  addressStreetname: Joi.string().min(3).max(100).messages({
    "string.min": "Nom de la rue doit contenir 3 caractères minimum",
    "string.max": "Nom de la rue doit contenir 100 caractères maximum",
  }),
  city: Joi.string().min(3).max(50).messages({
    "string.min": "Ville doit contenir 3 caractères minimum",
    "string.max": "Ville doit contenir 50 caractères maximum",
  }),
  roles: Joi.string(),
});

// Validator for register phone
const validatePhone = (req, res, next) => {
  const {
    Brand,
    Model,
    RAM,
    Storage,
    Status,
    Value_M: ValueM,
    Value_S: ValueS,
    Weigthing,
    Total_value: TotalValue,
    User_Id: UserId,
  } = req.body;

  const { error } = phoneSchema.validate(
    {
      Brand,
      Model,
      RAM,
      Storage,
      Status,
      ValueM,
      ValueS,
      Weigthing,
      TotalValue,
      UserId,
    },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = {
  validatePhone,
};
