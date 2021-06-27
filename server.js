const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

app.use(cors())
app.use(express.json())

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('public'))

const userRoutes = require("./user/routes.config");

app.use("/user", userRoutes);

app.use("*", (req, res, next) => {
  console.log("* route", req.originalUrl);
  res.status(404).json({
    msg: `I´m sorry but can´t find ${req.originalUrl} on this server`
  })
});

module.exports = app;