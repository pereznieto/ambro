import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import schema from "./src/graphql/";

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const app = express();
const PORT = process.env.PORT || "4000";
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const db = `mongodb://${username}:${password}@ds125945.mlab.com:25945/ambro`;

mongoose
  .connect(
    db,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
