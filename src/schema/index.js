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
    restaurants: [Restaurant]
    restaurant(id: ID!): Restaurant
  }
`;

module.exports = typeDefs;
