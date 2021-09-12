const express = require("express");
const router = express.Router();
const Note = require("../models/note");
const notesRouter = require("../routes/notes");

router.get("/add", (req, res) => {
  res.render("new");
});

router.get("/pending", async (req, res) => {
  const notes = await Note.find().sort("-createdAt");
  res.render("pending", { notes: notes });
});

router.get("/today", async (req, res) => {
  const notes = await Note.find().sort("-createdAt");
  res.render("today", { notes: notes });
});

router.get("/passed", async (req, res) => {
  const notes = await Note.find().sort("-createdAt");
  res.render("passed", { notes: notes });
});

router.post("/", async (req, res) => {
  let note = await new Note({
    title: req.body.title,
    description: req.body.description,
    dueAt: req.body.dueAt,
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
