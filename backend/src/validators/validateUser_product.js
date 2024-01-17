const Joi = require("joi");

const getUser_productSchema = () => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    user_id: Joi.number().presence('required'),
   product_id: Joi.number().presence('required'),

  });
};

const validateUser_product = (req, res, next) => {
  const schema = getUser_productSchema();

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

module.exports = validateUser_product;

