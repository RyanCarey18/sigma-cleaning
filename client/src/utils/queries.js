import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SERVICES = gql`
  query allServices {
    services {
      name
      description
      length
    }
  }
`;
