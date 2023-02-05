const firestore = require("../firebase/admin").firestore();

module.exports.getProducts = async (req, res, next) => {
  try {
    const response = await firestore.collection("products").where("active", "==", true).get();
    const products = response.docs.map((item) => item.data());
    res.send(products);
  } catch (error) {
    next(error);
  }
};
