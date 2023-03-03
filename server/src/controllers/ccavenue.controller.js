const admin = require("../firebase/admin");
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
      order_id: Math.round(Math.random() * 9000000000 + 1000000000).toString(),
      currency,
      amount,
      redirect_url: encodeURIComponent("https://solkrd.com/api/ccavenue"),
      billing_name: username,
    });
    const finalForm = `<form id="nonseamless" method="post" name="redirect" action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="${encryptedOrderData}"><input type="hidden" name="access_code" id="access_code" value="${process.env.CCAVENUE_ACCESS_CODE}"><script language="javascript">document.redirect.submit();</script></form>`;
    res.set({ "Content-Type": "text/html" });
    res.send(finalForm);
  } catch (error) {
    if (error.isJoi) error.status = 422;
    next(error);
  }
};

module.exports.verify = async (req, res, next) => {
  try {
    const decryptedData = ccavenue.redirectResponseToJson(req.body.encResp);
    await admin.firestore().collection("testpayment").add(decryptedData);
    res.end();
  } catch (error) {
    res.end();
  }
};
