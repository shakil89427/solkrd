const joi = require("joi");

module.exports.create = joi.object({
  amount: joi.string().required(),
  currency: joi.string().required().uppercase(),
  username: joi.string().required(),
});
