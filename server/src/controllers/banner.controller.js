const firestore = require("../firebase/admin").firestore();

module.exports.getBanners = async (req, res, next) => {
  try {
    const response = await firestore
      .collection("homeSlider")
      .where("active", "==", true)
      .orderBy("position", "asc")
      .get();
    const banners = response.docs.map((item) => item.data());
    res.send(banners);
  } catch (error) {
    next(error);
  }
};
