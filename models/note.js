mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  dueAt: {
    type: Date,
  },
  completed: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Note", noteSchema);
