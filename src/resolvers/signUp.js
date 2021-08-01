const { User } = require("../models");

const { tokenise } = require("../utils/tokenise");

const signUp = async (_, { input }) => {
  const { firstName, lastName, email, password } = input;

  const user = await User.create({ firstName, lastName, email, password });

  const token = tokenise({
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  });

  return { token, user };
};

module.exports = signUp;
