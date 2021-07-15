const { Restaurant } = require("../models");

const restaurants = async () => {
  const restaurants = await Restaurant.find({});
  return restaurants;
};

module.exports = restaurants;
