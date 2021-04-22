const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

app.use(cors())
app.use(express.json())

const userRoutes = require("./user/routes.config");
//const clientSideScriptsRoutes = require("./clientSideScripts/routes.confing");
//const fakeServerRoutes = require("./fake/routes.confing");

app.use("/user", userRoutes);
//app.use("/clientSideScript", clientSideScriptsRoutes);
//app.use("/fakeServer", fakeServerRoutes);

app.use("*", (req, res, next) => {
  console.log("* route", req.originalUrl);
  res.status(404).json({
    msg: `I´m sorry but can´t find ${req.originalUrl} on this server`
  })
});

module.exports = app;