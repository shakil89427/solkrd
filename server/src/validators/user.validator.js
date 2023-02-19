const joi = require("joi");

module.exports.getUser = joi.object({
  userId: joi.string().required(),
});

module.exports.updateUsersLinks = joi.object({
  userId: joi.string().required(),
  linkId: joi.string().required(),
});
