const createError = require("http-errors");
const userValidator = require("../validators/user.validator");
const admin = require("../firebase/admin");

module.exports.getUser = async (req, res, next) => {
  try {
    const { userId } = await userValidator.getUser.validateAsync(req.query);
    const response1 = await admin.firestore().collection("users").doc(userId).get();
    const user = response1.data();
    if (!user) throw createError.NotFound("User not found");
    await admin
      .firestore()
      .collection("users")
      .doc(userId)
      .update({ visitorsCount: admin.firestore.FieldValue.increment(1) });
    const response2 = await admin
      .firestore()
      .collection("users")
      .doc(userId)
      .collection("usersLinks")
      .where("active", "==", true)
      .orderBy("creationDate", "desc")
      .get();
    const usersLinks = response2.docs.map((item) => item.data());
    res.send({ ...user, usersLinks });
  } catch (error) {
    if (error.isJoi) error.status = 422;
    next(error);
  }
};

module.exports.updateUsersLinks = async (req, res, next) => {
  try {
    const { userId, linkId } = await userValidator.updateUsersLinks.validateAsync(req.body);
    await admin
      .firestore()
      .collection("users")
      .doc(userId)
      .collection("usersLinks")
      .doc(linkId)
      .update({ visits: admin.firestore.FieldValue.increment(1) });
    res.send("Successfully updated");
  } catch (error) {
    if (error.isJoi) error.status = 422;
    next(error);
  }
};
