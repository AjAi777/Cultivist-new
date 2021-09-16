const dotenv = require("dotenv");
const express = require("express");
const app = express();
var cors = require("cors");
const path = require("path");
const morgan = require("morgan");

// Secret
dotenv.config({ path: "./config/config.env" });

// CORS Middleware
app.use(cors());
// Logger Middleware
app.use(morgan("dev"));

// DB Connect
require("./db/conn");

// Use JSON
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/help", require("./routes/help"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 4000;
// Port Listen
app.listen(PORT, () => console.log(`Server Started in ${PORT}`));
