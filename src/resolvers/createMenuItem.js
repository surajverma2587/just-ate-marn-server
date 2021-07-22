const { v4: uuidv4 } = require("uuid");

const { Menu } = require("../models");

const createMenuItem = async (_, { input }) => {
  const { menuId, type, name, price, description, imageUrl } = input;

  const newMenuItem = {
    id: uuidv4(),
    name,
    price,
    description,
    imageUrl,
  };

  await Menu.findByIdAndUpdate(menuId, {
    $push: { [type]: newMenuItem },
  });

  return newMenuItem;
};

module.exports = createMenuItem;
