const createError = require("http-errors");
const userValidator = require("../validators/user.validator");
const admin = require("../firebase/admin");
const moment = require("moment");

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
    const { links, attachments } = response2.docs.reduce(
      (previous, current) => {
        const currentData = current.data();
        return currentData?.type?.toLowerCase() === "attachment"
          ? { links: previous.links, attachments: [...previous.attachments, currentData] }
          : { links: [...previous.links, currentData], attachments: previous.attachments };
      },
      { links: [], attachments: [] }
    );
    res.send({ ...user, links, attachments });
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

module.exports.addUsersContacts = async (req, res, next) => {
  try {
    const { userId, ...rest } = await userValidator.addUsersContacts.validateAsync(req.body);
    rest.creationDate = moment().unix();
    await admin.firestore().collection("users").doc(userId).collection("contacts").add(rest);
    res.send("Successfully added");
  } catch (error) {
    if (error.isJoi) error.status = 422;
    next(error);
  }
};
