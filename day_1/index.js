const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

const db_name = "attendance";

const url = "mongodb://127.0.0.1:27017/" + db_name;

const userRouter = require("./routes/users");
const classRouter = require("./routes/classes");

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/class", classRouter);
app.use("/users", userRouter);
// localhost:3001/users --> userRouter file --> routes/users.js

app.listen(3001, () => {
  console.log("Server is running on port 3000");
});

// ATTENDANCE DATABASE

// USERS INFORMATION
// name
// email
// age
// class_id

// CLASS INFORMATION
// class_name
// class_time
// start_day
// end_day

// MVC --> Model View Controller structure
// index.js --> routes/users.js --> controllers/Users.js --> models/Users.js
