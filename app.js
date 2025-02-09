const express = require("express");
const recipeRouter = require("./routes/recipeRoute");
const app = express();
app.use(express.json());
app.use("/recipes", recipeRouter);

module.exports = app;
