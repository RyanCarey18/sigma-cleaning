import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $name: String!
    $email: String!
    $password: String!
    $address: String!
  ) {
    addUser(
      name: $name
      email: $email
      password: $password
      address: $address
    ) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_BOOKING = gql`
  mutation addBooking(
    $client: String!
    $email: String!
    $phone: String!
    $date: String!
    $time: String!
    $service: ID!
    $unix: Int!
    $address: String!
  ) {
    addBooking(
      client: $client
      email: $email
      phone: $phone
      date: $date
      time: $time
      service: $service
      unix: $unix
      address: $address
    ) {
      _id
      email
      phone
      date
      time
      service {
        _id
      }
      address
    }
  }
`;

export const REMOVE_BOOKING = gql`
  mutation removeBooking($bookingId: ID!) {
    removeBooking(bookingId: $bookingId) {
      _id
    }
  }
`;
