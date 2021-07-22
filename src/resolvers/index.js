const restaurants = require("./restaurants");
const restaurant = require("./restaurant");
const createMenuItem = require("./createMenuItem");
const updateMenuItem = require("./updateMenuItem");
const createRestaurant = require("./createRestaurant");

const resolvers = {
  Query: {
    restaurants,
    restaurant,
  },
  Mutation: {
    createMenuItem,
    updateMenuItem,
    createRestaurant,
  },
};

module.exports = resolvers;
