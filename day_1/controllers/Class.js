const Class = require("../models/Class");

const createClass = async (req, res) => {
  try {
    const { name, time, start_day, end_day } = req.body;
    const c = new Class({
      name: name,
      time: time,
      start_day: start_day,
      end_day: end_day,
    });

    const promise = await c.save();
    res.status(201).send("Class created successfully");
  } catch (err) {
    console.error(err);
    res.status(404).send("Error " + err);
  }
};

module.exports = { createClass };
