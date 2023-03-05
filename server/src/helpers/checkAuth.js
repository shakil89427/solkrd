const admin = require("../firebase/admin");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    const { uid } = await admin.auth().verifyIdToken(token);
    if (!uid) {
      return res.status(401).send("Access denied");
    }
    next();
  } catch (err) {
    res.status(401).send("Access denied");
  }
};
