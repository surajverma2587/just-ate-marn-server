const mongoose = require("mongoose");

const { Restaurant, Menu } = require("../models");

const createRestaurant = async (_, { input }) => {
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
  });
};

module.exports = createRestaurant;
