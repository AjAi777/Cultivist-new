const dotenv = require("dotenv");
const express = require("express");
const app = express();
var cors = require("cors");
// const cookieParser = require("cookie-parser");

// Secret
dotenv.config({ path: "./config.env" });

// CORS
app.use(cors());

// DB Connect
require("./db/conn");

// Use JSON
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));

// Cookie
// app.use(cookieParser());

// Port Listen
app.listen(process.env.PORT, () => {
  console.log("Server is running at port no", process.env.PORT);
});
