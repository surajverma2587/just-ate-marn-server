const { Schema, model } = require("mongoose");

const schema = {
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  postCode: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
    default: 0,
  },
  ratings: {
    type: Number,
    required: false,
    default: 0,
  },
  description: {
    type: String,
    required: false,
  },
  bannerUrl: {
    type: String,
    required: true,
  },
  deliveryEstimate: {
    type: String,
    required: false,
    default: "60 mins",
  },
  menu: {
    type: Schema.Types.ObjectId,
    ref: "Menu",
  },
};

const restaurantSchema = new Schema(schema);

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
