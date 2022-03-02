const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String
    address: String
    bookings: [Booking]!
  }

  type Service {
    name: String!
    description: String
    length: String
  }

  type Booking {
    _Id: ID!
    user: User
    time: String!
    service: Service
  }

  input savedBookings {
    _Id: ID!
    user: User
    desription: String
    service: Service
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    services: [Service]
    bookings: [Booking]
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!, address: String!): Auth
    login(email: String!, password: String!): Auth
    addBooking(input: savedBookings!): User
    deleteBooking()
    removeUser: User
   
  }
`;

module.exports = typeDefs;
