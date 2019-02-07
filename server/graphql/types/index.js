import { mergeTypes } from "merge-graphql-schemas";
import Post from "./Post/";

const typeDefs = [Post];

export default mergeTypes(typeDefs, { all: true });
