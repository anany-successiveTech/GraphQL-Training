// 4.Create a simple GraphQL schema using SDL for a blogging platform.Define types for users, posts, and comments, along with appropriate relationships.include queries for fetching user details, posts, and comments.

import { blogQueryResolver } from "./query.js";
import { blogMessageResolver } from "./mutation.js";

export const blogMessageModule = {
  Query: blogQueryResolver,
  Mutation: blogMessageResolver,
};
