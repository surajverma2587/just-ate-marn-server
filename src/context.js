const { AuthenticationError } = require("apollo-server");
const { verifyToken } = require("./utils/tokenise");

const context = ({ req }) => {
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }

  if (!token) {
    return req;
  }

  try {
    const data = verifyToken(token);
    req.user = data;
  } catch {
    throw AuthenticationError("Invalid token");
  }

  return req;
};

module.exports = context;
