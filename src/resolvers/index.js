const restaurants = require("./restaurants");
const restaurant = require("./restaurant");
const createMenuItem = require("./createMenuItem");
const updateMenuItem = require("./updateMenuItem");
const createRestaurant = require("./createRestaurant");
const login = require("./login");
const signUp = require("./signUp");

const resolvers = {
  Query: {
    restaurants,
    restaurant,
  },
  Mutation: {
    createMenuItem,
    updateMenuItem,
    createRestaurant,
    login,
    signUp,
  },
};

module.exports = resolvers;
