const db = require("../config/connection");
const { Restaurant, Menu, User } = require("../models");
const users = require("./users.json");
const menus = require("./menus.json");
const restaurants = require("./restaurants.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Menu.deleteMany({});
    await Restaurant.deleteMany({});

    console.log("Collections deleted!!!");

    await User.create(users[0]);
    await User.create(users[1]);

    console.log("Users seeded successfully!!!");

    await Menu.insertMany(menus);
    console.log("Menus seeded successfully!!!");

    const menusFromDb = await Menu.find({});
    const usersFromDb = await User.find({});

    const restaurantsToSeed = restaurants.map((restaurant, index) => {
      return {
        ...restaurant,
        menu: menusFromDb[index]._id,
        user: usersFromDb[Math.round(Math.random())]._id,
      };
    });

    await Restaurant.insertMany(restaurantsToSeed);
    console.log("Restaurants seeded successfully!!!");

    process.exit(0);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});
