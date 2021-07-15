const restaurants = require("./restaurants");
const restaurant = require("./restaurant");

const resolvers = {
  Query: {
    restaurants,
    restaurant,
  },
};

module.exports = resolvers;
