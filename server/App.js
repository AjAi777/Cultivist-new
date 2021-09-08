const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");

app.use(express.json());

// Router
app.use(require("./router/auth"));

app.listen(process.env.PORT, () => {
  console.log("Server is running at port no", process.env.PORT);
});
