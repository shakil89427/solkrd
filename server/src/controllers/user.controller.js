const createError = require("http-errors");
const userValidator = require("../validators/user.validator");
const firestore = require("../firebase/admin").firestore();

module.exports.getUser = async (req, res, next) => {
  try {
    const { userId } = await userValidator.getUser.validateAsync(req.query);
    const response = await firestore.collection("users").doc(userId).get();
    const user = response.data();
    if (!user) throw createError.NotFound("User not found");
    res.send(user);
  } catch (error) {
    if (error.isJoi) error.status = 422;
    next(error);
  }
};
