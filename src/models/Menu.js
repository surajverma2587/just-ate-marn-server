const { Schema, model } = require("mongoose");

const schema = {
  drinks: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
      imageUrl: {
        type: String,
        required: false,
      },
    },
  ],
  meals: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
      imageUrl: {
        type: String,
        required: false,
      },
    },
  ],
  desserts: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
      imageUrl: {
        type: String,
        required: false,
      },
    },
  ],
};

const menuSchema = new Schema(schema);

const Menu = model("Menu", menuSchema);

module.exports = Menu;
