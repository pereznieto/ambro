import gql from "graphql-tag";

export const GET_POST = gql`
  query Post($id: String!) {
    post(id: $id) {
      image
      ratio
      location
      caption
      date
      text
    }
  }
`;

export const GET_ALL_POSTS = gql`
  {
    posts {
      id
      image
      text
    }
  }
`;
