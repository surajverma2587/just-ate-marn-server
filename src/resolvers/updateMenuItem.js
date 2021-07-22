const { Menu } = require("../models");

const updateMenuItem = async (_, { input }) => {
  const { menuItemId, menuId, type, name, price, description, imageUrl } =
    input;

  const menu = await Menu.findById(menuId);

  const index = menu[type].findIndex((each) => each.id === menuItemId); // 1

  menu[type][index] = {
    ...menu[type][index],
    name,
    price,
    description,
    imageUrl,
  };

  await menu.save();

  return menu[type][index];
};

module.exports = updateMenuItem;
