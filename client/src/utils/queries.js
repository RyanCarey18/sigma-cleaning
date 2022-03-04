import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
    }
  }
`;

export const QUERY_SERVICES = gql`
  query allServices {
    services {
      _id
      name
      description
      length
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      name
      _id
    }
  }
`;

export const QUERY_BOOKINGS = gql`
  query getBookings {
    bookings {
      _id
      client
      email
      phone
      date
      time
      service {
        _id
        name
        description
        length
      }
    }
  }
`;
