const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String
    address: String
  }
  input UserInput {
    name: String!
    email: String!
    password: String
    address: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    services: [Service]
  }
  type Mutation {
    addUser(
      name: String!
      email: String!
      password: String!
      address: String!
    ): Auth
    login(email: String!, password: String!): Auth
  }
  type Service {
    name: String!
    description: String
    length: String
  }
`;

//   type Booking {
//     _Id: ID!
//     user: User
//     time: String!
//     service: Service
//   }

//   input savedBookings {
//     _Id: ID!
//     user: User
//     desription: String
//     service: Service
//   }

//   input UserInput {
//     name: String!
//     email: String!
//     password: String
//     address: String
//     bookings: [Booking]!
//   }

//   type Auth {
//     token: ID!
//     user: User
//   }

//   type Query {
//     services: [Service]
//     bookings: [Booking]
//     me: User
//   }

//   type Mutation {
//     addUser(
//       name: String!
//       email: String!
//       password: String!
//       address: String!
//     ): Auth
//     login(email: String!, password: String!): Auth
//     addBooking(input: savedBookings!): User
//     removeBooking(bookingId: ID!): Booking
//     removeUser: User
//   }
// `;

module.exports = typeDefs;
