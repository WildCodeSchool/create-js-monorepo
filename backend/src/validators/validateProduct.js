const Joi = require("joi");

const getProductSchema = () => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    name: Joi.string().max(80).presence("required"),
    object: Joi.string().max(90).presence("required"),
    price: Joi.number().presence("required"),
    is_in_card: Joi.number().presence("required"),
    vouncher: Joi.string().max(80).presence("required"),
  });
};

const validateProduct = (req, res, next) => {
  const schema = getProductSchema();

  const { error } = schema.validate(
    {
      ...req.body,
    },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = validateProduct;
