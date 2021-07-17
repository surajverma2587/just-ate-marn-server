const { Restaurant } = require("../models");

const restaurants = async (_, { sortBy, top }) => {
  if (sortBy === "rating" || sortBy === "ratings") {
    return await Restaurant.find({})
      .sort({ [sortBy]: -1 })
      .limit(top);
  }
  return await Restaurant.find({}).limit(top);
};

module.exports = restaurants;
