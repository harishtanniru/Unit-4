var mongoose = require("mongoose");

var todoSchema = mongoose.Schema({
  todo_id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: false,
  },
  time: {
    type: String,
    required: false,
  },
  status: {
    type: Boolean,
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const TODO = mongoose.model("TO DO", todoSchema);
module.exports = TODO;
