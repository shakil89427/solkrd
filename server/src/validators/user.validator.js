const joi = require("joi");

module.exports.getUser = joi.object({
  userId: joi.string().required(),
});
