const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String
    address: String
  }

  type Booking {
    _id: ID!
    client: String!
    email: String!
    phone: String!
    date: String!
    time: String!
    service: Service
    unix: Int!
    address: String!
  }

  type Service {
    _id: ID!
    name: String!
    description: String
    length: String
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
    user(userId: ID!): User
  }

  type Mutation {
    addUser(
      name: String!
      email: String!
      password: String!
      address: String!
    ): Auth
    login(email: String!, password: String!): Auth
    addBooking(
      client: String!
      email: String!
      phone: String!
      date: String!
      time: String!
      unix: Int!
      service: ID!
      address: String!
    ): Booking
  }
`;

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
