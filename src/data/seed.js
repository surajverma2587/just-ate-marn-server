const db = require("../config/connection");
const { Restaurant, Menu } = require("../models");
const menus = require("./menus.json");
const restaurants = require("./restaurants.json");

db.once("open", async () => {
  try {
    await Menu.deleteMany({});
    await Restaurant.deleteMany({});

    console.log("Collections deleted!!!");

    await Menu.insertMany(menus);
    console.log("Menus seeded successfully!!!");

    const menusFromDb = await Menu.find({});

    const restaurantsToSeed = restaurants.map((restaurant, index) => {
      return {
        ...restaurant,
        menu: menusFromDb[index]._id,
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
