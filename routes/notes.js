const express = require("express");
const router = express.Router();
const Note = require("../models/note");

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/", async (req, res) => {
  let note = await new Note({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    note = await note.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.render("new");
  }
});

router.delete("/all/:id", async (req, res) => {
  try {
    await Note.findByIdAndRemove(req.params.id);
    res.redirect("/");
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
});

module.exports = router;
