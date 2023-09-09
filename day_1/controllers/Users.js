const User = require("../models/Users");

const createUser = async (req, res) => {
  try {
    const { name, email, password, age } = req.body;

    const user = new User({
      name: name,
      email: email,
      password: password,
      age: age,
      class_id: "1234",
    });

    console.log(user);

    const promise = await user.save();
    res.status(201).send("User created Sucessfully");
  } catch (err) {
    console.error(err);
    res.status(404).send("Error " + err);
  }
};

const getData = async (req, res) => {
  try {
    const promise = await User.find();
    res.status(200).send(promise);
  } catch (err) {
    console.error(err);
    res.status(404).send("Error " + err);
  }
};

module.exports = { createUser, getData };
