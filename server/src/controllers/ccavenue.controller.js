const admin = require("../firebase/admin");

module.exports.success = async (req, res, next) => {
  try {
    await admin.firestore().collection("ccsuccess").add(req.body);
    res.end();
  } catch (error) {
    res.end();
  }
};

module.exports.cancel = async (req, res, next) => {
  try {
    await admin.firestore().collection("cccancel").add(req.body);
    res.end();
  } catch (error) {
    res.end();
  }
};
