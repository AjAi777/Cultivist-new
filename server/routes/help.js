const express = require("express");
const Contact = require("../models/Contact");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
// var fetchuser = require("../middleware/fetchuser");

// Route 1: Contact of User using: POST "/api/contact/contact". Login Required

router.post(
  "/contact",
  [
    body("name", "Enter a valid name").isLength({ min: 5 }),
    body("phone", "Enter a valid phone no").isLength({ min: 5 }),
    body("email", "Enter a valid email").isEmail(),
    body("message", "Message must be atleast 15 characters").isLength({
      min: 15,
    }),
  ],
  async (req, res) => {
    let success = false;
    // If there are errors, return Bad Request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
      let contact = await User.findOne({ email: req.body.email });
      if (contact) {
        return res.status(400).json({ success, error: "Email already exists" });
      }

      // Create a new message
      contact = await Contact.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message,
      });
      success = true;
      res.json({ success, contact });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
