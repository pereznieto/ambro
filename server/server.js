const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");
const posts = require("./data");

const schema = buildSchema(`
  type Post {
    id: String!
    image: String!
    caption: String!
    text: String!
  }
  type Query {
    post(id: String): Post!
    posts: [Post]
  }
`);

const root = {
  post: ({ id }) => posts.filter(post => post.id === id)[0],
  posts: () => posts
};

const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(4000);