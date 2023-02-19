const joi = require("joi");

module.exports.getUser = joi.object({
  userId: joi.string().required(),
});

module.exports.updateUsersLinks = joi.object({
  userId: joi.string().required(),
  linkId: joi.string().required(),
});

module.exports.addUsersContacts = joi.object({
  userId: joi.string().required(),
  name: joi.string().required(),
  email: joi.string().email().required(),
  phone: joi.number().required(),
  message: joi.string().required(),
});
