import { comments, posts, users } from "./dataSource.js";

export const blogQueryResolver = {
  users: () => users,
  posts: () => posts,
  comments: () => comments,
};
