const { gql } = require("apollo-server");

const typeDefs = gql`
  type MenuItem {
    id: ID!
    name: String!
    price: Float!
    description: String
    imageUrl: String
  }

  type Menu {
    id: ID!
    drinks: [MenuItem]
    meals: [MenuItem]
    desserts: [MenuItem]
  }

  type Restaurant {
    id: ID!
    name: String!
    address: String!
    postCode: String!
    phoneNumber: String!
    email: String
    rating: Float
    ratings: Int
    description: String
    bannerUrl: String!
    deliveryEstimate: String
    menu: Menu
  }

  type Query {
    restaurants(sortBy: String, top: Int): [Restaurant]
    restaurant(id: ID!): Restaurant
  }

  input CreateMenuItemInput {
    menuId: ID!
    type: String!
    name: String!
    price: Float!
    description: String
    imageUrl: String
  }

  input UpdateMenuItemInput {
    menuItemId: ID!
    menuId: ID!
    type: String!
    name: String!
    price: Float!
    description: String!
    imageUrl: String!
  }

  input CreateRestaurantInput {
    name: String!
    address: String!
    postCode: String!
    phoneNumber: String!
    email: String
    description: String
    bannerUrl: String!
    deliveryEstimate: String
  }

  type Mutation {
    createMenuItem(input: CreateMenuItemInput!): MenuItem!
    updateMenuItem(input: UpdateMenuItemInput!): MenuItem!
    createRestaurant(input: CreateRestaurantInput!): Restaurant!
  }
`;

module.exports = typeDefs;
