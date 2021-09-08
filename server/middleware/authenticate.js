const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken; //Get token
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY); // Verify token

    // Get Specific user
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    // Throw error
    if (!rootUser) {
      throw new Error("User not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (err) {
    res.status(401).send("Unauthorized: No token provided");
    console.log(err);
  }
};

module.exports = Authenticate;
