const { Menu } = require("../models");

const updateMenuItem = async (_, { input }) => {
  const { menuItemId, menuId, type, name, price, description, imageUrl } =
    input;

  const menu = await Menu.findById(menuId);

  const index = menu[type].findIndex((each) => each.id === menuItemId); // 1

  console.log(menu[type]);

  menu[type][index] = {
    ...menu[type][index],
    name,
    price,
    description,
    imageUrl,
  };

  console.log(menu[type][index]);

  await menu.save();

  console.log(menu[type][index]);

  return menu[type][index];
};

module.exports = updateMenuItem;
