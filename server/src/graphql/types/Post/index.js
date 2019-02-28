export default `
  type Post {
    id: String!
    instagramId: String
    image: String!
    ratio: String!
    caption: String!
    location: String
    date: String!
    text: String
    tags: [String]
  }
  type Query {
    post(id: String!): Post
    posts: [Post]
  }
  type Mutation {
    addPost(instagramId: String, image: String!, ratio: String!, caption: String!, location: String, date: String!, text: String, tags: [String]): Post
    editPost(id: String!, instagramId: String, image: String, ratio: String, caption: String, location: String, date: String, text: String, tags: [String]): Post
    deletePost(id: String!): Post
  }
`;
