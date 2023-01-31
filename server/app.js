const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (_, res) => res.send("Server running"));
app.use("/api/user", require("./src/routes/user.route"));
app.use(require("./src/helpers/routeCatcher"));
app.use(require("./src/helpers/errorHandler"));

module.exports = app;
