// localhost:3001/users

const express = require("express");

const router = express.Router();

const { createUser, getData } = require("../controllers/Users");

router.post("/create", createUser); // localhost:3001/users/create
router.get("/all", getData); // localhost:3001/users/all

module.exports = router;
