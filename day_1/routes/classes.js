const express = require("express");

const router = express.Router();

const { createClass } = require("../controllers/Class");

router.post("/create", createClass); // localhost:3001/class/create

module.exports = router;
