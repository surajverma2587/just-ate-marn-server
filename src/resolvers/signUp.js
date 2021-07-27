const { User } = require("../models");

const signUp = async (_, { input }) => {
  const { email, password } = input;

  const user = await User.create({ email, password });

  return { user };
};

module.exports = signUp;
