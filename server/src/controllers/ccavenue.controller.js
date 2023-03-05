const admin = require("../firebase/admin");
const nodeCCAvenue = require("node-ccavenue");
const ccAvenueValidator = require("../validators/ccAvenue.validator");

const ccav = new nodeCCAvenue.Configure({
  merchant_id: process.env.CCAVENUE_MERCHANT_ID,
  working_key: process.env.CCAVENUE_WORKING_KEY,
});

module.exports.create = async (req, res, next) => {
  try {
    const result = await ccAvenueValidator.create.validateAsync(req.body);
    const encKey = ccav.getEncryptedOrder({
      order_id: result.orderId,
      billing_tel: result.phoneNumber,
      amount: result.amount,
      currency: result.currency,
      billing_email: result.email,
      merchant_param1: result.userId,
      merchant_param2: result.attachmentCounts,
      billing_name: result.name,
      billing_address: result.address,
      billing_country: result.country,
      billing_city: result.city,
      billing_state: result.state,
      billing_zip: result.zip,
      merchant_id: process.env.CCAVENUE_MERCHANT_ID,
      redirect_url: "https://solkrd.com/api/ccavenue/success",
      cancel_url: "https://solkrd.com/api/ccavenue/cancel",
    });
    res.send({ encKey, accessCode: process.env.CCAVENUE_ACCESS_CODE });
  } catch (error) {
    res.status(422).send("Unprocessable entries");
  }
};

module.exports.success = async (req, res, next) => {
  try {
    const result = ccav.redirectResponseToJson(req.body.encResp);
    await admin
      .firestore()
      .collection("orders")
      .doc(result.order_id)
      .update({ trackingId: result.tracking_id, orderStatus: true });
    await admin
      .firestore()
      .collection("users")
      .doc(result.merchant_param1)
      .update({
        attachmentCounts: admin.firestore.FieldValue.increment(parseInt(result.merchant_param2)),
      });
    res.redirect("https://solkrd.com/payment/success");
  } catch (error) {
    res.end();
  }
};

module.exports.cancel = async (req, res, next) => {
  try {
    const result = ccav.redirectResponseToJson(req.body.encResp);
    if (result.order_status.toLowerCase() === "aborted") {
      await admin.firestore().collection("orders").doc(result.order_id).delete();
    } else {
      await admin.firestore().collection("orders").doc(result.order_id).update({
        trackingId: result.tracking_id,
        orderStatus: result.order_status,
        failureMessage: result.failure_message,
        statusMessage: result.status_message,
      });
    }
    res.redirect(`https://solkrd.com/payment/failed?status=${result.order_status}`);
  } catch (error) {
    res.end();
  }
};
