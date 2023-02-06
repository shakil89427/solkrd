const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => res.send("Server running"));
app.use("/user", require("./src/routes/user.route"));
app.use("/product", require("./src/routes/product.route"));
app.use("/banner", require("./src/routes/banner.route"));
app.use(require("./src/helpers/routeCatcher"));
app.use(require("./src/helpers/errorHandler"));

module.exports = app;
