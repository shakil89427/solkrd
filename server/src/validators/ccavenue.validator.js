const joi = require("joi");

module.exports.create = joi.object({
  orderId: joi.string().required(),
  amount: joi.string().required(),
  userId: joi.string().required(),
  username: joi.string().required(),
});
