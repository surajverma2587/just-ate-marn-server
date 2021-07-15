const { Restaurant } = require("../models");

const restaurant = async (_, { id }) => {
  const restaurant = await Restaurant.findById(id).populate("menu");
  return restaurant;
};

module.exports = restaurant;
