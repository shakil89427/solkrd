const admin = require("../firebase/admin");

module.exports.getBanners = async (req, res, next) => {
  try {
    const response = await admin
      .firestore()
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
