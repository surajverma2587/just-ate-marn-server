const restaurants = require("./restaurants");
const restaurant = require("./restaurant");
const createMenuItem = require("./createMenuItem");
const updateMenuItem = require("./updateMenuItem");

const resolvers = {
  Query: {
    restaurants,
    restaurant,
  },
  Mutation: {
    createMenuItem,
    updateMenuItem,
  },
};

module.exports = resolvers;
