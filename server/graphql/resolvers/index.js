import { mergeResolvers } from "merge-graphql-schemas";
import Post from "./Post/";

const resolvers = [Post];

export default mergeResolvers(resolvers);
