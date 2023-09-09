const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  password: String,
  age: Number,
  class_id: String,
  // class_id: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Class",
  // },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
