export default `
  type Post {
    id: String!
    image: String!
    ratio: String!
    caption: String!
    location: String
    date: String
    text: String
    tags: [String]
  }
  type Query {
    post(id: String!): Post
    posts: [Post]
  }
  type Mutation {
    addPost(id: String!, image: String!, ratio: String!, caption: String!, location: String, date: String, text: String, tags: [String]): Post
    editPost(id: String!, image: String, ratio: String, caption: String, location: String, date: String, text: String, tags: [String]): Post
    deletePost(id: String!, image: String, ratio: String, caption: String, location: String, date: String, text: String, tags: [String]): Post
  }
`;
