import gql from "graphql-tag";

export const GET_ALL_POSTS = gql`
  {
    posts {
      id
      image
      date
    }
  }
`;

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

export const EDIT_POST = gql`
mutation EditPost(
  $id: String!,
  $image: String!,
  $ratio: String!,
  $caption: String!,
  $location: String,
  $date: String!,
  $text: String) {
  editPost(
    id: $id,
    image: $image,
    ratio: $ratio,
    caption: $caption,
    location: $location,
    date: $date,
    text: $text
  ) {
    id
    image
    ratio
    caption
    location
    date
    text
  }
}
`;
