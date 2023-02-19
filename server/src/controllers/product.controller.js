const admin = require("../firebase/admin");

module.exports.getProducts = async (req, res, next) => {
  try {
    const response = await admin
      .firestore()
      .collection("products")
      .where("active", "==", true)
      .orderBy("inPrice", "desc")
      .get();
    const products = response.docs.map((item) => item.data());
    res.send(products);
  } catch (error) {
    next(error);
  }
};
