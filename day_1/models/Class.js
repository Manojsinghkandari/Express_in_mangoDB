const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  time: String,
  start_day: String,
  end_day: String,
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;
