import { blogQueryResolver } from "../modules/assignment-1/blogs/message/query.js";
import { blogMessageResolver } from "../modules/assignment-1/blogs/message/mutation.js";
import { users, posts, comments } from "../modules/assignment-1/blogs/message/dataSource.js"

export const resolvers = {
  Query: {
    ...blogQueryResolver,
  },
  Mutation: {
    ...blogMessageResolver,
  },
  Post: {
    author: (post) => users.find(u => u.id === post.authorId),
    comments: (post) => comments.filter(c => c.postId === post.id),
  },
  Comment: {
    author: (comment) => users.find(u => u.id === comment.authorId),
    post: (comment) => posts.find(p => p.id === comment.postId),
  },
  User: {
    posts: (user) => posts.filter(p => p.authorId === user.id),
  },
};
