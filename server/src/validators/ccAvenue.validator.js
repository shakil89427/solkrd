const joi = require("joi");

module.exports.create = joi.object({
  orderId: joi.string().required(),
  phoneNumber: joi.string().required(),
  amount: joi.number().required(),
  currency: joi.string().uppercase().required(),
  email: joi.string().email().required(),
  userId: joi.string().required(),
  attachmentCounts: joi.number().integer().required(),
  name: joi.string().required(),
  address: joi.string().required(),
  country: joi.string().required(),
  city: joi.string().required(),
  state: joi.string().required(),
  zip: joi.number().required(),
});
