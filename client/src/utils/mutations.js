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
  ) {
    addBooking(
      client: $client
      email: $email
      phone: $phone
      date: $date
      time: $time
      service: $service
    ) {
      _id
    }
  }
`;

export const REMOVE_BOOKING = gql`
  mutation removeBooking($booking: String!) {
    removeBooking(booking: $booking) {
      _id
      name
      booking
    }
  }
`;
