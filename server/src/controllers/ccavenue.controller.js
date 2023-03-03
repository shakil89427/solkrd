const admin = require("../firebase/admin");
const ccavenue = require("ccavenue");
const ccavenueValidator = require("../validators/ccavenue.validator");

module.exports.create = async (req, res, next) => {
  try {
    const { orderId, amount, userId, username } = await ccavenueValidator.create.validateAsync(
      req.query
    );
    ccavenue.setMerchant(process.env.CCAVENUE_MERCENT_ID);
    ccavenue.setWorkingKey(process.env.CCAVENUE_WORKING_KEY);
    ccavenue.setOrderId(orderId);
    ccavenue.setRedirectUrl("https://solkrd.com/api/ccavenue");
    ccavenue.setOrderAmount(amount);
    ccavenue.setOtherParams({ userId, username });
    ccavenue.makePayment(res);
  } catch (error) {
    if (error.isJoi) {
      res.status(403).send("Not allowed");
    } else {
      next(error);
    }
  }
};

module.exports.verify = async (req, res, next) => {
  try {
    const data = ccavenue.paymentRedirect(req);
    await admin.firestore().collection("testpayment").add(data);
    res.end();
  } catch (error) {
    next(error);
  }
};
