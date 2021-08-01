const { Schema, model } = require("mongoose");

const { hashPassword, validatePassword } = require("../utils/password");

const schema = {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
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
};

const userSchema = new Schema(schema);

userSchema.pre("save", hashPassword);

userSchema.methods.validatePassword = validatePassword;

const User = model("User", userSchema);

module.exports = User;
