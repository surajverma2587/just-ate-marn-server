const { User } = require("../models");

const { tokenise } = require("../utils/tokenise");

const signUp = async (_, { input }) => {
  const { email, password } = input;

  const user = await User.create({ email, password });

  const token = tokenise({ id: user.id, email: user.email });

  return { token, user };
};

module.exports = signUp;
