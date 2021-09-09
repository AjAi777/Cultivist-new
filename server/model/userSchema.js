const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//hashing the password using bcrypt
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 12);
    user.cpassword = await bcrypt.hash(user.cpassword, 12);
  }
  next();
});

//Generating token
// userSchema.methods.generateAuthToken = async function () {
//   try {
//     let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY); //Get id of user
//     this.tokens = this.tokens.concat({ token : token });
//     await this.save();
//     return token;
//   } catch {
//     console.log(err);
//   }
// };

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  // generate token
  try {
    const token = jwt.sign(
      { _id: user._id.toString() },
      process.env.SECRET_KEY
    );

    // add token to user model
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
  } catch (e) {
    throw new Error(e);
  }
};

//collection creation
const User = mongoose.model("User", userSchema);

module.exports = User;
