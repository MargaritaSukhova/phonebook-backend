const Joi = require("joi");

const signupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
})

const loginSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(7).required(),
});

const validateUser = (schema) => {
  const  func = async (req, res, next) => {
    const { error } = schema.validate(req.body)
    
    if (error) {
      res.status(400).json({ message: error.message })
      return;
    }
    next();
  }
  return func;
}

module.exports = { signupSchema, loginSchema, validateUser };