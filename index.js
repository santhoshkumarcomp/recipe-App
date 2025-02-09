const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("db connected");
    app.listen(3001, () => {
      console.log("listening at port 3001");
    });
  })
  .catch((err) => {
    console.log("error");
  });
