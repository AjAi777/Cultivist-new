const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");

//home route
router.get("/", (req, res) => {
  res.send("Hello World from router");
});

//signup route
router.post("/signup", async (req, res) => {
  const { name, phone, email, password, cpassword } = req.body; //Get Data from body

  //Checking if user kept anything empty // Validation Check
  if (!name || !phone || !email || !password || !cpassword) {
    return res.status(422).json({ error: "Plz fill the field properly" });
  }

  //Checking if user is registered or not // Registration Check
  try {
    const userExist = await User.findOne({ email: email }); //User adding existing email or not
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" }); //If Yes, the return
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password not matching" });
    } else {
      const user = new User({ name, phone, email, password, cpassword }); //If No, get data

      const userSignup = await user.save(); //Save in our collection

      if (userSignup) {
        res.status(201).json({ message: "Successfully Signup" }); // User Registered
      } else {
        res.status(500).json({ error: "Failed Signup" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

//signin route
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body; //Get Data from body

    //Checking if user kept anything empty
    if (!email || !password) {
      return res.status(400).json({ error: "Pls fill the data" });
    }

    //Read user data and compare email
    const userSignin = await User.findOne({ email: email });

    if (userSignin) {
      //Password match check
      const isMatch = await bcrypt.compare(password, userSignin.password);

      const token = await userSignin.generateAuthToken(); //Generate user auth token
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else {
        res.json({ message: "user signin successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

// Get user data for contact us
router.get("/getdata", authenticate, (req, res) => {
  console.log("Get my Data");
  res.send(req.rootUser);
});

module.exports = router;
