const express = require("express");
const mongoose = require("mongoose");
const Note = require("./models/note");
const notesRouter = require("./routes/notes");
const methodOverride = require('method-override');
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

app.get("/", async (req, res) => {
  res.redirect("/all");
});

app.get("/all", async (req, res) => {
  const notes = await Note.find().sort("-createdAt");
  res.render("test", { notes: notes });
});

mongoose.connect(process.env.SERVER, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/", notesRouter);
app.listen(5000, () => {
  console.log("Server started!");
});
