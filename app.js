const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

mongoose.connect(process.env.SERVER, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started...");
});

app.get("/all", (req, res) => {
  res.send("Route - All Working...");
});
