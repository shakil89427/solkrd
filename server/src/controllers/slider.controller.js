const firestore = require("../firebase/admin").firestore();

module.exports.getSliders = async (req, res, next) => {
  try {
    const response = await firestore
      .collection("homeSlider")
      .where("active", "==", true)
      .orderBy("position", "asc")
      .get();
    const sliders = response.docs.map((item) => item.data());
    res.send(sliders);
  } catch (error) {
    next(error);
  }
};
