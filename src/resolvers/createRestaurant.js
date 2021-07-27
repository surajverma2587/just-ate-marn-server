const { AuthenticationError } = require("apollo-server");
const mongoose = require("mongoose");

const { Restaurant, Menu } = require("../models");

const createRestaurant = async (_, { input }, context) => {
  if (context.user) {
    const {
      name,
      address,
      postCode,
      phoneNumber,
      email,
      description,
      bannerUrl,
      deliveryEstimate,
    } = input;

    const menu = await Menu.create({
      drinks: [],
      meals: [],
      desserts: [],
    });

    return await Restaurant.create({
      name,
      address,
      postCode,
      phoneNumber,
      email,
      rating: 0,
      ratings: 0,
      description,
      bannerUrl,
      deliveryEstimate,
      menu,
      user: context.user.id,
    });
  } else {
    throw new AuthenticationError("Not authorised");
  }
};

module.exports = createRestaurant;
