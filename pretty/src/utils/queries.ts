import gql from "graphql-tag";

export const GET_ALL_POSTS = gql`
  {
    posts {
      id
      image
      date
      text
    }
  }
`;

export const GET_POST = gql`
  query Post($id: String!) {
    post(id: $id) {
      instagramId
      image
      ratio
      location
      caption
      date
      text
    }
  }
`;

export const ADD_POST = gql`
mutation AddPost(
  $instagramId: String,
  $image: String!,
  $ratio: String!,
  $caption: String!,
  $location: String,
  $date: String!,
  $text: String) {
  addPost(
    instagramId: $instagramId,
    image: $image,
    ratio: $ratio,
    caption: $caption,
    location: $location,
    date: $date,
    text: $text
  ) {
    id
    instagramId
    image
    ratio
    caption
    location
    date
    text
  }
}
`;

export const EDIT_POST = gql`
mutation EditPost(
  $id: String!,
  $instagramId: String,
  $image: String!,
  $ratio: String!,
  $caption: String!,
  $location: String,
  $date: String!,
  $text: String) {
  editPost(
    id: $id,
    instagramId: $instagramId,
    image: $image,
    ratio: $ratio,
    caption: $caption,
    location: $location,
    date: $date,
    text: $text
  ) {
    id
    instagramId
    image
    ratio
    caption
    location
    date
    text
  }
}
`;

export const DELETE_POST = gql`
mutation DeletePost($id: String!) {
  deletePost(id: $id) {
    id
  }
}
`;
