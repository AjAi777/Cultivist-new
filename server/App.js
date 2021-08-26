const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");

// const User = require("./model/userSchema");

app.use(express.json());

// Router
app.use(require("./router/auth"));

// Middleware
const middleware = (req, res, next) => {
  console.log("Hello my Middleware");
  next();
};

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.get("/Plant", middleware, (req, res) => {
  console.log("Hello my Plant");
  res.send("Hello Plant World");
});

app.get("/signin", (req, res) => {
  res.send("Hello SignIn World");
});

app.get("/signout", (req, res) => {
  res.send("Hello SignIn World");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running at port no", process.env.PORT);
});
