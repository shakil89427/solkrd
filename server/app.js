const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (_, res) => res.send("Server running"));
app.use("/api/user", require("./src/routes/user.route"));
app.use("/api/product", require("./src/routes/product.route"));
app.use("/api/banner", require("./src/routes/banner.route"));
app.use("/api/ccavenue", require("./src/routes/ccavenue.route"));
app.use(require("./src/helpers/routeCatcher"));
app.use(require("./src/helpers/errorHandler"));

module.exports = app;
