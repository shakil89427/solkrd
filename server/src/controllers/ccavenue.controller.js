const admin = require("../firebase/admin");

module.exports.success = async (req, res, next) => {
  try {
    const { encResp, orderNo } = req.body;
    await admin.firestore().collection("ccsuccess").add({ encResp, orderNo });
    res.redirect(`https://solkrd.com/payment/success?encResp=${encResp}&orderNo=${orderNo}`);
  } catch (error) {
    res.end();
  }
};

module.exports.cancel = async (req, res, next) => {
  try {
    const { encResp, orderNo } = req.body;
    await admin.firestore().collection("cccancel").add({ encResp, orderNo });
    res.redirect(`https://solkrd.com/payment/failed?encResp=${encResp}&orderNo=${orderNo}`);
  } catch (error) {
    res.end();
  }
};
