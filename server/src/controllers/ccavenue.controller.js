const admin = require("../firebase/admin");
const crypto = require("crypto");
const nodeCCAvenue = require("node-ccavenue");
const ccavenueValidator = require("../validators/ccavenue.validator");

const ccavenue = new nodeCCAvenue.Configure({
  merchant_id: process.env.CCAVENUE_MERCENT_ID,
  working_key: process.env.CCAVENUE_WORKING_KEY,
});

module.exports.create = async (req, res, next) => {
  try {
    const { amount, currency, username } = await ccavenueValidator.create.validateAsync(req.query);
    const encryptedOrderData = ccavenue.getEncryptedOrder({
      order_id: crypto.randomBytes(32).toString("hex"),
      currency,
      amount,
      redirect_url: encodeURIComponent("https://solkrd.com/api/ccavenue"),
      billing_name: username,
    });
    res.send({ encryptedOrderData });
  } catch (error) {
    if (error.isJoi) error.status = 422;
    next(error);
  }
};

module.exports.verify = async (req, res, next) => {
  try {
    const decryptedData = ccavenue.decrypt(req.body.encResp);
    await admin.firestore().collection("testpayment").add(decryptedData);
    res.end();
  } catch (error) {
    res.end();
  }
};
