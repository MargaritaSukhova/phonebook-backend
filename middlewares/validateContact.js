const Joi = require("joi");

const validateSchemaContact = Joi.object({
  name: Joi.string().min(3).max(8).required(),
  number: Joi.string().min(10).required(),
});

const contactValidator = (req, res, next) => {
  const emptyBody = !Object.keys(req.body).length;
  const { error } = validateSchemaContact.validate(req.body);

  if (emptyBody) {
    res.status(400).json({
      message: "Missing fields",
    });
    return;
  }
  if (error) {
    res.status(400).json({
      message: error.message,
    });
    return;
  }
  next();
};

module.exports = contactValidator;
